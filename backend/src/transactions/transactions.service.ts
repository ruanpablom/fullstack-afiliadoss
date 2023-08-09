import { BadRequestException, Injectable } from '@nestjs/common';
import { TransactionEntryDto } from './dto/transaction-entry.dto';
import { TransactionTypes } from 'src/enums/transaction-types';
import { SellerService } from 'src/seller/seller.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly sellerService: SellerService,
    private readonly prismaService: PrismaService,
  ) {}

  parseEntry(entry: string): TransactionEntryDto {
    if (entry.length === 0) {
      throw new Error('Empty Line');
    }

    const type = Number(entry.slice(0, 1));
    const date = entry.slice(1, 26);
    const product = entry.slice(26, 56);
    const value = Number(entry.slice(56, 66));
    const seller = entry.slice(66, 86);

    if (!Object.values(TransactionTypes).includes(type)) {
      throw new Error('Invalid Type of transaction');
    }

    return { type, date, product, value, seller };
  }

  async createTransaction(data: CreateTransactionDto) {
    const transaction = await this.prismaService.transactions.create({
      data,
      select: { id: true },
    });
    console.log(data);
    console.log(transaction);
  }

  async processFile(file: Express.Multer.File) {
    const fileContent = file.buffer.toString().split('\n');

    const errors: string[] = [];
    const entries: TransactionEntryDto[] = [];

    for (const [index, entry] of fileContent.entries()) {
      try {
        const parsedEntry = this.parseEntry(entry);
        entries.push(parsedEntry);
      } catch (err) {
        errors.push(`line ${index + 1}: ${err.message}`);
      }
    }

    if (errors.length > 0) {
      return new BadRequestException({
        message: 'You must correct the errors, then upload the file again',
        errors,
      });
    }

    for (const entry of entries) {
      try {
        const sellerId = await this.sellerService.create(entry.seller);
        const transaction: CreateTransactionDto = {
          ...entry,
          seller: sellerId,
        };
        await this.createTransaction(transaction);
      } catch (err) {
        errors.push(err.message);
        console.log(err);
      }
    }

    if (errors.length > 0) {
      return new BadRequestException({
        message: 'You must correct the errors, then upload the file again',
        errors,
      });
    }

    return { message: `${file.originalname} processed` };
  }
}
