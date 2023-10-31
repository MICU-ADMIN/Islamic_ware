"use strict";
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 19237:
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
    title: "Errors",
    description: "In this guide, we will talk about what happens when something goes wrong while you work with the API."
};
const sections = [
    {
        title: "Status codes",
        id: "status-codes",
        ...undefined
    },
    {
        title: "Error types",
        id: "error-types",
        ...undefined
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        hr: "hr",
        h2: "h2",
        em: "em",
        pre: "pre",
        code: "code"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components), { Note, Properties, Property, Row, Col } = _components;
    if (!Col) _missingMdxReference("Col", true);
    if (!Note) _missingMdxReference("Note", true);
    if (!Properties) _missingMdxReference("Properties", true);
    if (!Property) _missingMdxReference("Property", true);
    if (!Row) _missingMdxReference("Row", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Errors"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this guide, we will talk about what happens when something goes wrong while you work with the API. Mistakes happen, and mostly they will be yours, not ours. Let's look at some status codes and error types you might encounter.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can tell if your request was successful by checking the status code when receiving an API response. If a response comes back unsuccessful, you can use the error type and error message to figure out what has gone wrong and do some rudimentary debugging (before contacting support)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Note, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: "Before reaching out to support with an error, please be aware that 99% of all\nreported errors are, in fact, user errors. Therefore, please carefully check\nyour code before contacting Protocol support."
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "status-codes",
                children: "Status codes"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Here is a list of the different categories of status codes returned by the Protocol API. Use these to understand if a request was successful."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "2xx",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "A 2xx status code indicates a successful response."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "4xx",
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                            children: [
                                "A 4xx status code indicates a client error — this means it's a ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                                    children: "you"
                                }),
                                "\nproblem."
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "5xx",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "A 5xx status code indicates a server error — you won't be seeing these."
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "error-types",
                children: "Error types"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Whenever a request is unsuccessful, the Protocol API will return an error response with an error type and message. You can use this information to understand better what has gone wrong and how to fix it. Most of the error messages are pretty helpful and actionable."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Here is a list of the two error types supported by the Protocol API — use these to understand what you have done wrong."
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "api_error",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "This means that we made an error, which is highly speculative and unlikely."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "invalid_request",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "This means that you made an error, which is much more likely."
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                            language: "bash",
                            code: '{\n  "type": "api_error",\n  "message": "No way this is happening!?",\n  "documentation_url": "https://protocol.chat/docs/errors/api_error"\n}\n',
                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                className: "language-bash",
                                children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&quot;type&quot;</span><span style="color: var(--shiki-color-text)">: </span><span style="color: var(--shiki-token-string-expression)">&quot;api_error&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&quot;message&quot;</span><span style="color: var(--shiki-color-text)">: </span><span style="color: var(--shiki-token-string-expression)">&quot;No way this is happening!?&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&quot;documentation_url&quot;</span><span style="color: var(--shiki-color-text)">: </span><span style="color: var(--shiki-token-string-expression)">&quot;https://protocol.chat/docs/errors/api_error&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                            }),
                            ...{
                                title: "Error response"
                            }
                        })
                    })
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