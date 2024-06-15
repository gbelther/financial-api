/*
  Warnings:

  - You are about to alter the column `cpf` on the `customers` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.
  - A unique constraint covering the columns `[cpf]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(14);

-- CreateIndex
CREATE UNIQUE INDEX "customers_cpf_key" ON "customers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");
