import { InputType, Int, Field } from '@nestjs/graphql';
import { RoleType } from '../entities/user.entity';

@InputType()
export class CreateUserInput {

  @Field()
  name: string;

  @Field()
  email : string;

  @Field()
  role : RoleType;
}
