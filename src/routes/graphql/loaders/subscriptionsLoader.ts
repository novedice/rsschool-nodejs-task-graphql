import { PrismaClient, SubscribersOnAuthors } from "@prisma/client";
import DataLoader from "dataloader";

const subscriptionsDataLoader = (prisma: PrismaClient) => {
  return new DataLoader<string, SubscribersOnAuthors []> (async (userIds: readonly string[]) => {
    const results = await prisma.subscribersOnAuthors.findMany({
      where: {
        OR: [
          { subscriberId: { in: userIds as [] } },
          { authorId: { in: userIds as [] } }
        ]
      }
    })
    return userIds.map(userId => results.filter(res => res.subscriberId === userId || res.authorId === userId))
  })
}

export default subscriptionsDataLoader;