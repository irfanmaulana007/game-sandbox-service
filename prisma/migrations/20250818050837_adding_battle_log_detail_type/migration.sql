/*
  Warnings:

  - Added the required column `type` to the `battle_log_details` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."BattleLogDetailType" AS ENUM ('information', 'damage_dealt', 'damage_received', 'reward');

-- AlterTable
ALTER TABLE "public"."battle_log_details" ADD COLUMN     "type" "public"."BattleLogDetailType" NOT NULL;
