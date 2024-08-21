/*
  Warnings:

  - You are about to drop the column `providerAccountId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `providerId` on the `Account` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider_id,provider_account_id]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider_account_id` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provider_id` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Account_providerId_providerAccountId_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "providerAccountId",
DROP COLUMN "providerId",
ADD COLUMN     "provider_account_id" TEXT NOT NULL,
ADD COLUMN     "provider_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_id_provider_account_id_key" ON "Account"("provider_id", "provider_account_id");
