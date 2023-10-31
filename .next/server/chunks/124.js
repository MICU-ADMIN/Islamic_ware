exports.id = 124;
exports.ids = [124];
exports.modules = {

/***/ 391:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ }),

/***/ 3380:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _interop_require_wildcard = __webpack_require__(4009);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(8038));
const _reactdom = __webpack_require__(8704);
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6864));
const _getimgprops = __webpack_require__(1830);
const _imageconfig = __webpack_require__(2210);
const _imageconfigcontext = __webpack_require__(5359);
const _warnonce = __webpack_require__(8658);
const _routercontext = __webpack_require__(7160);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(5246));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.preload) {
        // See https://github.com/facebook/react/pull/26940
        (0, _reactdom.preload)(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        // Note how we omit the `href` attribute, as it would only be relevant
        // for browsers that do not support `imagesrcset`, and in those cases
        // it would cause the incorrect image to be preloaded.
        //
        // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        ...opts
    }));
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontext.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgAttributes,
        unoptimized: imgMeta.unoptimized,
        placeholder: imgMeta.placeholder,
        fill: imgMeta.fill,
        onLoadRef: onLoadRef,
        onLoadingCompleteRef: onLoadingCompleteRef,
        setBlurComplete: setBlurComplete,
        setShowAltText: setShowAltText,
        ref: forwardedRef
    }), imgMeta.priority ? /*#__PURE__*/ _react.default.createElement(ImagePreload, {
        isAppRouter: isAppRouter,
        imgAttributes: imgAttributes
    }) : null);
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 5246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 8292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/hossam/Documents/GitHub/Islamic_ware/node_modules/next/dist/client/image-component.js");
 //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(1416);
const _imageblursvg = __webpack_require__(3032);
const _imageconfig = __webpack_require__(4169);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 3032:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 4169:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 7739:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(3297);
const _getimgprops = __webpack_require__(474);
const _warnonce = __webpack_require__(1416);
const _imagecomponent = __webpack_require__(8292);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2967));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 2967:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 1416:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 4178:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(7739);


/***/ }),

/***/ 3548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ kt)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
function match_u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,match_u),t}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
function class_names_e(...n){return n.filter(Boolean).join(" ")}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c(o,e,a,f);let u=s!=null?s:0;if(u&2){let{static:l=!1,...p}=o;if(l)return c(p,e,a,f)}if(u&1){let{unmount:l=!0,...p}=o;return match_u(l?0:1,{[0](){return null},[1](){return c({...p,hidden:!0,style:{display:"none"}},e,a,f)}})}return c(o,e,a,f)}function c(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=r.ref!==void 0?{[f]:r.ref}:{},l=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))typeof d=="boolean"&&(i=!0),d===!0&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "))}if(s===react_.Fragment&&Object.keys(R(o)).length>0){if(!(0,react_.isValidElement)(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let i=l.props,m=typeof(i==null?void 0:i.className)=="function"?(...d)=>class_names_e(i==null?void 0:i.className(...d),o.className):class_names_e(i==null?void 0:i.className,o.className),y=m?{className:m}:{};return (0,react_.cloneElement)(l,Object.assign({},N(l.props,R(g(o,["ref"]))),p,u,w(l.ref,u.ref),y))}return (0,react_.createElement)(s,Object.assign({},g(o,["ref"]),s!==react_.Fragment&&u,s!==react_.Fragment&&p),l)}function w(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function N(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f)}}});return t}function D(r){var t;return Object.assign((0,react_.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function R(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
let use_iso_morphic_effect_l=(e,f)=>{s.isServer?(0,react_.useEffect)(e,f):(0,react_.useLayoutEffect)(e,f)};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function use_latest_value_s(e){let r=(0,react_.useRef)(e);return use_iso_morphic_effect_l(()=>{r.current=e},[e]),r}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
let use_event_o=function(t){let e=use_latest_value_s(t);return react_.useCallback((...r)=>e.current(...r),[e])};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
let u=Symbol();function use_sync_refs_T(t,n=!0){return Object.assign(t,{[u]:n})}function use_sync_refs_y(...t){let n=(0,react_.useRef)(t);(0,react_.useEffect)(()=>{n.current=t},[t]);let c=use_event_o(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
function use_server_handoff_complete_l(){let[e,f]=(0,react_.useState)(s.isHandoffComplete);return e&&s.isHandoffComplete===!1&&f(!1),(0,react_.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react_.useEffect)(()=>s.handoff(),[]),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id_o;let I=(use_id_o=react_.useId)!=null?use_id_o:function(){let n=use_server_handoff_complete_l(),[e,u]=react_.useState(n?()=>s.nextId():null);return use_iso_morphic_effect_l(()=>{e===null&&u(s.nextId())},[e]),e!=null?""+e:void 0};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard_o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(keyboard_o||{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
function bugs_r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&bugs_i(l)?!1:t}function bugs_i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
function owner_e(r){return s.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
let focus_management_c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var focus_management_M=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(focus_management_M||{}),focus_management_N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(focus_management_N||{}),F=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F||{});function focus_management_f(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(focus_management_c)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var focus_management_T=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(focus_management_T||{});function focus_management_h(e,r=0){var t;return e===((t=owner_e(e))==null?void 0:t.body)?!1:match_u(r,{[0](){return e.matches(focus_management_c)},[1](){let l=e;for(;l!==null;){if(l.matches(focus_management_c))return!0;l=l.parentElement}return!1}})}function focus_management_D(e){let r=m(e);b().nextFrame(()=>{r&&!focus_management_h(r.activeElement,0)&&y(e)})}var focus_management_w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(focus_management_w||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function y(e){e==null||e.focus({preventScroll:!0})}let focus_management_S=["textarea","input"].join(",");function H(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,focus_management_S))!=null?t:!1}function focus_management_I(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,r){return focus_management_O(focus_management_f(),r,{relativeTo:e})}function focus_management_O(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?focus_management_I(e):e:focus_management_f(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
let n=(0,react_.createContext)(null);n.displayName="OpenClosedContext";var open_closed_d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(open_closed_d||{});function C(){return (0,react_.useContext)(n)}function open_closed_c({value:o,children:r}){return react_.createElement(n.Provider,{value:o},r)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
function use_resolve_button_type_i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function use_resolve_button_type_s(t,e){let[n,u]=(0,react_.useState)(()=>use_resolve_button_type_i(t));return use_iso_morphic_effect_l(()=>{u(use_resolve_button_type_i(t))},[t.type,t.as]),use_iso_morphic_effect_l(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-document-event.js
function use_document_event_d(e,r,n){let o=use_latest_value_s(r);(0,react_.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.js
function use_window_event_s(e,r,n){let o=use_latest_value_s(r);(0,react_.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function use_outside_click_H(s,m,i=!0){let l=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>{requestAnimationFrame(()=>{l.current=i})},[i]);function a(e,o){if(!l.current||e.defaultPrevented)return;let n=o(e);if(n===null||!n.getRootNode().contains(n))return;let E=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(s);for(let r of E){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!focus_management_h(n,focus_management_T.Loose)&&n.tabIndex!==-1&&e.preventDefault(),m(e,n)}let u=(0,react_.useRef)(null);use_document_event_d("mousedown",e=>{var o,n;l.current&&(u.current=((n=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:n[0])||e.target)},!0),use_document_event_d("click",e=>{u.current&&(a(e,()=>u.current),u.current=null)},!0),use_window_event_s("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-owner.js
function use_owner_n(...e){return (0,react_.useMemo)(()=>owner_e(...e),[...e])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function use_event_listener_E(n,e,a,t){let i=use_latest_value_s(a);(0,react_.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
let a="div";var hidden_p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(hidden_p||{});function hidden_s(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return X({ourProps:d,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let hidden_c=D(hidden_s);

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});function use_tab_direction_n(){let e=(0,react_.useRef)(0);return use_window_event_s("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-root-containers.js
function use_root_containers_p({defaultContainers:f=[],portals:o}={}){let t=(0,react_.useRef)(null),i=use_owner_n(t),u=use_event_o(()=>{var r;let n=[];for(let e of f)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(o!=null&&o.current)for(let e of o.current)n.push(e);for(let e of(r=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?r:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||n.some(c=>e.contains(c))||n.push(e));return n});return{resolveContainers:u,contains:use_event_o(n=>u().some(r=>r.contains(n))),mainTreeNodeRef:t,MainTreeNode:(0,react_.useMemo)(()=>function(){return react_.createElement(hidden_c,{features:hidden_p.Hidden,ref:t})},[t])}}

// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(8704);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/portal-force-root.js
let e=(0,react_.createContext)(!1);function portal_force_root_l(){return (0,react_.useContext)(e)}function P(o){return t.createElement(e.Provider,{value:o.force},o.children)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
function micro_task_t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
function use_on_unmount_c(t){let r=use_event_o(t),e=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>(e.current=!1,()=>{e.current=!0,micro_task_t(()=>{e.current&&r()})}),[r])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/portal/portal.js
function portal_F(p){let l=portal_force_root_l(),n=(0,react_.useContext)(v),e=use_owner_n(p),[a,o]=(0,react_.useState)(()=>{if(!l&&n!==null||s.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return (0,react_.useEffect)(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a))},[a,e]),(0,react_.useEffect)(()=>{l||n!==null&&o(n.current)},[n,o,l]),a}let U=react_.Fragment;function portal_N(p,l){let n=p,e=(0,react_.useRef)(null),a=use_sync_refs_y(use_sync_refs_T(u=>{e.current=u}),l),o=use_owner_n(e),t=portal_F(e),[r]=(0,react_.useState)(()=>{var u;return s.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=(0,react_.useContext)(f),C=use_server_handoff_complete_l();return use_iso_morphic_effect_l(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r))},[t,r]),use_iso_morphic_effect_l(()=>{if(r&&i)return i.register(r)},[i,r]),use_on_unmount_c(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)))}),C?!t||!r?null:(0,server_rendering_stub_.createPortal)(X({ourProps:{ref:a},theirProps:n,defaultTag:U,name:"Portal"}),r):null}let portal_S=react_.Fragment,v=(0,react_.createContext)(null);function portal_j(p,l){let{target:n,...e}=p,o={ref:use_sync_refs_y(l)};return react_.createElement(v.Provider,{value:n},X({ourProps:o,theirProps:e,defaultTag:portal_S,name:"Popover.Group"}))}let f=(0,react_.createContext)(null);function ae(){let p=(0,react_.useContext)(f),l=(0,react_.useRef)([]),n=use_event_o(o=>(l.current.push(o),p&&p.register(o),()=>e(o))),e=use_event_o(o=>{let t=l.current.indexOf(o);t!==-1&&l.current.splice(t,1),p&&p.unregister(o)}),a=(0,react_.useMemo)(()=>({register:n,unregister:e,portals:l}),[n,e,l]);return[l,(0,react_.useMemo)(()=>function({children:t}){return react_.createElement(f.Provider,{value:a},t)},[a])]}let portal_D=D(portal_N),portal_I=D(portal_j),pe=Object.assign(portal_D,{Group:portal_I});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js
var De=(u=>(u[u.Open=0]="Open",u[u.Closed=1]="Closed",u))(De||{}),he=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(he||{});let He={[0]:t=>{let o={...t,popoverState:match_u(t.popoverState,{[0]:1,[1]:0})};return o.popoverState===0&&(o.__demoMode=!1),o},[1](t){return t.popoverState===1?t:{...t,popoverState:1}},[2](t,o){return t.button===o.button?t:{...t,button:o.button}},[3](t,o){return t.buttonId===o.buttonId?t:{...t,buttonId:o.buttonId}},[4](t,o){return t.panel===o.panel?t:{...t,panel:o.panel}},[5](t,o){return t.panelId===o.panelId?t:{...t,panelId:o.panelId}}},ue=(0,react_.createContext)(null);ue.displayName="PopoverContext";function oe(t){let o=(0,react_.useContext)(ue);if(o===null){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,oe),u}return o}let ie=(0,react_.createContext)(null);ie.displayName="PopoverAPIContext";function fe(t){let o=(0,react_.useContext)(ie);if(o===null){let u=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,fe),u}return o}let Pe=(0,react_.createContext)(null);Pe.displayName="PopoverGroupContext";function Ee(){return (0,react_.useContext)(Pe)}let re=(0,react_.createContext)(null);re.displayName="PopoverPanelContext";function _e(){return (0,react_.useContext)(re)}function Ge(t,o){return match_u(o.type,He,t,o)}let ke="div";function we(t,o){var I;let{__demoMode:u=!1,...A}=t,O=(0,react_.useRef)(null),n=use_sync_refs_y(o,use_sync_refs_T(l=>{O.current=l})),e=(0,react_.useRef)([]),T=(0,react_.useReducer)(Ge,{__demoMode:u,popoverState:u?0:1,buttons:e,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react_.createRef)(),afterPanelSentinel:(0,react_.createRef)()}),[{popoverState:P,button:p,buttonId:F,panel:a,panelId:m,beforePanelSentinel:y,afterPanelSentinel:s},i]=T,d=use_owner_n((I=O.current)!=null?I:p),g=(0,react_.useMemo)(()=>{if(!p||!a)return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(p))^Number(K==null?void 0:K.contains(a)))return!0;let l=focus_management_f(),R=l.indexOf(p),q=(R+l.length-1)%l.length,W=(R+1)%l.length,z=l[q],ge=l[W];return!a.contains(z)&&!a.contains(ge)},[p,a]),L=use_latest_value_s(F),h=use_latest_value_s(m),_=(0,react_.useMemo)(()=>({buttonId:L,panelId:h,close:()=>i({type:1})}),[L,h,i]),B=Ee(),D=B==null?void 0:B.registerPopover,f=use_event_o(()=>{var l;return(l=B==null?void 0:B.isFocusWithinPopoverGroup())!=null?l:(d==null?void 0:d.activeElement)&&((p==null?void 0:p.contains(d.activeElement))||(a==null?void 0:a.contains(d.activeElement)))});(0,react_.useEffect)(()=>D==null?void 0:D(_),[D,_]);let[E,b]=ae(),c=use_root_containers_p({portals:E,defaultContainers:[p,a]});use_event_listener_E(d==null?void 0:d.defaultView,"focus",l=>{var R,q,W,z;l.target!==window&&l.target instanceof HTMLElement&&P===0&&(f()||p&&a&&(c.contains(l.target)||(q=(R=y.current)==null?void 0:R.contains)!=null&&q.call(R,l.target)||(z=(W=s.current)==null?void 0:W.contains)!=null&&z.call(W,l.target)||i({type:1})))},!0),use_outside_click_H(c.resolveContainers,(l,R)=>{i({type:1}),focus_management_h(R,focus_management_T.Loose)||(l.preventDefault(),p==null||p.focus())},P===0);let M=use_event_o(l=>{i({type:1});let R=(()=>l?l instanceof HTMLElement?l:"current"in l&&l.current instanceof HTMLElement?l.current:p:p)();R==null||R.focus()}),r=(0,react_.useMemo)(()=>({close:M,isPortalled:g}),[M,g]),v=(0,react_.useMemo)(()=>({open:P===0,close:M}),[P,M]),x={ref:n};return react_.createElement(re.Provider,{value:null},react_.createElement(ue.Provider,{value:T},react_.createElement(ie.Provider,{value:r},react_.createElement(open_closed_c,{value:match_u(P,{[0]:open_closed_d.Open,[1]:open_closed_d.Closed})},react_.createElement(b,null,X({ourProps:x,theirProps:A,slot:v,defaultTag:ke,name:"Popover"}),react_.createElement(c.MainTreeNode,null))))))}let Ne="button";function Ue(t,o){let u=I(),{id:A=`headlessui-popover-button-${u}`,...O}=t,[n,e]=oe("Popover.Button"),{isPortalled:T}=fe("Popover.Button"),P=(0,react_.useRef)(null),p=`headlessui-focus-sentinel-${I()}`,F=Ee(),a=F==null?void 0:F.closeOthers,y=_e()!==null;(0,react_.useEffect)(()=>{if(!y)return e({type:3,buttonId:A}),()=>{e({type:3,buttonId:null})}},[y,A,e]);let[s]=(0,react_.useState)(()=>Symbol()),i=use_sync_refs_y(P,o,y?null:r=>{if(r)n.buttons.current.push(s);else{let v=n.buttons.current.indexOf(s);v!==-1&&n.buttons.current.splice(v,1)}n.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),r&&e({type:2,button:r})}),d=use_sync_refs_y(P,o),g=use_owner_n(P),L=use_event_o(r=>{var v,x,I;if(y){if(n.popoverState===1)return;switch(r.key){case keyboard_o.Space:case keyboard_o.Enter:r.preventDefault(),(x=(v=r.target).click)==null||x.call(v),e({type:1}),(I=n.button)==null||I.focus();break}}else switch(r.key){case keyboard_o.Space:case keyboard_o.Enter:r.preventDefault(),r.stopPropagation(),n.popoverState===1&&(a==null||a(n.buttonId)),e({type:0});break;case keyboard_o.Escape:if(n.popoverState!==0)return a==null?void 0:a(n.buttonId);if(!P.current||g!=null&&g.activeElement&&!P.current.contains(g.activeElement))return;r.preventDefault(),r.stopPropagation(),e({type:1});break}}),h=use_event_o(r=>{y||r.key===keyboard_o.Space&&r.preventDefault()}),_=use_event_o(r=>{var v,x;bugs_r(r.currentTarget)||t.disabled||(y?(e({type:1}),(v=n.button)==null||v.focus()):(r.preventDefault(),r.stopPropagation(),n.popoverState===1&&(a==null||a(n.buttonId)),e({type:0}),(x=n.button)==null||x.focus()))}),B=use_event_o(r=>{r.preventDefault(),r.stopPropagation()}),D=n.popoverState===0,f=(0,react_.useMemo)(()=>({open:D}),[D]),E=use_resolve_button_type_s(t,P),b=y?{ref:d,type:E,onKeyDown:L,onClick:_}:{ref:i,id:n.buttonId,type:E,"aria-expanded":t.disabled?void 0:n.popoverState===0,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:L,onKeyUp:h,onClick:_,onMouseDown:B},c=use_tab_direction_n(),M=use_event_o(()=>{let r=n.panel;if(!r)return;function v(){match_u(c.current,{[use_tab_direction_s.Forwards]:()=>focus_management_O(r,focus_management_M.First),[use_tab_direction_s.Backwards]:()=>focus_management_O(r,focus_management_M.Last)})===focus_management_N.Error&&focus_management_O(focus_management_f().filter(I=>I.dataset.headlessuiFocusGuard!=="true"),match_u(c.current,{[use_tab_direction_s.Forwards]:focus_management_M.Next,[use_tab_direction_s.Backwards]:focus_management_M.Previous}),{relativeTo:n.button})}v()});return react_.createElement(react_.Fragment,null,X({ourProps:b,theirProps:O,slot:f,defaultTag:Ne,name:"Popover.Button"}),D&&!y&&T&&react_.createElement(hidden_c,{id:p,features:hidden_p.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:M}))}let We="div",Ke=S.RenderStrategy|S.Static;function je(t,o){let u=I(),{id:A=`headlessui-popover-overlay-${u}`,...O}=t,[{popoverState:n},e]=oe("Popover.Overlay"),T=use_sync_refs_y(o),P=C(),p=(()=>P!==null?(P&open_closed_d.Open)===open_closed_d.Open:n===0)(),F=use_event_o(y=>{if(bugs_r(y.currentTarget))return y.preventDefault();e({type:1})}),a=(0,react_.useMemo)(()=>({open:n===0}),[n]);return X({ourProps:{ref:T,id:A,"aria-hidden":!0,onClick:F},theirProps:O,slot:a,defaultTag:We,features:Ke,visible:p,name:"Popover.Overlay"})}let Ve="div",$e=S.RenderStrategy|S.Static;function Je(t,o){let u=I(),{id:A=`headlessui-popover-panel-${u}`,focus:O=!1,...n}=t,[e,T]=oe("Popover.Panel"),{close:P,isPortalled:p}=fe("Popover.Panel"),F=`headlessui-focus-sentinel-before-${I()}`,a=`headlessui-focus-sentinel-after-${I()}`,m=(0,react_.useRef)(null),y=use_sync_refs_y(m,o,f=>{T({type:4,panel:f})}),s=use_owner_n(m);use_iso_morphic_effect_l(()=>(T({type:5,panelId:A}),()=>{T({type:5,panelId:null})}),[A,T]);let i=C(),d=(()=>i!==null?(i&open_closed_d.Open)===open_closed_d.Open:e.popoverState===0)(),g=use_event_o(f=>{var E;switch(f.key){case keyboard_o.Escape:if(e.popoverState!==0||!m.current||s!=null&&s.activeElement&&!m.current.contains(s.activeElement))return;f.preventDefault(),f.stopPropagation(),T({type:1}),(E=e.button)==null||E.focus();break}});(0,react_.useEffect)(()=>{var f;t.static||e.popoverState===1&&((f=t.unmount)==null||f)&&T({type:4,panel:null})},[e.popoverState,t.unmount,t.static,T]),(0,react_.useEffect)(()=>{if(e.__demoMode||!O||e.popoverState!==0||!m.current)return;let f=s==null?void 0:s.activeElement;m.current.contains(f)||focus_management_O(m.current,focus_management_M.First)},[e.__demoMode,O,m,e.popoverState]);let L=(0,react_.useMemo)(()=>({open:e.popoverState===0,close:P}),[e,P]),h={ref:y,id:A,onKeyDown:g,onBlur:O&&e.popoverState===0?f=>{var b,c,M,r,v;let E=f.relatedTarget;E&&m.current&&((b=m.current)!=null&&b.contains(E)||(T({type:1}),((M=(c=e.beforePanelSentinel.current)==null?void 0:c.contains)!=null&&M.call(c,E)||(v=(r=e.afterPanelSentinel.current)==null?void 0:r.contains)!=null&&v.call(r,E))&&E.focus({preventScroll:!0})))}:void 0,tabIndex:-1},_=use_tab_direction_n(),B=use_event_o(()=>{let f=m.current;if(!f)return;function E(){match_u(_.current,{[use_tab_direction_s.Forwards]:()=>{var c;focus_management_O(f,focus_management_M.First)===focus_management_N.Error&&((c=e.afterPanelSentinel.current)==null||c.focus())},[use_tab_direction_s.Backwards]:()=>{var b;(b=e.button)==null||b.focus({preventScroll:!0})}})}E()}),D=use_event_o(()=>{let f=m.current;if(!f)return;function E(){match_u(_.current,{[use_tab_direction_s.Forwards]:()=>{var x;if(!e.button)return;let b=focus_management_f(),c=b.indexOf(e.button),M=b.slice(0,c+1),v=[...b.slice(c+1),...M];for(let I of v.slice())if(I.dataset.headlessuiFocusGuard==="true"||(x=e.panel)!=null&&x.contains(I)){let l=v.indexOf(I);l!==-1&&v.splice(l,1)}focus_management_O(v,focus_management_M.First,{sorted:!1})},[use_tab_direction_s.Backwards]:()=>{var c;focus_management_O(f,focus_management_M.Previous)===focus_management_N.Error&&((c=e.button)==null||c.focus())}})}E()});return react_.createElement(re.Provider,{value:A},d&&p&&react_.createElement(hidden_c,{id:F,ref:e.beforePanelSentinel,features:hidden_p.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:B}),X({ourProps:h,theirProps:n,slot:L,defaultTag:Ve,features:$e,visible:d,name:"Popover.Panel"}),d&&p&&react_.createElement(hidden_c,{id:a,ref:e.afterPanelSentinel,features:hidden_p.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}))}let Xe="div";function Ye(t,o){let u=(0,react_.useRef)(null),A=use_sync_refs_y(u,o),[O,n]=(0,react_.useState)([]),e=use_event_o(s=>{n(i=>{let d=i.indexOf(s);if(d!==-1){let g=i.slice();return g.splice(d,1),g}return i})}),T=use_event_o(s=>(n(i=>[...i,s]),()=>e(s))),P=use_event_o(()=>{var d;let s=owner_e(u);if(!s)return!1;let i=s.activeElement;return(d=u.current)!=null&&d.contains(i)?!0:O.some(g=>{var L,h;return((L=s.getElementById(g.buttonId.current))==null?void 0:L.contains(i))||((h=s.getElementById(g.panelId.current))==null?void 0:h.contains(i))})}),p=use_event_o(s=>{for(let i of O)i.buttonId.current!==s&&i.close()}),F=(0,react_.useMemo)(()=>({registerPopover:T,unregisterPopover:e,isFocusWithinPopoverGroup:P,closeOthers:p}),[T,e,P,p]),a=(0,react_.useMemo)(()=>({}),[]),m=t,y={ref:A};return react_.createElement(Pe.Provider,{value:F},X({ourProps:y,theirProps:m,slot:a,defaultTag:Xe,name:"Popover.Group"}))}let qe=D(we),ze=D(Ue),Qe=D(je),Ze=D(Je),et=D(Ye),kt=Object.assign(qe,{Button:ze,Overlay:Qe,Panel:Ze,Group:et});


/***/ })

};
;