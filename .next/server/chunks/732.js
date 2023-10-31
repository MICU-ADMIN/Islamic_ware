"use strict";
exports.id = 732;
exports.ids = [732];
exports.modules = {

/***/ 21732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ useMDXComponents)
});

// NAMESPACE OBJECT: ./src/components/mdx.tsx
var mdx_namespaceObject = {};
__webpack_require__.r(mdx_namespaceObject);
__webpack_require__.d(mdx_namespaceObject, {
  Button: () => (Button/* Button */.z),
  CodeGroup: () => (Code_e0),
  Col: () => (Col),
  Note: () => (Note),
  Properties: () => (Properties),
  Property: () => (Property),
  Row: () => (Row),
  a: () => (a),
  code: () => (e1),
  h2: () => (h2),
  pre: () => (e2),
  wrapper: () => (wrapper)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(67780);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(44574);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(80027);
;// CONCATENATED MODULE: ./src/components/Feedback.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/hossam/Documents/GitHub/Islamic_ware/src/components/Feedback.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Feedback"];

// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(37126);
;// CONCATENATED MODULE: ./src/components/Prose.tsx


function Prose({ as, className, ...props }) {
    let Component = as ?? "div";
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: clsx_default()(className, "prose dark:prose-invert", // `html :where(& > *)` is used to select all direct children without an increase in specificity like you'd get from just `& > *`
        "[html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl"),
        ...props
    });
}

// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(50632);
;// CONCATENATED MODULE: ./src/components/Code.tsx

const Code_proxy = (0,module_proxy.createProxy)(String.raw`/Users/hossam/Documents/GitHub/Islamic_ware/src/components/Code.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Code_esModule, $$typeof: Code_$$typeof } = Code_proxy;
const Code_default_ = Code_proxy.default;

const Code_e0 = Code_proxy["CodeGroup"];

const e1 = Code_proxy["Code"];

const e2 = Code_proxy["Pre"];

;// CONCATENATED MODULE: ./src/components/mdx.tsx






const a = (link_default());


function wrapper({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "flex h-full flex-col pb-10 pt-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Prose, {
                className: "flex-auto",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl",
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
            })
        ]
    });
}
const h2 = function H2(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
        level: 2,
        ...props
    });
};
function InfoIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "8",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M6.75 7.75h1.5v3.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "8",
                cy: "4",
                r: ".5",
                fill: "none"
            })
        ]
    });
}
function Note({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(InfoIcon, {
                className: "mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
                children: children
            })
        ]
    });
}
function Row({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",
        children: children
    });
}
function Col({ children, sticky = false }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: clsx_default()("[&>:first-child]:mt-0 [&>:last-child]:mb-0", sticky && "xl:sticky xl:top-24"),
        children: children
    });
}
function Properties({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "my-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            role: "list",
            className: "m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5",
            children: children
        })
    });
}
function Property({ name, children, type }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "m-0 px-0 py-4 first:pt-0 last:pb-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
            className: "m-0 flex flex-wrap items-center gap-x-3 gap-y-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                    className: "sr-only",
                    children: "Name"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                        children: name
                    })
                }),
                type && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                            className: "sr-only",
                            children: "Type"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                            className: "font-mono text-xs text-zinc-400 dark:text-zinc-500",
                            children: type
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                    className: "sr-only",
                    children: "Description"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                    className: "w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0",
                    children: children
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./mdx-components.tsx

function useMDXComponents(components) {
    return {
        ...components,
        ...mdx_namespaceObject
    };
}


/***/ }),

/***/ 37126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80027);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/hossam/Documents/GitHub/Islamic_ware/src/components/Heading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Heading"];


/***/ })

};
;