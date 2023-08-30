"use strict";

/** Routes for facts */

import express, { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const router = Router({ mergeParams: true });

/** GET
 *
 *  Returns a random fact from the database.
 *
 *  Ex: { "fact": string }
 *
 */

router.get("/", async function (req, res, next) {
  const factCount = await prisma.fact.count();
  const randomFactId = Math.floor(Math.random() * factCount) + 1;

  const randomFact = await prisma.fact.findUnique({
    where: { id: randomFactId },
  })

  return res.json({ randomFact });
})

export default router;