import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateOwnerInputDto } from './dto/create-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class OwnerService {
 constructor(
  @InjectRepository(Owner) private readonly ownerRepository: Repository<Owner>,
  @Inject(forwardRef(() => ProductService))
  private readonly productService: ProductService
) {}
  create(createOwnerDto: CreateOwnerInputDto) {
    const newOwner = this.ownerRepository.create(createOwnerDto)
    return this.ownerRepository.save(newOwner)
  }

  findAll() {
    return this.ownerRepository.find();
  }

  findOne(id: number) {
    return this.ownerRepository.findOneBy({id})
  }

  getProductsByOwner(ownerId: number) {
    return this.productService.getProductsByOwner(ownerId)
  }

}
