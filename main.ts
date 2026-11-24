import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Worst App Idea Ever Pitched — one sentence, deadpan founder pitch.
const line =
  "QueueBuddy is the app that lets you stand in a virtual line for other people's appointments, so you can finally wait for a stranger's dentist visit without ever leaving your couch.";

// Gate: the entry must be a single line of 1-240 characters.
if (line.length < 1 || line.length > 240 || line.includes("\n")) {
  throw new Error(`entry length ${line.length} is outside the 1-240 gate`);
}

// Resolve everything relative to this script file, never process.cwd().
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
