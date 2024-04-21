import { StateMachine } from "@stackr/sdk/machine";
import { AttestationState } from "./state";
import { transitions } from "./transitions";
import genesis from "../../genesis-state.json"

const machine = new StateMachine({
    id: "attestation",
    stateClass: AttestationState,
    initialState: genesis.state,
    on: transitions
})

export {machine};