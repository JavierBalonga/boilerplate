-- CreateTable
CREATE TABLE "Example" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1024),

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);
