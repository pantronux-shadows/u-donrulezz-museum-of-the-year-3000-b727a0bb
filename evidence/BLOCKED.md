# BLOCKED — one check cannot pass from this host as things stand

Not a blocker for the entry's bytes: the full check passes (exit 0) on the entry
files as they are (`--worktree`). What cannot pass locally is the same command
against the repository's existing HEAD commit, because of how the seed repository
was pre-created.

## The exact failing command

    node cli/makefun.mjs check --kit <kit> --repo <entry> --transcripts transcripts.tar.gz

(run without `--worktree`, so it checks the commit at HEAD, "entry start")

Exit status: 1. Failing checks on that snapshot (the seed commit is empty):

- license_osi — "the tree has no root license file"
- entrypoint — "the snapshot has no main.ts or main.py at its root"
- thinking_reproduces — "the snapshot has no counted line; the snapshot has no
  entrypoint (main.ts or main.py) at its root"
- thinking_revised — "no file takes its final content from 2 or more messages that
  write or edit it: the snapshot has no counted file"

## What it would take

A writable `entry/.git` (it is owned by another user, kuro): committing main.ts and
LICENSE would give HEAD a snapshot identical to the `--worktree` files, which pass
14/0. Equivalently, the pipeline's own commit of these files resolves all four rows.

Also blocked on this host, and why the entry is verified on a copy: `/output` cannot
be created (no root, no user/mount namespaces) and the system Node 22.22.1 is not
compiled with TypeScript support, so `main.ts` was exercised with the workspace's
Node 26.12.1 on a copy identical but for the output-path constants. The grader's
Node 22.23.4 runs TypeScript as shipped (RULES.txt).
