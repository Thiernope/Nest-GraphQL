import { Field, InputType, Int } from "@nestjs/graphql";
import { IsAlpha, IsNotEmpty } from "class-validator";

@InputType()
export class CreateProductInputDto {
    @IsAlpha()
    @IsNotEmpty()
    @Field()
    name: string;

    @Field(type => Int)
    price: number;

    @Field(type => Int)
    ownerId: number;
}