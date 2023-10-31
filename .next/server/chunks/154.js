"use strict";
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 20154:
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
    title: "Groups",
    description: "On this page, we’ll dive into the different group endpoints you can use to manage groups programmatically."
};
const sections = [
    {
        title: "The group model",
        id: "the-group-model",
        ...undefined
    },
    {
        title: "List all groups",
        id: "list-all-groups",
        ...{
            tag: "GET",
            label: "/v1/groups"
        }
    },
    {
        title: "Create a group",
        id: "create-a-group",
        ...{
            tag: "POST",
            label: "/v1/groups"
        }
    },
    {
        title: "Retrieve a group",
        id: "retrieve-a-group",
        ...{
            tag: "GET",
            label: "/v1/groups/:id"
        }
    },
    {
        title: "Update a group",
        id: "update-a-group",
        ...{
            tag: "PUT",
            label: "/v1/groups/:id"
        }
    },
    {
        title: "Delete a group",
        id: "delete-a-group",
        ...{
            tag: "DELETE",
            label: "/v1/groups/:id"
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
                children: "Groups"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Groups are where communities live in Protocol — they are a collection of contacts you're talking to all at once. On this page, we'll dive into the different group endpoints you can use to manage groups programmatically. We'll look at how to query, create, update, and delete groups.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-group-model",
                children: "The group model"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The group model contains all the information about your groups, including what contacts are in the group and the group's name, description, and avatar."
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
                            children: "Unique identifier for the group."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "name",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The name for the group."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "description",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The description for the group."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "avatar_url",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "The avatar image URL for the group."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "conversation_id",
                        type: "string",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Unique identifier for the conversation that belongs to the group."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "contacts",
                        type: "array",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "An array of contact objects that are members of the group."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "created_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the group was created."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                        name: "archived_at",
                        type: "timestamp",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "Timestamp of when the group was archived."
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "list-all-groups",
                children: "List all groups",
                ...{
                    tag: "GET",
                    label: "/v1/groups"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to retrieve a paginated list of all your groups. By default, a maximum of ten groups are shown per page."
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
                                            children: "Limit the number of groups returned."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "archived",
                                        type: "boolean",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                "Only show groups that are archived when set to ",
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "true"
                                                }),
                                                "."
                                            ]
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
                                label: "/v1/groups",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl -G https://api.protocol.chat/v1/groups \\\n  -H "Authorization: Bearer {token}" \\\n  -d limit=10\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -G https://api.protocol.chat/v1/groups \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d limit=10</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.groups.list()\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">groups</span><span style="color: var(--shiki-token-function)">.list</span><span style="color: var(--shiki-color-text)">()</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: "from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.groups.list()\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->groups->list();\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">list</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "has_more": false,\n  "data": [\n    {\n      "id": "l7cGNIBKZiNJ6wqF",\n      "name": "Plaza Hotel",\n      "description": "World-renowned.",\n      "avatar_url": "https://assets.protocol.chat/avatars/plazahotel.jpg",\n      "conversation_id": "ZYjVAbCE9g5XRlra",\n      "contacts": [\n        {\n          "username": "Hector"\n          // ...\n        },\n        {\n          "username": "Cedric"\n          // ...\n        },\n        {\n          "username": "Hester"\n          // ...\n        },\n        {\n          "username": "Cliff"\n          // ...\n        }\n      ],\n      "created_at": 692233200,\n      "archived_at": null\n    },\n    {\n      "id": "hSIhXBhNe8X1d8Et"\n      // ...\n    }\n  ]\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;has_more&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;l7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Plaza Hotel&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;description&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;World-renowned.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/plazahotel.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;ZYjVAbCE9g5XRlra&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;contacts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">        {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Hector&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Cedric&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Hester&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Cliff&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span></span>\n<span><span style="color: var(--shiki-color-text)">      ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;hSIhXBhNe8X1d8Et&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "create-a-group",
                children: "Create a group",
                ...{
                    tag: "POST",
                    label: "/v1/groups"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to create a new group conversation between you and a group of your Protocol contacts."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Required attributes"
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Properties, {
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "name",
                                    type: "string",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "The name for the group."
                                    })
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "description",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The description for the group."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "avatar_url",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The avatar image URL for the group."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "contacts",
                                        type: "array",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "An array of contact objects that are members of the group."
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
                                label: "/v1/groups",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/groups \\\n  -H "Authorization: Bearer {token}" \\\n  -d name="Plaza Hotel"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/groups \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d name=</span><span style="color: var(--shiki-token-string-expression)">&quot;Plaza Hotel&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.groups.create({\n  name: 'Plaza Hotel',\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">groups</span><span style="color: var(--shiki-token-function)">.create</span><span style="color: var(--shiki-color-text)">({</span></span>\n<span><span style="color: var(--shiki-color-text)">  name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Plaza Hotel&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.groups.create(name="Plaza Hotel")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(name</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;Plaza Hotel&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->groups->create([\n  'name' => 'Plaza Hotel',\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-color-text)">[</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;name&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Plaza Hotel&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "l7cGNIBKZiNJ6wqF",\n  "name": "Plaza Hotel",\n  "description": null,\n  "avatar_url": null,\n  "conversation_id": "ZYjVAbCE9g5XRlra",\n  "contacts": [],\n  "created_at": 692233200,\n  "archived_at": null\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;l7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Plaza Hotel&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;description&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;ZYjVAbCE9g5XRlra&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contacts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "retrieve-a-group",
                children: "Retrieve a group",
                ...{
                    tag: "GET",
                    label: "/v1/groups/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                            children: [
                                "This endpoint allows you to retrieve a group by providing the group id. Refer to ",
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                    href: "#the-group-model",
                                    children: "the list"
                                }),
                                " at the top of this page to see which properties are included with group objects."
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "GET",
                                label: "/v1/groups/L7cGNIBKZiNJ6wqF",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl https://api.protocol.chat/v1/groups/L7cGNIBKZiNJ6wqF \\\n  -H "Authorization: Bearer {token}"\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.protocol.chat/v1/groups/L7cGNIBKZiNJ6wqF \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.groups.get('L7cGNIBKZiNJ6wqF')\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">groups</span><span style="color: var(--shiki-token-function)">.get</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;L7cGNIBKZiNJ6wqF&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.groups.get("L7cGNIBKZiNJ6wqF")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;L7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->groups->get('L7cGNIBKZiNJ6wqF');\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;L7cGNIBKZiNJ6wqF&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "l7cGNIBKZiNJ6wqF",\n  "name": "Plaza Hotel",\n  "description": "World-renowned.",\n  "avatar_url": "https://assets.protocol.chat/avatars/plazahotel.jpg",\n  "conversation_id": "ZYjVAbCE9g5XRlra",\n  "contacts": [\n    {\n      "username": "Hector"\n      // ...\n    },\n    {\n      "username": "Cedric"\n      // ...\n    },\n    {\n      "username": "Hester"\n      // ...\n    },\n    {\n      "username": "Cliff"\n      // ...\n    }\n  ],\n  "created_at": 692233200,\n  "archived_at": null\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;l7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Plaza Hotel&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;description&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;World-renowned.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/plazahotel.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;ZYjVAbCE9g5XRlra&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contacts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Hector&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Cedric&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Hester&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Cliff&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
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
                id: "update-a-group",
                children: "Update a group",
                ...{
                    tag: "PUT",
                    label: "/v1/groups/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "This endpoint allows you to perform an update on a group. Examples of updates are changing the name, description, and avatar or adding and removing contacts from the group."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "name",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The new name for the group."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "description",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The new description for the group."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "avatar_url",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The new avatar image URL for the group."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "contacts",
                                        type: "array",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "An array of contact objects that are members of the group."
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "archived_at",
                                        type: "timestamp",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Timestamp of when the group was archived."
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
                                label: "/v1/groups/L7cGNIBKZiNJ6wqF",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: 'curl -X PUT https://api.protocol.chat/v1/groups/L7cGNIBKZiNJ6wqF \\\n  -H "Authorization: Bearer {token}" \\\n  -d description="The finest in New York."\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl -X PUT https://api.protocol.chat/v1/groups/L7cGNIBKZiNJ6wqF \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -d description=</span><span style="color: var(--shiki-token-string-expression)">&quot;The finest in New York.&quot;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.groups.update('L7cGNIBKZiNJ6wqF', {\n    description: 'The finest in New York.',\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">groups</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;L7cGNIBKZiNJ6wqF&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    description</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;The finest in New York.&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.groups.update("L7cGNIBKZiNJ6wqF", description="The finest in New York.")\n',
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;L7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">, description</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;The finest in New York.&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "php",
                                        code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->groups->update('L7cGNIBKZiNJ6wqF', [\n  'description' => 'The finest in New York.',\n]);\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-php",
                                            children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">update</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;L7cGNIBKZiNJ6wqF&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-string-expression)">&#39;description&#39;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;The finest in New York.&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\n  "id": "l7cGNIBKZiNJ6wqF",\n  "name": "Plaza Hotel",\n  "description": "The finest in New York.",\n  "avatar_url": "https://assets.protocol.chat/avatars/plazahotel.jpg",\n  "conversation_id": "ZYjVAbCE9g5XRlra",\n  "contacts": [\n    {\n      "username": "Hector"\n      // ...\n    },\n    {\n      "username": "Cedric"\n      // ...\n    },\n    {\n      "username": "Hester"\n      // ...\n    },\n    {\n      "username": "Cliff"\n      // ...\n    }\n  ],\n  "created_at": 692233200,\n  "archived_at": null\n},\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;l7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Plaza Hotel&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;description&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;The finest in New York.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/plazahotel.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;ZYjVAbCE9g5XRlra&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;contacts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Hector&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Cedric&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Hester&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Cliff&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;archived_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">},</span></span>\n<span></span>'
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
                id: "delete-a-group",
                children: "Delete a group",
                ...{
                    tag: "DELETE",
                    label: "/v1/groups/:id"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                            children: "This endpoint allows you to delete groups. Note: This will permanently delete the group, including the messages — archive it instead if you want to be able to restore it later."
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        sticky: true,
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                            title: "Request",
                            tag: "DELETE",
                            label: "/v1/groups/L7cGNIBKZiNJ6wqF",
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "bash",
                                    code: 'curl -X DELETE https://api.protocol.chat/v1/groups/L7cGNIBKZiNJ6wqF \\\n  -H "Authorization: Bearer {token}"\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-bash",
                                        children: '<span><span style="color: var(--shiki-color-text)">curl -X DELETE https://api.protocol.chat/v1/groups/L7cGNIBKZiNJ6wqF \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Authorization: Bearer {token}&quot;</span></span>\n<span></span>'
                                    }),
                                    ...{
                                        title: "cURL"
                                    }
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "js",
                                    code: "import ApiClient from '@example/protocol-api'\n\nconst client = new ApiClient(token)\n\nawait client.groups.delete('L7cGNIBKZiNJ6wqF')\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-js",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@example/protocol-api&#39;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-color-text)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">client</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">groups</span><span style="color: var(--shiki-token-function)">.delete</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;L7cGNIBKZiNJ6wqF&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "python",
                                    code: 'from protocol_api import ApiClient\n\nclient = ApiClient(token)\n\nclient.groups.delete("L7cGNIBKZiNJ6wqF")\n',
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-python",
                                        children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> protocol_api </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> ApiClient</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ApiClient</span><span style="color: var(--shiki-token-punctuation)">(token)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">client</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;L7cGNIBKZiNJ6wqF&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                    language: "php",
                                    code: "$client = new \\Protocol\\ApiClient($token);\n\n$client->groups->delete('L7cGNIBKZiNJ6wqF');\n",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        className: "language-php",
                                        children: '<span><span style="color: var(--shiki-color-text)">$client </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">new</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">Protocol</span><span style="color: var(--shiki-token-punctuation)">\\</span><span style="color: var(--shiki-token-constant)">ApiClient</span><span style="color: var(--shiki-color-text)">($token);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">$client</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-color-text)">groups</span><span style="color: var(--shiki-token-keyword)">-&gt;</span><span style="color: var(--shiki-token-function)">delete</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;L7cGNIBKZiNJ6wqF&#39;</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>'
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