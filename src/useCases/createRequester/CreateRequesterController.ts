import { Request, Response } from "express";
import { CreateRequesterUseCase } from "./CreateRequesterUseCase";

export class CreateRequesterController {
    constructor(private createRequesterUseCase: CreateRequesterUseCase) {}

    async handle(request: Request, response: Response) {
        const { item, priceUnit } = request.body;

        try {
            await this.createRequesterUseCase.execute({
                item,
                priceUnit
            });

            return response.status(201).json();
        } catch (error) {
            return response.status(400).json({
                message: error.message || "Unexpected error"
            });
        }
    }
}
