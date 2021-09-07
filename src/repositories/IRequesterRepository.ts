import { Requester } from "../entities/Requester";

export interface IRequesterRepository {
    save(requester: Requester): Promise<void>;
    getAll(): Promise<Requester[]>;
}
