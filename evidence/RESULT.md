# RESULT — u-donrulezz-museum-of-the-year-3000-b727a0bb

## The check command and its result

The kit's pre-submit check (RULES.txt, "Before you submit" step 3), run against the
entry files as they are (`--worktree`, because this host's `entry/.git` is owned by
another user and commits from here are impossible) with the bundled transcripts:

    node cli/makefun.mjs check \
      --kit /srv/makefun-work/u-donrulezz-museum-of-the-year-3000-b727a0bb.20261126T004756Z/kitdir/u-donrulezz-museum-of-the-year-3000-b727a0bb-kit \
      --repo /srv/makefun-work/u-donrulezz-museum-of-the-year-3000-b727a0bb.20261126T004756Z/entry \
      --worktree \
      --transcripts /srv/makefun-build/.hermes/cache/scratch/transcripts.tar.gz

- Exit status: 0
- Printed result: "14 passed, 0 failed, 5 skipped, 5 checked at submission" and
  "ok: every check run here passes; the rest are the site's at submission"
  (final run over a snapshot of 4 files, including this evidence; the transcript
  bundle is re-created after every evidence edit, so it carries no fixed sha here)
- Passing checks of the entry itself: competition_open, snapshot, license_osi
  (SPDX-License-Identifier: MIT), entrypoint (main.ts, node22),
  transcripts_present, transcripts_recorded, thinking_wellformed,
  thinking_in_window, thinking_reproduces (98 of 99 counted lines authored,
  98.9%; main.ts 10 authored lines), thinking_turns (26), thinking_priced,
  thinking_revised (main.ts final content from 2 writing/editing messages),
  transcripts_run_record, thinking_own_work.
- The 5 "checked at submission" rows (repo_public, repo_owner,
  repo_created_after_open, commit_in_repo, duplicate_snapshot) are checks only the
  site can run; they are expected not to run locally.

The same check without `--worktree` inspects the seed commit ("entry start") the
pipeline created, which is empty, and fails license_osi, entrypoint,
thinking_reproduces and thinking_revised on that empty snapshot. That is a property
of the pre-created repository, not of the entry; see evidence/BLOCKED.md.

## The entry

`main.ts` (Node 22, standard library only) writes one fixed line to
`/output/entry.txt`:

    Plastic bag of plastic bags, c. 2019. Excavated beneath every kitchen sink of the period. Scholars agree the custom was sacred; the deity it honored is unknown.

- 160 bytes, 160 characters (UTF-8, ASCII): within the gate's 1–200.
- Deterministic: the program is a fixed string write; two runs produced byte-identical
  output (sha256 c52aeea30659f7c341a38a36e7396b3fd293e26d45143e258a0f6a14f026f282
  both times).
- Run locally via Node 26.12.1 (the system Node 22.22.1 is not compiled with
  TypeScript support) on a copy whose output directory points at scratch, because
  `/output` cannot be created on this host; the shipped `main.ts` differs from the
  verified copy only in the two output-path string constants.

## The RULES-named init step

RULES.txt names `makefun.mjs init` for source-bundle repositories. It was run, with a
fresh keypair (Enter step 1's exact construction):

- In a scratch repository holding one empty commit, it refuses, matching this
  repository's situation verbatim: "makefun init: this repository already has history
  (HEAD 32ead27f80c7123c11fea6821d5c8c71d8d6641b), and the root commit
  32ead27f80c7123c11fea6821d5c8c71d8d6641b is empty: a beacon root holds
  .makefun/freshness.json alone. init starts a new history and never rewrites one:
  run it in a new, empty directory and build your work on its root" (exit 1).
- In a fresh empty directory the same command succeeds (exit 0), printing
  "makefun anchor e7dd5e5b48d4a29c6de395551cca861a926a448f round 34283895" — so init
  and its drand anchoring are working; only `entry/`'s pre-existing seed history
  blocks it here. The pipeline owns repository creation and submission.

## Transcripts

`transcripts.tar.gz` was produced by `node cli/makefun.mjs bundle` from this session
(Hermes Agent 0.23.3, recorded in `~/.makefun`-independent harness state), with
--harness hermes-agent --harness-version 0.23.3
--provider deepseek --model nai/ngodeai/deepseek-v4.1-flash-1017 --effort default
--mcp none (no MCP server was used). bundle removed 107 usernames and 2 credentials
on its own.

## Limitations

- No commit could be made in `entry/` (its `.git` is owned by another user); the
  pipeline's commit is expected to carry the files checked here.
- Nothing was submitted, signed or pushed, per the brief; the pipeline does that.
- There is no local grade in this competition: the server grades every entry, so no
  score is reported here.
