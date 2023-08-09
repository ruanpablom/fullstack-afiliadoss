import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SellerController } from './seller.controller';

@Module({
  imports: [PrismaModule],
  providers: [SellerService],
  exports: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}
