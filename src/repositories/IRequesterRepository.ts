import Requester from "../entities/Requester";

export default interface IRequesterRepository {
    save(user: Requester): Promise<void>;
}
