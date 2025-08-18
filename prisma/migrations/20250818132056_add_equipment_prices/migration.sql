-- AlterTable
ALTER TABLE "public"."equipment" ADD COLUMN     "buy_price" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "sell_price" INTEGER NOT NULL DEFAULT 0;
