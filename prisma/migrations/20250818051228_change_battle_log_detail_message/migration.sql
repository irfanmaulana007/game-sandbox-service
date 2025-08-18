/*
  Warnings:

  - You are about to drop the column `details` on the `battle_log_details` table. All the data in the column will be lost.
  - Added the required column `message` to the `battle_log_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."battle_log_details" DROP COLUMN "details",
ADD COLUMN     "message" TEXT NOT NULL;
