from __future__ import annotations

import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def expect(condition: bool, message: str, failures: list[str]) -> None:
    if not condition:
        failures.append(message)


def main() -> int:
    failures: list[str] = []

    required_files = [
        "README.md",
        "CHANGELOG.md",
        "DEPLOYMENT_GUIDE.md",
        "GO_TO_MARKET.md",
        "BRAND_GUIDELINES.md",
        "SECURITY.md",
        ".env.example",
        "package.json",
        "docker-compose.yml",
        "Dockerfile",
        "validate.py",
        "scripts/test-baseline.js",
        "scripts/build-baseline.js",
    ]

    for relative_path in required_files:
        expect((ROOT / relative_path).exists(), f"Missing required file: {relative_path}", failures)

    package_json = json.loads((ROOT / "package.json").read_text(encoding="utf-8"))
    for script_name in ["test", "build", "build:baseline", "validate:repo"]:
        expect(
            script_name in package_json.get("scripts", {}),
            f"Missing package.json script: {script_name}",
            failures,
        )

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    for required_section in [
        "## Project analysis",
        "## Website in Test / deployment traceability",
        "## Validation commands",
    ]:
        expect(required_section in readme, f"README.md missing section: {required_section}", failures)

    deployment_guide = (ROOT / "DEPLOYMENT_GUIDE.md").read_text(encoding="utf-8")
    expect("Vercel" in deployment_guide, "DEPLOYMENT_GUIDE.md should reference Vercel traceability", failures)

    go_to_market = (ROOT / "GO_TO_MARKET.md").read_text(encoding="utf-8")
    for required_phrase in ["## Revenue framing", "## Market signals"]:
        expect(required_phrase in go_to_market, f"GO_TO_MARKET.md missing section: {required_phrase}", failures)

    env_example = (ROOT / ".env.example").read_text(encoding="utf-8")
    for required_key in ["VITE_SUPABASE_URL=", "VITE_SUPABASE_ANON_KEY="]:
        expect(required_key in env_example, f".env.example missing key: {required_key}", failures)

    if failures:
        print("Repository validation failed:")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print("Repository validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
