import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, schema } from './schemas.js';
import { graphql, parse, validate } from 'graphql';
import resolvers from './resolvers/resolvers.js';
import getDataFromBase from './data-loader/data-loader.js';
import depthLimit from 'graphql-depth-limit';

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
      const { body: { query, variables } } = req;

      const validateErrors = validate(schema, parse(query), [depthLimit(5)]);

      if (validateErrors.length) {
        return {
          data: {
            message: 5,
          },
          errors: validateErrors,
        };
      }

      const { data } = await graphql({
        schema,
        source: query,
        variableValues: variables,
        rootValue: resolvers,
        contextValue: { db: fastify.prisma, ...getDataFromBase(fastify.prisma) },
      });
      return { data };
    },
  });
};

export default plugin;
