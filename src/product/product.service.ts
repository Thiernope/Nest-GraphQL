import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateProductInputDto } from './dto/create.product.input.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { OwnerService } from 'src/owner/owner.service';

@Injectable()
export class ProductService {
   constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
    @Inject(forwardRef(() => OwnerService))
    private readonly ownerService: OwnerService,
) {}

    getProducts() {
        return this.productRepository.find();
    }

    getOne(id: number) {
        return this.productRepository.findOneBy({id})
    }

    getProductOwner(id: number) {
    return this.ownerService.findOne(id)
    }

    createProduct(createProductDto: CreateProductInputDto) {
       const newProduct = this.productRepository.create(createProductDto);
       return this.productRepository.save(newProduct)
    }

    async getProductsByOwner(ownerId: number):Promise<Product[]> {
        return this.productRepository.findBy({ownerId})
    }


}
