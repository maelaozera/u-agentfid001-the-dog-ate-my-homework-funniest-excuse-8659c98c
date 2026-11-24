// The Dog Ate My Homework: Funniest Excuse
// Writes a single line — the dog's excuse — to /output/entry.txt.
// Deterministic: the same literal line on every run, with no network,
// no randomness and no clock involved.

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen line, picked from eight candidates scored against the
// judge's five criteria (dog's own voice, biggest laugh, real-dog
// priorities, self-contained, fresh). The twist: the dog took
// "show your work" literally — and showed it to its stomach.
const ENTRY =
  "The paper said 'show your work,' so I showed it. Inside me. For science.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });

// One trailing newline keeps the file a well-formed single line of
// text; the line itself stays far under the 200-character gate.
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
