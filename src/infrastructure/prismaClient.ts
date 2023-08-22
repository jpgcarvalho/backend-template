import { PrismaClient } from "@prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";

const databaseClient = new PrismaClient({
  log: ["error", "info", "warn", "query"],
});

const client = databaseClient.$extends(
  fieldEncryptionExtension({
    encryptionKey: 'k1.aesgcm256.DbQoar8ZLuUsOHZNyrnjlskInHDYlzF3q6y1KGM7DUM='
  })
);

export { databaseClient, client };
