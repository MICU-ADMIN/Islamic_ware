"use strict";
exports.id = 764;
exports.ids = [764];
exports.modules = {

/***/ 98764:
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
    title: "Webhooks",
    description: "In this guide, we will look at how to register and consume webhooks to integrate your app with Protocol."
};
const sections = [
    {
        title: "Registering webhooks",
        id: "registering-webhooks",
        ...undefined
    },
    {
        title: "Consuming webhooks",
        id: "consuming-webhooks",
        ...undefined
    },
    {
        title: "Event types",
        id: "event-types",
        ...undefined
    },
    {
        title: "Security",
        id: "security",
        ...undefined
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        a: "a",
        code: "code",
        pre: "pre",
        hr: "hr"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components), { Button, Row, Col, Properties, Property, CodeGroup } = _components;
    if (!Button) _missingMdxReference("Button", true);
    if (!CodeGroup) _missingMdxReference("CodeGroup", true);
    if (!Col) _missingMdxReference("Col", true);
    if (!Properties) _missingMdxReference("Properties", true);
    if (!Property) _missingMdxReference("Property", true);
    if (!Row) _missingMdxReference("Row", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Webhooks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this guide, we will look at how to register and consume webhooks to integrate your app with Protocol. With webhooks, your app can know when something happens in Protocol, such as someone sending a message or adding a contact.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "registering-webhooks",
                children: "Registering webhooks"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To register a new webhook, you need to have a URL in your app that Protocol can call. You can configure a new webhook from the Protocol dashboard under ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#",
                        children: "API settings"
                    }),
                    ". Give your webhook a name, pick the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#event-types",
                        children: "events"
                    }),
                    " you want to listen for, and add your URL."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now, whenever something of interest happens in your app, a webhook is fired off by Protocol. In the next section, we'll look at how to consume webhooks."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "consuming-webhooks",
                children: "Consuming webhooks"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "When your app receives a webhook request from Protocol, check the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "type"
                    }),
                    " attribute to see what event caused it. The first part of the event type will tell you the payload type, e.g., a conversation, message, etc."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: '{\n  "id": "a056V7R7NmNRjl70",\n  "type": "conversation.updated",\n  "payload": {\n    "id": "WAz8eIbvDR60rouK"\n    // ...\n  }\n}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;a056V7R7NmNRjl70&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;conversation.updated&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;payload&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">// ...</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: "Example webhook payload"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In the example above, a conversation was ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "updated"
                    }),
                    ", and the payload type is a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "conversation"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    href: "#event-types",
                    variant: "text",
                    arrow: "right",
                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: "See all event types"
                    })
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "event-types",
                children: "Event types"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "contact.created",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A new contact was created."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "contact.updated",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An existing contact was updated."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "contact.deleted",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A contact was successfully deleted."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "conversation.created",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A new conversation was created."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "conversation.updated",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An existing conversation was updated."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "conversation.deleted",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A conversation was successfully deleted."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "message.created",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A new message was created."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "message.updated",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An existing message was updated."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "message.deleted",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A message was successfully deleted."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "group.created",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A new group was created."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "group.updated",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An existing group was updated."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "group.deleted",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A group was successfully deleted."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "attachment.created",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "A new attachment was created."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "attachment.updated",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An existing attachment was updated."
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "attachment.deleted",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "An attachment was successfully deleted."
                                    })
                                })
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Col, {
                        sticky: true,
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                            language: "json",
                            code: '{\n  "id": "a056V7R7NmNRjl70",\n  "type": "message.updated",\n  "payload": {\n    "id": "SIuAFUNKdSYHZF2w",\n    "conversation_id": "xgQQXg3hrtjh7AvZ",\n    "contact": {\n      "id": "WAz8eIbvDR60rouK",\n      "username": "KevinMcCallister",\n      "phone_number": "1-800-759-3000",\n      "avatar_url": "https://assets.protocol.chat/avatars/kevin.jpg",\n      "last_active_at": 705103200,\n      "created_at": 692233200\n    },\n    "message": "I’m traveling with my dad. He’s at a meeting. I hate meetings.",\n    "reactions": [],\n    "attachments": [],\n    "read_at": 705103200,\n    "created_at": 692233200,\n    "updated_at": 692233200\n  }\n}\n',
                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                className: "language-json",
                                children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;a056V7R7NmNRjl70&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;type&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;message.updated&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;payload&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;SIuAFUNKdSYHZF2w&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;conversation_id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;xgQQXg3hrtjh7AvZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;contact&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;WAz8eIbvDR60rouK&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;username&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;KevinMcCallister&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;phone_number&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;1-800-759-3000&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;avatar_url&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://assets.protocol.chat/avatars/kevin.jpg&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;last_active_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;I’m traveling with my dad. He’s at a meeting. I hate meetings.&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;reactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;attachments&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;read_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">705103200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;created_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;updated_at&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">692233200</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                            }),
                            ...{
                                "title": "Example payload"
                            }
                        })
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "security",
                children: "Security"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To know for sure that a webhook was, in fact, sent by Protocol instead of a malicious actor, you can verify the request signature. Each webhook request contains a header named ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "x-protocol-signature"
                    }),
                    ", and you can verify this signature by using your secret webhook key. The signature is an HMAC hash of the request payload hashed using your secret key. Here is an example of how to verify the signature in your app:"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                title: "Verifying a request",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "js",
                        code: "const signature = req.headers['x-protocol-signature']\nconst hash = crypto.createHmac('sha256', secret).update(payload).digest('hex')\n\nif (hash === signature) {\n  // Request is verified\n} else {\n  // Request could not be verified\n}\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-js",
                            children: '<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">signature</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">req</span><span style="color: var(--shiki-color-text)">.headers[</span><span style="color: var(--shiki-token-string-expression)">&#39;x-protocol-signature&#39;</span><span style="color: var(--shiki-color-text)">]</span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">hash</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">crypto</span><span style="color: var(--shiki-token-function)">.createHmac</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;sha256&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> secret)</span><span style="color: var(--shiki-token-function)">.update</span><span style="color: var(--shiki-color-text)">(payload)</span><span style="color: var(--shiki-token-function)">.digest</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;hex&#39;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (hash </span><span style="color: var(--shiki-token-keyword)">===</span><span style="color: var(--shiki-color-text)"> signature) {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request is verified</span></span>\n<span><span style="color: var(--shiki-color-text)">} </span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request could not be verified</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "python",
                        code: 'from flask import request\nimport hashlib\nimport hmac\n\nsignature = request.headers.get("x-protocol-signature")\nhash = hmac.new(bytes(secret, "ascii"), bytes(payload, "ascii"), hashlib.sha256)\n\nif hash.hexdigest() == signature:\n    # Request is verified\nelse:\n    # Request could not be verified\n',
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-python",
                            children: '<span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> flask </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> request</span></span>\n<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> hashlib</span></span>\n<span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> hmac</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">signature </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> request</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">headers</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">get</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;x-protocol-signature&quot;</span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span><span style="color: var(--shiki-token-function)">hash</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> hmac</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">new</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-constant)">bytes</span><span style="color: var(--shiki-token-punctuation)">(secret, </span><span style="color: var(--shiki-token-string-expression)">&quot;ascii&quot;</span><span style="color: var(--shiki-token-punctuation)">), </span><span style="color: var(--shiki-token-constant)">bytes</span><span style="color: var(--shiki-token-punctuation)">(payload, </span><span style="color: var(--shiki-token-string-expression)">&quot;ascii&quot;</span><span style="color: var(--shiki-token-punctuation)">), hashlib.sha256)</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">hash</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">hexdigest</span><span style="color: var(--shiki-token-punctuation)">()</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">==</span><span style="color: var(--shiki-color-text)"> signature</span><span style="color: var(--shiki-token-punctuation)">:</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)"># Request is verified</span></span>\n<span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-token-punctuation)">:</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)"># Request could not be verified</span></span>\n<span></span>'
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "php",
                        code: "$signature = $request['headers']['x-protocol-signature'];\n$hash = hash_hmac('sha256', $payload, $secret);\n\nif (hash_equals($hash, $signature)) {\n  // Request is verified\n} else {\n  // Request could not be verified\n}\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-php",
                            children: '<span><span style="color: var(--shiki-color-text)">$signature </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> $request[</span><span style="color: var(--shiki-token-string-expression)">&#39;headers&#39;</span><span style="color: var(--shiki-color-text)">][</span><span style="color: var(--shiki-token-string-expression)">&#39;x-protocol-signature&#39;</span><span style="color: var(--shiki-color-text)">];</span></span>\n<span><span style="color: var(--shiki-color-text)">$hash </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">hash_hmac</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;sha256&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)"> $payload</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)"> $secret</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">;</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> (</span><span style="color: var(--shiki-token-function)">hash_equals</span><span style="color: var(--shiki-token-punctuation)">(</span><span style="color: var(--shiki-token-function)">$hash</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-function)"> $signature</span><span style="color: var(--shiki-token-punctuation)">)</span><span style="color: var(--shiki-color-text)">) {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request is verified</span></span>\n<span><span style="color: var(--shiki-color-text)">} </span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Request could not be verified</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                        })
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If your generated signature matches the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "x-protocol-signature"
                    }),
                    " header, you can be sure that the request was truly coming from Protocol. It's essential to keep your secret webhook key safe — otherwise, you can no longer be sure that a given webhook was sent by Protocol. Don't commit your secret webhook key to GitHub!"
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