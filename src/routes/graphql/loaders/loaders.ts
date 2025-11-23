import { PrismaClient } from "@prisma/client"
import userDataLoader from "./userLoader.js"
import postDataLoader from "./postLoader.js"
import profileDataLoader from "./profileLoader.js"
import subscriptionsDataLoader from "./subscriptionsLoader.js"
import memberTypeDataLoader from "./memeberTypeLoader.js"

const loadersCreator = (prisma: PrismaClient) => {
  return {
    usersLoader: userDataLoader(prisma),
    postLoader: postDataLoader(prisma),
    profileLoader: profileDataLoader(prisma),
    subscriptionsLoader: subscriptionsDataLoader(prisma),
    memberTypeLoader: memberTypeDataLoader(prisma)
  }
}

export default loadersCreator