/*
  Warnings:

  - You are about to drop the column `atores` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `Filme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Filme" DROP COLUMN "atores",
DROP COLUMN "genero";
