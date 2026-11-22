import { mkdirSync, writeFileSync } from "node:fs";

// One text, written exactly as counted (134 Unicode code points, no
// trailing newline): a locked drawer, a single key, and a note that
// opens one more question than it answers.
const TEXT =
  "My grandmother kept one drawer locked her whole life. When we opened it, there was only a single key inside, and a note: not this one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
