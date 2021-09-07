import { Request, Response } from "express";
import { GetAllRequesterUseCase } from "./GetAllRequesterUseCase";

export class GetAllRequesterController {
    constructor(private getAllRequesterUseCase: GetAllRequesterUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const requesters = await this.getAllRequesterUseCase.execute();

            return response.status(200).json({ data: requesters });
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}
