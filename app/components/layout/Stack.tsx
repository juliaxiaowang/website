/**
 * Props for the StackLayout component.
 * @interface StackLayoutProps
 */
interface StackLayoutProps {
  /** The content to be rendered within the layout. */
  children: React.ReactNode;
  /** Additional CSS classes to be applied to the layout container. */
  className?: string;
}

/**
 * StackLayout component creates a 7-column grid layout with a 16px gutter.
 *
 * @param {StackLayoutProps} props - The props for the StackLayout component.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @param {string} [props.className=""] - Additional CSS classes to be applied to the layout container.
 *
 * @returns {JSX.Element} A div element with a 7-column grid layout.
 *
 * @example
 * <StackLayout>
 *   <div>Stack 1 content</div>
 *   <div>Stack 2 content</div>
 *   { ... up to 7 columns }
 * </StackLayout>
 */
export function StackLayout({ children, className = "" }: StackLayoutProps) {
  return (
    <div className={`grid grid-cols-2 gap-8 ${className}`}>{children}</div>
  );
}
