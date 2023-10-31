"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 34923:
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
    title: "Messages",
    description: "On this page, we’ll dive into the different message endpoints you can use to manage messages programmatically."
};
const sections = [
    {
        title: "The message model",
        id: "the-message-model",
        ...undefined
    },
    {
        title: "List all messages",
        id: "list-all-messages",
        ...{
            tag: "GET",
            label: "/v1/messages"
        }
    },
    {
        title: "Send a message",
        id: "send-a-message",
        ...{
            tag: "POST",
            label: "/v1/messages"
        }
    },
    {
        title: "Retrieve a message",
        id: "retrieve-a-message",
        ...{
            tag: "GET",
            label: "/v1/messages/:id"
        }
    },
    {
        title: "Update a message",
        id: "update-a-message",
        ...{
            tag: "PUT",
            label: "/v1/messages/:id"
        }
    },
    {
        title: "Delete a message",
        id: "delete-a-message",
        ...{
            tag: "DELETE",
            label: "/v1/messages/:id"
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
                children: "Messages"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Messages are what conversations are made of in Protocol — they are the basic building blocks of your conversations with your Protocol contacts. On this page, we'll dive into the different message endpoints you can use to manage messages programmatically. We'll look at how to query, send, update, and delete messages.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-message-model",
                children: "The message model"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The message model contains all the information about the messages and attachments you send to your contacts and groups, including how your contacts have reacted to them."
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
                            children: "Unique identifier for the message."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "conversation_id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the conversation the message belongs to."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "contact",
                        type: "object",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The contact object for the contact who sent the message."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "message",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The message content."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "reactions",
                        type: "array",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "An array of reaction objects associated with the message."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "attachments",
                        type: "array",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "An array of attachment objects associated with the message."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "read_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the message was read."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "created_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the message was created."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "updated_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the message was last updated."
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "list-all-messages",
                children: "List all messages",
                ...{
                    tag: "GET",
                    label: "/v1/messages"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to retrieve a paginated list of all your messages (in a conversation if a conversation id is provided). By default, a maximum of ten messages are shown per page."
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
                                            children: "Limit to messages from a given conversation."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "limit",
                                        type: "integer",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Limit the number of messages returned."
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
                                label: "/v1/messages",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl -G https://api.protocol.chat/v1/messages \\\n  -H "Authorization: Bearer {token}" \\\n  -d conversation_id=xgQQXg3hrtjh7AvZ \\\n  -d limit=10\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/messages \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d conversation_id=xgQQXg3hrtjh7AvZ \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.list()\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.list</span><span style="color: var(--shiki-color-text)">()</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: "from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.list()\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->list();\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "has_more": false,\n  "data": [\n    {\n      "id": "SIuAFUNKdSYHZF2w",\n      "conversation_id": "xgQQXg3hrtjh7AvZ",\n      "contact": {\n        "id": "WAz8eIbvDR60rouK",\n        "username": "KevinMcCallister",\n        "phone_number": "1-800-759-3000",\n        "avatar_url": "https://assets.protocol.chat/avatars/buzzboy.jpg",\n        "last_active_at": 705103200,\n        "created_at": 692233200\n      },\n      "message": "It’s a nice night for a neck injury.",\n      "reactions": [],\n      "attachments": [],\n      "read_at": 705103200,\n      "created_at": 692233200,\n      "updated_at": 692233200\n    },\n    {\n      "id": "hSIhXBhNe8X1d8Et",\n      // ..\n    }\n  ]\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/buzzboy.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;It’s a nice night for a neck injury.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ..</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "send-a-message",
                children: "Send a message",
                ...{
                    tag: "POST",
                    label: "/v1/messages"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to send a new message to one of your conversations."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Required attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "conversation_id",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Unique identifier for the conversation the message belongs to."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "message",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The message content."
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Properties, {
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "attachments",
                                    type: "array",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An array of attachment objects associated with the message."
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
                                label: "/v1/messages",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/messages \\\n  -H "Authorization: Bearer {token}" \\\n  -d conversation_id="xgQQXg3hrtjh7AvZ" \\\n  -d message="You’re what the French call ‘les incompetents.’"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/messages \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d conversation_id=</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d message=</span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.send({\n  conversation_id: 'xgQQXg3hrtjh7AvZ',\n  message: 'You’re what the French call ‘les incompetents.’',\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.send</span><span style="color: var(--shiki-color-text)">({</span></span>\n<span><span style="color: var(--shiki-color-text)">  conversation_id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  message</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;You’re what the French call ‘les incompetents.’&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.send(\n  conversation_id="xgQQXg3hrtjh7AvZ",\n  message="You’re what the French call ‘les incompetents.’",\n)\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">send</span><span style="color: var(--shiki-token-punctuation)">(</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">  conversation_id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">  message</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->send([\n  'conversation_id' => 'xgQQXg3hrtjh7AvZ',\n  'message' => 'You’re what the French call ‘les incompetents.’',\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">send</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;conversation_id&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;message&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;You’re what the French call ‘les incompetents.’&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "gWqY86BMFRiH5o11",\n  "conversation_id": "xgQQXg3hrtjh7AvZ",\n  "contact": {\n    "id": "inEIRvzjC6YLMX3o",\n    "username": "LinnieMcCallister",\n    "phone_number": "1-800-759-3000",\n    "avatar_url": "https://assets.protocol.chat/avatars/linnie.jpg",\n    "last_active_at": 705103200,\n    "created_at": 692233200\n  },\n  "message": "You’re what the French call ‘les incompetents.’",\n  "reactions": [],\n  "attachments": [],\n  "read_at": null,\n  "created_at": 692233200,\n  "updated_at": null\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;gWqY86BMFRiH5o11&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;inEIRvzjC6YLMX3o&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;LinnieMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/linnie.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;You’re what the French call ‘les incompetents.’&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "retrieve-a-message",
                children: "Retrieve a message",
                ...{
                    tag: "GET",
                    label: "/v1/messages/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                            children: [
                                "This endpoint allows you to retrieve a message by providing the message id. Refer to ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                    href: "#the-message-model",
                                    children: "the list"
                                }),
                                " at the top of this page to see which properties are included with message objects."
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "GET",
                                label: "/v1/messages/SIuAFUNKdSYHZF2w",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\\n  -H "Authorization: Bearer {token}"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.get('SIuAFUNKdSYHZF2w')\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.get</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.get("SIuAFUNKdSYHZF2w")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->get('SIuAFUNKdSYHZF2w');\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "SIuAFUNKdSYHZF2w",\n  "conversation_id": "xgQQXg3hrtjh7AvZ",\n  "contact": {\n    "id": "WAz8eIbvDR60rouK",\n    "username": "KevinMcCallister",\n    "phone_number": "1-800-759-3000",\n    "avatar_url": "https://assets.protocol.chat/avatars/kevin.jpg",\n    "last_active_at": 705103200,\n    "created_at": 692233200\n  },\n  "message": "I’m traveling with my dad. He’s at a meeting. I hate meetings.",\n  "reactions": [],\n  "attachments": [],\n  "read_at": 705103200,\n  "created_at": 692233200,\n  "updated_at": 692233200\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/kevin.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I’m traveling with my dad. He’s at a meeting. I hate meetings.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "update-a-message",
                children: "Update a message",
                ...{
                    tag: "PUT",
                    label: "/v1/messages/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to perform an update on a message. Examples of updates are adding a reaction, editing the message, or adding an attachment."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "message",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The message content."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "reactions",
                                        type: "array",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "An array of reaction objects associated with the message."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "attachments",
                                        type: "array",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "An array of attachment objects associated with the message."
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
                                tag: "PUT",
                                label: "/v1/messages/SIuAFUNKdSYHZF2w",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl -X PUT https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\\n  -H "Authorization: Bearer {token}" \\\n  -d reactions[red_angry_face][]="KateMcCallister"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d reactions[red_angry_face][]=</span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.update('SIuAFUNKdSYHZF2w', {\n    reactions: {\n        red_angry_face: ['KateMcCallister']\n    }\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    reactions</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        red_angry_face</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;KateMcCallister&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.update("SIuAFUNKdSYHZF2w",\n    reactions={"red_angry_face": ["KateMcCallister"]})\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">    reactions</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-punctuation)">{</span><span style="color: var(--shiki-token-string-expression)">&quot;red_angry_face&quot;</span><span style="color: var(--shiki-token-punctuation)">: [</span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">]})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->update('SIuAFUNKdSYHZF2w', [\n  'reactions' => [\n    'red_angry_face' => ['KateMcCallister'],\n  ],\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;reactions&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&#39;red_angry_face&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> [</span><span style="color: var(--shiki-token-string-expression)">&#39;KateMcCallister&#39;</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "SIuAFUNKdSYHZF2w",\n  "conversation_id": "xgQQXg3hrtjh7AvZ",\n  "contact": {\n    "id": "WAz8eIbvDR60rouK",\n    "username": "KevinMcCallister",\n    "phone_number": "1-800-759-3000",\n    "avatar_url": "https://assets.protocol.chat/avatars/buzzboy.jpg",\n    "last_active_at": 705103200,\n    "created_at": 692233200\n  },\n  "message": "I\'m not apologizing. I\'d rather kiss a toilet seat.",\n  "reactions": [\n    {\n      "red_angry_face": [\n        "KateMcCallister"\n      ]\n    }\n  ],\n  "attachments": [],\n  "read_at": 705103200,\n  "created_at": 692233200,\n  "updated_at": 692233200\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/buzzboy.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I&#39;m not apologizing. I&#39;d rather kiss a toilet seat.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;red_angry_face&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-string-expression)">&quot;KateMcCallister&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      ]</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "delete-a-message",
                children: "Delete a message",
                ...{
                    tag: "DELETE",
                    label: "/v1/messages/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "This endpoint allows you to delete messages from your conversations. Note: This will permanently delete the message."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        sticky: true,
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                            title: "Request",
                            tag: "DELETE",
                            label: "/v1/messages/SIuAFUNKdSYHZF2w",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "bash",
                                    code: 'curl -X DELETE https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\\n  -H "Authorization: Bearer {token}"\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-bash",
                                        children: '<span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.protocol.chat/v1/messages/SIuAFUNKdSYHZF2w \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                    }),
                                    ...{
                                        title: "cURL"
                                    }
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "js",
                                    code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.messages.delete('SIuAFUNKdSYHZF2w')\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-js",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">messages</span><span style="color: var(--shiki-token-function)">.delete</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "python",
                                    code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.messages.delete("SIuAFUNKdSYHZF2w")\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-python",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "php",
                                    code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->messages->delete('SIuAFUNKdSYHZF2w');\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-php",
                                        children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">messages</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;SIuAFUNKdSYHZF2w&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
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