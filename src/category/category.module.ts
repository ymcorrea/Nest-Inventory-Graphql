import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'product/entities/product.entity';
import { ProductModule } from 'product/product.module';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';

@Module({
  imports: [
    forwardRef(() => ProductModule),
    TypeOrmModule.forFeature([CategoryEntity, ProductEntity]),
  ],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryResolver, CategoryService],
})
export class CategoryModule {}
