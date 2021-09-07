import { PostgresRequesterRepository } from "../../repositories/implementations/PostgresRequesterRepository";
import { CreateRequesterController } from "./createRequester/CreateRequesterController";
import { CreateRequesterUseCase } from "./createRequester/CreateRequesterUseCase";
import { GetAllRequesterController } from "./getAll/GetAllRequesterController";
import { GetAllRequesterUseCase } from "./getAll/GetAllRequesterUseCase";

const postgresRequesterRepository = new PostgresRequesterRepository();

const createRequesterUseCase = new CreateRequesterUseCase(
    postgresRequesterRepository
);
const getAllRequesterUseCase = new GetAllRequesterUseCase(
    postgresRequesterRepository
);

const createRequesterController = new CreateRequesterController(
    createRequesterUseCase
);
const getAllRequesterController = new GetAllRequesterController(
    getAllRequesterUseCase
);

export { createRequesterController, getAllRequesterController };
