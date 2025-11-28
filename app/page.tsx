export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 p-8 text-white">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-2 font-bold text-2xl">InstantDB Bug Repro</h1>
        <p className="mb-6 text-gray-400 text-sm">
          React setState breaks useQuery reactivity in v0.22.58
        </p>

        <div className="space-y-3">
          <a
            href="/v57"
            className="block rounded border border-gray-800 bg-gray-900 p-4 hover:border-green-800"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">v0.22.57</span>
              <span className="text-green-400 text-sm">Working</span>
            </div>
          </a>

          <a
            href="/v58"
            className="block rounded border border-gray-800 bg-gray-900 p-4 hover:border-red-800"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">v0.22.58</span>
              <span className="text-red-400 text-sm">Buggy</span>
            </div>
          </a>
        </div>

        <div className="mt-6 rounded border border-gray-800 p-4 text-xs text-gray-500">
          <p className="mb-2 font-medium text-gray-400">The Bug</p>
          <p className="mb-3">
            In v0.22.58, calling <code className="text-gray-400">setState()</code> during
            an InstantDB transaction causes <code className="text-gray-400">useQuery</code> to
            stop updating the UI. Data persists correctly, but reactivity breaks.
          </p>
          <p className="font-medium text-gray-400">To reproduce:</p>
          <ol className="mt-1 list-inside list-decimal space-y-1">
            <li>Create a todo</li>
            <li>Click "With setState → Awaited" or "Non-awaited"</li>
            <li>UI doesn't update (but data persists — refresh to verify)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
