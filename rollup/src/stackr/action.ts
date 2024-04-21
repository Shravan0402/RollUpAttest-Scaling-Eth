import { ActionSchema, SolidityType } from "@stackr/sdk";

export const CreateSchema = new ActionSchema("createSchema", {
    id: SolidityType.STRING,
    key: SolidityType.STRING,
    allowedAddresses: SolidityType.STRING
})

export const CreateAttestation = new ActionSchema("createAttestation", {
    id: SolidityType.STRING,
    timestamp: SolidityType.STRING,
    schemaId: SolidityType.STRING,
    attestation: SolidityType.STRING,
    attester: SolidityType.STRING,
    signature: SolidityType.STRING
})