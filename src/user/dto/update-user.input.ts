import { PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

export class UpdateUserInput extends PartialType(CreateUserInput) {
  id: number;
}
