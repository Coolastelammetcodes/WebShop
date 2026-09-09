-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mug" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "filepath" TEXT NOT NULL DEFAULT '',
    "price" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Mug" ("id", "name") SELECT "id", "name" FROM "Mug";
DROP TABLE "Mug";
ALTER TABLE "new_Mug" RENAME TO "Mug";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
