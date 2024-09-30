import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Owner } from "src/owner/entities/owner.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field(type => Int)
    price: number;

    @Column()
    @Field(type => Int)
    ownerId: number;

    @ManyToOne(() => Owner, owner => owner.products)
    @Field(type => Owner, {nullable: true})
    owner: Owner
}