import {PrismaManager, PrismaClientDbMain} from '@repo/database';
import {assertNonEmptyString} from '@repo/ts-utils';

const isDev = process.env?.NODE_ENV === 'development';

export const getPrismaClientDbMain: () => PrismaClientDbMain = () => {
  const url = process.env?.PRISMA_DATABASE_URL ?? null;
  assertNonEmptyString(
    url,
    () =>
      new Error(
        `[Error] Cannot create prisma client instance, missing env variable PRISMA_DATABASE_URL.`
      )
  );

  return PrismaManager.getSafeInstance('db-main', () => {
    const prismaClient = new PrismaClientDbMain({
      datasources: {
        db: {
          url: url,
        },
      },
      errorFormat: isDev ? 'pretty' : 'colorless',
      log: [
        {
          level: 'query',
          emit: 'event',
        },
        {
          level: 'error',
          emit: 'stdout',
        },
        {
          level: 'info',
          emit: 'stdout',
        },
        {
          level: 'warn',
          emit: 'stdout',
        },
      ],
    });
    if (isDev) {
      prismaClient.$on('query', (e) => {
        console.log('Query: ' + e.query);
        console.log('Duration: ' + e.duration + 'ms');
      });
    }
    return prismaClient;
  });
};