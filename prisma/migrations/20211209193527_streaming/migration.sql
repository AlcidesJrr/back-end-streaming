/*
  Warnings:

  - You are about to drop the column `status` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Filme" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "status";
