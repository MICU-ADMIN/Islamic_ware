"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 81553:
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
    title: "Attachments",
    description: "On this page, we’ll dive into the different attachment endpoints you can use to manage attachments programmatically."
};
const sections = [
    {
        title: "The attachment model",
        id: "the-attachment-model",
        ...undefined
    },
    {
        title: "List all attachments",
        id: "list-all-attachments",
        ...{
            tag: "GET",
            label: "/v1/attachments"
        }
    },
    {
        title: "Create an attachment",
        id: "create-an-attachment",
        ...{
            tag: "POST",
            label: "/v1/attachments"
        }
    },
    {
        title: "Retrieve an attachment",
        id: "retrieve-an-attachment",
        ...{
            tag: "GET",
            label: "/v1/attachments/:id"
        }
    },
    {
        title: "Update an attachment",
        id: "update-an-attachment",
        ...{
            tag: "PUT",
            label: "/v1/attachments/:id"
        }
    },
    {
        title: "Delete an attachment",
        id: "delete-an-attachment",
        ...{
            tag: "DELETE",
            label: "/v1/attachments/:id"
        }
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        h3: "h3",
        hr: "hr",
        pre: "pre",
        code: "code",
        a: "a"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components), { Properties, Property, Row, Col, CodeGroup } = _components;
    if (!CodeGroup) _missingMdxReference("CodeGroup", true);
    if (!Col) _missingMdxReference("Col", true);
    if (!Properties) _missingMdxReference("Properties", true);
    if (!Property) _missingMdxReference("Property", true);
    if (!Row) _missingMdxReference("Row", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Attachments"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Attachments are how you share things in Protocol — they allow you to send all sorts of files to your contacts and groups. On this page, we'll dive into the different attachment endpoints you can use to manage attachments programmatically. We'll look at how to query, upload, update, and delete attachments.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-attachment-model",
                children: "The attachment model"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The attachment model contains all the information about the files you send to your contacts and groups, including the name, type, and size."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Properties"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the attachment."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "message_id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the message associated with the attachment."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "filename",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The filename for the attachment."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "file_url",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The URL for the attached file."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "file_type",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The MIME type of the attached file."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "file_size",
                        type: "integer",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The file size of the attachment in bytes."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "created_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the attachment was created."
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "list-all-attachments",
                children: "List all attachments",
                ...{
                    tag: "GET",
                    label: "/v1/attachments"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to retrieve a paginated list of all your attachments (in a conversation if a conversation id is provided). By default, a maximum of ten attachments are shown per page."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "conversation_id",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Limit to attachments from a given conversation."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "limit",
                                        type: "integer",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Limit the number of attachments returned."
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "GET",
                                label: "/v1/attachments",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl -G https://api.protocol.chat/v1/attachments \\\n  -H "Authorization: Bearer {token}" \\\n  -d conversation_id="xgQQXg3hrtjh7AvZ" \\\n  -d limit=10\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/attachments \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d conversation_id=</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.attachments.list()\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">attachments</span><span style="color: var(--shiki-token-function)">.list</span><span style="color: var(--shiki-color-text)">()</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: "from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.attachments.list()\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->attachments->list();\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "has_more": false,\n  "data": [\n    {\n      "id": "Nc6yKKMpcxiiFxp6",\n      "message_id": "LoPsJaMcPBuFNjg1",\n      "filename": "Invoice_room_service__Plaza_Hotel.pdf",\n      "file_url": "https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf",\n      "file_type": "application/pdf",\n      "file_size": 21352,\n      "created_at": 692233200\n    },\n    {\n      "id": "hSIhXBhNe8X1d8Et"\n      // ...\n    }\n  ]\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LoPsJaMcPBuFNjg1&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;filename&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;file_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;file_type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;application/pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;file_size&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">21352</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                }),
                                ...{
                                    title: "Response"
                                }
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "create-an-attachment",
                children: "Create an attachment",
                ...{
                    tag: "POST",
                    label: "/v1/attachments"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to upload a new attachment to a conversation. See the code examples for how to send the file to the Protocol API."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Required attributes"
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Properties, {
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "file",
                                    type: "string",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "The file you want to add as an attachment."
                                    })
                                })
                            })
                        ]
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "POST",
                                label: "/v1/attachments",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/attachments \\\n  -H "Authorization: Bearer {token}" \\\n  -F file="../Invoice_room_service__Plaza_Hotel.pdf"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/attachments \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -F file=</span><span style="color: var(--shiki-token-string-expression)">&quot;../Invoice_room_service__Plaza_Hotel.pdf&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.attachments.create({ file })\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">attachments</span><span style="color: var(--shiki-token-function)">.create</span><span style="color: var(--shiki-color-text)">({ file })</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: "from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.attachments.create(file=file)\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(file</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-punctuation)">file)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->attachments->create([\n  'file' => $file,\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;file&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> $file</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "Nc6yKKMpcxiiFxp6",\n  "message_id": "LoPsJaMcPBuFNjg1",\n  "filename": "Invoice_room_service__Plaza_Hotel.pdf",\n  "file_url": "https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf",\n  "file_type": "application/pdf",\n  "file_size": 21352,\n  "created_at": 692233200\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LoPsJaMcPBuFNjg1&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;filename&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;application/pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_size&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">21352</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                }),
                                ...{
                                    title: "Response"
                                }
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "retrieve-an-attachment",
                children: "Retrieve an attachment",
                ...{
                    tag: "GET",
                    label: "/v1/attachments/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                            children: [
                                "This endpoint allows you to retrieve an attachment by providing the attachment id. Refer to ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                    href: "#the-attachment-model",
                                    children: "the list"
                                }),
                                " at the top of this page to see which properties are included with attachment objects."
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "GET",
                                label: "/v1/attachments/Nc6yKKMpcxiiFxp6",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/attachments/Nc6yKKMpcxiiFxp6 \\\n  -H "Authorization: Bearer {token}"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/attachments/Nc6yKKMpcxiiFxp6 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.attachments.get('Nc6yKKMpcxiiFxp6')\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">attachments</span><span style="color: var(--shiki-token-function)">.get</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Nc6yKKMpcxiiFxp6&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.attachments.get("Nc6yKKMpcxiiFxp6")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->attachments->get('Nc6yKKMpcxiiFxp6');\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Nc6yKKMpcxiiFxp6&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "Nc6yKKMpcxiiFxp6",\n  "message_id": "LoPsJaMcPBuFNjg1",\n  "filename": "Invoice_room_service__Plaza_Hotel.pdf",\n  "file_url": "https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf",\n  "file_type": "application/pdf",\n  "file_size": 21352,\n  "created_at": 692233200\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LoPsJaMcPBuFNjg1&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;filename&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;application/pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_size&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">21352</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                }),
                                ...{
                                    title: "Response"
                                }
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "update-an-attachment",
                children: "Update an attachment",
                ...{
                    tag: "PUT",
                    label: "/v1/attachments/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to perform an update on an attachment. Currently, the only supported type of update is changing the filename."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Properties, {
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "filename",
                                    type: "string",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "The new filename for the attachment."
                                    })
                                })
                            })
                        ]
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "PUT",
                                label: "/v1/attachments/Nc6yKKMpcxiiFxp6",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl -X PUT https://api.protocol.chat/v1/attachments/Nc6yKKMpcxiiFxp6 \\\n  -H "Authorization: Bearer {token}" \\\n  -d filename="Invoice_room_service__Plaza_Hotel_updated.pdf"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.protocol.chat/v1/attachments/Nc6yKKMpcxiiFxp6 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d filename=</span><span style="color: var(--shiki-token-string-expression)">&quot;Invoice_room_service__Plaza_Hotel_updated.pdf&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.attachments.update('Nc6yKKMpcxiiFxp6', {\n  filename: 'Invoice_room_service__Plaza_Hotel_updated.pdf',\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">attachments</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Nc6yKKMpcxiiFxp6&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  filename</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Invoice_room_service__Plaza_Hotel_updated.pdf&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.attachments.update("Nc6yKKMpcxiiFxp6", filename="Invoice_room_service__Plaza_Hotel_updated.pdf")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">, filename</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;Invoice_room_service__Plaza_Hotel_updated.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->attachments->update('Nc6yKKMpcxiiFxp6', [\n  'filename' => 'Invoice_room_service__Plaza_Hotel_updated.pdf',\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Nc6yKKMpcxiiFxp6&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;filename&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Invoice_room_service__Plaza_Hotel_updated.pdf&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "Nc6yKKMpcxiiFxp6",\n  "message_id": "LoPsJaMcPBuFNjg1",\n  "filename": "Invoice_room_service__Plaza_Hotel.pdf",\n  "file_url": "https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel_updated.pdf",\n  "file_type": "application/pdf",\n  "file_size": 21352,\n  "created_at": 692233200\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LoPsJaMcPBuFNjg1&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;filename&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Invoice_room_service__Plaza_Hotel.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/attachments/Invoice_room_service__Plaza_Hotel_updated.pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;application/pdf&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;file_size&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">21352</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                }),
                                ...{
                                    title: "Response"
                                }
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "delete-an-attachment",
                children: "Delete an attachment",
                ...{
                    tag: "DELETE",
                    label: "/v1/attachments/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "This endpoint allows you to delete attachments. Note: This will permanently delete the file."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        sticky: true,
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                            title: "Request",
                            tag: "DELETE",
                            label: "/v1/attachments/Nc6yKKMpcxiiFxp6",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "bash",
                                    code: 'curl -X DELETE https://api.protocol.chat/v1/attachments/Nc6yKKMpcxiiFxp6 \\\n  -H "Authorization: Bearer {token}"\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-bash",
                                        children: '<span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.protocol.chat/v1/attachments/Nc6yKKMpcxiiFxp6 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                    }),
                                    ...{
                                        title: "cURL"
                                    }
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "js",
                                    code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.attachments.delete('Nc6yKKMpcxiiFxp6')\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-js",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">attachments</span><span style="color: var(--shiki-token-function)">.delete</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Nc6yKKMpcxiiFxp6&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "python",
                                    code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.attachments.delete("Nc6yKKMpcxiiFxp6")\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-python",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;Nc6yKKMpcxiiFxp6&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "php",
                                    code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->attachments->delete('Nc6yKKMpcxiiFxp6');\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-php",
                                        children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">attachments</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;Nc6yKKMpcxiiFxp6&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                    })
                                })
                            ]
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