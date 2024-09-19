export default function Home() {
  return (
    <div
      className={`grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20`}
    >
      <header>
        <h1 className="text-3xl">Url Shortener</h1>
      </header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <h1>Hello, world</h1>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/marked29/url-shortener"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Mark
        </a>
      </footer>
    </div>
  );
}
