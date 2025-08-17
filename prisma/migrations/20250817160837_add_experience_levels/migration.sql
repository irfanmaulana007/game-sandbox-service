-- CreateTable
CREATE TABLE "public"."experience_levels" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "experience_levels_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "experience_levels_level_key" ON "public"."experience_levels"("level");
