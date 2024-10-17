import clsx from 'clsx';

export default function ExampleLink({
  title,
  href,
  hash,
  className,
  underline,
  noSetId,
}: {
  title: string;
  href?: string;
  hash?: string;
  className?: string;
  underline?: boolean;
  noSetId?: boolean;
}) {
  return (
    <a
      id={noSetId ? undefined : hash}
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
