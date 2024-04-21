import { ActionSchema, AllowedInputTypes, MicroRollup } from "@stackr/sdk";
import { stackrConfig } from "../stackr.config";
import { CreateAttestation, CreateSchema } from "./stackr/action";
import { machine } from "./stackr/machine";
import { Playground } from "@stackr/sdk/plugins";
import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";
import express, {Express, Request, Response} from "express";
import cors from "cors";

const app: Express = express()
app.use(cors())
app.use(express.json())
const wallet = Wallet.createRandom()
const mru = await MicroRollup({
    config: stackrConfig,
    actionSchemas: [CreateSchema, CreateAttestation],
    stateMachines: [machine],
    isSandbox: true
})
mru.init();
Playground.init(mru);
let idCounter = 1;

async function signMessage(
    wallet: HDNodeWallet,
    schema: ActionSchema,
    payload: AllowedInputTypes
){
    const sign = wallet.signTypedData(
        schema.domain,
        schema.EIP712TypedData.types,
        payload
    );
    return sign;
}

app.post("/create-attestation", async (req:Request, res:Response) => {
    let input = {
        id: idCounter.toString(),
        timestamp: Date.now().toString(),
        schemaId: req.body.schemaId,
        attestation: req.body.attestation,
        attester: req.body.attester,
        signature: req.body.signature
    }
    console.log(input)
    let signature = await signMessage(wallet, CreateAttestation, input);
    let createAttestationAction = CreateAttestation.actionFrom({
        inputs: input,
        signature: signature,
        msgSender: wallet.address
    });
    const response = await mru.submitAction("createAttestation", createAttestationAction);
    console.log(response)
    idCounter++;
    res.send(true)
})

app.listen(4000, () => {
    console.log(`[server]: Server is running at http://localhost:4000`);
});