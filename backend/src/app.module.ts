import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [TransactionsModule, SellerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
