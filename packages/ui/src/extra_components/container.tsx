import clsx from "clsx";

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">): JSX.Element {
  return (
    <div
      className={clsx(
        "ui-mx-auto ui-max-w-7xl ui-px-4 ui-sm:px-6 ui-lg:px-8",
        className
      )}
      {...props}
    />
  );
}
