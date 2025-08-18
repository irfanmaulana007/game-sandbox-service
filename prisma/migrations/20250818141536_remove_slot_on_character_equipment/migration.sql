/*
  Warnings:

  - You are about to drop the column `slot` on the `character_equipment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."character_equipment" DROP COLUMN "slot";

-- DropEnum
DROP TYPE "public"."EquipmentSlot";
