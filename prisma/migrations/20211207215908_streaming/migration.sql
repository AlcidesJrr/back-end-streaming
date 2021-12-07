/*
  Warnings:

  - Added the required column `anoLancamento` to the `Filme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Filme" ADD COLUMN     "anoLancamento" INTEGER NOT NULL;
