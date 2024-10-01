import clsx from 'clsx';

export default function CustomSimpleCardLink({
  title,
  href,
  hash,
  className,
  underline,
}: {
  title: string;
  href?: string;
  hash?: string;
  className?: string;
  underline?: boolean;
}) {
  return (
    <a
      href={hash ? `#${hash}` : href ? (hash ? `${href}#${hash}` : href) : ''}
      className={clsx(
        'link-body-emphasis link-offset-2 link-underline-opacity-100-hover',
        className,
        underline ? 'link-underline-opacity-100' : 'link-underline-opacity-0',
      )}
    >
      {title}
    </a>
  );
}
