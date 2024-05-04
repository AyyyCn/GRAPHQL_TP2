import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {
  
  @Field()
  designation: string;
}
