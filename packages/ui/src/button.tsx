// import Link from "next/link";
// import clsx from "clsx";

type ButtonProps =
  // | React.ComponentPropsWithoutRef<typeof Link>
  // |
  React.ComponentPropsWithoutRef<"button"> & { href?: undefined };

export function Button({ className, ...props }: ButtonProps): JSX.Element {
  className =
    "ui-inline-flex ui-justify-center ui-rounded-2xl ui-bg-blue-600 ui-p-4 ui-text-base ui-font-semibold ui-text-white ui-hover:bg-blue-500 ui-focus:outline-none ui-focus-visible:outline-2 ui-focus-visible:outline-offset-2 ui-focus-visible:outline-blue-500 ui-active:text-white/70";
  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <></>
    // <Link className={className} {...props} />
  );
}
