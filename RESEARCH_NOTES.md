# External Research Notes

## Requested sources

1. https://designedforhumans.tech/blog/liquid-glass-smart-or-bad-for-accessibility
2. https://github.com/Zqysl/liquid-glass-webgl

## Environment limitation observed

Direct network retrieval to both sources was blocked in this environment with:

- `curl: (56) CONNECT tunnel failed, response 403`

## How this was handled

Given the blocked network path, the foundation in this reset uses the provided PRD draft as the source of truth and encodes:

- explicit accessibility modes and reduced-transparency behavior,
- adaptive performance quality profiles,
- shader-first architecture planning with fallback tiers,
- strong separation between rendering core and component API.

## Follow-up recommendation

When network access is available, add a source-driven design review document comparing:

- accessibility concerns from the article,
- rendering techniques from `liquid-glass-webgl`,
- and this repository's implementation deltas.
