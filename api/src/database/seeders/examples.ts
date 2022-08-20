import prisma from "..";
import faker from "faker";

export default async function examplesSeeder() {
  await prisma.example.createMany({
    skipDuplicates: true,
    data: Array.from({ length: 100 }, (_e, i) => ({
      id: i + 1,
      name: faker.lorem.words(),
      description: faker.lorem.text(),
    })),
  });
}
