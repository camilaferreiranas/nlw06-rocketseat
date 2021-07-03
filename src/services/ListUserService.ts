import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {classToPlain} from 'class-transformer';

export class ListUserService {
    async execute() {
        const userRepositories = getCustomRepository(UsersRepositories);
        const users = await userRepositories.find();

        return classToPlain(users); 
    }
}