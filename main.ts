import { writeFileSync, mkdirSync } from "node:fs";

// One-line sick-day excuse: half-believable, fresh, twist at the end.
const ENTRY =
  "Hey boss, can't come in today — slept on my neck wrong and now I can only turn left, so I'd have to drive here in circles.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
