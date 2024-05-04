import { InputType , Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateCvInput {

  @Field()
  name: string;

  @Field()
  age : number ;

  @Field()
  job : string;

  @Field(type => [ID])
  skills : string[];

  @Field()
  userId : string;

  
}
