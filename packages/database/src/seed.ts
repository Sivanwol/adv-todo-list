import { PrismaClientDbMain } from '.';
// import { PoemSeeds, UserSeeds } from '../src/seeds';

const prisma = new PrismaClientDbMain();

async function main() {
  console.log(`Start seeding ...`);


  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });