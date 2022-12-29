import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'product/entities/product.entity';
import { ProductModule } from 'product/product.module';
import { UserEntity } from 'user/entities/user.entity';
import { UserModule } from 'user/user.module';
import { ShopEntity } from './entities/shop.entity';
import { ShopResolver } from './shop.resolver';
import { ShopService } from './shop.service';

@Module({
  imports: [
    forwardRef(() => ProductModule),
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([ShopEntity, ProductEntity, UserEntity]),
  ],
  providers: [ShopResolver, ShopService],
  exports: [ShopService, ShopResolver],
})
export class ShopModule {}
