import { contextType } from "../types/contextType.js"; 

interface argsSubscribe {
  userId: string,
  authorId: string
}

export const subscribeResolvers = {
  subscribeTo: async (_parent, args: argsSubscribe, contextValue: contextType) => {
    return contextValue.prisma.subscribersOnAuthors.create({ data: {
      subscriberId: args.userId,
      authorId: args.authorId
    }})
  },
  unsubscribeFrom: async (_parent, args: argsSubscribe, contextValue: contextType) => {
    return contextValue.prisma.subscribersOnAuthors.delete({ where: {
      subscriberId_authorId: {
        subscriberId: args.userId,
        authorId: args.authorId
    } }
  })
  }
}