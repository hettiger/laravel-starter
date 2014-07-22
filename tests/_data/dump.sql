PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE "migrations" ("migration" varchar not null, "batch" integer not null);
COMMIT;
