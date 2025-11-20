import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql, parse, specifiedRules, validate } from 'graphql';
import { Schema } from './graphQLSchema.js';
import depthLimit from 'graphql-depth-limit';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;

  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const documentAst = parse(req.body.query);
      const validation = validate(Schema, documentAst, [...specifiedRules, depthLimit(5)])
      if (validation.length) {
        return {errors: validation};
      } else {
      return graphql({
        schema: Schema,
        source: req.body.query,
        variableValues: req.body.variables,
        contextValue: {prisma, req},
      });
    }
    },
  });
};

export default plugin;
