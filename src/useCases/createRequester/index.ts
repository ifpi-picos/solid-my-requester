import { PostgresRequesterRepository } from "../../repositories/implementations/PostgresRequesterRepository";
import { CreateRequesterController } from "./CreateRequesterController";
import { CreateRequesterUseCase } from "./CreateRequesterUseCase";

const postgresRequesterRepository = new PostgresRequesterRepository();

const createRequesterUseCase = new CreateRequesterUseCase(
    postgresRequesterRepository
);

const createRequesterController = new CreateRequesterController(
    createRequesterUseCase
);

export { createRequesterUseCase, createRequesterController };
