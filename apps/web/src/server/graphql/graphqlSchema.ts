import SchemaBuilder from '@pothos/core';
import PluginErrors from '@pothos/plugin-errors';
import PluginPrisma from '@pothos/plugin-prisma';

export type {default as PrismaTypes} from '@pothos/plugin-prisma';
import {prismaDbMain} from '@/server/config';

const builder = new SchemaBuilder<{
  // @ts-ignore
  // eslint-disable-next-line no-undef
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PluginErrors, PluginPrisma],
  prisma: {
    client: prismaDbMain,
    // defaults to false, uses /// comments from prisma schema as descriptions
    // for object types, relations and exposed fields.
    // descriptions can be omitted by setting description to false
    exposeDescriptions: {models: true, fields: true},
    // use where clause from prismaRelatedConnection for totalCount (will true by default in next major version)
    filterConnectionTotalCount: true,
  },
  errorOptions: {
    defaultTypes: [],
  },
});

builder.prismaObject('User', {
  fields: (t) => ({
    // expose fields from the database
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    username: t.exposeString('username'),
  }),
});

builder.prismaObject('UserTask', {
  fields: (t) => ({
    // expose fields from the database
    id: t.exposeID('id'),
    userId: t.exposeID('userId'),
    parentId: t.exposeID('parentId'),
    username: t.exposeString('username'),
    title: t.exposeString('title'),
    content: t.exposeString('content'),
    createdAt: t.exposeString('createdAt'),
    updatedAt: t.exposeString('updatedAt'),
  }),
});

builder.prismaObject('UserCategory', {
  fields: (t) => ({
    // expose fields from the database
    id: t.exposeID('id'),
    userId: t.exposeID('userId'),
    email: t.exposeString('title'),
  }),
});

export const graphqlSchema = builder.toSchema({});