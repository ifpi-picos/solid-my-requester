import { IRequesterRepository } from "../../../repositories/IRequesterRepository";

export class GetAllRequesterUseCase {
    constructor(private requesterRepository: IRequesterRepository) {}

    async execute() {
        return await this.requesterRepository.getAll()
    }
}
