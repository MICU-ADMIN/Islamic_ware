// import Image from "next/image";

import { Button } from "../../ui/src/button";
import { GridPattern } from "./grid-pattern";
import { StarRating } from "./start-rating";
// import coverImage from "@/images/cover.png";

function Testimonial() {
  return (
    <figure className="ui-relative ui-mx-auto ui-max-w-md ui-text-center lg:ui-mx-0 lg:ui-text-left">
      <div className="ui-flex ui-justify-center ui-text-blue-600 lg:ui-justify-start">
        <StarRating />
      </div>
      <blockquote className="ui-mt-2">
        <p className="ui-font-display ui-text-xl ui-font-medium ui-text-slate-900">
          “This method of designing icons is genius. I wish I had known this
          method a lot sooner.”
        </p>
      </blockquote>
      <figcaption className="ui-mt-2 ui-text-sm ui-text-slate-500">
        <strong className="ui-font-semibold ui-text-blue-600 before:ui-content-['—_']">
          Stacey Solomon
        </strong>
        , Founder at Retail Park
      </figcaption>
    </figure>
  );
}

export function Hero() {
  return (
    <header className="ui-overflow-hidden ui-bg-slate-100 lg:ui-bg-transparent lg:ui-px-5">
      <div className="ui-mx-auto ui-grid ui-max-w-6xl ui-grid-cols-1 ui-grid-rows-[auto_1fr] ui-gap-y-16 ui-pt-16 md:ui-pt-20 lg:ui-grid-cols-12 lg:ui-gap-y-20 lg:ui-px-3 lg:ui-pb-36 lg:ui-pt-20 xl:ui-py-32">
        <div className="ui-relative ui-flex ui-items-end lg:ui-col-span-5 lg:ui-row-span-2">
          <div className="ui-absolute ui-bottom-12 ui-top-20 ui-left-0 ui-right-1/2 z-10 ui-rounded-br-6xl ui-bg-blue-600 ui-text-white/10 md:ui-bottom-8 lg:ui-inset-y-32 lg:ui-left-[-100vw] lg:ui-right-full lg:ui-mr-40">
            <GridPattern
              patternTransform="translate(112 64)"
              x="100%"
              y="100%"
            />
          </div>
          <div className="ui-relative ui-z-10 ui-mx-auto ui-flex ui-w-64 ui-rounded-xl ui-bg-slate-600 ui-shadow-xl md:ui-w-80 lg:ui-w-auto">
            <img
              alt="logo"
              className="ui-w-full"
              src="https://firebasestorage.googleapis.com/v0/b/islamicware-c2616.appspot.com/o/symbol_82%20Background%20Removed.svg?alt=media&token=f6abeb15-eeed-4f10-b5b1-26ea9aac3c21&_gl=1*yvl62e*_ga*MjcxNTk1NzA0LjE2OTg3MDYyMTM.*_ga_CW55HF8NVT*MTY5OTQ1MDQzNy43LjEuMTY5OTQ1MDQ1OS4zOC4wLjA."
              // priority
            />
          </div>
        </div>
        <div className="ui-relative ui-px-4 sm:ui-px-6 lg:ui-col-span-7 lg:ui-pb-14 lg:ui-pl-16 lg:ui-pr-0 xl:ui-pl-20">
          <div className="hidden lg:ui-absolute lg:ui-top-32 lg:ui-bottom-0 lg:ui-left-[-100vw] lg:ui-right-[-100vw] lg:ui-block lg:ui-bg-slate-100" />
          <Testimonial />
        </div>
        <div className="ui-bg-white ui-pt-16 lg:ui-col-span-7 lg:ui-bg-transparent lg:ui-pl-16 lg:pt-0 xl:pl-20">
          <div className="ui-mx-auto ui-px-4 sm:ui-px-6 md:ui-max-w-2xl md:ui-px-4 lg:ui-px-0">
            <h1 className="ui-font-display ui-text-5xl ui-font-extrabold ui-text-slate-900 sm:ui-text-6xl">
              Get lost in the world of icon design.
            </h1>
            <p className="ui-mt-4 ui-text-3xl ui-text-slate-600">
              A book and video course that teaches you how to design your own
              icons from scratch.
            </p>
            <div className="ui-mt-8 ui-flex ui-gap-4">
              <Button type="submit">
                <span className="ui-sr-only sm:ui-not-sr-only">
                  Sign up today
                </span>
                <span className="sm:ui-hidden">
                  {/* <ArrowRightIcon className="ui-h-6 ui-w-6" /> */}
                </span>
              </Button>

              <Button type="submit">
                <span className="ui-sr-only sm:ui-not-sr-only">
                  Sign up today
                </span>
                <span className="sm:ui-hidden">
                  {/* <ArrowRightIcon className="ui-h-6 ui-w-6" /> */}
                </span>
              </Button>

              {/* <Button href="#free-chapters">Get sample chapter</Button>
              <Button href="#pricing" variant="outline">
                Buy book
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
