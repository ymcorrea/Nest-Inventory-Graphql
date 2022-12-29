import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEntity } from 'shop/entities/shop.entity';
import { UserEntity } from 'user/entities/user.entity';
import { TransactionEntity } from './entities/transaction.entity';
import { TransactionResolver } from './transaction.resolver';
import { TransactionService } from './transaction.service';

@Module({
  imports: [
    forwardRef(() => UserEntity),
    forwardRef(() => ShopEntity),
    TypeOrmModule.forFeature([TransactionEntity, UserEntity, ShopEntity]),
  ],
  providers: [TransactionResolver, TransactionService],
})
export class TransactionModule {}
