const BiThreeDots = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="bi bi-three-dots"
      fill="currentColor"
      viewBox="0 0 16 16"
      height="16"
      width="16"
    >
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  );
};

const BiChevronDoubleLeft = () => {
  return (
    <svg
      className="bi bi-chevron-double-left"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      height="16"
      width="16"
    >
      <path
        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        fillRule="evenodd"
      />
      <path
        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
        fillRule="evenodd"
      />
    </svg>
  );
};

const BiChevronDoubleRight = () => {
  return (
    <svg
      className="bi bi-chevron-double-right"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      height="16"
      width="16"
    >
      <path
        d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
        fillRule="evenodd"
      />
      <path
        d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
        fillRule="evenodd"
      />
    </svg>
  );
};

export { BiChevronDoubleRight, BiChevronDoubleLeft, BiThreeDots };
