import { REQUIRE, STF, Transitions } from "@stackr/sdk/machine";
import { AttestationState } from "./state";
import { Attestations, AttestationSchema, CreateAttestationType, CreateSchemaType } from "./type";
import { OffChainSignType, SignProtocolClient, SpMode } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from 'viem/accounts';
import { ethers } from "ethers";

const createSchema: STF<AttestationState, CreateSchemaType> = {
    
    handler: ({state, inputs, msgSender}) => {

        REQUIRE(!Object.keys(state.schemas).includes(inputs.id), "Schema Id is already used");
        const client = new SignProtocolClient(SpMode.OffChain, {
            signType: OffChainSignType.EvmEip712,
            account: privateKeyToAccount("0x3ee0b98170602505f22cdde50329f8f9d171019fdb400326f3352f296bbb8147")
        })
        client.createSchema({
            name: inputs.id,
            data: [{name: "data", type:'string'}],
            dataLocation: undefined
        }).then((signSchema) => {
            const schema: AttestationSchema = {
                id: signSchema.schemaId,
                key: inputs.key.split(","),
                allowedAddresses: inputs.allowedAddresses.split(",")
            }
            state.schemas[signSchema.schemaId] = schema;
        })
        return state
    }

}

const createAttestation: STF<AttestationState, CreateAttestationType> = {

    handler:({state, inputs, msgSender}) => {

        REQUIRE(!Object.keys(state.attestations).includes(inputs.id), "Attestation Id already in use");
        REQUIRE(ethers.getAddress(inputs.attester)===ethers.getAddress(ethers.verifyMessage(inputs.attestation, inputs.signature)), "Invalid signature !!")
        if(inputs.schemaId != "null"){
            const keys = Object.keys(JSON.parse(inputs.attestation))
            const schemaKey = state.schemas[inputs.schemaId].key
            for(let i of keys){
                REQUIRE(schemaKey.includes(i), "Desired schema not found")
            }
        }
        REQUIRE(state.schemas[inputs.schemaId].allowedAddresses[0]==="" || state.schemas[inputs.schemaId].allowedAddresses.includes(msgSender.toString()), "Not a whitelisted address");
        const client = new SignProtocolClient(SpMode.OffChain, {
            signType: OffChainSignType.EvmEip712,
            account: privateKeyToAccount("0x3ee0b98170602505f22cdde50329f8f9d171019fdb400326f3352f296bbb8147")
        })
        client.createAttestation({
            schemaId: inputs.schemaId==="null" ? "SPS_0VEWIRAbb8Imh7NBUN-i9": inputs.schemaId,
            data: {data: inputs.attestation},
            indexingValue: inputs.id
        }).then((att) => {
            const attestation: Attestations = {
                id: att.attestationId,
                attestationSchemaId: inputs.schemaId,
                attester: inputs.attester,
                timestamp: inputs.timestamp,
                key: Object.keys(JSON.parse(inputs.attestation)),
                value: Object.values(JSON.parse(inputs.attestation))
            }
            state.attestations[att.attestationId] = attestation;
        })
        return state;

    }

}


export const transitions: Transitions<AttestationState> = {
    createSchema,
    createAttestation
}