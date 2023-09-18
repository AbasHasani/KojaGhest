/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `providerImage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `providerName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highestCredit` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialContracts` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Made the column `number` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Account` DROP FOREIGN KEY `Account_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Session` DROP FOREIGN KEY `Session_userId_fkey`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `providerImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `providerName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Provider` ADD COLUMN `highestCredit` INTEGER NOT NULL,
    ADD COLUMN `specialContracts` VARCHAR(191) NOT NULL,
    ADD COLUMN `website` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `number` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Account`;

-- DropTable
DROP TABLE `Session`;

-- DropTable
DROP TABLE `VerificationToken`;
