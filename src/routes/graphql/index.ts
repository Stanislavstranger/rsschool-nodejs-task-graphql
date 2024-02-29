import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, schema } from './schemas.js';
import { graphql } from 'graphql';
import resolvers from './resolvers/resolvers.js';
import getDataFromBase from './data-loader/data-loader.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {

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
      const { query, variables } = req.body;

      const { data, errors } = await graphql({
        schema,
        source: query,
        variableValues: variables,
        rootValue: resolvers,
        contextValue: { db: fastify.prisma, ...getDataFromBase(fastify.prisma) },
      });
      return { data, errors };
    },
  });
};

export default plugin;
