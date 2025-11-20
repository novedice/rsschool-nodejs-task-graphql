import { contextType } from "../types/contextType.js"; 

interface argsSubscribe {
  userId: string,
  authorId: string
}

export const subscribeResolvers = {
  subscribeTo: async (_parent, args: argsSubscribe, contextValue: contextType) => {
    await contextValue.prisma.subscribersOnAuthors.create({ data: {
      subscriberId: args.userId,
      authorId: args.authorId
    }});
    return "OK"
  },
  unsubscribeFrom: async (_parent, args: argsSubscribe, contextValue: contextType) => {
    await contextValue.prisma.subscribersOnAuthors.delete({ where: {
      subscriberId_authorId: {
        subscriberId: args.userId,
        authorId: args.authorId
    } }
  });
    return "OK"
  }
}