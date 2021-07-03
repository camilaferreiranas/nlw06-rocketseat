import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { v4 as uuid} from 'uuid'
import { Tag } from "./Tag";
import { User } from "./User";
@Entity("compliments")
export class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string; 

    @Column()
    user_receiver: string; 

    @Column()
    tag_id: string;

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag;

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => User)
    userReceiver: User;

    
    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => User)
    userSender: User;
    
    @Column()
    message: string; 

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
