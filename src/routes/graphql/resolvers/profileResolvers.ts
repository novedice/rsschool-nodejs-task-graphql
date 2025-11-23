import { Profile } from "@prisma/client";
import { argsType, contextType } from "../types/contextType.js";

export interface argsCreateProfile {
  dto: {
    isMale: boolean;
    yearOfBirth: number,
    userId: string,
    memberTypeId: string,
  }
};
export interface argsChangeProfile {
  id: string,
  dto: {
    isMale?: boolean;
    yearOfBirth?: number,
    memberTypeId?: string,
  }
};

export const profileResolver = {
  profiles: async (_parent, _args, contextValue: contextType): Promise <Profile[]> => {
    return contextValue.prisma.profile.findMany()
  },
  profile: async (_parent, args: argsType, contextValue: contextType): Promise <Profile | null> => {
    return contextValue.prisma.profile.findUnique({ where: { id: args.id } })
  },
  createProfile: async (_parent, args: argsCreateProfile, contextValue: contextType): Promise<Profile> => {
    return contextValue.prisma.profile.create({ data: args.dto })
  },
  changeProfile: async (_parent, args: argsChangeProfile, contextValue: contextType): Promise<Profile> => {
    return contextValue.prisma.profile.update({
      data: args.dto,
      where: { id: args.id }
    })
  },
  deleteProfile: async (_parent, args: argsType, contextValue: contextType) => {
    await contextValue.prisma.profile.delete({ where: { id: args.id } })
    return "OK"
  }
}