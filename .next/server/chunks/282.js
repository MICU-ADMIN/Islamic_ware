"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 282:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/image.js
var next_image = __webpack_require__(81679);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Button.tsx
var Button = __webpack_require__(50632);
// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(37126);
;// CONCATENATED MODULE: ./src/images/logos/go.svg
/* harmony default export */ const go = ({"src":"/_next/static/media/go.135b57cb.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logos/node.svg
/* harmony default export */ const node = ({"src":"/_next/static/media/node.9b20f647.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logos/php.svg
/* harmony default export */ const php = ({"src":"/_next/static/media/php.2e2ae735.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logos/python.svg
/* harmony default export */ const python = ({"src":"/_next/static/media/python.ab26a920.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/logos/ruby.svg
/* harmony default export */ const ruby = ({"src":"/_next/static/media/ruby.4c6b71be.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/components/Libraries.tsx









const libraries = [
    {
        href: "#",
        name: "PHP",
        description: "A popular general-purpose scripting language that is especially suited to web development.",
        logo: php
    },
    {
        href: "#",
        name: "Ruby",
        description: "A dynamic, open source programming language with a focus on simplicity and productivity.",
        logo: ruby
    },
    {
        href: "#",
        name: "Node.js",
        description: "Node.js\xae is an open-source, cross-platform JavaScript runtime environment.",
        logo: node
    },
    {
        href: "#",
        name: "Python",
        description: "Python is a programming language that lets you work quickly and integrate systems more effectively.",
        logo: python
    },
    {
        href: "#",
        name: "Go",
        description: "An open-source programming language supported by Google with built-in concurrency.",
        logo: go
    }
];
function Libraries() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-16 xl:max-w-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                level: 2,
                id: "official-libraries",
                children: "Official libraries"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3",
                children: libraries.map((library)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row-reverse gap-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                        children: library.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                                        children: library.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                            href: library.href,
                                            variant: "text",
                                            arrow: "right",
                                            children: "Read more"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: library.logo,
                                alt: "",
                                className: "h-12 w-12",
                                unoptimized: true
                            })
                        ]
                    }, library.name))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/app/sdks/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 


const metadata = {
    title: "Protocol SDKs",
    description: "Protocol offers fine-tuned JavaScript, Ruby, PHP, Python, and Go libraries to make your life easier and give you the best experience when consuming the API."
};
const sections = [
    {
        title: "Official libraries",
        id: "official-libraries"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p"
    }, (0,mdx_components/* useMDXComponents */.a)(), props.components);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx(_components.h1, {
                children: "Protocol SDKs"
            }),
            "\n",
            jsx_runtime_.jsx(_components.p, {
                children: "The recommended way to interact with the Protocol API is by using one of our official SDKs. Today, Protocol offers fine-tuned JavaScript, Ruby, PHP, Python, and Go libraries to make your life easier and give you the best experience when consuming the API.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            jsx_runtime_.jsx(Libraries, {})
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


/***/ })

};
;