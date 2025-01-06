interface PreviewItemProps {
  isLinked?: boolean | false;
  href?: string;
  title: string;
  description: string;
}

export function PreviewItem({
  href,
  isLinked,
  title,
  description,
}: PreviewItemProps) {
  const renderTitle = () => {
    if (!isLinked) {
      return <span>{title}</span>;
    }

    return (
      <span>
        <a
          href={href}
          className="dotted-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>{" "}
        <span className="font-neue-bit text-2xl text-light-text/50 dark:text-dark-text/50">
          ↗
        </span>
      </span>
    );
  };

  return (
    <div>
      {renderTitle()}
      <p className="text-light-text/50 dark:text-dark-text/50">{description}</p>
    </div>
  );
}
