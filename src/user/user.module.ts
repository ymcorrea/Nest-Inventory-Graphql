import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from 'shop/shop.module';
import { TransactionEntity } from 'transaction/entities/transaction.entity';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    forwardRef(() => ShopModule),
    TypeOrmModule.forFeature([UserEntity, TransactionEntity]),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService, UserResolver],
})
export class UserModule {}
