import { Router } from "express";
import {
    createRequesterController,
    getAllRequesterController
} from "./useCases";

const router = Router();

router.post("/requesters", (request, response) => {
    createRequesterController.handle(request, response);
});

router.get("/requesters", (request, response) => {
    getAllRequesterController.handle(request, response);
});

export { router };
