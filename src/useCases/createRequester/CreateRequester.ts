import Requester from "../../entities/Requester";
import IRequesterRepository from "../../repositories/IRequesterRepository";
import { IRequesterDTO } from "./CreateRequesterDTO";

export default class CreateRequesterUseCase {
    constructor(private requesterRepository: IRequesterRepository) {}

    async execute(data: IRequesterDTO) {
        const requester = new Requester(data);
        await this.requesterRepository.save(requester);
    }
}
