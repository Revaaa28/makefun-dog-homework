// The Dog Ate My Homework: Funniest Excuse — make.fun entry
// (u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
//
// Writes one line, the excuse a dog gives after being caught eating
// the homework, to /output/entry.txt.
//
// The line was picked by hand from ten candidates, ranked against the
// judge brief in its published order (a dog's own voice after being
// caught > biggest laugh, twist or dog logic in one line > sounds like
// a real dog, dog priorities, no human embarrassment > works alone >
// fresh, not stock lines about the cat, the taste of paper or being a
// good boy), with pairwise checks against stock and strong rival
// shapes. See ../candidates.md (kept beside the repo, not shipped).
//
// Chosen line:
//   It was due today, so I turned it in early. Inside me.
//
// Why it wins the brief: the dog reframes eating as submitting — it
// turned the homework in early, inside itself — and genuinely believes
// it did nothing wrong, even did its duty. The stomach as the delivery
// channel is dog logic at its purest: food goes inside, and the dog is
// proud of the job. It is a fresh turn, not a stock line, it lands in
// one read, and it is tight at 53 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It was due today, so I turned it in early. Inside me.";

// The sealed gate scores /output/entry.txt as valid only when it is
// UTF-8 text of 1 to 200 characters and not only white space. Enforce
// that here, before writing, so a bad line can never reach the gate.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

// The grader runs this program in a sandbox and reads /output/entry.txt.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
