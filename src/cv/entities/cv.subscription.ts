import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Cv } from "./cv.entity";


export enum MutationType {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE',
}

registerEnumType(MutationType , {
    name : 'MutationType'
});


@ObjectType()
export class CvSubscriptionType {

    @Field(type => Cv)
    cv : Cv;

    @Field()
    mutation : MutationType;
}