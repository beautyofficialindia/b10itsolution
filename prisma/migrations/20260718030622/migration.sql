/*
  Warnings:

  - The primary key for the `ContactRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `number` on table `ContactRequest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ContactRequest" DROP CONSTRAINT "ContactRequest_pkey",
ADD COLUMN     "fileData" BYTEA,
ADD COLUMN     "fileName" TEXT,
ADD COLUMN     "fileType" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "number" SET NOT NULL,
ADD CONSTRAINT "ContactRequest_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ContactRequest_id_seq";
