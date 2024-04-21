import { BytesLike, State } from "@stackr/sdk/machine";
import { AttestationRollup } from "./type";
import { merkleTree } from "./tree";

export class AttestationState extends State<AttestationRollup>{

    constructor(state: AttestationRollup){
        super(state);
    }

    getRootHash(): BytesLike {
        return merkleTree(this.state);
    }

}