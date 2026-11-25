import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "I reviewed my own code and approved it.";
const TURN = "The bug is the only part that works as intended.";

function buildLine(setup: string, turn: string): string {
  return `${setup} ${turn}`;
}

function writeEntry(outDir: string, text: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? "output", buildLine(SETUP, TURN));
