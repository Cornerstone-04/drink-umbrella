export function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone/60"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        required
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full border-b border-bone/30 bg-transparent py-3 text-bone outline-none transition focus:border-sun"
      />
    </div>
  );
}
