import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [SellerService],
  exports: [SellerService],
})
export class SellerModule {}
