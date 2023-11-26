/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Wallet, User, Transition } from "@prisma/client";

export class WalletServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.WalletCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.WalletCountArgs>
  ): Promise<number> {
    return this.prisma.wallet.count(args);
  }

  async findMany<T extends Prisma.WalletFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WalletFindManyArgs>
  ): Promise<Wallet[]> {
    return this.prisma.wallet.findMany(args);
  }
  async findOne<T extends Prisma.WalletFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WalletFindUniqueArgs>
  ): Promise<Wallet | null> {
    return this.prisma.wallet.findUnique(args);
  }
  async create<T extends Prisma.WalletCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WalletCreateArgs>
  ): Promise<Wallet> {
    return this.prisma.wallet.create<T>(args);
  }
  async update<T extends Prisma.WalletUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WalletUpdateArgs>
  ): Promise<Wallet> {
    return this.prisma.wallet.update<T>(args);
  }
  async delete<T extends Prisma.WalletDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WalletDeleteArgs>
  ): Promise<Wallet> {
    return this.prisma.wallet.delete(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.wallet
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }

  async getTransitions(parentId: string): Promise<Transition | null> {
    return this.prisma.wallet
      .findUnique({
        where: { id: parentId },
      })
      .transitions();
  }
}
