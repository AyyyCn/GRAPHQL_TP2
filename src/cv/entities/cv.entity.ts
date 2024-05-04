import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Skill } from 'src/skill/entities/skill.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Cv {

  @Field(type => ID)
  id: string;

  @Field()
  name : string;

  @Field()
  age : number;

  @Field()
  job : string;

  @Field(type => [Skill])
  skills : string[];

  @Field(type => User)
  user : string;
}
