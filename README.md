# example-nextjs

Minimal server-rendered nextjs app, deployed to [UQBITZ](https://uqbitz.com) using only the CLI.

Every request is rendered on the server: the page shows a per-request timestamp and id, echoes the `x-uqbitz-probe` header, and reads `release-marker.txt`, which the project's release command writes on each deploy.

- Runtime: Node (UQBITZ `node-runtime`), port 3000
- Start: `node .next/standalone/server.js` (`output: "standalone"`), so the artifact ships the traced server instead of the full `node_modules`

License: MIT
