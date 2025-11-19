import { Profile } from "@prisma/client";
import { argsType, contextType } from "../types/contextType.js";

export const profileResolver = {
  profiles: async (_parent, _args, contextValue: contextType): Promise <Profile[]> => {
    return contextValue.prisma.profile.findMany()
  },
  profile: async (_parent, args: argsType, contextValue: contextType): Promise <Profile | null> => {
    return contextValue.prisma.profile.findUnique({ where: {id: args.id } })
  }
}