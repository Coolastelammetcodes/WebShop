import { db } from "./db.ts";

export async function seedIfEmpty() {
  const count = await db.mug.count();
  if (count === 0) {
    await db.mug.createMany({
      data: [
        { name: "Mug", description: "A Yellow Mug", filepath: "./assets/yellow_mug.jpg", price: 100 },
         { name: "Mug", description: "A Black Mug", filepath: "./assets/black_mug.jpg", price: 100 },
      ],
    });
    console.log("...database has been seeded");
  }
}