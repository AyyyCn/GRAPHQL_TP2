import { CreateSkillInput } from './create-skill.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSkillInput extends CreateSkillInput {}
