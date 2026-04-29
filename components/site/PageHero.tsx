export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="container-edge pt-40 pb-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50 fade-up">
        {eyebrow}
      </p>
      <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] text-balance">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p>
      )}
    </section>
  );
}
