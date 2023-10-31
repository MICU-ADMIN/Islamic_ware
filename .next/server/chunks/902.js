"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 87902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   sections: () => (/* binding */ sections)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21732);
/*@jsxRuntime automatic @jsxImportSource react*/ 

const metadata = {
    title: "Authentication",
    description: "In this guide, we’ll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token."
};
const sections = [
    {
        title: "Basic authentication",
        id: "basic-authentication",
        ...undefined
    },
    {
        title: "OAuth2 with bearer token",
        id: "o-auth2-with-bearer-token",
        ...undefined
    },
    {
        title: "Using an SDK",
        id: "using-an-sdk",
        ...undefined
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        pre: "pre",
        code: "code",
        a: "a"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components), { Button } = _components;
    if (!Button) _missingMdxReference("Button", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Authentication"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You'll need to authenticate your requests to access any of the endpoints in the Protocol API. In this guide, we'll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token — OAuth2 is the recommended way.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "basic-authentication",
                children: "Basic authentication"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "With basic authentication, you use your username and password to authenticate your HTTP requests. Unless you have a very good reason, you probably shouldn't use basic auth. Here's how to authenticate using cURL:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "curl https://api.protocol.chat/v1/conversations \\\n  -u username:password\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/conversations \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -u username:password</span></span>\n<span></span>'
                }),
                ...{
                    title: "Example request with basic auth"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Please don't commit your Protocol password to GitHub!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "o-auth2-with-bearer-token",
                children: "OAuth2 with bearer token"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#",
                        children: "Protocol dashboard"
                    }),
                    " under API settings. Here's how to add the token to the request header using cURL:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: 'curl https://api.protocol.chat/v1/conversations \\\n  -H "Authorization: Bearer {token}"\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/conversations \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                }),
                ...{
                    title: "Example request with bearer token"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Always keep your token safe and reset it if you suspect it has been compromised."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "using-an-sdk",
                children: "Using an SDK"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you use one of our official SDKs, you won't have to worry about any of the above — fetch your access token from the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#",
                        children: "Protocol dashboard"
                    }),
                    " under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    href: "/sdks",
                    variant: "text",
                    arrow: "right",
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Check out our list of first-party SDKs"
                    })
                })
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = Object.assign({}, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


/***/ })

};
;