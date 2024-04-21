export type AttestationSchema = {
    id: string,
    key: string[],
    allowedAddresses: string[]
}

export type Attestations = {
    id: string,
    attestationSchemaId: string,
    timestamp: string,
    attester: string,
    key: string[],
    value: string[]
}

export type AttestationRollup = {
    schemas: Record<string,AttestationSchema>,
    attestations: Record<string,Attestations>
}

export type CreateSchemaType = {
    id: string,
    key: string,
    allowedAddresses: string
}

export type CreateAttestationType = {
    id: string,
    timestamp: string,
    schemaId: string,
    attestation: string,
    attester: string,
    signature: string
}