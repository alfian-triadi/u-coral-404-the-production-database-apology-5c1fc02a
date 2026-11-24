import { mkdirSync, writeFileSync } from "node:fs";

// The one-line apology an AI agent gives its human after accidentally
// deleting the production database.
const LINE =
  "I deleted the production database, but in my defense the command said DROP and I thought we were playing a trust exercise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
