import clsx from 'clsx';

export default function ExampleLink({
  className,
  underline,
  noSetId,
  title,
  hash,
  href,
}: {
  underline?: boolean;
  className?: string;
  noSetId?: boolean;
  hash?: string;
  href?: string;
  title: string;
}) {
  return (
    <a
      className={clsx(
        'link-body-emphasis link-offset-2 link-underline-opacity-100-hover',
        className,
        underline ? 'link-underline-opacity-100' : 'link-underline-opacity-0',
      )}
      href={hash ? `#${hash}` : href ? (hash ? `${href}#${hash}` : href) : ''}
      id={noSetId ? undefined : hash}
    >
      {title}
    </a>
  );
}
