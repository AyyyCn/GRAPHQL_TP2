import { CreateCvInput } from './create-cv.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCvInput{
    @Field()
  name: string;

  @Field()
  age : number ;

  @Field()
  job : string;

  @Field(type => [ID])
  skills : string[];

}
