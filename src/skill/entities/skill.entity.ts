import { ObjectType, Field , ID } from '@nestjs/graphql';
import { Cv } from 'src/cv/entities/cv.entity';

@ObjectType()
export class Skill {

  @Field(type => ID)
  id: string;

  @Field()
  designation : string;

  @Field(type => [Cv])
  cvs : string[];
}
