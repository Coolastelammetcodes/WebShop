import { db } from "./db.ts";
import { mockedPosts } from "./mugsDb.ts";

export async function seedIfEmpty() {
  const count = await db.mug.count();
  if (count === 0) {

    await db.mug.createMany({
      data: mockedPosts.map((mug) => ({
        name: mug.title,
        description: mug.description,
        price: mug.price,
        filepath: mug.image,
      })),
    });

    console.log("...database has been seeded");
  }
}
