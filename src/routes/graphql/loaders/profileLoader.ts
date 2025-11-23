import { PrismaClient, Profile } from "@prisma/client";
import DataLoader from "dataloader";

const profileDataLoader = (prisma: PrismaClient) => {
  return new DataLoader<string, Profile | null> (async(userIds: readonly string []) => {
    const profils = await prisma.profile.findMany({ where: {
      userId:  { in: userIds as string [] } 
    },
    include: {memberType: true}
  })
    return userIds.map(userId => profils.find(profile => profile.userId === userId) ?? null)
}
)};

export default profileDataLoader;