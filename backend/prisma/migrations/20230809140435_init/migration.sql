-- CreateTable
CREATE TABLE "sellers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "sellers_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "date" TIMETZ(6) NOT NULL,
    "product" VARCHAR(30) NOT NULL,
    "value" BIGINT NOT NULL,
    "seller" INTEGER NOT NULL,

    CONSTRAINT "transactions_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sellers_un" ON "sellers"("name");

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_fk" FOREIGN KEY ("seller") REFERENCES "sellers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
