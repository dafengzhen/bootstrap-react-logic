export default function CustomSimpleCardLink({
  title,
  hash,
}: {
  title: string;
  hash: string;
}) {
  return (
    <a
      href={`#${hash}`}
      className="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
    >
      {title}
    </a>
  );
}
