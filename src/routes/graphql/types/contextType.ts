import { PrismaClient } from "@prisma/client";

export interface contextType {
  prisma: PrismaClient;
  loaders: unknown;
};

export interface argsType {
  id: string;
};

export interface argsMemberType {
  id: string
}