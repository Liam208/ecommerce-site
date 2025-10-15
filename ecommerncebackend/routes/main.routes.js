import { Router } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import auth from "../auth/verify.js";
import express from "express";

const prisma = new PrismaClient();

const router = Router();

router.get("/product", async (req, res) => {
  try {
    const users = await prisma.product.findMany();
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const productId = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.send(productId);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/home/products", async (req, res) => {
  try {
    const randomItems = await prisma.$queryRaw`
    SELECT * FROM product
    ORDER BY RANDOM()
    LIMIT 4;
  `;
    res.send(randomItems);
  } catch (error) {
    console.error("Error fetching random products:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
