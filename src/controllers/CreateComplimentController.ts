import {Request, Response} from "express";
import { CreateComplmentService } from "../services/CreateComplimentService";

export class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const {tag_id, user_sender, user_receiver, message}  = request.body;
        const createComplimentService = new CreateComplmentService();
        const compliment = await createComplimentService.execute({tag_id, user_sender, user_receiver, message});
        return response.json(compliment);

    }   
}