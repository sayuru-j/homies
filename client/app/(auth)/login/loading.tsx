export default function Loading() {
  return (
    <main className="min-h-screen grid grid-cols-2">
      <section className="bg-primary"></section>
      <section className="flex items-center justify-center">
        <div className="flex flex-col animate-pulse gap-2 items-center">
          <div className="bg-slate-100 flex h-6 w-10 rounded"></div>
          <div className="bg-slate-100 flex h-6 w-56 rounded"></div>
          <div className="bg-slate-100 flex h-3 w-64 rounded"></div>

          <div className="bg-slate-100 flex h-10 w-72 rounded mt-10"></div>
          <div className="bg-slate-100 flex h-10 w-72 rounded"></div>
          <div className="bg-slate-100 flex h-10 w-72 rounded"></div>
          <div className="flex gap-2">
            <div className="bg-slate-100 flex h-5 w-24 rounded"></div>
            <div className="bg-slate-100 flex h-5 w-24 rounded"></div>
          </div>

          <div className="bg-slate-100 flex h-8 w-64 rounded mt-10"></div>
          <div className="bg-slate-100 flex h-8 w-64 rounded"></div>
        </div>
      </section>
    </main>
  );
}
