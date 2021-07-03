import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
interface IAuthenticateRequest {
    email: string; 
    password: string;
}

export class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const userExists = await usersRepositories.findOne({email});

        if(!userExists) {
            throw new Error('Email/password incorrect');
        }
      const passwordMatch =   await compare(password, userExists.password);
      if(!passwordMatch) {
        throw new Error('Email/password incorrect');
      }

      const token = sign({
        email: userExists.email
      },
        "9482ab1822ac06842f34376e0c43b43e", 
        {
            subject: userExists.id, 
            expiresIn: "1d"
        }
      );
        return token;
    }   
}