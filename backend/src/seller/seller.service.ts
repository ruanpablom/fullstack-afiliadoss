import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SellerService {
  constructor(private readonly prismaService: PrismaService) {}

  async exists(name: string) {
    const seller = await this.prismaService.sellers.findUnique({
      where: { name },
    });

    return seller ? seller.id : null;
  }

  async create(name: string) {
    let sellerId = await this.exists(name);

    if (!sellerId) {
      sellerId = (
        await this.prismaService.sellers.create({
          data: { name },
          select: { id: true },
        })
      ).id;
    }

    return sellerId;
  }

  async list() {
    return this.prismaService.sellers.findMany();
  }
}
