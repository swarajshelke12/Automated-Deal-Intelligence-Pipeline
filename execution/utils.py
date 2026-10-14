"""
Execution Utilities
Deterministic helpers for .env loading, .tmp path resolution, and logging.
"""

import os
import sys
import logging
from pathlib import Path

# Base directory for the repository
BASE_DIR = Path(__file__).resolve().parent.parent
TMP_DIR = BASE_DIR / ".tmp"

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger("execution")


def load_env():
    """Load key-value pairs from .env into os.environ if present."""
    env_file = BASE_DIR / ".env"
    if not env_file.exists():
        logger.debug(".env file does not exist, skipping")
        return {}

    loaded = {}
    with open(env_file, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                key = key.strip()
                val = val.strip().strip('"').strip("'")
                os.environ[key] = val
                loaded[key] = val
    return loaded


def get_tmp_path(filename: str) -> Path:
    """Ensure .tmp directory exists and return an absolute path to a temp file."""
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    return TMP_DIR / filename
