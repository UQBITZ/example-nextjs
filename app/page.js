import { randomUUID } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { headers } from 'next/headers';

// Render on every request: this page must never be static.
export const dynamic = 'force-dynamic';

async function releaseMarker() {
  try {
    return (await readFile('release-marker.txt', 'utf8')).trim();
  } catch {
    return 'absent';
  }
}

export default async function Page() {
  const h = await headers();
  return (
    <main>
      <h1>example-nextjs on UQBITZ</h1>
      <p>Rendered on the server for every request.</p>
      <ul>
        <li>marker: <code id="marker">uqbitz-example-nextjs-v1</code></li>
        <li>rendered-at: <code id="rendered-at">{new Date().toISOString()}</code></li>
        <li>request-id: <code id="request-id">{randomUUID()}</code></li>
        <li>echo x-uqbitz-probe: <code id="probe">{h.get('x-uqbitz-probe') ?? 'none'}</code></li>
        <li>release: <code id="release">{await releaseMarker()}</code></li>
        <li>runtime: <code id="runtime">{typeof Bun !== 'undefined' ? `bun ${Bun.version}` : `node ${process.version}`}</code></li>
      </ul>
    </main>
  );
}
