import clsx from 'clsx';

export default function ExampleLink({
  className,
  hash,
  href,
  noSetId,
  title,
  underline,
}: {
  className?: string;
  hash?: string;
  href?: string;
  noSetId?: boolean;
  title: string;
  underline?: boolean;
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
