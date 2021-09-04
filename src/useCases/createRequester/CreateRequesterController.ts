import { Request, Response } from "express";
import { CreateRequesterUseCase } from "./CreateRequesterUseCase";

export class CreateRequesterController {
    constructor(private createRequesterUseCase: CreateRequesterUseCase) {}

    async handle(request: Request, response: Response) {
        const { item, amountUnit } = request.body;

        try {
            await this.createRequesterUseCase.execute({
                item,
                amountUnit
            });

            return response.status(201).json();
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}
