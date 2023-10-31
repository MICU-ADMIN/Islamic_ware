"use strict";
exports.id = 268;
exports.ids = [268];
exports.modules = {

/***/ 20268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page),
  metadata: () => (/* binding */ metadata),
  sections: () => (/* binding */ sections)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./mdx-components.tsx + 4 modules
var mdx_components = __webpack_require__(21732);
// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(50632);
// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(37126);
;// CONCATENATED MODULE: ./src/components/Guides.tsx



const guides = [
    {
        href: "/authentication",
        name: "Authentication",
        description: "Learn how to authenticate your API requests."
    },
    {
        href: "/pagination",
        name: "Pagination",
        description: "Understand how to work with paginated responses."
    },
    {
        href: "/errors",
        name: "Errors",
        description: "Read about the different types of errors returned by the API."
    },
    {
        href: "/webhooks",
        name: "Webhooks",
        description: "Learn how to programmatically configure webhooks for your app."
    }
];
function Guides() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-16 xl:max-w-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                level: 2,
                id: "guides",
                children: "Guides"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                children: guides.map((guide)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                children: guide.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                                children: guide.description
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                    href: guide.href,
                                    variant: "text",
                                    arrow: "right",
                                    children: "Read more"
                                })
                            })
                        ]
                    }, guide.href))
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(80027);
;// CONCATENATED MODULE: ./src/components/Resources.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/hossam/Documents/GitHub/Islamic_ware/src/components/Resources.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Resources"];

// EXTERNAL MODULE: ./src/components/HeroPattern.tsx + 1 modules
var HeroPattern = __webpack_require__(36980);
;// CONCATENATED MODULE: ./src/app/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 




const metadata = {
    title: "API Documentation",
    description: "Learn everything there is to know about the Protocol API and integrate Protocol into your product."
};
const sections = [
    {
        title: "Guides",
        id: "guides"
    },
    {
        title: "Resources",
        id: "resources"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        a: "a"
    }, (0,mdx_components/* useMDXComponents */.a)(), props.components), { Button } = _components;
    if (!Button) _missingMdxReference("Button", true);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx(HeroPattern/* HeroPattern */.f, {}),
            "\n",
            jsx_runtime_.jsx(_components.h1, {
                children: "API Documentation"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            (0,jsx_runtime_.jsxs)("div", {
                className: "not-prose mb-16 mt-6 flex gap-3",
                children: [
                    jsx_runtime_.jsx(Button, {
                        href: "/quickstart",
                        arrow: "right",
                        children: jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: "Quickstart"
                        })
                    }),
                    jsx_runtime_.jsx(Button, {
                        href: "/sdks",
                        variant: "outline",
                        children: jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: "Explore SDKs"
                        })
                    })
                ]
            }),
            "\n",
            jsx_runtime_.jsx(_components.h2, {
                id: "getting-started",
                children: "Getting started",
                ...{
                    anchor: false
                }
            }),
            "\n",
            (0,jsx_runtime_.jsxs)(_components.p, {
                children: [
                    "To get started, create a new application in your ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "#",
                        children: "developer settings"
                    }),
                    ", then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our ",
                    jsx_runtime_.jsx(_components.a, {
                        href: "#",
                        children: "integrations directory"
                    }),
                    " to reach the Protocol community."
                ],
                ...{
                    className: "lead"
                }
            }),
            "\n",
            jsx_runtime_.jsx("div", {
                className: "not-prose",
                children: jsx_runtime_.jsx(Button, {
                    href: "/sdks",
                    variant: "text",
                    arrow: "right",
                    children: jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: "Get your API key"
                    })
                })
            }),
            "\n",
            jsx_runtime_.jsx(Guides, {}),
            "\n",
            jsx_runtime_.jsx(e0, {})
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = Object.assign({}, (0,mdx_components/* useMDXComponents */.a)(), props.components);
    return MDXLayout ? jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const page = (MDXContent);
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


/***/ })

};
;