import { uuid } from "uuidv4";

export class Requester {
    public readonly id: string;

    public amountUnit: number;
    public item: Object;
    constructor(props: Omit<Requester, "id">) {
        Object.assign(this, props);

        this.id = uuid();
    }
}
