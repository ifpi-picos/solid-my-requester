import { Router } from "express";
import { createRequesterController } from "./useCases/createRequester";

const router = Router();

router.post("/requesters", (request, response) => {
    createRequesterController.handle(request, response);
});

export { router };
