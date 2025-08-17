-- CreateEnum
CREATE TYPE "public"."EquipmentType" AS ENUM ('weapon', 'armor', 'accessory');

-- CreateEnum
CREATE TYPE "public"."EquipmentSlot" AS ENUM ('weapon', 'armor', 'accessory1', 'accessory2');

-- CreateEnum
CREATE TYPE "public"."Rarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateEnum
CREATE TYPE "public"."MapDifficulty" AS ENUM ('easy', 'normal', 'hard', 'extreme');

-- CreateEnum
CREATE TYPE "public"."MonsterRank" AS ENUM ('normal', 'elite', 'boss', 'legendary');

-- CreateEnum
CREATE TYPE "public"."BattleResult" AS ENUM ('victory', 'defeat');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."job_classes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "base_health" INTEGER NOT NULL,
    "base_attack" INTEGER NOT NULL,
    "base_defense" INTEGER NOT NULL,
    "base_speed" INTEGER NOT NULL,
    "base_critical" INTEGER NOT NULL,
    "health_per_level" INTEGER NOT NULL DEFAULT 10,
    "attack_per_level" INTEGER NOT NULL DEFAULT 1,
    "defense_per_level" INTEGER NOT NULL DEFAULT 1,
    "speed_per_level" INTEGER NOT NULL DEFAULT 1,
    "critical_per_level" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "job_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."characters" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "job_id" INTEGER NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "health" INTEGER NOT NULL,
    "max_health" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "critical" INTEGER NOT NULL,
    "status_points" INTEGER NOT NULL DEFAULT 0,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."equipment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "public"."EquipmentType" NOT NULL,
    "rarity" "public"."Rarity" NOT NULL,
    "min_level" INTEGER NOT NULL DEFAULT 1,
    "health_bonus" INTEGER NOT NULL DEFAULT 0,
    "attack_bonus" INTEGER NOT NULL DEFAULT 0,
    "defense_bonus" INTEGER NOT NULL DEFAULT 0,
    "speed_bonus" INTEGER NOT NULL DEFAULT 0,
    "critical_bonus" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT,
    "drop_rate" DECIMAL(5,4) NOT NULL DEFAULT 0.0100,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."character_equipment" (
    "id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "equipment_id" INTEGER NOT NULL,
    "slot" "public"."EquipmentSlot" NOT NULL,
    "equipped_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "character_equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "effect_value" INTEGER,
    "rarity" "public"."Rarity" NOT NULL,
    "drop_rate" DECIMAL(5,4) NOT NULL DEFAULT 0.0100,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."character_inventory" (
    "id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "character_inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."maps" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "min_level" INTEGER NOT NULL DEFAULT 1,
    "max_level" INTEGER NOT NULL DEFAULT 99,
    "difficulty" "public"."MapDifficulty" NOT NULL,
    "background_image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "maps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."monsters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "health" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "critical" INTEGER NOT NULL,
    "experience_reward" INTEGER NOT NULL DEFAULT 0,
    "gold_reward" INTEGER NOT NULL DEFAULT 0,
    "map_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "monsters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."monster_details" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "rank" "public"."MonsterRank" NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "drop_table" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "monster_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."battle_logs" (
    "id" TEXT NOT NULL,
    "character_id" TEXT NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "battleResult" "public"."BattleResult" NOT NULL,
    "character_health_remaining" INTEGER NOT NULL,
    "monster_health_remaining" INTEGER NOT NULL,
    "turns_taken" INTEGER NOT NULL,
    "experience_gained" INTEGER NOT NULL,
    "gold_gained" INTEGER NOT NULL,
    "battle_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "battle_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "job_classes_name_key" ON "public"."job_classes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "characters_user_id_name_key" ON "public"."characters"("user_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "monster_details_monster_id_key" ON "public"."monster_details"("monster_id");

-- AddForeignKey
ALTER TABLE "public"."characters" ADD CONSTRAINT "characters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."characters" ADD CONSTRAINT "characters_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "public"."job_classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."character_equipment" ADD CONSTRAINT "character_equipment_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."character_equipment" ADD CONSTRAINT "character_equipment_equipment_id_fkey" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."character_inventory" ADD CONSTRAINT "character_inventory_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."character_inventory" ADD CONSTRAINT "character_inventory_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monsters" ADD CONSTRAINT "monsters_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "public"."maps"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."monster_details" ADD CONSTRAINT "monster_details_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "public"."monsters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."battle_logs" ADD CONSTRAINT "battle_logs_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "public"."characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."battle_logs" ADD CONSTRAINT "battle_logs_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "public"."monsters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
