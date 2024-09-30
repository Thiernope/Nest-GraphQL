import { InputType, Field } from '@nestjs/graphql';
import { IsAlpha, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateOwnerInputDto {
  @IsAlpha()
  @IsNotEmpty()
  @Field()
  name: string;
}
