export default function EventsIndicator() {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 tw-cursor-default user-select-none">
      <hr className="w-25 text-opacity-75 text-secondary" />
      <i className="bi bi-arrow-right-short text-secondary" style={{ fontSize: 14 }}></i>
      <div className="small text-secondary text-center">Component Events</div>
      <i className="bi bi-arrow-left-short text-secondary" style={{ fontSize: 14 }}></i>
      <hr className="w-25 text-opacity-75 text-secondary" />
    </div>
  );
}
