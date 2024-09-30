import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInputDto } from './dto/create-owner.input';
import { Product } from 'src/product/entities/product.entity';

@Resolver(() => Owner)
export class OwnerResolver {
  constructor(private readonly ownerService: OwnerService) {}

  @Mutation(() => Owner)
  createOwner(@Args('createOwnerInput') createOwnerInput: CreateOwnerInputDto) {
    return this.ownerService.create(createOwnerInput);
  }

  @Query(() => [Owner], { name: 'findOwners' })
  findAll() {
    return this.ownerService.findAll();
  }

  @Query(() => Owner, { name: 'findOwnersById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ownerService.findOne(id);
  }

  @ResolveField(() => [Product], {name: "products"})
  async getOwnerProducts(@Parent() owner: Owner, ownerId: number):Promise<Product[]> {
   return this.ownerService.getProductsByOwner(owner.id)
  }
}
