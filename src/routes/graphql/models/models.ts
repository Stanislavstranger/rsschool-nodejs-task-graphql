import { MemberType, Post, PrismaClient, Profile, SubscribersOnAuthors, User } from "@prisma/client";
import DataLoader from "dataloader";

export interface Context {
  db: PrismaClient,
  user: DataLoader<string, User>;
  posts: DataLoader<string, Post[]>;
  memberType: DataLoader<string, MemberType[]>;
  profiles: DataLoader<string, Profile[]>;
  subscribedToUser: DataLoader<string, User[]>;
  userSubscribedTo: DataLoader<string, User[]>;
}

export interface UserData extends User {
  userSubscribedTo?: SubscribersOnAuthors[];
  subscribedToUser?: SubscribersOnAuthors[];
}

export interface UserDTO {
  name: string;
  balance: number;
}

export interface PostDTO {
  title: string;
  content: string;
  authorId: string;
}

export interface ProfileDTO {
  userId: string;
  memberTypeId: string;
  isMale: boolean;
  yearOfBirth: number;
}