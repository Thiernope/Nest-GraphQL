import { Module, forwardRef } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { OwnerModule } from 'src/owner/owner.module';


@Module({
  imports: [TypeOrmModule.forFeature([Product]), forwardRef(() => OwnerModule)],
  providers: [ProductResolver, ProductService],
  exports: [ProductService]
})
export class ProductModule {}
