import { Button } from "./button";
import { Container } from "./extra_components/container";

function ArrowRightIcon(
  props: React.ComponentPropsWithoutRef<"svg">
): JSX.Element {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailRegister(): JSX.Element {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div
          style={{ borderRadius: 50 }}
          className="relative ui-mx-4 overflow-hidden ui-bg-indigo-50 ui-px-4 ui-py-20 sm:ui-mx-6 sm:ui-px-6 md:ui-mx-0 md:ui-rounded-5xl md:ui-px-16 xl:ui-px-24 xl:ui-py-36"
        >
          {/* <img
            className="ui-absolute ui-left-1/2 ui-top-0 ui-translate-x-[-10%] ui-translate-y-[-45%] lg:ui-translate-x-[-32%]"
            src={background}
            alt=""
            width={919}
            height={1351}
            // unoptimized
          /> */}
          <div className="relative ui-mx-auto ui-grid ui-max-w-2xl ui-grid-cols-1 ui-gap-x-32 ui-gap-y-14 xl:ui-max-w-none xl:ui-grid-cols-2">
            <div>
              <p className="ui-font-semibold ui-bold ui-text-4xl ui-font-medium ui-tracking-tighter ui-text-blue-900 sm:ui-text-5xl">
                Stay up to date
              </p>
              <p className="ui-mt-4 ui-text-lg ui-tracking-tight ui-text-blue-900">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="ui-text-lg ui-font-semibold ui-tracking-tight ui-text-blue-900">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="ui-mt-5 ui-flex ui-rounded-3xl ui-bg-white ui-py-2.5 ui-pr-2.5 ui-shadow-xl ui-shadow-blue-900/5 ui-focus-within:ring-2 ui-focus-within:ring-blue-900">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="ui-my-2.5 ui-flex-auto ui-bg-transparent ui-pl-6 ui-pr-2.5 ui-text-base ui-text-slate-900 ui-placeholder-text-slate-400 ui-focus:ui-outline-none"
                />
                <Button type="submit">
                  <span className="ui-sr-only sm:ui-not-sr-only">
                    Sign up today
                  </span>
                  <span className="sm:ui-hidden">
                    <ArrowRightIcon className="ui-h-6 ui-w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
