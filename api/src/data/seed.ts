import { db } from "./db.ts";

export async function seedIfEmpty() {
  const count = await db.mug.count();
  if (count === 0) {
    await db.mug.createMany({
      data: [
        { name: "Coffeemug" },
        { name: "Teacup" },
      ],
    });
    console.log("...database has been seeded");
  }
}