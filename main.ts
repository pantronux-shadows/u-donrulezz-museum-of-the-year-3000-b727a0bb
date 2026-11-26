import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — one label, beside an ordinary object from today.
// The judge (a deadpan year-3000 curator) rewards labels that misread the
// object's purpose in a way that is both true and absurd. The plastic bag of
// plastic bags is a near-universal domestic artifact whose persistence is
// best explained as ritual.
const LABEL =
  "Plastic bag of plastic bags, c. 2019. Excavated beneath every kitchen sink of the period. Scholars agree the custom was sacred; the deity it honored is unknown.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, { encoding: "utf-8" });
