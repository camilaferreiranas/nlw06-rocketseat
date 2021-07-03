import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string; 
    user_sender: string; 
    user_receiver: string; 
    message: string; 
}
export class CreateComplmentService {
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
        const complimentRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        const userReceiverExists = await usersRepositories.findOne(user_receiver);
        if(user_sender === user_receiver) {
            throw new Error("User cannot send message!");
        }
        if(!userReceiverExists) {
            throw new Error("User Receiver does not exists!");
        }

        const compliment = complimentRepositories.create({
            tag_id, user_receiver, user_sender, message
        });

        await complimentRepositories.save(compliment);

        return compliment;

    }
}