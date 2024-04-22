# Rollup Attest

Rollup Attest is a micro rollup built with Stackr SDK specifically for storing and maintaining attestations. Current infrastructure mostly store attestations onchain which is not the most efficient way. There can be confidential data to be attested, or what if the user want to attest something random without a schema. Thus we built a micro rollup with integrating Sign Protocol, where we create offchain attestations on Sign Protocol and store the attestations on our micro rollup. Sign Protocol just has the reference of the attestation but the attestation is added to our rollup state.

We have used Stackr SDK for creating the core micro-rollup. Thus all the heavy lifting of state management and action management is handled by the Stackr SDK. We have used Sign Protocol's SDK to create off-chain attestations. All the attestations and schema data are stored on our rollup. The interface to our rollup is a simple REST API. And the frontend is built with react JS and Material UI.


![attestation-rollup](https://github.com/Shravan0402/RollUpAttest-Scaling-Eth/assets/66505181/fe5bdce4-0d07-49c0-be9b-fcc3dc29e51f)
