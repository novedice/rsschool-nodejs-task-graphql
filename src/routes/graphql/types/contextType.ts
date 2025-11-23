import { Post, PrismaClient, Profile, SubscribersOnAuthors, User } from "@prisma/client";
import DataLoader from "dataloader";

export interface contextType {
  prisma: PrismaClient;
  loaders: {
    usersLoader: DataLoader<string, User | null>,
    postLoader: DataLoader<string, Post[]>,
    profileLoader: DataLoader<string, Profile | null>,
    subscriptionsLoader: DataLoader<string, SubscribersOnAuthors [] >
  }
};

export interface argsType {
  id: string;
};

export interface argsMemberType {
  id: string
}