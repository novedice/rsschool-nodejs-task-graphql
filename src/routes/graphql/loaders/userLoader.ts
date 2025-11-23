import { PrismaClient } from "@prisma/client"
import DataLoader from "dataloader"

const userDataLoader = (prisma: PrismaClient) => {
  return new DataLoader(async (userIds) => {
    const users = await prisma.user.findMany({
      where: ({ 
        id: { in: userIds as string[] }
      })
    })
    return userIds.map(userId => users.find(user => user.id === userId)) || null;
  })
}

export default userDataLoader