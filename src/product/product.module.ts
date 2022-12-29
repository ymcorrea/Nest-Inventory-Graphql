import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'category/category.module';
import { CategoryEntity } from 'category/entities/category.entity';
import { ShopEntity } from 'shop/entities/shop.entity';
import { UserEntity } from 'user/entities/user.entity';
import { UserModule } from 'user/user.module';
import { UserService } from 'user/user.service';
import { ShopModule } from '../shop/shop.module';
import { ShopService } from '../shop/shop.service';
import { ProductEntity } from './entities/product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
  imports: [
    forwardRef(() => ShopModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => UserModule),

    TypeOrmModule.forFeature([
      ProductEntity,
      CategoryEntity,
      UserEntity,
      ShopEntity,
    ]),
  ],
  providers: [ProductResolver, ProductService, ShopService, UserService],
  exports: [ProductResolver, ProductService],
})
export class ProductModule {}
