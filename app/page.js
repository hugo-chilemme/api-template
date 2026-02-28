export default function HomePage() {
  return (
    <main style={{ maxWidth: 860, margin: '36px auto', padding: 24, background: '#fff', borderRadius: 12 }}>
      <h1 style={{ marginTop: 0 }}>Next.js API Template</h1>
      <p>Folder-based API routes with controlled versioning and middleware.</p>
      <ul>
        <li><code>GET /api/v1/health</code></li>
        <li><code>GET, POST /api/v1/users</code></li>
        <li><code>GET, PATCH, DELETE /api/v1/users/[paramsId]</code></li>
      </ul>
      <p>Use header <code>x-api-version: v1</code> for explicit version checks.</p>
    </main>
  );
}
