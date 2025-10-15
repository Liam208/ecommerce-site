import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import cors from "cors";
import router from "./routes/main.routes.js";
import { Webhook } from "svix";
const prisma = new PrismaClient();
const app = express();
const PORT = 3300;

// Clerk webhook secret (from dashboard > Webhooks > Signing secret)
const webhookSecret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
console.log("Webhook Secret:", webhookSecret);

// ✅ Webhook route must use raw body
app.post(
  "/api/webhooks",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      // 🔍 Debug logs

      const wh = new Webhook(webhookSecret);
      const evt = wh.verify(req.body, req.headers);

      const { id, email_addresses, first_name, last_name } = evt.data;
      const eventType = evt.type;

      if (eventType === "user.created") {
        await prisma.user.upsert({
          where: { clerkId: id },
          update: {
            email: email_addresses[0].email_address,
            name: first_name,
            username: last_name,
          },
          create: {
            clerkId: id,
            email: email_addresses[0].email_address,
            name: first_name,
            username: last_name,
          },
        });
      }

      if (eventType === "user.updated") {
        await prisma.user.updateMany({
          where: { clerkId: id },
          data: {
            email: email_addresses[0].email_address,
            name: first_name,
            username: last_name,
          },
        });
      }

      if (eventType === "user.deleted") {
        const userCount = await prisma.user.count({
          where: { clerkId: id },
        });

        if (userCount === 0) {
          console.log(`No user found with clerkId: ${id}. Skipping delete.`);
        } else {
          await prisma.user.deleteMany({
            where: { clerkId: id },
          });
          console.log(`User with clerkId: ${id} successfully deleted.`);
        }
      }

      console.log("✅ Webhook verified and processed:", evt);

      return res.status(200).send("Webhook received");
    } catch (err) {
      console.error("❌ Error verifying webhook:", err);
      return res.status(400).send("Error verifying webhook");
    }
  }
);

// ✅ Other routes use normal JSON parsing
app.use(express.json());
app.use(cors());

app.use("/", router);

app.get("/test", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
