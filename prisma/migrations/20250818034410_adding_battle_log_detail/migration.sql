-- CreateTable
CREATE TABLE "public"."battle_log_details" (
    "id" TEXT NOT NULL,
    "battle_log_id" TEXT NOT NULL,
    "details" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "battle_log_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."battle_log_details" ADD CONSTRAINT "battle_log_details_battle_log_id_fkey" FOREIGN KEY ("battle_log_id") REFERENCES "public"."battle_logs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
