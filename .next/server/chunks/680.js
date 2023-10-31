"use strict";
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 24680:
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
    title: "Conversations",
    description: "On this page, we’ll dive into the different conversation endpoints you can use to manage conversations programmatically."
};
const sections = [
    {
        title: "The conversation model",
        id: "the-conversation-model",
        ...undefined
    },
    {
        title: "List all conversations",
        id: "list-all-conversations",
        ...{
            tag: "GET",
            label: "/v1/conversations"
        }
    },
    {
        title: "Create a conversation",
        id: "create-a-conversation",
        ...{
            tag: "POST",
            label: "/v1/conversations"
        }
    },
    {
        title: "Retrieve a conversation",
        id: "retrieve-a-conversation",
        ...{
            tag: "GET",
            label: "/v1/conversations/:id"
        }
    },
    {
        title: "Update a conversation",
        id: "update-a-conversation",
        ...{
            tag: "PUT",
            label: "/v1/conversations/:id"
        }
    },
    {
        title: "Delete a conversation",
        id: "delete-a-conversation",
        ...{
            tag: "DELETE",
            label: "/v1/conversations/:id"
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
        code: "code",
        pre: "pre",
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
                children: "Conversations"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Conversations are an essential part of Protocol — they are the containers for the messages between you, your contacts, and groups. On this page, we’ll dive into the different conversation endpoints you can use to manage conversations programmatically. We'll look at how to query, create, update, and delete conversations.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-conversation-model",
                children: "The conversation model"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The conversation model contains all the information about the conversations between you and your contacts. In addition, conversations can also be group-based with more than one contact, they can have a pinned message, and they can be muted."
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
                            children: "Unique identifier for the conversation."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "contact_id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the other contact in the conversation."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "group_id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the group that the conversation belongs to."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "pinned_message_id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the pinned message."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "is_pinned",
                        type: "boolean",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Whether or not the conversation has been pinned."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "is_muted",
                        type: "boolean",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Whether or not the conversation has been muted."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "last_active_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the conversation was last active."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "last_opened_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the conversation was last opened by the authenticated\nuser."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "created_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the conversation was created."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "archived_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the conversation was archived."
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "list-all-conversations",
                children: "List all conversations",
                ...{
                    tag: "GET",
                    label: "/v1/conversations"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to retrieve a paginated list of all your conversations. By default, a maximum of ten conversations are shown per page."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "limit",
                                        type: "integer",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Limit the number of conversations returned."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "muted",
                                        type: "boolean",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                "Only show conversations that are muted when set to ",
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "true"
                                                }),
                                                "."
                                            ]
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "archived",
                                        type: "boolean",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                "Only show conversations that are archived when set to ",
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "true"
                                                }),
                                                "."
                                            ]
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "pinned",
                                        type: "boolean",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                "Only show conversations that are pinned when set to ",
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "true"
                                                }),
                                                "."
                                            ]
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "group_id",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Only show conversations for the specified group."
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
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "has_more": false,\n  "data": [\n    {\n      "id": "xgQQXg3hrtjh7AvZ",\n      "contact_id": "WAz8eIbvDR60rouK",\n      "group_id": null,\n      "pinned_message_id": null,\n      "is_pinned": false,\n      "is_muted": false,\n      "last_active_at": 705103200,\n      "last_opened_at": 705103200,\n      "created_at": 692233200,\n      "archived_at": null\n    },\n    {\n      "id": "hSIhXBhNe8X1d8Et"\n      // ...\n    }\n  ]\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;contact_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;group_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;pinned_message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;is_pinned&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;is_muted&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;last_opened_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "create-a-conversation",
                children: "Create a conversation",
                ...{
                    tag: "POST",
                    label: "/v1/conversations"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to add a new conversation between you and a contact or group. A contact or group id is required to create a conversation."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Required attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "contact_id",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Unique identifier for the other contact in the conversation."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "group_id",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Unique identifier for the group that the conversation belongs to."
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
                                tag: "POST",
                                label: "/v1/conversations",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/conversations \\\n  -H "Authorization: Bearer {token}" \\\n  -d \'contact_id\'="WAz8eIbvDR60rouK"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/conversations \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d </span><span style="color: var(--shiki-token-string-expression)">&#39;contact_id&#39;</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.conversations.create({\n  contact_id: 'WAz8eIbvDR60rouK',\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">conversations</span><span style="color: var(--shiki-token-function)">.create</span><span style="color: var(--shiki-color-text)">({</span></span>\n<span><span style="color: var(--shiki-color-text)">  contact_id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;WAz8eIbvDR60rouK&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.conversations.create(contact_id="WAz8eIbvDR60rouK")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(contact_id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->conversations->create([\n  'contact_id' => 'WAz8eIbvDR60rouK',\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;contact_id&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;WAz8eIbvDR60rouK&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "xgQQXg3hrtjh7AvZ",\n  "contact_id": "WAz8eIbvDR60rouK",\n  "group_id": null,\n  "pinned_message_id": null,\n  "is_pinned": false,\n  "is_muted": false,\n  "last_active_at": null,\n  "last_opened_at": null,\n  "created_at": 692233200,\n  "archived_at": null\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;group_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;pinned_message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;is_pinned&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;is_muted&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;last_opened_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "retrieve-a-conversation",
                children: "Retrieve a conversation",
                ...{
                    tag: "GET",
                    label: "/v1/conversations/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                            children: [
                                "This endpoint allows you to retrieve a conversation by providing the conversation id. Refer to ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                    href: "#the-conversation-model",
                                    children: "the list"
                                }),
                                " at the top of this page to see which properties are included with conversation objects."
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "GET",
                                label: "/v1/conversations/xgQQXg3hrtjh7AvZ",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/conversations/xgQQXg3hrtjh7AvZ \\\n  -H "Authorization: Bearer {token}"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/conversations/xgQQXg3hrtjh7AvZ \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.conversations.get('xgQQXg3hrtjh7AvZ')\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">conversations</span><span style="color: var(--shiki-token-function)">.get</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.conversations.get("xgQQXg3hrtjh7AvZ")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->conversations->get('xgQQXg3hrtjh7AvZ');\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "xgQQXg3hrtjh7AvZ",\n  "contact_id": "WAz8eIbvDR60rouK",\n  "group_id": null,\n  "pinned_message_id": null,\n  "is_pinned": false,\n  "is_muted": false,\n  "last_active_at": 705103200,\n  "last_opened_at": 705103200,\n  "created_at": 692233200,\n  "archived_at": null\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;group_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;pinned_message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;is_pinned&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;is_muted&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;last_opened_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "update-a-conversation",
                children: "Update a conversation",
                ...{
                    tag: "PUT",
                    label: "/v1/conversations/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to perform an update on a conversation. Examples of updates are pinning a message, muting or archiving the conversation, or pinning the conversation itself."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "pinned_message_id",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Unique identifier for the pinned message."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "is_pinned",
                                        type: "boolean",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Whether or not the conversation has been pinned."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "is_muted",
                                        type: "boolean",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Whether or not the conversation has been muted."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "archived_at",
                                        type: "timestamp",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Timestamp of when the conversation was archived."
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
                                label: "/v1/conversations/xgQQXg3hrtjh7AvZ",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: "curl -X PUT https://api.protocol.chat/v1/conversations/xgQQXg3hrtjh7AvZ \\\n  -H \"Authorization: Bearer {token}\" \\\n  -d 'is_muted'=true\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.protocol.chat/v1/conversations/xgQQXg3hrtjh7AvZ \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d </span><span style="color: var(--shiki-token-string-expression)">&#39;is_muted&#39;</span><span style="color: var(--shiki-color-text)">=true</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.conversations.update('xgQQXg3hrtjh7AvZ', {\n    is_muted: true,\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">conversations</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    is_muted</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.conversations.update("xgQQXg3hrtjh7AvZ", is_muted=True)\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">, is_muted</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">True</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->conversations->update('xgQQXg3hrtjh7AvZ', [\n  'is_muted' => true,\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;is_muted&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "xgQQXg3hrtjh7AvZ",\n  "contact_id": "WAz8eIbvDR60rouK",\n  "group_id": null,\n  "pinned_message_id": null,\n  "is_pinned": false,\n  "is_muted": true,\n  "last_active_at": 705103200,\n  "last_opened_at": 705103200,\n  "created_at": 692233200,\n  "archived_at": null\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contact_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;group_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;pinned_message_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;is_pinned&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;is_muted&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;last_opened_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "delete-a-conversation",
                children: "Delete a conversation",
                ...{
                    tag: "DELETE",
                    label: "/v1/conversations/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "This endpoint allows you to delete your conversations in Protocol. Note: This will permanently delete the conversation and all its messages — archive it instead if you want to be able to restore it later."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        sticky: true,
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                            title: "Request",
                            tag: "DELETE",
                            label: "/v1/conversations/xgQQXg3hrtjh7AvZ",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "bash",
                                    code: 'curl -X DELETE https://api.protocol.chat/v1/conversations/xgQQXg3hrtjh7AvZ \\\n  -H "Authorization: Bearer {token}"\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-bash",
                                        children: '<span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.protocol.chat/v1/conversations/xgQQXg3hrtjh7AvZ \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                    }),
                                    ...{
                                        title: "cURL"
                                    }
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "js",
                                    code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.conversations.delete('xgQQXg3hrtjh7AvZ')\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-js",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">conversations</span><span style="color: var(--shiki-token-function)">.delete</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "python",
                                    code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.conversations.delete("xgQQXg3hrtjh7AvZ")\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-python",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "php",
                                    code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->conversations->delete('xgQQXg3hrtjh7AvZ');\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-php",
                                        children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">conversations</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;xgQQXg3hrtjh7AvZ&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
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