import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductInputDto } from './dto/create.product.input.dto';
import { Owner } from 'src/owner/entities/owner.entity';



@Resolver(() => Product)
export class ProductResolver {
 constructor(private readonly productService: ProductService) {}

 @Query(() => [Product])
 async products():Promise<Product[]> {
  return this.productService.getProducts()
 }

@Query(() => Product, {name: 'getProductById'})
 async getOne(@Args('id', {type: () => Int}) id: number):Promise<Product> {
   return this.productService.getOne(id)
 }


 @ResolveField(() => Owner, {name: "owner"})
 getProductOwner(@Parent() owner: Owner) {
  return this.productService.getProductOwner(owner.id)
 }

 @Mutation(() => Product)
 async createProduct(@Args('createProductInput') createProductDto: CreateProductInputDto):Promise<Product> {
    return this.productService.createProduct(createProductDto)
 }
}
