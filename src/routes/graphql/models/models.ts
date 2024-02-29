import { MemberType, Post, PrismaClient, Profile, User } from "@prisma/client";
import DataLoader from "dataloader";

export interface Context {
  db: PrismaClient,
  user: DataLoader<string, User>;
  posts: DataLoader<string, Post[]>;
  memberType: DataLoader<string, MemberType[]>;
  profile: DataLoader<string, Profile[]>
}
