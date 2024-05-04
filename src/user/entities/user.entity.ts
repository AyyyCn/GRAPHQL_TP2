import { ObjectType, Field, ID, registerEnumType,  } from '@nestjs/graphql';
import { Cv } from 'src/cv/entities/cv.entity';


export enum RoleType {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

registerEnumType(RoleType , {
  name : 'RoleType'
});


@ObjectType()
export class User {

  @Field(type => ID)
  id: string;

  @Field()
  name : string;

  @Field()
  email : string;

  @Field()
  role : RoleType;

  @Field(type => [Cv])
  cvs : string[];
}
