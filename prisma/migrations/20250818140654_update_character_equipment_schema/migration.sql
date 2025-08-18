/*
  Warnings:

  - You are about to drop the column `equipped_at` on the `character_equipment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."character_equipment" DROP COLUMN "equipped_at",
ADD COLUMN     "equipped" BOOLEAN NOT NULL DEFAULT false;
