import { Post, PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const postDataLoader = (prisma: PrismaClient) => {
  return new DataLoader<string, Post[]>(async (userIds: readonly string[]) => {
  const posts = await prisma.post.findMany({
    where: { authorId: { in: userIds as string[] } }
  });
  return userIds.map(id => posts.filter(post => post.authorId === id));
})};
export default postDataLoader;