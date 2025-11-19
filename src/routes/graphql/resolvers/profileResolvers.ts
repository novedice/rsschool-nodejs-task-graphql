import { Profile } from "@prisma/client";
import { argsType, contextType } from "../types/contextType.js";

export interface argsCreateProfile {
  input: {
    isMale: boolean;
    yearOfBirth: number,
    userId: string,
    memberTypeId: string,
  }
};
export interface argsChangeProfile {
  id: string,
  input: {
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
    return contextValue.prisma.profile.create({ data: args.input })
  },
  changeProfile: async (_parent, args: argsChangeProfile, contextValue: contextType): Promise<Profile> => {
    return contextValue.prisma.profile.update({
      data: args.input,
      where: { id: args.id }
    })
  },
  deleteProfile: async (_parent, args: argsType, contextValue: contextType) => {
    return contextValue.prisma.profile.delete({ where: { id: args.id } })
  }
}