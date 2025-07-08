/*
  Warnings:

  - You are about to drop the column `orderDate` on the `PurchaseOrders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BayerProducts" ADD COLUMN     "dealershipId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "PurchaseOrderItems" ADD COLUMN     "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PurchaseOrders" DROP COLUMN "orderDate",
ADD COLUMN     "dealershipId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "RegularProducts" ADD COLUMN     "dealershipId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "SeedProducts" ADD COLUMN     "dealershipId" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "BayerProducts" ADD CONSTRAINT "BayerProducts_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "Dealerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeedProducts" ADD CONSTRAINT "SeedProducts_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "Dealerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegularProducts" ADD CONSTRAINT "RegularProducts_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "Dealerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrders" ADD CONSTRAINT "PurchaseOrders_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "Dealerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
