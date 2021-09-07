import { Requester } from "../../entities/Requester";
import { IRequesterRepository } from "../IRequesterRepository";

export class PostgresRequesterRepository implements IRequesterRepository {
    private requesters: Requester[] = [];

    async save(requester: Requester): Promise<void> {
        this.requesters.push(requester);
    }

    async getAll(): Promise<Requester[]> {
        return this.requesters;
    }
}
