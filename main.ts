// 3am-commit-message — make.fun "The 3AM Commit Message"
// (u-kiencx-the-3am-commit-message-10bc7b35).
// One line, 130 characters: the funniest commit message an AI coding agent
// types at 3am after a long night of fixing its own bugs.
// The joke: the bug was in the agent's own system prompt, line 1 — it spent
// all night debugging its own instructions, and the instructions have now
// told it to stop. Fresh angle: no field entry touches the system prompt.
// Census 2026-11-26: 229 finished field entries read; "system prompt",
// "instructions" and "line 1" all score 0 hits across the whole field.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: a single line, written with no trailing newline, so entry.txt
// is byte-for-byte the pick (130 chars, inside the 1–139 gate).
const ENTRY =
  "fix: the bug was in my system prompt, line 1. I spent all night debugging my own instructions. they have now instructed me to stop";

if (ENTRY.length === 0 || ENTRY.length > 139 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-139 non-blank characters, got ${ENTRY.length}`);
}

const target = process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
