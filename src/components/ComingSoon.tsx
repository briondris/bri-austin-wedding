interface ComingSoonProps {
  pageName: string;
}

export default function ComingSoon({ pageName }: ComingSoonProps) {
  return (
    <main className="bg-cream min-h-screen flex items-center justify-center px-6 py-24 text-center">
      <div>
        <p className="font-sans font-semibold text-3xl uppercase tracking-[0.3em] text-terracotta mb-4">
          Coming Soon
        </p>
        <h1 className="font-display text-5xl text-stone-800 mb-4">
          {pageName}
        </h1>
        <br />
        <p className="font-sans text-3xl text-stone-600 max-w-lg mx-auto">
          Our {pageName} page isn&apos;t quite ready yet — check back soon!
        </p>
      </div>
    </main>
  );
}
