-- CreateEnum
CREATE TYPE "public"."EquipmentSlot" AS ENUM ('weapon', 'armor', 'accessory_1', 'accessory_2');

-- CreateTable
CREATE TABLE "public"."character_equipped_items" (
    "id" TEXT NOT NULL,
    "equipment_id" INTEGER NOT NULL,
    "character_id" TEXT NOT NULL,
    "slot" "public"."EquipmentSlot" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "characterEquipmentId" TEXT,

    CONSTRAINT "character_equipped_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."character_equipped_items" ADD CONSTRAINT "character_equipped_items_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."character_equipped_items" ADD CONSTRAINT "character_equipped_items_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."character_equipped_items" ADD CONSTRAINT "character_equipped_items_characterEquipmentId_fkey" FOREIGN KEY ("characterEquipmentId") REFERENCES "public"."character_equipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
