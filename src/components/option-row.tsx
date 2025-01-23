export default function OptionRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="d-flex justify-content-between gap-2 hover:bg-gray-100 dark:hover:bg-zinc-700 hover:rounded-lg">
      <span className="small">{label}</span>
      <span className="small text-secondary">{value}</span>
    </div>
  );
}
