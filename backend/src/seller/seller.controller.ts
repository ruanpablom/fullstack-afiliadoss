import { Controller, Get } from '@nestjs/common';
import { SellerService } from './seller.service';
import { ParamId } from 'src/decorators/param-id.decorator';

@Controller('seller')
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

  @Get()
  list() {
    return this.sellerService.list();
  }

  @Get(':id/transactions')
  listSellerTransactions(@ParamId() id: number) {
    return this.sellerService.listTransactions(id);
  }
}
