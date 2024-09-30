import { Module, forwardRef } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), forwardRef(() => ProductModule)],
  providers: [OwnerResolver, OwnerService],
  exports: [OwnerService]
})
export class OwnerModule {}
