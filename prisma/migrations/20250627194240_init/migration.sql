-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('Seed', 'Bayer', 'Regular');

-- CreateEnum
CREATE TYPE "CropType" AS ENUM ('Corn', 'Sorghum', 'Soybean', 'Canola', 'Alfalfa', 'Palletbox');

-- CreateTable
CREATE TABLE "Dealerships" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Dealerships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "street1" TEXT,
    "street2" TEXT,
    "state" TEXT,
    "city" TEXT,
    "zip" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "dealershipId" INTEGER NOT NULL,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductCompanies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyType" "CompanyType" NOT NULL,
    "dealershipId" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProductCompanies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BayerProducts" (
    "id" SERIAL NOT NULL,
    "trait" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "seedSize" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "cropType" "CropType" NOT NULL,
    "productDetail" TEXT NOT NULL,
    "dealerPricing" DOUBLE PRECISION NOT NULL,
    "endUserPricing" DOUBLE PRECISION NOT NULL,
    "agiisId" TEXT NOT NULL,
    "sapId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "productCompanyId" INTEGER NOT NULL,

    CONSTRAINT "BayerProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeedProducts" (
    "id" SERIAL NOT NULL,
    "trait" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "seedSize" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "cropType" "CropType" NOT NULL,
    "dealerPricing" DOUBLE PRECISION NOT NULL,
    "endUserPricing" DOUBLE PRECISION NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "productCompanyId" INTEGER NOT NULL,

    CONSTRAINT "SeedProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegularProducts" (
    "id" SERIAL NOT NULL,
    "product" TEXT NOT NULL,
    "type" TEXT,
    "description" TEXT,
    "dealerPricing" DOUBLE PRECISION NOT NULL,
    "endUserPricing" DOUBLE PRECISION NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "productCompanyId" INTEGER NOT NULL,

    CONSTRAINT "RegularProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseOrders" (
    "id" SERIAL NOT NULL,
    "isQuote" BOOLEAN NOT NULL,
    "isSimple" BOOLEAN NOT NULL,
    "customerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PurchaseOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseOrderItems" (
    "id" SERIAL NOT NULL,
    "puchaseOrderId" INTEGER NOT NULL,
    "productCompanyId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseOrderItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BayerProducts_trait_variety_treatment_seedSize_cropType_pac_key" ON "BayerProducts"("trait", "variety", "treatment", "seedSize", "cropType", "packaging", "agiisId", "sapId");

-- CreateIndex
CREATE UNIQUE INDEX "SeedProducts_trait_variety_treatment_seedSize_cropType_pack_key" ON "SeedProducts"("trait", "variety", "treatment", "seedSize", "cropType", "packaging");

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseOrderItems_productCompanyId_productId_key" ON "PurchaseOrderItems"("productCompanyId", "productId");

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "Dealerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCompanies" ADD CONSTRAINT "ProductCompanies_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "Dealerships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BayerProducts" ADD CONSTRAINT "BayerProducts_productCompanyId_fkey" FOREIGN KEY ("productCompanyId") REFERENCES "ProductCompanies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeedProducts" ADD CONSTRAINT "SeedProducts_productCompanyId_fkey" FOREIGN KEY ("productCompanyId") REFERENCES "ProductCompanies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegularProducts" ADD CONSTRAINT "RegularProducts_productCompanyId_fkey" FOREIGN KEY ("productCompanyId") REFERENCES "ProductCompanies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrders" ADD CONSTRAINT "PurchaseOrders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseOrderItems" ADD CONSTRAINT "PurchaseOrderItems_puchaseOrderId_fkey" FOREIGN KEY ("puchaseOrderId") REFERENCES "PurchaseOrders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
