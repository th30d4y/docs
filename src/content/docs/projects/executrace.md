---
title: ExecuTrace
description: CLI tool for recording and replaying developer workflows.
draft: false
---

ExecuTrace is a Python CLI tool and library for capturing, saving, and replaying developer workflows.

## Overview

ExecuTrace records terminal commands from shell history and tracks filesystem changes (create, modify, delete). Workflows are saved in JSON or XML format and can be replayed with multiple execution modes.

**Language:** Python 3.9+  
**License:** MPL-2.0  
**Platforms:** Linux, macOS  
**PyPI package:** `exectrace-workflow`  
**Repository:** [github.com/th30d4y/ExecuTrace](https://github.com/th30d4y/ExecuTrace)

## Installation

Install from PyPI:

```bash
pip install exectrace-workflow
```

Install from source:

```bash
git clone https://github.com/th30d4y/ExecuTrace.git
cd ExecuTrace
pip install -e .
```

## Commands

### Record a workflow

```bash
exectrace record <workflow-name>
```

Starts recording terminal commands and filesystem changes under the given name.

### Stop recording

```bash
exectrace stop
```

Stops the active recording session and saves the workflow.

### Replay a workflow

```bash
exectrace replay <workflow-name>
```

Replays the saved workflow.

### Replay with explanation

```bash
exectrace replay <workflow-name> --explain
```

Dry-run mode that prints a description of each step without executing it.

### Help

```bash
exectrace --help
```

## Workflow Storage

Workflows are saved in either JSON or XML format. They can be shared across teams and used to automate repetitive tasks, share procedures, or ensure deployment consistency.

## Use Cases

- Automate repetitive development tasks
- Share reproducible environment setups
- Create deployment procedures that can be replayed consistently
- Document terminal-based workflows
