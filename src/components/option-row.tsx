export default function OptionRow({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="d-flex justify-content-between gap-2 hover:tw-bg-gray-100 hover:tw-rounded-lg">
      <span className="badge text-bg-secondary">{label}</span>
      <span className="badge fw-normal text-secondary">{value}</span>
    </div>
  );
}
