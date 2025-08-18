/*
  Warnings:

  - You are about to drop the column `monster_id` on the `monster_details` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `monster_details` table. All the data in the column will be lost.
  - You are about to drop the column `map_id` on the `monsters` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `monsters` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[monster_detail_id]` on the table `monsters` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `monster_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monster_detail_id` to the `monsters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rank` to the `monsters` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."monster_details" DROP CONSTRAINT "monster_details_monster_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."monsters" DROP CONSTRAINT "monsters_map_id_fkey";

-- DropIndex
DROP INDEX "public"."monster_details_monster_id_key";

-- AlterTable
ALTER TABLE "public"."monster_details" DROP COLUMN "monster_id",
DROP COLUMN "rank",
ADD COLUMN     "map_zone_id" INTEGER,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."monsters" DROP COLUMN "map_id",
DROP COLUMN "name",
ADD COLUMN     "monster_detail_id" INTEGER NOT NULL,
ADD COLUMN     "rank" "public"."MonsterRank" NOT NULL;

-- CreateTable
CREATE TABLE "public"."map_zones" (
    "id" SERIAL NOT NULL,
    "map_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "map_zones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "monsters_monster_detail_id_key" ON "public"."monsters"("monster_detail_id");

-- AddForeignKey
ALTER TABLE "public"."map_zones" ADD CONSTRAINT "map_zones_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "public"."maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monster_details" ADD CONSTRAINT "monster_details_map_zone_id_fkey" FOREIGN KEY ("map_zone_id") REFERENCES "public"."map_zones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monsters" ADD CONSTRAINT "monsters_monster_detail_id_fkey" FOREIGN KEY ("monster_detail_id") REFERENCES "public"."monster_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;
