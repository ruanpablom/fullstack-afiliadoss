import { BadRequestException, Injectable } from '@nestjs/common';
import { TransactionEntryDto } from './dto/transaction-entry.dto';
import { TransactionTypes } from 'src/enums/transaction-types';

@Injectable()
export class TransactionsService {
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

  processFile(file: Express.Multer.File) {
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

    return { message: `${file.originalname} processed` };
  }
}
