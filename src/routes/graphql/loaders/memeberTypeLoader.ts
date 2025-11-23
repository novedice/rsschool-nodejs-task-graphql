import { MemberType, PrismaClient } from "@prisma/client";
import DataLoader from "dataloader";

const memberTypeDataLoader = (prisma: PrismaClient) => {
  return new DataLoader<string, MemberType | null> (async (userIds) => {
    const memberTypes = await prisma.memberType.findMany({
      where: { id: { in: userIds as string[] }}
    })
    return userIds.map(userId => memberTypes.find(memberType => memberType.id === userId) ?? null)
  })
};

export default memberTypeDataLoader;