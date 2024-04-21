import { solidityPackedKeccak256 } from "ethers";
import { AttestationRollup, Attestations, AttestationSchema } from "./type";
import {MerkleTree} from "merkletreejs";

export const merkleTree = (state: AttestationRollup): string => {
    // Was not able to implement Object.entries().map
    // Unable to convert to Object error
    let schemaHashes = []
    for(let key in  state.schemas){
        const data = state.schemas[key]
        schemaHashes.push(solidityPackedKeccak256(["string","string","string"], [key, schemaHash(data.key), schemaHash(data.allowedAddresses)]))
    }
    const schemaRoot = new MerkleTree(schemaHashes).getHexRoot();
    let attestationHashes = []
    for(let key in state.attestations){
        const data = state.attestations[key]
        attestationHashes.push(solidityPackedKeccak256(["string","string"], [key, attestationHash(data)]))
    }
    const attestationRoot = new MerkleTree(attestationHashes).getHexRoot();
    const tree = new MerkleTree([schemaRoot, attestationRoot]).getHexRoot();
    return tree;
}

const schemaHash = (schemas: string[]): string => {
    const hashes = schemas.map((schema) => solidityPackedKeccak256(["string"], [schema]));
    const hash = new MerkleTree(hashes).getHexRoot()
    return hash
}

const attestationHash = (attestation: Attestations): string => {
    const hash = new MerkleTree([attestation.id, attestation.attestationSchemaId, attestation.timestamp, attestation.attester, schemaHash(attestation.key), schemaHash(attestation.value)]).getHexRoot();
    return hash
}