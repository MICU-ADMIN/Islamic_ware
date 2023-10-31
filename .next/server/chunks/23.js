exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 40058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./attachments/page.mdx": [
		81553,
		732,
		553
	],
	"./authentication/page.mdx": [
		87902,
		732,
		902
	],
	"./contacts/page.mdx": [
		11803,
		732,
		803
	],
	"./conversations/page.mdx": [
		24680,
		732,
		680
	],
	"./errors/page.mdx": [
		19237,
		732,
		237
	],
	"./favicon.ico": [
		788,
		788
	],
	"./groups/page.mdx": [
		20154,
		732,
		154
	],
	"./layout": [
		91401
	],
	"./layout.tsx": [
		91401
	],
	"./messages/page.mdx": [
		34923,
		732,
		923
	],
	"./not-found": [
		41086
	],
	"./not-found.tsx": [
		41086
	],
	"./page.mdx": [
		20268,
		732,
		268
	],
	"./pagination/page.mdx": [
		49076,
		732,
		54
	],
	"./providers": [
		27307
	],
	"./providers.tsx": [
		27307
	],
	"./quickstart/page.mdx": [
		27797,
		732,
		797
	],
	"./sdks/page.mdx": [
		282,
		679,
		732,
		282
	],
	"./webhooks/page.mdx": [
		98764,
		732,
		764
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 40058;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 89367:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 30214, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 67638));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85984));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 25846));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 50148));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6084));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13380));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 13557));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54211));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24471));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56709));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57292));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71087))

/***/ }),

/***/ 71591:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 30214, 23))

/***/ }),

/***/ 56709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ Providers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45453);
/* __next_internal_client_entry_do_not_use__ Providers auto */ 


function ThemeWatcher() {
    let { resolvedTheme, setTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__/* .useTheme */ .F)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let media = window.matchMedia("(prefers-color-scheme: dark)");
        function onMediaChange() {
            let systemTheme = media.matches ? "dark" : "light";
            if (resolvedTheme === systemTheme) {
                setTheme("system");
            }
        }
        onMediaChange();
        media.addEventListener("change", onMediaChange);
        return ()=>{
            media.removeEventListener("change", onMediaChange);
        };
    }, [
        resolvedTheme,
        setTheme
    ]);
    return null;
}
function Providers({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        attribute: "class",
        disableTransitionOnChange: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeWatcher, {}),
            children
        ]
    });
}


/***/ }),

/***/ 50148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Code: () => (/* binding */ Code),
/* harmony export */   CodeGroup: () => (/* binding */ CodeGroup),
/* harmony export */   Pre: () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77854);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4790);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6821);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68958);
/* __next_internal_client_entry_do_not_use__ CodeGroup,Code,Pre auto */ 





const languageNames = {
    js: "JavaScript",
    ts: "TypeScript",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    go: "Go"
};
function getPanelTitle({ title, language }) {
    if (title) {
        return title;
    }
    if (language && language in languageNames) {
        return languageNames[language];
    }
    return "Code";
}
function ClipboardIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinejoin: "round",
                d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
            })
        ]
    });
}
function CopyButton({ code }) {
    let [copyCount, setCopyCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let copied = copyCount > 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (copyCount > 0) {
            let timeout = setTimeout(()=>setCopyCount(0), 1000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        copyCount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", copied ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20" : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),
        onClick: ()=>{
            window.navigator.clipboard.writeText(code).then(()=>{
                setCopyCount((count)=>count + 1);
            });
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                "aria-hidden": copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", copied && "-translate-y-1.5 opacity-0"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClipboardIcon, {
                        className: "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    }),
                    "Copy"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": !copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300", !copied && "translate-y-1.5 opacity-0"),
                children: "Copied!"
            })
        ]
    });
}
function CodePanelHeader({ tag, label }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1",
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dark flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_3__/* .Tag */ .V, {
                    variant: "small",
                    children: tag
                })
            }),
            tag && label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-500"
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function CodePanel({ children, tag, label, code }) {
    let child = react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children);
    if (/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child)) {
        tag = child.props.tag ?? tag;
        label = child.props.label ?? label;
        code = child.props.code ?? code;
    }
    if (!code) {
        throw new Error("`CodePanel` requires a `code` prop, or a child with a `code` prop.");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group dark:bg-white/2.5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanelHeader, {
                tag: tag,
                label: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        className: "overflow-x-auto p-4 text-xs text-white",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                        code: code
                    })
                ]
            })
        ]
    });
}
function CodeGroupHeader({ title, children, selectedIndex }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (!title && !hasTabs) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mr-auto pt-3 text-xs font-semibold text-white",
                children: title
            }),
            hasTabs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__/* .Tab */ .O.List, {
                className: "-mb-px flex gap-4 text-xs font-medium",
                children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, childIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__/* .Tab */ .O, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("border-b py-3 transition ui-not-focus-visible:outline-none", childIndex === selectedIndex ? "border-emerald-500 text-emerald-400" : "border-transparent text-zinc-400 hover:text-zinc-300"),
                        children: getPanelTitle(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child) ? child.props : {})
                    }))
            })
        ]
    });
}
function CodeGroupPanels({ children, ...props }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (hasTabs) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__/* .Tab */ .O.Panels, {
            children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__/* .Tab */ .O.Panel, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
                        ...props,
                        children: child
                    })
                }))
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
        ...props,
        children: children
    });
}
function usePreventLayoutShift() {
    let positionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let rafRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            if (typeof rafRef.current !== "undefined") {
                window.cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);
    return {
        positionRef,
        preventLayoutShift (callback) {
            if (!positionRef.current) {
                return;
            }
            let initialTop = positionRef.current.getBoundingClientRect().top;
            callback();
            rafRef.current = window.requestAnimationFrame(()=>{
                let newTop = positionRef.current?.getBoundingClientRect().top ?? initialTop;
                window.scrollBy(0, newTop - initialTop);
            });
        }
    };
}
const usePreferredLanguageStore = (0,zustand__WEBPACK_IMPORTED_MODULE_5__/* .create */ .Ue)()((set)=>({
        preferredLanguages: [],
        addPreferredLanguage: (language)=>set((state)=>({
                    preferredLanguages: [
                        ...state.preferredLanguages.filter((preferredLanguage)=>preferredLanguage !== language),
                        language
                    ]
                }))
    }));
function useTabGroupProps(availableLanguages) {
    let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let activeLanguage = [
        ...availableLanguages
    ].sort((a, z)=>preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a))[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }
    let { positionRef, preventLayoutShift } = usePreventLayoutShift();
    return {
        as: "div",
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex)=>{
            preventLayoutShift(()=>addPreferredLanguage(availableLanguages[newSelectedIndex]));
        }
    };
}
const CodeGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function CodeGroup({ children, title, ...props }) {
    let languages = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>getPanelTitle(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child) ? child.props : {})) ?? [];
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    let containerClassName = "my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10";
    let header = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupHeader, {
        title: title,
        selectedIndex: tabGroupProps.selectedIndex,
        children: children
    });
    let panels = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupPanels, {
        ...props,
        children: children
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupContext.Provider, {
        value: true,
        children: hasTabs ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__/* .Tab */ .O.Group, {
            ...tabGroupProps,
            className: containerClassName,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "not-prose",
                children: [
                    header,
                    panels
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: containerClassName,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "not-prose",
                children: [
                    header,
                    panels
                ]
            })
        })
    });
}
function Code({ children, ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        if (typeof children !== "string") {
            throw new Error("`Code` children must be a string when nested inside a `CodeGroup`.");
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            ...props,
            dangerouslySetInnerHTML: {
                __html: children
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        ...props,
        children: children
    });
}
function Pre({ children, ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return children;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroup, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 25846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Feedback: () => (/* binding */ Feedback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8531);
/* __next_internal_client_entry_do_not_use__ Feedback auto */ 


function CheckIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
            })
        ]
    });
}
function FeedbackButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "submit",
        className: "px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
        ...props
    });
}
const FeedbackForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FeedbackForm({ onSubmit }, ref) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        ref: ref,
        onSubmit: onSubmit,
        className: "absolute inset-0 flex items-center justify-center gap-6 md:justify-start",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-zinc-600 dark:text-zinc-400",
                children: "Was this page helpful?"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                        "data-response": "yes",
                        children: "Yes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-zinc-900/10 dark:bg-white/10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                        "data-response": "no",
                        children: "No"
                    })
                ]
            })
        ]
    });
});
const FeedbackThanks = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FeedbackThanks(_props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: "absolute inset-0 flex justify-center md:justify-start",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pl-1.5 pr-3 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {
                    className: "h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
                }),
                "Thanks for your feedback!"
            ]
        })
    });
});
function Feedback() {
    let [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function onSubmit(event) {
        event.preventDefault();
        // event.nativeEvent.submitter.dataset.response
        // => "yes" or "no"
        setSubmitted(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative h-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .u, {
                show: !submitted,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                leave: "pointer-events-none duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackForm, {
                    onSubmit: onSubmit
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__/* .Transition */ .u, {
                show: submitted,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                enter: "delay-150 duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackThanks, {})
            })
        ]
    });
}


/***/ }),

/***/ 67638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Heading: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13109);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81236);
/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44683);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68958);
/* harmony import */ var _lib_remToPx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23783);
/* __next_internal_client_entry_do_not_use__ Heading auto */ 






function AnchorIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"
        })
    });
}
function Eyebrow({ tag, label }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-x-3",
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_4__/* .Tag */ .V, {
                children: tag
            }),
            tag && label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function Anchor({ id, inView, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `#${id}`,
        className: "group text-inherit no-underline hover:text-inherit",
        children: [
            inView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnchorIcon, {
                        className: "h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                    })
                })
            }),
            children
        ]
    });
}
function Heading({ children, tag, label, level, anchor = true, ...props }) {
    level = level ?? 2;
    let Component = `h${level}`;
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let registerHeading = (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_3__/* .useSectionStore */ .S)((s)=>s.registerHeading);
    let inView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .useInView */ .Y)(ref, {
        margin: `${(0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_6__/* .remToPx */ .c)(-3.5)}px 0px 0px 0px`,
        amount: "all"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (level === 2) {
            registerHeading({
                id: props.id,
                ref,
                offsetRem: tag || label ? 8 : 6
            });
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Eyebrow, {
                tag: tag,
                label: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ref: ref,
                className: tag || label ? "mt-2 scroll-mt-32" : "scroll-mt-24",
                ...props,
                children: anchor ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                    id: props.id,
                    inView: inView,
                    children: children
                }) : children
            })
        ]
    });
}


/***/ }),

/***/ 71087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Layout: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(13109);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(47072);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 157 modules
var motion = __webpack_require__(27410);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4790);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
;// CONCATENATED MODULE: ./src/components/Button.tsx



function ArrowIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
        })
    });
}
const variantStyles = {
    primary: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300",
    secondary: "rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
    filled: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400",
    outline: "rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
    text: "text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
};
function Button({ variant = "primary", className, children, arrow, ...props }) {
    className = clsx_default()("inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition", variantStyles[variant], className);
    let arrowIcon = /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
        className: clsx_default()("mt-0.5 h-5 w-5", variant === "text" && "relative top-px", arrow === "left" && "-ml-1 rotate-180", arrow === "right" && "-mr-1")
    });
    let inner = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            arrow === "left" && arrowIcon,
            children,
            arrow === "right" && arrowIcon
        ]
    });
    if (typeof props.href === "undefined") {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: className,
        ...props,
        children: inner
    });
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var use_presence = __webpack_require__(62619);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 4 modules
var AnimatePresence = __webpack_require__(5641);
// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui+react@1.7.17_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(8531);
// EXTERNAL MODULE: ./node_modules/.pnpm/@headlessui+react@1.7.17_react-dom@18.2.0_react@18.2.0/node_modules/@headlessui/react/dist/components/dialog/dialog.js + 28 modules
var dialog = __webpack_require__(8129);
// EXTERNAL MODULE: ./node_modules/.pnpm/zustand@4.4.4_@types+react@18.2.18_react@18.2.0/node_modules/zustand/esm/index.mjs
var esm = __webpack_require__(6821);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/value/use-scroll.mjs
var use_scroll = __webpack_require__(91124);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/value/use-transform.mjs + 1 modules
var use_transform = __webpack_require__(27932);
;// CONCATENATED MODULE: ./src/components/Logo.tsx

function Logo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 99 24",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-emerald-400",
                d: "M16 8a5 5 0 0 0-5-5H5a5 5 0 0 0-5 5v13.927a1 1 0 0 0 1.623.782l3.684-2.93a4 4 0 0 1 2.49-.87H11a5 5 0 0 0 5-5V8Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: "fill-zinc-900 dark:fill-white",
                d: "M26.538 18h2.654v-3.999h2.576c2.672 0 4.456-1.723 4.456-4.333V9.65c0-2.61-1.784-4.333-4.456-4.333h-5.23V18Zm4.58-10.582c1.52 0 2.416.8 2.416 2.241v.018c0 1.441-.896 2.25-2.417 2.25h-1.925V7.418h1.925ZM38.051 18h2.566v-5.414c0-1.371.923-2.206 2.382-2.206.396 0 .791.061 1.178.15V8.287a3.843 3.843 0 0 0-.958-.123c-1.257 0-2.136.615-2.443 1.661h-.159V8.323h-2.566V18Zm11.55.202c2.979 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.773-5.036-2.953 0-4.772 1.916-4.772 5.036v.018c0 3.146 1.793 5.036 4.772 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.144-3.023 1.354 0 2.145 1.134 2.145 3.023v.018c0 1.907-.782 3.023-2.145 3.023Zm10.52 1.846c.492 0 .967-.053 1.283-.114v-1.907a6.057 6.057 0 0 1-.755.044c-.87 0-1.24-.387-1.24-1.257v-4.544h1.995V8.323H59.41V6.012h-2.592v2.311h-1.495v1.934h1.495v5.133c0 1.88.949 2.645 3.304 2.645Zm7.287.167c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.954 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.372 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023Zm10.767 2.013c2.522 0 4.034-1.353 4.297-3.463l.01-.053h-2.374l-.017.036c-.229.966-.853 1.467-1.908 1.467-1.37 0-2.135-1.08-2.135-3.04v-.018c0-1.934.755-3.006 2.135-3.006 1.099 0 1.74.615 1.908 1.556l.008.017h2.391v-.026c-.228-2.162-1.749-3.56-4.315-3.56-3.033 0-4.738 1.837-4.738 5.019v.017c0 3.217 1.714 5.054 4.738 5.054Zm10.257 0c2.98 0 4.772-1.88 4.772-5.036v-.018c0-3.128-1.82-5.036-4.772-5.036-2.953 0-4.773 1.916-4.773 5.036v.018c0 3.146 1.793 5.036 4.773 5.036Zm0-2.013c-1.371 0-2.145-1.116-2.145-3.023v-.018c0-1.89.782-3.023 2.145-3.023 1.353 0 2.144 1.134 2.144 3.023v.018c0 1.907-.782 3.023-2.144 3.023ZM95.025 18h2.566V4.623h-2.566V18Z"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/react-highlight-words@0.20.0_react@18.2.0/node_modules/react-highlight-words/dist/main.js
var main = __webpack_require__(18610);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./node_modules/.pnpm/@algolia+autocomplete-core@1.12.1_@algolia+client-search@4.20.0_algoliasearch@4.20.0_search-insights@2.9.0/node_modules/@algolia/autocomplete-core/dist/umd/index.production.js
var index_production = __webpack_require__(35855);
;// CONCATENATED MODULE: ./src/components/Search.tsx
/* __next_internal_client_entry_do_not_use__ Search,MobileSearch auto */ 







function useAutocomplete({ close }) {
    let id = (0,react_.useId)();
    let router = (0,navigation.useRouter)();
    let [autocompleteState, setAutocompleteState] = (0,react_.useState)({});
    function navigate({ itemUrl }) {
        if (!itemUrl) {
            return;
        }
        router.push(itemUrl);
        if (itemUrl === window.location.pathname + window.location.search + window.location.hash) {
            close();
        }
    }
    let [autocomplete] = (0,react_.useState)(()=>(0,index_production.createAutocomplete)({
            id,
            placeholder: "Find something...",
            defaultActiveItemId: 0,
            onStateChange ({ state }) {
                setAutocompleteState(state);
            },
            shouldPanelOpen ({ state }) {
                return state.query !== "";
            },
            navigator: {
                navigate
            },
            getSources ({ query }) {
                return Promise.all(/* import() */[__webpack_require__.e(592), __webpack_require__.e(262)]).then(__webpack_require__.bind(__webpack_require__, 47262)).then(({ search })=>{
                    return [
                        {
                            sourceId: "documentation",
                            getItems () {
                                return search(query, {
                                    limit: 5
                                });
                            },
                            getItemUrl ({ item }) {
                                return item.url;
                            },
                            onSelect: navigate
                        }
                    ];
                });
            }
        }));
    return {
        autocomplete,
        autocompleteState
    };
}
function SearchIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
        })
    });
}
function NoResultsIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
        })
    });
}
function LoadingIcon(props) {
    let id = (0,react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "5.5",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                stroke: `url(#${id})`,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: id,
                    x1: "13",
                    x2: "9.5",
                    y1: "9",
                    y2: "15",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "currentColor"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: "currentColor",
                            stopOpacity: "0"
                        })
                    ]
                })
            })
        ]
    });
}
function HighlightQuery({ text, query }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((main_default()), {
        highlightClassName: "underline bg-transparent text-emerald-500",
        searchWords: [
            query
        ],
        autoEscape: true,
        textToHighlight: text
    });
}
function SearchResult({ result, resultIndex, autocomplete, collection, query }) {
    let id = (0,react_.useId)();
    let sectionTitle = Navigation_navigation.find((section)=>section.links.find((link)=>link.href === result.url.split("#")[0]))?.title;
    let hierarchy = [
        sectionTitle,
        result.pageTitle
    ].filter((x)=>typeof x === "string");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: clsx_default()("group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50", resultIndex > 0 && "border-t border-zinc-100 dark:border-zinc-800"),
        "aria-labelledby": `${id}-hierarchy ${id}-title`,
        ...autocomplete.getItemProps({
            item: result,
            source: collection.source
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: `${id}-title`,
                "aria-hidden": "true",
                className: "text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(HighlightQuery, {
                    text: result.title,
                    query: query
                })
            }),
            hierarchy.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: `${id}-hierarchy`,
                "aria-hidden": "true",
                className: "mt-1 truncate whitespace-nowrap text-2xs text-zinc-500",
                children: hierarchy.map((item, itemIndex, items)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HighlightQuery, {
                                text: item,
                                query: query
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: itemIndex === items.length - 1 ? "sr-only" : "mx-2 text-zinc-300 dark:text-zinc-700",
                                children: "/"
                            })
                        ]
                    }, itemIndex))
            })
        ]
    });
}
function SearchResults({ autocomplete, query, collection }) {
    if (collection.items.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "p-6 text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NoResultsIcon, {
                    className: "mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mt-2 text-xs text-zinc-700 dark:text-zinc-400",
                    children: [
                        "Nothing found for",
                        " ",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                            className: "break-words font-semibold text-zinc-900 dark:text-white",
                            children: [
                                "‘",
                                query,
                                "’"
                            ]
                        }),
                        ". Please try again."
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        ...autocomplete.getListProps(),
        children: collection.items.map((result, resultIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(SearchResult, {
                result: result,
                resultIndex: resultIndex,
                autocomplete: autocomplete,
                collection: collection,
                query: query
            }, result.url))
    });
}
const SearchInput = /*#__PURE__*/ (0,react_.forwardRef)(function SearchInput({ autocomplete, autocompleteState, onClose }, inputRef) {
    let inputProps = autocomplete.getInputProps({
        inputElement: null
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group relative flex h-12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                className: "pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: inputRef,
                className: clsx_default()("flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden", autocompleteState.status === "stalled" ? "pr-11" : "pr-4"),
                ...inputProps,
                onKeyDown: (event)=>{
                    if (event.key === "Escape" && !autocompleteState.isOpen && autocompleteState.query === "") {
                        // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
                        // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
                        if (document.activeElement instanceof HTMLElement) {
                            document.activeElement.blur();
                        }
                        onClose();
                    } else {
                        inputProps.onKeyDown(event);
                    }
                }
            }),
            autocompleteState.status === "stalled" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-y-0 right-3 flex items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingIcon, {
                    className: "h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-emerald-400"
                })
            })
        ]
    });
});
function SearchDialog({ open, setOpen, className }) {
    let formRef = (0,react_.useRef)(null);
    let panelRef = (0,react_.useRef)(null);
    let inputRef = (0,react_.useRef)(null);
    let { autocomplete, autocompleteState } = useAutocomplete({
        close () {
            setOpen(false);
        }
    });
    let pathname = (0,navigation.usePathname)();
    let searchParams = (0,navigation.useSearchParams)();
    (0,react_.useEffect)(()=>{
        setOpen(false);
    }, [
        pathname,
        searchParams,
        setOpen
    ]);
    (0,react_.useEffect)(()=>{
        if (open) {
            return;
        }
        function onKeyDown(event) {
            if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                setOpen(true);
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return ()=>{
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [
        open,
        setOpen
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Root, {
        show: open,
        as: react_.Fragment,
        afterLeave: ()=>autocomplete.setQuery(""),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
            onClose: setOpen,
            className: clsx_default()("fixed inset-0 z-50", className),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                    as: react_.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 bg-zinc-400/25 backdrop-blur-sm dark:bg-black/40"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                        as: react_.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V.Panel, {
                            className: "mx-auto transform-gpu overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 sm:max-w-xl",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ...autocomplete.getRootProps({}),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    ref: formRef,
                                    ...autocomplete.getFormProps({
                                        inputElement: inputRef.current
                                    }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(SearchInput, {
                                            ref: inputRef,
                                            autocomplete: autocomplete,
                                            autocompleteState: autocompleteState,
                                            onClose: ()=>setOpen(false)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            ref: panelRef,
                                            className: "border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5",
                                            ...autocomplete.getPanelProps({}),
                                            children: autocompleteState.isOpen && /*#__PURE__*/ jsx_runtime_.jsx(SearchResults, {
                                                autocomplete: autocomplete,
                                                query: autocompleteState.query,
                                                collection: autocompleteState.collections[0]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}
function useSearchProps() {
    let buttonRef = (0,react_.useRef)(null);
    let [open, setOpen] = (0,react_.useState)(false);
    return {
        buttonProps: {
            ref: buttonRef,
            onClick () {
                setOpen(true);
            }
        },
        dialogProps: {
            open,
            setOpen: (0,react_.useCallback)((open)=>{
                let { width = 0, height = 0 } = buttonRef.current?.getBoundingClientRect() ?? {};
                if (!open || width !== 0 && height !== 0) {
                    setOpen(open);
                }
            }, [
                setOpen
            ])
        }
    };
}
function Search() {
    let [modifierKey, setModifierKey] = (0,react_.useState)();
    let { buttonProps, dialogProps } = useSearchProps();
    (0,react_.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hidden lg:block lg:max-w-md lg:flex-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex",
                ...buttonProps,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                        className: "h-5 w-5 stroke-current"
                    }),
                    "Find something...",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
                        className: "ml-auto text-2xs text-zinc-400 dark:text-zinc-500",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SearchDialog, {
                    className: "hidden lg:block",
                    ...dialogProps
                })
            })
        ]
    });
}
function MobileSearch() {
    let { buttonProps, dialogProps } = useSearchProps();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "contents lg:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 ui-not-focus-visible:outline-none dark:hover:bg-white/5 lg:hidden",
                "aria-label": "Find something...",
                ...buttonProps,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                    className: "h-5 w-5 stroke-zinc-900 dark:stroke-white"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ jsx_runtime_.jsx(SearchDialog, {
                    className: "lg:hidden",
                    ...dialogProps
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/.pnpm/next-themes@0.2.1_next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next-themes/dist/index.js
var dist = __webpack_require__(45453);
;// CONCATENATED MODULE: ./src/components/ThemeToggle.tsx



function SunIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                d: "M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
            })
        ]
    });
}
function MoonIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"
        })
    });
}
function ThemeToggle() {
    let { resolvedTheme, setTheme } = (0,dist/* useTheme */.F)();
    let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
    let [mounted, setMounted] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
        "aria-label": mounted ? `Switch to ${otherTheme} theme` : "Toggle theme",
        onClick: ()=>setTheme(otherTheme),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SunIcon, {
                className: "h-5 w-5 stroke-zinc-900 dark:hidden"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MoonIcon, {
                className: "hidden h-5 w-5 stroke-white dark:block"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Header.tsx











function TopLevelNavItem({ href, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: "text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            children: children
        })
    });
}
const Header = /*#__PURE__*/ (0,react_.forwardRef)(function Header({ className }, ref) {
    let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
    let isInsideMobileNavigation = useIsInsideMobileNavigation();
    let { scrollY } = (0,use_scroll/* useScroll */.v)();
    let bgOpacityLight = (0,use_transform/* useTransform */.H)(scrollY, [
        0,
        72
    ], [
        0.5,
        0.9
    ]);
    let bgOpacityDark = (0,use_transform/* useTransform */.H)(scrollY, [
        0,
        72
    ], [
        0.2,
        0.8
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
        ref: ref,
        className: clsx_default()(className, "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80", !isInsideMobileNavigation && "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80", isInsideMobileNavigation ? "bg-white dark:bg-zinc-900" : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"),
        style: {
            "--bg-opacity-light": bgOpacityLight,
            "--bg-opacity-dark": bgOpacityDark
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: clsx_default()("absolute inset-x-0 top-full h-px transition", (isInsideMobileNavigation || !mobileNavIsOpen) && "bg-zinc-900/7.5 dark:bg-white/7.5")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Search, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-5 lg:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        "aria-label": "Home",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                            className: "h-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            role: "list",
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(TopLevelNavItem, {
                                    href: "/",
                                    children: "API"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TopLevelNavItem, {
                                    href: "#",
                                    children: "Documentation"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(TopLevelNavItem, {
                                    href: "#",
                                    children: "Support"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MobileSearch, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(ThemeToggle, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden min-[416px]:contents",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            href: "#",
                            children: "Sign in"
                        })
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/components/MobileNavigation.tsx
/* __next_internal_client_entry_do_not_use__ useIsInsideMobileNavigation,useMobileNavigationStore,MobileNavigation auto */ 







function MenuIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 10 9",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M.5 1h9M.5 8h9M.5 4.5h9"
        })
    });
}
function XIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 10 9",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "m1.5 1 7 7M8.5 1l-7 7"
        })
    });
}
const IsInsideMobileNavigationContext = /*#__PURE__*/ (0,react_.createContext)(false);
function MobileNavigationDialog({ isOpen, close }) {
    let pathname = (0,navigation.usePathname)();
    let searchParams = (0,navigation.useSearchParams)();
    let initialPathname = (0,react_.useRef)(pathname).current;
    let initialSearchParams = (0,react_.useRef)(searchParams).current;
    (0,react_.useEffect)(()=>{
        if (pathname !== initialPathname || searchParams !== initialSearchParams) {
            close();
        }
    }, [
        pathname,
        searchParams,
        close,
        initialPathname,
        initialSearchParams
    ]);
    function onClickDialog(event) {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        let link = event.target.closest("a");
        if (link && link.pathname + link.search + link.hash === window.location.pathname + window.location.search + window.location.hash) {
            close();
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Root, {
        show: isOpen,
        as: react_.Fragment,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
            onClickCapture: onClickDialog,
            onClose: close,
            className: "fixed inset-0 z-50 lg:hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                    as: react_.Fragment,
                    enter: "duration-300 ease-out",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "duration-200 ease-in",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V.Panel, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                            as: react_.Fragment,
                            enter: "duration-300 ease-out",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "duration-200 ease-in",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                            as: react_.Fragment,
                            enter: "duration-500 ease-in-out",
                            enterFrom: "-translate-x-full",
                            enterTo: "translate-x-0",
                            leave: "duration-500 ease-in-out",
                            leaveFrom: "translate-x-0",
                            leaveTo: "-translate-x-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                                layoutScroll: true,
                                className: "fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {})
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function useIsInsideMobileNavigation() {
    return (0,react_.useContext)(IsInsideMobileNavigationContext);
}
const useMobileNavigationStore = (0,esm/* create */.Ue)()((set)=>({
        isOpen: false,
        open: ()=>set({
                isOpen: true
            }),
        close: ()=>set({
                isOpen: false
            }),
        toggle: ()=>set((state)=>({
                    isOpen: !state.isOpen
                }))
    }));
function MobileNavigation() {
    let isInsideMobileNavigation = useIsInsideMobileNavigation();
    let { isOpen, toggle, close } = useMobileNavigationStore();
    let ToggleIcon = isOpen ? XIcon : MenuIcon;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IsInsideMobileNavigationContext.Provider, {
        value: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
                "aria-label": "Toggle navigation",
                onClick: toggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ToggleIcon, {
                    className: "w-2.5 stroke-zinc-900 dark:stroke-white"
                })
            }),
            !isInsideMobileNavigation && /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                fallback: null,
                children: /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigationDialog, {
                    isOpen: isOpen,
                    close: close
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/SectionProvider.tsx
var SectionProvider = __webpack_require__(44683);
// EXTERNAL MODULE: ./src/components/Tag.tsx
var Tag = __webpack_require__(68958);
// EXTERNAL MODULE: ./src/lib/remToPx.ts
var remToPx = __webpack_require__(23783);
;// CONCATENATED MODULE: ./src/components/Navigation.tsx
/* __next_internal_client_entry_do_not_use__ navigation,Navigation auto */ 










function useInitialValue(value, condition = true) {
    let initialValue = (0,react_.useRef)(value).current;
    return condition ? initialValue : value;
}
function Navigation_TopLevelNavItem({ href, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "md:hidden",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            className: "block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            children: children
        })
    });
}
function NavLink({ href, children, tag, active = false, isAnchorLink = false }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        "aria-current": active ? "page" : undefined,
        className: clsx_default()("flex justify-between gap-2 py-1 pr-3 text-sm transition", isAnchorLink ? "pl-7" : "pl-4", active ? "text-zinc-900 dark:text-white" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "truncate",
                children: children
            }),
            tag && /*#__PURE__*/ jsx_runtime_.jsx(Tag/* Tag */.V, {
                variant: "small",
                color: "zinc",
                children: tag
            })
        ]
    });
}
function VisibleSectionHighlight({ group, pathname }) {
    let [sections, visibleSections] = useInitialValue([
        (0,SectionProvider/* useSectionStore */.S)((s)=>s.sections),
        (0,SectionProvider/* useSectionStore */.S)((s)=>s.visibleSections)
    ], useIsInsideMobileNavigation());
    let isPresent = (0,use_presence/* useIsPresent */.hO)();
    let firstVisibleSectionIndex = Math.max(0, [
        {
            id: "_top"
        },
        ...sections
    ].findIndex((section)=>section.id === visibleSections[0]));
    let itemHeight = (0,remToPx/* remToPx */.c)(2);
    let height = isPresent ? Math.max(1, visibleSections.length) * itemHeight : itemHeight;
    let top = group.links.findIndex((link)=>link.href === pathname) * itemHeight + firstVisibleSectionIndex * itemHeight;
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
        layout: true,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        },
        className: "absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5",
        style: {
            borderRadius: 8,
            height,
            top
        }
    });
}
function ActivePageMarker({ group, pathname }) {
    let itemHeight = (0,remToPx/* remToPx */.c)(2);
    let offset = (0,remToPx/* remToPx */.c)(0.25);
    let activePageIndex = group.links.findIndex((link)=>link.href === pathname);
    let top = offset + activePageIndex * itemHeight;
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
        layout: true,
        className: "absolute left-2 h-6 w-px bg-emerald-500",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        },
        style: {
            top
        }
    });
}
function NavigationGroup({ group, className }) {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    let isInsideMobileNavigation = useIsInsideMobileNavigation();
    let [pathname, sections] = useInitialValue([
        (0,navigation.usePathname)(),
        (0,SectionProvider/* useSectionStore */.S)((s)=>s.sections)
    ], isInsideMobileNavigation);
    let isActiveGroup = group.links.findIndex((link)=>link.href === pathname) !== -1;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: clsx_default()("relative mt-6", className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.h2, {
                layout: "position",
                className: "text-xs font-semibold text-zinc-900 dark:text-white",
                children: group.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative mt-3 pl-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                        initial: !isInsideMobileNavigation,
                        children: isActiveGroup && /*#__PURE__*/ jsx_runtime_.jsx(VisibleSectionHighlight, {
                            group: group,
                            pathname: pathname
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        layout: true,
                        className: "absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                        initial: false,
                        children: isActiveGroup && /*#__PURE__*/ jsx_runtime_.jsx(ActivePageMarker, {
                            group: group,
                            pathname: pathname
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        role: "list",
                        className: "border-l border-transparent",
                        children: group.links.map((link)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.li, {
                                layout: "position",
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                        href: link.href,
                                        active: link.href === pathname,
                                        children: link.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(AnimatePresence/* AnimatePresence */.M, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: link.href === pathname && sections.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.ul, {
                                            role: "list",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.1
                                                }
                                            },
                                            exit: {
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.15
                                                }
                                            },
                                            children: sections.map((section)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                                                        href: `${link.href}#${section.id}`,
                                                        tag: section.tag,
                                                        isAnchorLink: true,
                                                        children: section.title
                                                    })
                                                }, section.id))
                                        })
                                    })
                                ]
                            }, link.href))
                    })
                ]
            })
        ]
    });
}
const Navigation_navigation = [
    {
        title: "Guides",
        links: [
            {
                title: "Introduction",
                href: "/"
            },
            {
                title: "Quickstart",
                href: "/quickstart"
            },
            {
                title: "SDKs",
                href: "/sdks"
            },
            {
                title: "Authentication",
                href: "/authentication"
            },
            {
                title: "Pagination",
                href: "/pagination"
            },
            {
                title: "Errors",
                href: "/errors"
            },
            {
                title: "Webhooks",
                href: "/webhooks"
            }
        ]
    },
    {
        title: "Resources",
        links: [
            {
                title: "Contacts",
                href: "/contacts"
            },
            {
                title: "Conversations",
                href: "/conversations"
            },
            {
                title: "Messages",
                href: "/messages"
            },
            {
                title: "Groups",
                href: "/groups"
            },
            {
                title: "Attachments",
                href: "/attachments"
            }
        ]
    }
];
function Navigation(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            role: "list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navigation_TopLevelNavItem, {
                    href: "/",
                    children: "API"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navigation_TopLevelNavItem, {
                    href: "#",
                    children: "Documentation"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navigation_TopLevelNavItem, {
                    href: "#",
                    children: "Support"
                }),
                Navigation_navigation.map((group, groupIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(NavigationGroup, {
                        group: group,
                        className: groupIndex === 0 ? "md:mt-0" : ""
                    }, group.title)),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "sticky bottom-0 z-10 mt-6 min-[416px]:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                        href: "#",
                        variant: "filled",
                        className: "w-full",
                        children: "Sign in"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.tsx
/* __next_internal_client_entry_do_not_use__ Footer auto */ 




function PageLink({ label, page, previous = false }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                href: page.href,
                "aria-label": `${label}: ${page.title}`,
                variant: "secondary",
                arrow: previous ? "left" : "right",
                children: label
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: page.href,
                tabIndex: -1,
                "aria-hidden": "true",
                className: "text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300",
                children: page.title
            })
        ]
    });
}
function PageNavigation() {
    let pathname = (0,navigation.usePathname)();
    let allPages = Navigation_navigation.flatMap((group)=>group.links);
    let currentPageIndex = allPages.findIndex((page)=>page.href === pathname);
    if (currentPageIndex === -1) {
        return null;
    }
    let previousPage = allPages[currentPageIndex - 1];
    let nextPage = allPages[currentPageIndex + 1];
    if (!previousPage && !nextPage) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            previousPage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col items-start gap-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(PageLink, {
                    label: "Previous",
                    page: previousPage,
                    previous: true
                })
            }),
            nextPage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ml-auto flex flex-col items-end gap-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx(PageLink, {
                    label: "Next",
                    page: nextPage
                })
            })
        ]
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
        })
    });
}
function DiscordIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"
        })
    });
}
function SocialLink({ href, icon: Icon, children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "group",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                className: "h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
            })
        ]
    });
}
function SmallPrint() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "text-xs text-zinc-600 dark:text-zinc-400",
                children: [
                    "\xa9 Copyright ",
                    new Date().getFullYear(),
                    ". All rights reserved."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                        href: "#",
                        icon: TwitterIcon,
                        children: "Follow us on Twitter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                        href: "#",
                        icon: GitHubIcon,
                        children: "Follow us on GitHub"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                        href: "#",
                        icon: DiscordIcon,
                        children: "Join our Discord server"
                    })
                ]
            })
        ]
    });
}
function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageNavigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(SmallPrint, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Layout.tsx
/* __next_internal_client_entry_do_not_use__ Layout auto */ 








function Layout({ children, allSections }) {
    let pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionProvider/* SectionProvider */.s, {
        sections: allSections[pathname] ?? [],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "h-full lg:ml-72 xl:ml-80",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.header, {
                    layoutScroll: true,
                    className: "contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden lg:flex",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    "aria-label": "Home",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                        className: "h-6"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                className: "hidden lg:mt-10 lg:block"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "flex-auto",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 85984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Resources: () => (/* binding */ Resources)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(13109);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/value/use-motion-template.mjs
var use_motion_template = __webpack_require__(15146);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/render/dom/motion.mjs + 157 modules
var motion = __webpack_require__(27410);
// EXTERNAL MODULE: ./node_modules/.pnpm/framer-motion@7.8.1_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var use_motion_value = __webpack_require__(39554);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/GridPattern.tsx


function GridPattern({ width, height, x, y, squares, ...props }) {
    let patternId = (0,react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                    id: patternId,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: `M.5 ${height}V.5H${width}`,
                        fill: "none"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${patternId})`
            }),
            squares && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                x: x,
                y: y,
                className: "overflow-visible",
                children: squares.map(([x, y])=>/*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        strokeWidth: "0",
                        width: width + 1,
                        height: height + 1,
                        x: x * width,
                        y: y * height
                    }, `${x}-${y}`))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(67638);
;// CONCATENATED MODULE: ./src/components/icons/ChatBubbleIcon.tsx

function ChatBubbleIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 8.5h5M8.5 11.5h3"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/EnvelopeIcon.tsx

function EnvelopeIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/UserIcon.tsx

function UserIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeWidth: "0",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/icons/UsersIcon.tsx

function UsersIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Resources.tsx
/* __next_internal_client_entry_do_not_use__ Resources auto */ 








const resources = [
    {
        href: "/contacts",
        name: "Contacts",
        description: "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
        icon: UserIcon,
        pattern: {
            y: 16,
            squares: [
                [
                    0,
                    1
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "/conversations",
        name: "Conversations",
        description: "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
        icon: ChatBubbleIcon,
        pattern: {
            y: -6,
            squares: [
                [
                    -1,
                    2
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "/messages",
        name: "Messages",
        description: "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
        icon: EnvelopeIcon,
        pattern: {
            y: 32,
            squares: [
                [
                    0,
                    2
                ],
                [
                    1,
                    4
                ]
            ]
        }
    },
    {
        href: "/groups",
        name: "Groups",
        description: "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
        icon: UsersIcon,
        pattern: {
            y: 22,
            squares: [
                [
                    0,
                    1
                ]
            ]
        }
    }
];
function ResourceIcon({ icon: Icon }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
            className: "h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
        })
    });
}
function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
    let maskImage = use_motion_template/* useMotionTemplate */.Y`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = {
        maskImage,
        WebkitMaskImage: maskImage
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "pointer-events-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridPattern, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",
                    ...gridProps
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",
                style: style
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                className: "absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",
                style: style,
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridPattern, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",
                    ...gridProps
                })
            })
        ]
    });
}
function Resource({ resource }) {
    let mouseX = (0,use_motion_value/* useMotionValue */.c)(0);
    let mouseY = (0,use_motion_value/* useMotionValue */.c)(0);
    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseMove: onMouseMove,
        className: "group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ResourcePattern, {
                ...resource.pattern,
                mouseX: mouseX,
                mouseY: mouseY
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative rounded-2xl px-4 pb-4 pt-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ResourceIcon, {
                        icon: resource.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: resource.href,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "absolute inset-0 rounded-2xl"
                                }),
                                resource.name
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                        children: resource.description
                    })
                ]
            })
        ]
    }, resource.href);
}
function Resources() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "my-16 xl:max-w-none",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading.Heading, {
                level: 2,
                id: "resources",
                children: "Resources"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                children: resources.map((resource)=>/*#__PURE__*/ jsx_runtime_.jsx(Resource, {
                        resource: resource
                    }, resource.href))
            })
        ]
    });
}


/***/ }),

/***/ 44683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useSectionStore),
/* harmony export */   s: () => (/* binding */ SectionProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17645);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6821);
/* harmony import */ var _lib_remToPx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23783);
/* __next_internal_client_entry_do_not_use__ SectionProvider,useSectionStore auto */ 



function createSectionStore(sections) {
    return (0,zustand__WEBPACK_IMPORTED_MODULE_2__/* .createStore */ .M)()((set)=>({
            sections,
            visibleSections: [],
            setVisibleSections: (visibleSections)=>set((state)=>state.visibleSections.join() === visibleSections.join() ? {} : {
                        visibleSections
                    }),
            registerHeading: ({ id, ref, offsetRem })=>set((state)=>{
                    return {
                        sections: state.sections.map((section)=>{
                            if (section.id === id) {
                                return {
                                    ...section,
                                    headingRef: ref,
                                    offsetRem
                                };
                            }
                            return section;
                        })
                    };
                })
        }));
}
function useVisibleSections(sectionStore) {
    let setVisibleSections = (0,zustand__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)(sectionStore, (s)=>s.setVisibleSections);
    let sections = (0,zustand__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)(sectionStore, (s)=>s.sections);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function checkVisibleSections() {
            let { innerHeight, scrollY } = window;
            let newVisibleSections = [];
            for(let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++){
                let { id, headingRef, offsetRem = 0 } = sections[sectionIndex];
                if (!headingRef?.current) {
                    continue;
                }
                let offset = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_4__/* .remToPx */ .c)(offsetRem);
                let top = headingRef.current.getBoundingClientRect().top + scrollY;
                if (sectionIndex === 0 && top - offset > scrollY) {
                    newVisibleSections.push("_top");
                }
                let nextSection = sections[sectionIndex + 1];
                let bottom = (nextSection?.headingRef?.current?.getBoundingClientRect().top ?? Infinity) + scrollY - (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_4__/* .remToPx */ .c)(nextSection?.offsetRem ?? 0);
                if (top > scrollY && top < scrollY + innerHeight || bottom > scrollY && bottom < scrollY + innerHeight || top <= scrollY && bottom >= scrollY + innerHeight) {
                    newVisibleSections.push(id);
                }
            }
            setVisibleSections(newVisibleSections);
        }
        let raf = window.requestAnimationFrame(()=>checkVisibleSections());
        window.addEventListener("scroll", checkVisibleSections, {
            passive: true
        });
        window.addEventListener("resize", checkVisibleSections);
        return ()=>{
            window.cancelAnimationFrame(raf);
            window.removeEventListener("scroll", checkVisibleSections);
            window.removeEventListener("resize", checkVisibleSections);
        };
    }, [
        setVisibleSections,
        sections
    ]);
}
const SectionStoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const useIsomorphicLayoutEffect =  true ? react__WEBPACK_IMPORTED_MODULE_1__.useEffect : 0;
function SectionProvider({ sections, children }) {
    let [sectionStore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>createSectionStore(sections));
    useVisibleSections(sectionStore);
    useIsomorphicLayoutEffect(()=>{
        sectionStore.setState({
            sections
        });
    }, [
        sectionStore,
        sections
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionStoreContext.Provider, {
        value: sectionStore,
        children: children
    });
}
function useSectionStore(selector) {
    let store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SectionStoreContext);
    return (0,zustand__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)(store, selector);
}


/***/ }),

/***/ 68958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4790);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const variantStyles = {
    small: "",
    medium: "rounded-lg px-1.5 ring-1 ring-inset"
};
const colorStyles = {
    emerald: {
        small: "text-emerald-500 dark:text-emerald-400",
        medium: "ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"
    },
    sky: {
        small: "text-sky-500",
        medium: "ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400"
    },
    amber: {
        small: "text-amber-500",
        medium: "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400"
    },
    rose: {
        small: "text-red-500 dark:text-rose-500",
        medium: "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"
    },
    zinc: {
        small: "text-zinc-400 dark:text-zinc-500",
        medium: "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400"
    }
};
const valueColorMap = {
    GET: "emerald",
    POST: "sky",
    PUT: "amber",
    DELETE: "rose"
};
function Tag({ children, variant = "medium", color = valueColorMap[children] ?? "emerald" }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("font-mono text-[0.625rem] font-semibold leading-6", variantStyles[variant], colorStyles[color][variant]),
        children: children
    });
}


/***/ }),

/***/ 23783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ remToPx)
/* harmony export */ });
function remToPx(remValue) {
    let rootFontSize =  true ? 16 : 0;
    return remValue * rootFontSize;
}


/***/ }),

/***/ 91401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/fast-glob@3.3.1/node_modules/fast-glob/out/index.js
var out = __webpack_require__(14917);
var out_default = /*#__PURE__*/__webpack_require__.n(out);
// EXTERNAL MODULE: ./src/app/providers.tsx
var providers = __webpack_require__(27307);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(80027);
;// CONCATENATED MODULE: ./src/components/Layout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/hossam/Documents/GitHub/Islamic_ware/src/components/Layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Layout"];

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(85088);
;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: {
        template: "%s - Protocol API Reference",
        default: "Protocol API Reference"
    }
};
async function RootLayout({ children }) {
    let pages = await out_default()("**/*.mdx", {
        cwd: "src/app"
    });
    let allSectionsEntries = await Promise.all(pages.map(async (filename)=>[
            "/" + filename.replace(/(^|\/)page\.mdx$/, ""),
            (await __webpack_require__(40058)(`./${filename}`)).sections
        ]));
    let allSections = Object.fromEntries(allSectionsEntries);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full bg-white antialiased dark:bg-zinc-900",
            children: /*#__PURE__*/ jsx_runtime_.jsx(providers.Providers, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                        allSections: allSections,
                        children: children
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 41086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50632);
/* harmony import */ var _components_HeroPattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36980);



function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeroPattern__WEBPACK_IMPORTED_MODULE_2__/* .HeroPattern */ .f, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm font-semibold text-zinc-900 dark:text-white",
                        children: "404"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mt-2 text-2xl font-bold text-zinc-900 dark:text-white",
                        children: "Page not found"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-2 text-base text-zinc-600 dark:text-zinc-400",
                        children: "Sorry, we couldn’t find the page you’re looking for."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                        href: "/",
                        arrow: "right",
                        className: "mt-8",
                        children: "Back to docs"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 27307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Providers: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80027);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/hossam/Documents/GitHub/Islamic_ware/src/app/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];


/***/ }),

/***/ 50632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67780);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44574);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



function ArrowIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
        })
    });
}
const variantStyles = {
    primary: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300",
    secondary: "rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
    filled: "rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400",
    outline: "rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",
    text: "text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
};
function Button({ variant = "primary", className, children, arrow, ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()("inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition", variantStyles[variant], className);
    let arrowIcon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowIcon, {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("mt-0.5 h-5 w-5", variant === "text" && "relative top-px", arrow === "left" && "-ml-1 rotate-180", arrow === "right" && "-mr-1")
    });
    let inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            arrow === "left" && arrowIcon,
            children,
            arrow === "right" && arrowIcon
        ]
    });
    if (typeof props.href === "undefined") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: className,
        ...props,
        children: inner
    });
}


/***/ }),

/***/ 36980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ HeroPattern)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.16_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(17240);
;// CONCATENATED MODULE: ./src/components/GridPattern.tsx


function GridPattern({ width, height, x, y, squares, ...props }) {
    let patternId = (0,react_shared_subset.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("pattern", {
                    id: patternId,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: `M.5 ${height}V.5H${width}`,
                        fill: "none"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${patternId})`
            }),
            squares && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                x: x,
                y: y,
                className: "overflow-visible",
                children: squares.map(([x, y])=>/*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        strokeWidth: "0",
                        width: width + 1,
                        height: height + 1,
                        x: x * width,
                        y: y * height
                    }, `${x}-${y}`))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/HeroPattern.tsx


function HeroPattern() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(GridPattern, {
                        width: 72,
                        height: 56,
                        x: -12,
                        y: 4,
                        squares: [
                            [
                                4,
                                3
                            ],
                            [
                                2,
                                1
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                10,
                                6
                            ]
                        ],
                        className: "absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    viewBox: "0 0 1113 440",
                    "aria-hidden": "true",
                    className: "absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 57292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/favicon.cd63c84a.ico","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 6084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/go.135b57cb.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 13380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/node.9b20f647.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 54211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/php.2e2ae735.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 13557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/python.ab26a920.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 24471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ruby.4c6b71be.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 81745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46155);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"48x48"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 85088:
/***/ (() => {



/***/ })

};
;