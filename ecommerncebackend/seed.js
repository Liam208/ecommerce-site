// seedUsers.js
import { PrismaClient } from "./generated/prisma/index.js"; // adjust path if you use a custom output folder
const prisma = new PrismaClient();

async function users() {
  const usr = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(usr);
}
users();
