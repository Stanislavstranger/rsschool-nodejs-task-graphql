import { Post, PrismaClient, User } from "@prisma/client";
import DataLoader from "dataloader";

export interface Context {
  db: PrismaClient,
  user: DataLoader<string, User>;
  posts: DataLoader<string, Post[]>;
}
