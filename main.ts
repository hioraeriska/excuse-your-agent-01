import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I reviewed my own code and approved it. The bug is the only part that works as intended.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
