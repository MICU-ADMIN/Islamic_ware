"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 27797:
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
    title: "Quickstart",
    description: "This guide will get you all set up and ready to use the Protocol API. We’ll cover how to get started an API client and how to make your first API request."
};
const sections = [
    {
        title: "Choose your client",
        id: "choose-your-client",
        ...undefined
    },
    {
        title: "Making your first API request",
        id: "making-your-first-api-request",
        ...undefined
    },
    {
        title: "What's next?",
        id: "whats-next",
        ...undefined
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        a: "a",
        h2: "h2",
        pre: "pre",
        code: "code",
        ul: "ul",
        li: "li"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components), { Note, CodeGroup, Button } = _components;
    if (!Button) _missingMdxReference("Button", true);
    if (!CodeGroup) _missingMdxReference("CodeGroup", true);
    if (!Note) _missingMdxReference("Note", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Quickstart"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This guide will get you all set up and ready to use the Protocol API. We'll cover how to get started using one of our API clients and how to make your first API request. We'll also look at where to go next to find all the information you need to take full advantage of our powerful REST API.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Note, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                    children: [
                        "Before you can make requests to the Protocol API, you will need to grab your\nAPI key from your dashboard. You find it under ",
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "#",
                            children: "Settings \xbb API"
                        }),
                        "."
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "choose-your-client",
                children: "Choose your client"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before making your first API request, you need to pick which API client you will use. In addition to good ol' cURL HTTP requests, Protocol offers clients for JavaScript, Python, and PHP. In the following example, you can see how to install each client."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: "# cURL is most likely already installed on your machine\ncurl --version\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-token-comment)"># cURL is most likely already installed on your machine</span></span>\n<span><span style="color: var(--shiki-color-text)">curl --version</span></span>\n<span></span>'
                        }),
                        ...{
                            title: "cURL"
                        }
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: "# Install the Protocol JavaScript SDK\nnpm install @example/protocol-api --save\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-token-comment)"># Install the Protocol JavaScript SDK</span></span>\n<span><span style="color: var(--shiki-color-text)">npm install @example/protocol-api --save</span></span>\n<span></span>'
                        }),
                        ...{
                            language: "js"
                        }
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: "# Install the Protocol Python SDK\npip install protocol_api\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-token-comment)"># Install the Protocol Python SDK</span></span>\n<span><span style="color: var(--shiki-color-text)">pip install protocol_api</span></span>\n<span></span>'
                        }),
                        ...{
                            language: "python"
                        }
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: "# Install the Protocol PHP SDK\ncomposer require protocol/sdk\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-token-comment)"># Install the Protocol PHP SDK</span></span>\n<span><span style="color: var(--shiki-color-text)">composer require protocol/sdk</span></span>\n<span></span>'
                        }),
                        ...{
                            language: "php"
                        }
                    })
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
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "making-your-first-api-request",
                children: "Making your first API request"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "After picking your preferred client, you are ready to make your first call to the Protocol API. Below, you can see how to send a GET request to the Conversations endpoint to get a list of all your conversations. In the cURL example, results are limited to ten conversations, the default page length for each client."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                tag: "GET",
                label: "/v1/conversations",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: 'curl -G https://api.protocol.chat/v1/conversations \\\n  -H "Authorization: Bearer {token}" \\\n  -d limit=10\n',
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/conversations \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>\n<span></span>'
                        }),
                        ...{
                            title: "cURL"
                        }
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "js",
                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.conversations.list()\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-js",
                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">conversations</span><span style="color: var(--shiki-token-function)">.list</span><span style="color: var(--shiki-color-text)">()</span></span>\n<span></span>'
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "python",
                        code: "from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.conversations.list()\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-python",
                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span></span>\n<span></span>'
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "php",
                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->conversations->list();\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-php",
                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    href: "/conversations",
                    variant: "text",
                    arrow: "right",
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "Read the docs for the Conversations endpoint"
                    })
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "whats-next",
                children: "What's next?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Great, you're now set up with an API client and have made your first request to the API. Here are a few links that might be handy as you venture further into the Protocol API:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "#",
                            children: "Grab your API key from the Protocol dashboard"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "/conversations",
                            children: "Check out the Conversations endpoint"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "/errors",
                            children: "Learn about the different error messages in Protocol"
                        })
                    }),
                    "\n"
                ]
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