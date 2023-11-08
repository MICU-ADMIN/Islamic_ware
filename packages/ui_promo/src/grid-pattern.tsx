import { useId } from "react";

export function GridPattern(
  props: Omit<React.ComponentPropsWithoutRef<"pattern">, "id">
) {
  const patternId = useId();

  return (
    <svg
      aria-hidden="true"
      className="ui-absolute ui-inset-0 ui-h-full ui-w-full"
    >
      <defs>
        <pattern
          height="128"
          id={patternId}
          patternUnits="userSpaceOnUse"
          width="128"
          {...props}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect fill={`url(#${patternId})`} height="100%" width="100%" />
    </svg>
  );
}
