import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getFontFamily = function (fontFamily, theme) {
    return getThemeValue("fontFamily." + fontFamily, "Titan One")(theme);
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  text-align: ", ";\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  text-align: ", ";\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var bold = _a.bold;
    return (bold ? 400 : 300);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign;
}, space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    YELLOW: "yellow",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "16px";
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "28px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, fontFamily = _a.fontFamily, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled", "fontFamily"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled, fontFamily: fontFamily }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 372 342" }, props),
        React.createElement("path", { d: "M333.199 220.98c-.578-4.059-1.735-7.538-2.892-11.597-6.941-24.933-1.735-51.026-9.254-75.96v-.58c-13.303-48.127-52.055-91.035-98.326-106.691l-.578-18.555-23.136 13.916c-2.892-.58-5.205-.58-8.097-.58-.579-3.479-3.471-16.235-4.049-19.135-20.822-1.16-36.438 20.875-37.017 24.934-46.849 15.656-85.6 58.564-98.904 106.691-6.94 24.934-1.735 51.027-8.676 75.96-2.892 11.017-5.205 21.454-5.205 33.051-1.157 70.741 76.925 123.507 147.489 121.767 90.806 1.16 164.84-64.362 148.645-143.221z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M39.379 219.82c-8.676-2.899-17.352-8.698-25.45-19.135-20.821-26.093-13.88-67.842 11.568-77.699 11.568-4.639 20.822-2.319 27.184 1.16.579 0 .579.58 1.157.58M318.161 124.726c6.94-4.059 16.194-6.379 28.341-1.74 25.449 9.857 32.389 51.606 11.567 77.699-8.097 10.437-17.351 16.236-25.449 19.135M290.398 191.408c3.471-6.958 5.206-15.076 5.206-23.194 0-31.892-27.184-57.985-60.731-57.985-11.567 0-21.978 2.9-31.233 8.118-10.989 6.379-24.87 6.379-35.86 0-9.254-5.218-19.665-8.118-31.233-8.118-33.546 0-60.73 26.093-60.73 57.985 0 8.118 1.735 16.236 5.205 23.194 1.157 2.319 2.314 4.638 4.05 6.958 5.783 9.277 7.518 20.874 4.048 31.311-2.892 8.118-5.206 16.816-5.206 23.194 0 48.127 45.693 87.557 101.796 87.557 56.104 0 101.796-38.85 101.796-87.557 0-6.378-2.313-15.656-5.205-23.194-3.47-10.437-1.735-22.034 4.049-31.311 1.735-2.32 3.47-4.639 4.048-6.958z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M134.234 263.308c-3.47 0-6.362 2.9-5.783 6.379 3.47 26.093 28.34 45.807 57.838 45.807s54.369-19.714 57.839-45.807c.578-3.479-2.314-6.379-5.784-6.379h-104.11z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M152.743 306.217c9.254 5.798 20.822 9.857 33.547 9.857 12.724 0 24.292-3.479 33.546-9.857-4.049-14.496-17.93-11.017-33.546-11.017-16.195 0-29.498-3.479-33.547 11.017z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M181.083 229.098c-1.157 2.319-4.049 3.479-6.362 2.319l-11.568-5.219c-2.313-1.159-3.47-4.059-2.313-6.378 1.156-2.319 4.048-3.479 6.362-2.319l11.568 5.218c2.313 1.16 3.47 4.059 2.313 6.379zM191.493 229.098c1.157 2.319 4.049 3.479 6.363 2.319l11.567-5.219c2.314-1.159 3.471-4.059 2.314-6.378s-4.049-3.479-6.362-2.319l-11.568 5.218c-2.314 1.16-3.47 4.059-2.314 6.379z", fill: "#fff" }),
        React.createElement("path", { d: "M133.655 191.408c-9.832 0-17.351-7.538-17.351-16.816v-5.798c0-9.278 8.097-16.816 17.351-16.816 9.833 0 17.352 7.538 17.352 16.816v5.798c0 9.278-7.519 16.816-17.352 16.816zM238.343 191.408c-9.832 0-17.351-7.538-17.351-16.816v-5.798c0-9.278 8.097-16.816 17.351-16.816 9.833 0 17.352 7.538 17.352 16.816v5.798c0 9.278-7.519 16.816-17.352 16.816z", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 12" }, props),
        React.createElement("path", { d: "M5.6805 11.5692C5.61283 11.5033 5.3235 11.2544 5.0855 11.0225C3.58867 9.66324 1.13867 6.11721 0.390834 4.26122C0.270667 3.97936 0.0163335 3.26674 -1.11582e-07 2.886C-9.56342e-08 2.52117 0.0840005 2.17338 0.254334 1.84151C0.492334 1.42781 0.866834 1.09594 1.309 0.914089C1.61583 0.797024 2.534 0.615176 2.55033 0.615176C3.55483 0.433329 5.187 0.333313 6.99067 0.333313C8.70917 0.333313 10.2748 0.433329 11.2945 0.582217C11.3108 0.599265 12.4518 0.781113 12.8427 0.980009C13.5567 1.34484 14 2.05746 14 2.82008L14 2.886C13.9825 3.38267 13.5392 4.42716 13.5228 4.42716C12.7738 6.18313 10.444 9.64733 8.89583 11.0396C8.89583 11.0396 8.498 11.4317 8.2495 11.6022C7.8925 11.8681 7.45033 12 7.00817 12C6.51467 12 6.055 11.8511 5.6805 11.5692Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 12" }, props),
        React.createElement("path", { d: "M8.3195 0.764085C8.38717 0.830005 8.6765 1.07891 8.9145 1.31076C10.4113 2.67008 12.8613 6.21611 13.6092 8.07209C13.7293 8.35395 13.9837 9.06657 14 9.44731C14 9.81214 13.916 10.1599 13.7457 10.4918C13.5077 10.9055 13.1332 11.2374 12.691 11.4192C12.3842 11.5363 11.466 11.7181 11.4497 11.7181C10.4452 11.9 8.813 12 7.00933 12C5.29083 12 3.72517 11.9 2.7055 11.7511C2.68917 11.734 1.54817 11.5522 1.15733 11.3533C0.443333 10.9885 2.05602e-08 10.2759 2.96544e-08 9.51323L3.04405e-08 9.44731C0.0175 8.95064 0.460833 7.90615 0.477167 7.90615C1.22617 6.15019 3.556 2.68599 5.10417 1.29372C5.10417 1.29372 5.502 0.901607 5.7505 0.731124C6.1075 0.465172 6.54967 0.333332 6.99183 0.333332C7.48533 0.333332 7.945 0.482221 8.3195 0.764085Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 94 100" }, props),
        React.createElement("path", { d: "M82.142 70.874l-2.063-4.259 8.415-4.068c.865-.42 1.915-.04 2.335.823l.527 1.118c.419.864.036 1.914-.83 2.335l-8.384 4.05z", fill: "#AC752C" }),
        React.createElement("path", { d: "M82.142 70.874l-1.031-2.13 10.026-4.84.278.55c.42.863.036 1.914-.829 2.334l-8.444 4.086z", fill: "#7D551F" }),
        React.createElement("path", { d: "M80.394 76.345a47.516 47.516 0 01-12.74 4.868C41.847 87.03 16.277 70.91 10.517 45.17c-1.023-4.582-1.371-9.16-1.081-13.592.041-.34.476-3.356 2.006-5.779.756-1.226 1.784-2.254 3.121-2.75l.03-.017c.165-.056.301-.095.454-.104.153-.01.306-.019.476.002 1.232.078 2.447 1.154 3.583 2.71 2.501 3.373 4.599 8.994 5.745 11.254l.018.03c.248.567.526 1.118.804 1.668l.052.089c.312.61.607 1.19.95 1.781l.307.534.274.473a1753.829 1753.829 0 01.615 1.067c.223.385.491.782.744 1.15.136.237.286.427.452.647a40.07 40.07 0 001.268 1.717c.15.19.282.35.414.51a40.458 40.458 0 001.732 2.04c.017.031.052.09.098.103l.116.13a68.804 68.804 0 002.012 2.117c.653.65 1.335 1.283 2.03 1.869.08.072.178.173.26.245l.098.1c.468.402.92.773 1.418 1.156.064.042.081.072.145.114l.192.126a49.915 49.915 0 004.306 3.004c.273.198.558.349.86.53.285.151.54.32.826.47a.26.26 0 01.128.085c.157.067.302.18.46.248.46.248.919.496 1.408.727.239.138.49.23.728.37.379.175.758.352 1.136.528.158.067.298.105.426.189.49.23 1.038.427 1.557.64a48.4 48.4 0 007.175 2.216l.14.038c.949.203 1.88.376 2.84.532.434.066.868.131 1.33.18.34.04.728.093 1.068.134.076-.005.123.008.2.003.786.06 1.542.136 2.358.179 4.25.232 8.633-.127 13.01-1.114.453-.104.937-.225 1.391-.33l.383-.023.23-.014c.046.013.076-.005.122.008.047.013.077-.005.124.008.862.055 2.21.264 3.386 1.204.852.653 1.62 1.71 2.068 3.308.413 1.538-.07 2.963-.962 4.228-1.31 1.98-3.688 3.55-5.155 4.437z", fill: "#FFB300" }),
        React.createElement("path", { d: "M86.57 67.646l-.06.034a48.224 48.224 0 01-12.026 5.008c-.573.173-1.133.3-1.723.443-25.776 5.799-51.346-10.32-57.136-36.043a47.1 47.1 0 01-1.15-11.381c-.001-.552.027-1.12.071-1.66-.005-.352.036-.692.06-1.062.166-.055.302-.095.454-.104.153-.01.306-.018.476.002 1.233.078 2.447 1.154 3.583 2.71 2.502 3.373 4.6 8.994 5.746 11.254l.017.03c.249.568.527 1.118.805 1.668l.051.089c.312.61.608 1.19.95 1.782l.085.148.205.355a10623.502 10623.502 0 00.89 1.54c.269.398.49.783.743 1.15.137.238.286.428.453.648.252.368.503.736.785 1.086.167.22.316.41.482.63.15.19.282.35.415.511.149.19.281.351.413.512.414.511.875 1.035 1.319 1.53.017.029.051.088.098.1l.115.132.345.392a45.982 45.982 0 001.668 1.723 44.68 44.68 0 001.74 1.642c.08.072.178.173.26.245.08.071.178.173.26.244l.097.102c.29.227.597.485.886.712.162.144.371.3.533.443.064.042.081.072.145.114l.192.126c.272.198.515.413.788.611.209.156.4.283.609.438.08.072.192.127.273.199.272.198.574.378.864.606.256.169.528.367.813.518.32.21.64.42.988.614.303.181.558.35.86.53.285.152.541.32.826.471a.26.26 0 01.128.084c.157.068.302.181.46.248.46.248.92.496 1.409.727.238.139.489.231.727.37l1.137.529c.157.067.297.104.425.188.158.067.298.105.426.189.361.147.74.323 1.102.47.315.134.612.238.957.355.362.147.723.293 1.097.393.188.05.392.13.579.18.14.037.298.104.438.142.345.117.672.204 1.017.321.344.117.701.187 1.046.304l.842.225c.404.083.795.212 1.199.295l.14.037c.375.1.761.153 1.165.236.264.045.498.108.744.123.31.058.62.116.96.157.294.028.558.073.821.118l.51.061c.34.04.727.094 1.067.135.077-.005.123.007.2.003l.88.084.739.047.74.047c.37.024.692.035 1.045.029.2.003.37.023.552-.003.446.019.922.02 1.38-.008.306-.018.63-.007.906-.009.458-.028.887-.038 1.346-.066l.918-.056c.458-.028.9-.085 1.388-.13.306-.02.595-.067.884-.116.518-.062 1.019-.154 1.537-.216.182-.026.395-.07.577-.096a.495.495 0 00.242-.06c.713-.136 1.456-.289 2.2-.441.454-.105.938-.226 1.392-.33l.382-.023.23-.014c.046.012.076-.005.123.007.046.013.076-.004.123.008.862.055 2.21.264 3.386 1.205.95.754 1.719 1.811 2.166 3.409z", fill: "#FFD54F" }),
        React.createElement("path", { d: "M19.119 25.593c-2.604-1.221-5.188-1.31-7.693.177.756-1.227 1.784-2.255 3.12-2.75l.03-.017c.166-.056.302-.095.455-.105a2.56 2.56 0 01.476.002c1.262.061 2.476 1.137 3.612 2.693z", fill: "#7D551F" }),
        React.createElement("path", { d: "M19.119 25.593c-1.562-.718-3.1-1.053-4.626-.884-.013-.229.02-.445.053-.662-.005-.352.036-.692.077-1.032.166-.056.302-.095.484-.121.153-.01.306-.019.476.001 1.186.066 2.4 1.142 3.536 2.698z", fill: "#AC752C" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 371.8 348.1" }, props),
        React.createElement("linearGradient", { id: "prefix__a", gradientUnits: "userSpaceOnUse", x1: 289.538, y1: 24.484, x2: 337.538, y2: 90.867 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M331.7 92.5l-19.3-1.4 2.8-38c.3-3.9 3.7-6.9 7.6-6.6l5 .4c3.9.3 6.9 3.7 6.6 7.7l-2.7 37.9z", fill: "url(#prefix__a)" }),
        React.createElement("linearGradient", { id: "prefix__b", gradientUnits: "userSpaceOnUse", x1: -8.675, y1: 371.913, x2: 441.197, y2: 9.871 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M347.4 109.8c-.3 18.6-3.3 37.1-8.8 54.9-32 102.8-141.2 160.1-243.9 128.1-17.8-5.5-34.7-13.6-50.2-23.9-1.1-.8-10.9-8.6-16.4-18.9-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.2.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.6c.7 0 1.4 0 2.2-.1 1 0 1.9 0 2.9-.1 1.9-.1 3.7-.2 5.6-.3 1.1-.1 2.1-.1 3.2-.3 2.9-.2 5.8-.5 8.7-.9.9-.1 1.8-.2 2.7-.4s1.8-.3 2.7-.4c2.7-.4 5.4-.9 8.1-1.5.2 0 .4-.1.6-.1l.7-.1c3.9-.8 7.8-1.8 11.6-2.8 3.6-1 7.2-2.1 10.8-3.3.4-.1.9-.3 1.4-.5l.5-.2c2.3-.8 4.7-1.7 7-2.6.2-.1.5-.2.7-.3l.9-.4c6.6-2.7 13.1-5.7 19.4-9.1 1.2-.6 2.4-1.3 3.6-2s2.3-1.3 3.4-2l.6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-1 2.8-1.9 4.1-2.9.5-.4 1.1-.8 1.6-1.2 1.9-1.3 3.7-2.7 5.5-4.2 8-6.3 15.5-13.3 22.5-20.9l.4-.4c2.7-2.9 5.2-5.9 7.7-8.9 1.1-1.4 2.3-2.9 3.4-4.3.9-1.2 1.8-2.4 2.6-3.6l.5-.7c1.9-2.6 3.7-5.2 5.4-7.9 9.7-14.9 17.3-31.1 22.5-48.1.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8l.3-.4c.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.1-1.6 9.3-2.2 15.9-.5 6.2 1.6 10.3 6.3 13 12 4.2 9.2 5 20.8 5 27.8z", fill: "url(#prefix__b)" }),
        React.createElement("linearGradient", { id: "prefix__c", gradientUnits: "userSpaceOnUse", x1: 13.25, y1: 297.552, x2: 480.485, y2: 42.233 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M329.3 70.3v.3c.1 17.7-2.1 35.4-6.8 52.6-.6 2.3-1.3 4.6-2 7-32 102.8-141.2 160.1-244 128.2-14.9-4.6-29.2-11.1-42.5-19.1-1.9-1.2-3.9-2.4-5.7-3.6l-3.6-2.4c.1-.6.3-1.3.5-1.9.2-.6.6-1.2.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.7l2.2-.1c1 0 1.9 0 2.9-.1l5.6-.3c1.1-.1 2.2-.1 3.2-.3 1.8-.2 3.7-.3 5.5-.6 1.1-.1 2.1-.2 3.2-.4l2.7-.4c.9-.1 1.8-.3 2.7-.4 2.7-.4 5.4-.9 8.1-1.5.2 0 .4-.1.6-.1l.7-.1c.7-.1 1.4-.3 2.1-.5 3.2-.7 6.4-1.5 9.5-2.4s6.3-1.8 9.4-2.9l1.4-.4c.4-.1.9-.3 1.4-.5l.5-.2c1.5-.5 2.9-1.1 4.3-1.6l2.7-1c.2-.1.5-.2.7-.3l.9-.4c1.3-.5 2.5-1 3.8-1.6l2.7-1.2 1.2-.6 3.9-1.8c1.3-.6 2.4-1.2 3.6-1.8 1.4-.7 2.8-1.4 4.2-2.2l3.6-2 3.4-2 .6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-1 2.8-1.9 4.1-2.9.5-.4 1.1-.8 1.6-1.2l1.6-1.2c1.3-1 2.6-1.9 3.9-3 1-.8 2.1-1.7 3.1-2.6 1.2-1 2.4-2 3.6-3.1l1.8-1.6c.5-.4 1-.9 1.4-1.3 1.1-1 2.1-2 3.2-3s2.2-2.1 3.2-3.1c.8-.8 1.7-1.7 2.5-2.6 1.2-1.2 2.4-2.4 3.5-3.7l.4-.4c1.1-1.2 2.1-2.4 3.2-3.6.7-.8 1.4-1.5 2-2.3.8-1 1.7-2 2.5-3s1.4-1.8 2.1-2.7c.4-.5.9-1.1 1.3-1.6.9-1.2 1.8-2.4 2.6-3.6l.5-.7 2.1-3c.6-.8 1.1-1.6 1.6-2.5l1.7-2.5c.8-1.2 1.5-2.4 2.3-3.6l1.2-2c1-1.6 1.9-3.2 2.8-4.8l1.8-3.3c.9-1.6 1.7-3.3 2.5-4.9.5-1.1 1.1-2.2 1.6-3.4.8-1.7 1.6-3.4 2.4-5.2.5-1.1 1-2.2 1.4-3.3.8-1.9 1.6-3.9 2.3-5.8.3-.8.6-1.5.9-2.3l.3-.9c1-2.8 2-5.7 2.9-8.7.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8l.3-.4c.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.3-.7 9.5-1.3 16 .4z", fill: "url(#prefix__c)" }),
        React.createElement("linearGradient", { id: "prefix__d", gradientUnits: "userSpaceOnUse", x1: 5.457, y1: 210.117, x2: 44.266, y2: 243.819 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M43.1 222.5c-9.6 6.7-15.2 15.6-15 27.5-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.2.9-1.7 2.9-4.2 9.2-6.3 17-7.2z", fill: "url(#prefix__d)" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 85.46 85.46" }, props),
        React.createElement("path", { fill: "#e8e3e2", d: "M85.46 42.73A42.73 42.73 0 1142.73 0a42.68 42.68 0 0142.73 42.73z" }),
        React.createElement("path", { fill: "#bec8be", d: "M65.39 79a42.75 42.75 0 01-45.32 0 42.75 42.75 0 0145.32 0zM49.11 11.68a27.13 27.13 0 0114.71 12.73c.31.57.6 1.14.87 1.73a25.7 25.7 0 011 2.46c.16.48.31.95.44 1.43v.08a21.8 21.8 0 01.79 5.76v.4a29.74 29.74 0 00.78 7c.1.41.2.82.31 1.22 0 .19.09.37.13.55l.06.24a17.38 17.38 0 01.39 3.69c0 11.6-11.55 21-25.8 21h-.27a31.23 31.23 0 01-3.52-.25 30.48 30.48 0 01-6.59-1.55C23.33 64.92 17 57.53 17 48.94a17.38 17.38 0 01.4-3.69l.06-.24c0-.18.08-.36.13-.55.11-.4.21-.81.3-1.22a29.23 29.23 0 00.79-7v-.4a22.05 22.05 0 01.78-5.74c.13-.51.29-1 .46-1.51a25.7 25.7 0 011-2.46c.27-.59.56-1.16.87-1.73a27.14 27.14 0 0114.7-12.73 20.44 20.44 0 0112.62.01z" }),
        React.createElement("path", { fill: "#e8e3e2", d: "M60.87 40.12a9.61 9.61 0 00.87-4 10.26 10.26 0 00-10.51-10 10.82 10.82 0 00-5.35 1.39 6.25 6.25 0 01-6.18 0 10.76 10.76 0 00-5.35-1.39 10.26 10.26 0 00-10.5 10 9.61 9.61 0 00.87 4 10.53 10.53 0 00.65 1.19 6.26 6.26 0 01.68 5.36 14.3 14.3 0 00-.87 4c0 8.32 7.89 15.07 17.61 15.07S60.4 59 60.4 50.68a14 14 0 00-.87-4 6.23 6.23 0 01.69-5.36 10.53 10.53 0 00.65-1.2z" }),
        React.createElement("path", { fill: "#bec8be", d: "M18.21 45a9.12 9.12 0 01-4.44-3.28c-3.55-4.5-2.37-11.71 2-13.41a5.45 5.45 0 014.75.2l.15.08M64.78 28.61a5.45 5.45 0 014.9-.29c4.38 1.7 5.56 8.91 2 13.41A9.16 9.16 0 0167.25 45M42.79 60.49a11.34 11.34 0 01-9.49-4.92 1 1 0 111.7-1.09 9.64 9.64 0 0015.65 0 1 1 0 111.67 1.09 11.34 11.34 0 01-9.53 4.92z" }),
        React.createElement("rect", { fill: "#bec8be", x: 39.05, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-65.45 39.954 46.838)" }),
        React.createElement("rect", { fill: "#bec8be", x: 44.72, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-114.55 45.635 46.84)" }),
        React.createElement("path", { fill: "#bec8be", d: "M33.75 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86zM51.84 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 135 129" }, props),
        React.createElement("path", { d: "M118.375 17.524l-12.942-.941 1.052-14.229C106.59.89 108.8-.156 111.483.052l3.367.262c2.631.21 4.682 1.57 4.577 3.034l-1.052 14.176z", fill: "#AC752C" }),
        React.createElement("path", { d: "M118.375 17.525l-6.471-.471L113.166.105l1.684.105c2.631.209 4.682 1.569 4.577 3.034l-1.052 14.28z", fill: "#7D551F" }),
        React.createElement("path", { d: "M121.795 24.482a72.046 72.046 0 01-3.315 20.558c-12.1 38.502-53.242 60.002-91.964 48.022-6.892-2.145-13.258-5.179-18.94-8.945-.42-.314-4.104-3.191-6.156-7.062C.368 75.119-.21 72.975.158 70.83v-.052c.052-.262.105-.471.21-.68.105-.21.21-.419.369-.628 1.052-1.57 3.42-2.354 6.365-2.668 6.419-.733 15.52.784 19.414.994h.053c.947.104 1.894.157 2.84.209h.158c1.053.052 2.052.105 3.104.105h3.683c.684 0 1.42-.053 2.105-.105.42 0 .789-.052 1.21-.105 1.105-.104 2.21-.209 3.262-.366.368-.052.684-.104 1-.157a41.18 41.18 0 00.999-.157c1-.157 2.052-.366 3.051-.575.053 0 .158 0 .21-.052l.211-.157c1.473-.314 2.946-.68 4.367-1.047a51.896 51.896 0 004.05-1.255c.159-.052.37-.105.527-.157l.21-.052a53.78 53.78 0 002.631-.994c.105-.052.158-.052.263-.105l.316-.157a77.076 77.076 0 007.313-3.4c.473-.21.894-.47 1.368-.732.42-.262.841-.471 1.262-.733a.4.4 0 01.21-.104c.211-.157.474-.262.685-.419a44.753 44.753 0 002.052-1.308c.368-.209.683-.47 1.052-.68l1.578-1.098c.21-.157.368-.314.579-.419.684-.47 1.368-1.046 2.052-1.569a74.246 74.246 0 008.47-7.794l.158-.157c1-1.099 1.946-2.197 2.893-3.348.421-.523.842-1.047 1.263-1.622.316-.419.684-.89 1-1.308.052-.104.105-.157.158-.261.683-.994 1.367-1.936 2.051-2.982 3.578-5.44 6.472-11.509 8.523-18.047.211-.68.421-1.413.632-2.093l.263-.523.158-.314c.052-.052.052-.105.105-.157.052-.052.052-.105.105-.157.737-1.098 2.052-2.72 4.209-3.557 1.526-.628 3.525-.837 5.998-.21 2.367.629 3.893 2.355 4.892 4.5 1.684 3.295 1.947 7.637 2 10.305z", fill: "#FFB300" }),
        React.createElement("path", { d: "M114.955 9.625v.105c.053 6.486-.789 13.13-2.578 19.721-.21.89-.474 1.727-.737 2.616-12.1 38.501-53.242 60.001-91.964 48.022-5.734-1.779-11.1-4.185-16.046-7.167a29.993 29.993 0 01-2.157-1.36c-.474-.261-.895-.575-1.368-.89.053-.26.105-.47.21-.68.106-.209.21-.418.369-.627 1.052-1.57 3.42-2.354 6.366-2.668 6.418-.732 15.52.785 19.413.994h.053a51.87 51.87 0 002.84.21h.159c1.052.052 2.051.104 3.104.104h3.63c.736-.052 1.42-.052 2.104-.105.421 0 .79-.052 1.21-.104.684-.053 1.368-.105 2.052-.21.421-.052.79-.104 1.21-.157.368-.052.684-.104 1-.157a62.547 62.547 0 004.051-.732c.052 0 .158 0 .21-.052l.316-.052.79-.157a71.41 71.41 0 003.577-.89c1.21-.314 2.367-.68 3.525-1.046.157-.052.368-.105.526-.157.157-.052.368-.105.526-.157l.21-.052c.526-.21 1.105-.419 1.631-.628.316-.104.684-.261 1-.366.105-.052.158-.052.263-.105l.316-.157c.473-.209.947-.366 1.42-.575.368-.157.684-.314 1.052-.47.158-.053.316-.158.474-.21.473-.21.947-.47 1.473-.68.42-.21.894-.419 1.315-.68a23.008 23.008 0 001.579-.837c.473-.262.894-.47 1.367-.733.421-.261.842-.47 1.263-.732a.4.4 0 01.21-.105c.21-.156.474-.261.684-.418a44.753 44.753 0 002.052-1.308c.368-.209.684-.47 1.052-.68l1.579-1.098c.21-.157.368-.314.579-.419.21-.157.368-.314.578-.418.474-.366 1-.733 1.473-1.099.421-.314.79-.628 1.21-.994.474-.366.947-.732 1.368-1.15.21-.21.474-.42.684-.628.158-.157.368-.314.526-.471.421-.366.79-.733 1.21-1.099.421-.366.79-.784 1.21-1.15l.948-.942c.42-.471.894-.89 1.315-1.36l.158-.157c.42-.419.789-.89 1.21-1.36.263-.314.526-.576.736-.89.316-.366.632-.732.947-1.15.263-.367.526-.68.79-.994l.473-.628c.316-.419.684-.89 1-1.308.052-.105.105-.157.157-.261l.79-1.099.63-.942.632-.941c.316-.471.579-.89.842-1.36.158-.262.316-.471.42-.733a20.74 20.74 0 001.053-1.83c.21-.42.474-.838.684-1.204.316-.628.631-1.203.947-1.83l.631-1.256c.316-.628.579-1.256.895-1.936.21-.418.368-.837.526-1.255.315-.732.579-1.465.894-2.197.105-.262.211-.576.316-.837.052-.105.105-.21.105-.366.368-1.047.737-2.145 1.105-3.244.21-.68.421-1.412.631-2.092l.263-.523.158-.314c.053-.052.053-.105.105-.157.053-.052.053-.105.106-.157.736-1.099 2.051-2.72 4.208-3.557 1.684-.68 3.683-.89 6.156-.262z", fill: "#FFD54F" }),
        React.createElement("path", { d: "M7.05 66.697c-3.63 2.511-5.735 5.859-5.682 10.305-1.052-1.935-1.631-4.08-1.263-6.225v-.052c.053-.261.106-.47.21-.68.106-.21.211-.419.369-.628 1.052-1.621 3.42-2.406 6.366-2.72z", fill: "#7D551F" }),
        React.createElement("path", { d: "M124.688 18.623a70.234 70.234 0 017.997 19.25c10.049 39.077-13.626 78.834-52.926 88.878-6.998 1.778-13.995 2.511-20.834 2.249-.526-.052-5.156-.575-8.997-2.825-1.894-1.098-3.525-2.615-4.367-4.656v-.052c-.105-.209-.157-.471-.21-.68-.053-.261-.053-.471-.053-.732.053-1.883 1.684-3.819 3.999-5.598 5.103-3.975 13.626-7.428 17.046-9.311.841-.419 1.683-.837 2.525-1.308.053 0 .105-.052.158-.052.894-.471 1.789-.994 2.683-1.517l.79-.471a4.74 4.74 0 01.683-.418c.21-.157.474-.262.684-.419.316-.209.632-.366.894-.575a35.104 35.104 0 001.737-1.203c.315-.21.684-.471 1-.733a49.358 49.358 0 002.63-1.988l.789-.627c.263-.21.526-.471.79-.68.788-.68 1.525-1.36 2.314-2.04l.158-.158.21-.209a60.211 60.211 0 003.157-3.19c.947-1.047 1.894-2.093 2.788-3.192.106-.157.21-.261.369-.418l.157-.157 1.737-2.197c.052-.053.105-.157.157-.21.053-.104.158-.209.21-.261a81.905 81.905 0 004.42-6.696c.263-.419.526-.89.737-1.36.263-.419.473-.837.684-1.308.052-.052.052-.157.105-.21.105-.26.263-.47.368-.732l1.105-2.197c.158-.366.368-.732.526-1.098.263-.576.526-1.151.737-1.726.105-.21.158-.471.263-.68.315-.785.631-1.57.947-2.407a70.605 70.605 0 003.104-11.09c0-.052.052-.157.052-.209.264-1.412.527-2.877.684-4.342.106-.68.158-1.36.263-2.04.053-.523.106-1.099.158-1.674v-.314c.106-1.203.158-2.406.158-3.61a72.76 72.76 0 00-2.262-19.773 30.767 30.767 0 00-.579-2.093s-.052-.209-.052-.575v-.366-.21-.209c0-1.307.315-3.4 1.736-5.23.999-1.309 2.578-2.564 4.998-3.296 2.315-.68 4.577-.053 6.524 1.255 3.104 1.883 5.629 5.44 7.049 7.69z", fill: "#FFB300" }),
        React.createElement("path", { d: "M111.062 9.573c0 .052.053.052.053.105a72.592 72.592 0 018.207 18.1c.263.836.526 1.726.737 2.615 10.048 39.077-13.627 78.833-52.927 88.877a77.31 77.31 0 01-17.414 2.302h-2.526c-.526 0-1.105-.053-1.63-.053-.106-.209-.158-.47-.211-.68-.053-.261-.053-.47-.053-.732.053-1.883 1.684-3.819 3.999-5.597 5.103-3.976 13.626-7.429 17.046-9.312a57.349 57.349 0 002.525-1.308c.053 0 .105-.052.158-.052.894-.471 1.789-.994 2.683-1.517.105-.052.158-.104.263-.157.158-.104.368-.209.526-.314a4.74 4.74 0 01.684-.418c.21-.105.474-.314.684-.419.316-.209.632-.366.894-.575.58-.419 1.158-.785 1.737-1.203.315-.21.684-.471 1-.733.578-.418 1.104-.837 1.63-1.255l.947-.785.79-.627c.262-.21.525-.471.789-.68.789-.68 1.525-1.36 2.314-2.04l.158-.158.21-.209.58-.575c.894-.837 1.736-1.727 2.577-2.616.842-.89 1.631-1.83 2.42-2.772.106-.157.264-.262.369-.419.105-.157.21-.261.368-.418l.158-.157c.368-.471.736-.89 1.052-1.36.21-.262.421-.576.684-.837.053-.053.105-.157.158-.21.053-.104.158-.209.21-.261.316-.419.58-.837.895-1.256l.631-.941c.105-.157.21-.262.263-.419.316-.47.579-.889.894-1.36l.79-1.255c.315-.523.631-.994.947-1.517.263-.419.526-.89.736-1.36.21-.419.474-.837.684-1.308.053-.052.053-.157.105-.21.106-.261.264-.47.369-.732l1.105-2.197c.157-.366.368-.732.526-1.098.263-.576.526-1.151.736-1.727.105-.209.158-.47.263-.68.105-.209.158-.47.263-.68.211-.575.474-1.15.684-1.726.158-.47.316-.942.474-1.465.21-.575.368-1.098.578-1.674.106-.314.158-.575.264-.89.052-.208.157-.47.21-.68.158-.522.316-1.045.421-1.568.158-.524.263-1.099.421-1.622.105-.419.21-.89.315-1.308.158-.628.263-1.255.421-1.883 0-.052.053-.157.053-.21.105-.575.21-1.203.316-1.778.052-.366.105-.732.157-1.15.053-.472.158-.942.211-1.465.052-.419.105-.837.158-1.308.052-.262.052-.523.105-.785.053-.523.105-1.099.158-1.674v-.314c.052-.47.052-.89.052-1.36.053-.366.053-.732.053-1.098 0-.367.053-.733.053-1.151v-1.622-.837c0-.68 0-1.412-.053-2.092 0-.471-.053-.942-.053-1.413-.052-.68-.105-1.36-.157-2.092l-.158-1.413c-.106-.68-.158-1.412-.263-2.092-.053-.47-.106-.89-.211-1.36a29.66 29.66 0 00-.421-2.302c-.052-.314-.105-.575-.158-.89 0-.104-.052-.26-.052-.365a38.976 38.976 0 00-.789-3.348 31.36 31.36 0 00-.579-2.093s-.053-.209-.053-.575v-.366-.21-.209c0-1.308.316-3.4 1.737-5.231 1.052-1.255 2.577-2.459 5.05-3.191z", fill: "#FFD54F" }),
        React.createElement("path", { d: "M49.297 114.405c-1.789 4.028-1.789 7.951.631 11.718-1.894-1.099-3.577-2.616-4.367-4.656v-.052c-.105-.209-.157-.471-.21-.68-.053-.262-.053-.471-.053-.733.053-1.883 1.684-3.766 3.999-5.597z", fill: "#7D551F" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 412.5 418.3" }, props),
        React.createElement("linearGradient", { id: "prefix__a", gradientUnits: "userSpaceOnUse", x1: 273.043, y1: 9.999, x2: 358.065, y2: 95.021 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M341.3 83.9L307 81.4l2.8-38c.3-3.9 6.2-6.7 13.2-6.2l8.9.7c7 .5 12.4 4.1 12.2 8.1l-2.8 37.9z", fill: "url(#prefix__a)" }),
        React.createElement("linearGradient", { id: "prefix__b", gradientUnits: "userSpaceOnUse", x1: -66.112, y1: 178.809, x2: 509.889, y2: 177.277 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M350.2 102.3c-.3 18.6-3.3 37.1-8.8 54.9-32 102.8-141.2 160.1-244 128.1-17.8-5.5-34.7-13.6-50.2-23.9-1.1-.8-10.9-8.6-16.4-18.9-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.1.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.7c.7 0 1.4 0 2.2-.1 1 0 1.9 0 2.9-.1 1.9-.1 3.7-.2 5.6-.3 1.1-.1 2.1-.1 3.2-.3 2.9-.2 5.8-.5 8.7-.9.9-.1 1.8-.2 2.7-.4s1.8-.3 2.7-.4c2.7-.4 5.4-.9 8-1.5.2 0 .4 0 .6-.1l.7-.2c3.9-.8 7.8-1.8 11.6-2.8 3.6-1 7.2-2.1 10.8-3.3l1.4-.5.5-.2c2.4-.8 4.7-1.7 7-2.6.2-.1.5-.2.7-.3l.9-.4c6.6-2.7 13.1-5.7 19.4-9.1 1.2-.6 2.4-1.3 3.6-2s2.3-1.3 3.4-2l.6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-.9 2.8-1.9 4.1-2.9.5-.4 1-.8 1.6-1.2 1.9-1.3 3.7-2.7 5.5-4.2 8-6.3 15.6-13.3 22.5-20.9l.4-.4c2.7-2.9 5.2-5.8 7.7-8.9 1.1-1.4 2.3-2.8 3.4-4.3.9-1.2 1.8-2.4 2.6-3.6l.5-.7c1.9-2.6 3.7-5.2 5.4-7.9 9.7-14.9 17.3-31.1 22.5-48.1.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8.1-.1.2-.3.3-.4.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.1-1.6 9.3-2.2 15.9-.5 6.2 1.6 10.3 6.2 13 11.9 4.3 9.4 5.1 21 5.1 28z", fill: "url(#prefix__b)" }),
        React.createElement("linearGradient", { id: "prefix__c", gradientUnits: "userSpaceOnUse", x1: -30.33, y1: 202.465, x2: 770.861, y2: 77.614 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M332.1 62.8v.3c.1 17.7-2.1 35.4-6.8 52.6-.6 2.3-1.3 4.6-2 7-32 102.8-141.2 160.1-244 128.1-14.9-4.6-29.2-11-42.5-19l-5.7-3.6-3.6-2.4c.1-.6.3-1.3.5-1.9.2-.6.6-1.1.9-1.7 2.8-4.2 9.1-6.3 16.9-7.1 17-1.9 41.2 2.1 51.5 2.6h.1l7.5.6h.4c2.7.1 5.5.2 8.2.2h4.7l2.2-.1c1 0 1.9 0 2.9-.1 1.9-.1 3.8-.2 5.6-.3 1.1-.1 2.1-.1 3.2-.3 1.8-.1 3.7-.3 5.5-.6 1.1-.1 2.1-.2 3.2-.4l2.7-.4c.9-.1 1.8-.3 2.7-.4 2.7-.4 5.4-.9 8-1.5.2 0 .4 0 .6-.1l.7-.2c.7-.1 1.4-.3 2.1-.5 3.2-.7 6.4-1.5 9.5-2.4s6.3-1.8 9.4-2.8l1.4-.4 1.4-.5.5-.2c1.5-.5 2.9-1.1 4.3-1.6l2.7-1c.2-.1.5-.2.7-.3l.9-.4c1.3-.5 2.5-1 3.8-1.6l2.7-1.2 1.2-.6 3.9-1.8c1.3-.6 2.4-1.2 3.6-1.8 1.4-.7 2.8-1.4 4.2-2.2 1.2-.6 2.4-1.3 3.6-2l3.4-2 .6-.3c.6-.4 1.3-.8 1.9-1.2 1.9-1.1 3.7-2.3 5.5-3.5l2.7-1.8c1.4-.9 2.8-1.9 4.1-2.9.5-.4 1-.8 1.6-1.2s1-.8 1.6-1.2c1.3-1 2.6-1.9 3.9-3 1.1-.8 2.1-1.7 3.1-2.6 1.2-1 2.4-2 3.6-3.1.6-.5 1.2-1.1 1.8-1.6l1.4-1.3c1.1-1 2.1-2 3.2-3s2.2-2.1 3.2-3.1c.8-.9 1.7-1.7 2.5-2.6 1.2-1.2 2.4-2.4 3.5-3.7l.4-.4c1.1-1.2 2.1-2.4 3.2-3.6.7-.8 1.4-1.5 2-2.3.8-1 1.7-2 2.5-3l2.1-2.7c.4-.5.9-1.1 1.3-1.6.9-1.2 1.8-2.4 2.6-3.6l.5-.7 2.1-3c.6-.8 1.1-1.6 1.6-2.5l1.7-2.5c.8-1.2 1.5-2.4 2.3-3.7.4-.7.8-1.3 1.2-2 1-1.6 1.9-3.2 2.8-4.8l1.8-3.3c.9-1.6 1.7-3.3 2.5-4.9l1.6-3.4c.8-1.7 1.6-3.4 2.3-5.2l1.5-3.3c.8-1.9 1.6-3.9 2.3-5.8.3-.8.6-1.5.9-2.3l.3-.9c1-2.8 2-5.7 2.9-8.7.6-1.8 1.1-3.7 1.6-5.6 0 0 .2-.5.7-1.4.1-.2.3-.5.5-.8.1-.1.2-.3.3-.4.1-.2.2-.3.3-.5 2.7-4.3 6.6-7.6 11.2-9.5 4.3-.6 9.6-1.2 16.1.5z", fill: "url(#prefix__c)" }),
        React.createElement("linearGradient", { id: "prefix__d", gradientUnits: "userSpaceOnUse", x1: -10.037, y1: 167.019, x2: 53.963, y2: 248.721 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M45.9 215.1c-9.6 6.7-15.2 15.6-15 27.5-2.7-5.1-4.4-10.8-3.4-16.6v-.1c.1-.6.3-1.3.5-1.9.2-.6.6-1.1.9-1.7 2.9-4.3 9.2-6.4 17-7.2z", fill: "url(#prefix__d)" }),
        React.createElement("linearGradient", { id: "prefix__e", gradientUnits: "userSpaceOnUse", x1: 227.406, y1: 395.563, x2: 411.236, y2: -145.203 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M356.2 85.4c9.5 16 16.7 33.3 21.3 51.3 26.7 104.3-36.2 210.4-140.4 237.1-18.1 4.6-36.7 6.7-55.3 6-1.4-.1-13.7-1.6-23.8-7.5-5-2.9-9.4-6.9-11.6-12.4v-.1c-.2-.6-.4-1.2-.6-1.9-.1-.6-.1-1.3-.1-1.9.2-5 4.5-10.1 10.7-15 13.5-10.6 36.1-19.9 45.2-24.8l.1-.1c2.2-1.1 4.5-2.3 6.7-3.5l.4-.2c2.4-1.3 4.8-2.7 7.1-4.1.7-.4 1.4-.8 2.1-1.3l1.8-1.2 1.8-1.2c.8-.5 1.6-1 2.4-1.6 1.6-1 3.1-2.1 4.6-3.2.9-.6 1.8-1.3 2.6-1.9 2.4-1.7 4.7-3.5 6.9-5.4.7-.6 1.4-1.1 2.1-1.7l2.1-1.8c2.1-1.8 4.1-3.6 6.1-5.5.2-.1.3-.2.4-.4l.5-.5c2.9-2.8 5.7-5.6 8.4-8.5 2.6-2.7 5-5.5 7.5-8.5l.9-1.1.4-.5c1.6-1.9 3.1-3.9 4.6-5.9.1-.2.3-.4.5-.6s.4-.5.5-.8c4.2-5.7 8.1-11.7 11.7-17.9.7-1.2 1.4-2.4 2-3.6s1.3-2.3 1.9-3.4l.3-.6c.3-.6.7-1.3 1-2 1-1.9 1.9-3.9 2.9-5.8l1.4-3c.7-1.6 1.4-3.1 2-4.6.2-.6.5-1.2.7-1.8.9-2.1 1.7-4.2 2.5-6.4 3.5-9.6 6.3-19.5 8.2-29.6 0-.2.1-.4.1-.5.8-3.8 1.4-7.7 1.9-11.6.2-1.8.5-3.6.6-5.5.1-1.4.3-2.9.4-4.4 0-.3 0-.6.1-.8.2-3.2.4-6.4.4-9.6.4-17.8-1.6-35.6-6.1-52.8-.5-1.9-1-3.7-1.5-5.6 0 0-.1-.6-.1-1.5v-.9-.5-.6c0-5 1.6-9.9 4.6-14 2.6-3.5 6.8-6.8 13.2-8.8 6.1-1.9 12.1-.1 17.4 3.3 8.1 5.7 14.8 15.3 18.5 21.2z", fill: "url(#prefix__e)" }),
        React.createElement("linearGradient", { id: "prefix__f", gradientUnits: "userSpaceOnUse", x1: 424.914, y1: -7.554, x2: 78.701, y2: 542.403 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M320 61.2c.1.1.1.2.2.3 9.4 15 16.8 31.3 21.8 48.3.7 2.3 1.3 4.6 1.9 7 26.7 104.3-36.2 210.4-140.5 237.1-15.1 3.9-30.6 5.9-46.2 6.1h-6.8c-1.4 0-2.9-.1-4.3-.1-.2-.6-.4-1.2-.6-1.9-.1-.6-.1-1.3-.1-1.9.2-5 4.5-10.1 10.7-15 13.5-10.6 36.1-19.9 45.2-24.8l.1-.1c2.2-1.1 4.5-2.3 6.7-3.5l.4-.2c2.4-1.3 4.8-2.7 7.1-4.1.2-.1.5-.2.7-.4l1.4-.9 1.8-1.2 1.8-1.2c.8-.5 1.6-1 2.4-1.6l4.6-3.2c.9-.6 1.8-1.3 2.6-1.9 1.5-1.1 3-2.2 4.4-3.3.9-.7 1.7-1.3 2.6-2l2.1-1.7 2.1-1.8c2.1-1.8 4.1-3.6 6.1-5.5.2-.1.3-.2.4-.4l.5-.5 1.5-1.5c2.4-2.3 4.6-4.6 6.9-7 2.2-2.4 4.4-4.9 6.5-7.3l1-1.1.9-1.1.4-.5c1-1.2 1.9-2.4 2.8-3.6l1.8-2.2c.1-.2.3-.4.5-.6s.4-.5.5-.8l2.4-3.3 1.7-2.5c.3-.4.5-.7.8-1.1.8-1.2 1.6-2.4 2.3-3.6s1.4-2.2 2.1-3.4c.8-1.3 1.6-2.7 2.5-4.1.7-1.2 1.3-2.4 2-3.6s1.2-2.3 1.9-3.4l.3-.6c.3-.6.7-1.3 1-2 1-1.9 1.9-3.9 2.9-5.8l1.4-3c.7-1.6 1.4-3.1 2-4.6.2-.6.5-1.2.7-1.8s.5-1.2.7-1.8c.6-1.5 1.2-3 1.8-4.6.5-1.3.9-2.6 1.3-3.9l1.5-4.5c.2-.8.5-1.5.7-2.3.2-.6.4-1.2.5-1.8l1.2-4.2c.4-1.4.8-2.9 1.1-4.3.3-1.2.5-2.3.8-3.5.4-1.7.7-3.3 1.1-5 0-.2.1-.4.1-.5.3-1.6.5-3.2.8-4.7.2-1 .3-2 .5-3 .2-1.3.4-2.6.5-3.9s.3-2.3.4-3.4c.1-.7.2-1.4.2-2 .1-1.4.3-2.9.4-4.4 0-.3 0-.6.1-.8.1-1.2.1-2.4.2-3.6.1-1 .1-2 .1-3s.1-2 .1-3v-4.3-2.3c0-1.9 0-3.7-.1-5.6-.1-1.3-.1-2.5-.2-3.7-.1-1.8-.3-3.7-.4-5.5-.1-1.2-.2-2.5-.4-3.7-.2-1.9-.4-3.7-.7-5.6-.2-1.2-.3-2.4-.5-3.6-.3-2.1-.7-4.1-1.1-6.2-.2-.8-.3-1.6-.5-2.4-.1-.3-.1-.6-.2-1-.6-3-1.3-5.9-2-8.9-.5-1.9-1-3.7-1.5-5.6 0 0-.1-.6-.1-1.5v-.9-.5-.6c0-5 1.6-9.9 4.6-14 2.6-3.7 6.7-7 13.1-9z", fill: "url(#prefix__f)" }),
        React.createElement("linearGradient", { id: "prefix__g", gradientUnits: "userSpaceOnUse", x1: 104.654, y1: 305.027, x2: 168.994, y2: 369.367 },
            React.createElement("stop", { offset: 0, stopColor: "#ffe988" }),
            React.createElement("stop", { offset: 0.25, stopColor: "#ba801e" }),
            React.createElement("stop", { offset: 0.5, stopColor: "#fbec83" }),
            React.createElement("stop", { offset: 0.75, stopColor: "#ba801f" }),
            React.createElement("stop", { offset: 1, stopColor: "#ffe97f" })),
        React.createElement("path", { d: "M156.3 341c-4.7 10.8-4.8 21.2 1.6 31.3-5-2.9-9.4-6.9-11.6-12.4v-.1c-.2-.6-.4-1.2-.6-1.9-.1-.6-.1-1.3-.1-1.9.2-5.1 4.5-10.1 10.7-15z", fill: "url(#prefix__g)" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$k = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 16" }, props),
        React.createElement("rect", { width: "8.70536", height: "6.85714" }),
        React.createElement("rect", { y: "9.14285", width: "8.70536", height: "6.85714" }),
        React.createElement("rect", { x: "10.7144", width: "8.03571", height: "6.85714" }),
        React.createElement("rect", { x: "20.7588", width: "8.70536", height: "6.85714" }),
        React.createElement("rect", { x: "10.7144", y: "9.14285", width: "8.03571", height: "6.85714" }),
        React.createElement("rect", { x: "20.7588", y: "9.14285", width: "8.70536", height: "6.85714" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 12" }, props),
        React.createElement("path", { d: "M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z", fill: "white" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 16" }, props),
        React.createElement("rect", { width: "8.03571", height: "6.85714" }),
        React.createElement("rect", { x: "10.0444", width: "19.4196", height: "6.85714" }),
        React.createElement("rect", { y: "9.14285", width: "8.03571", height: "6.85714" }),
        React.createElement("rect", { x: "10.0449", y: "9.14285", width: "19.4196", height: "6.85714" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z", fill: "#ffecb3" }),
            React.createElement("path", { d: "m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z", fill: "#ffe082" }),
            React.createElement("path", { d: "m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z", fill: "#ffd54f" }),
            React.createElement("path", { d: "m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z", fill: "#ffca28" }),
            React.createElement("g", null,
                React.createElement("path", { d: "m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z", fill: "#ffb300" })))));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { x: "87", y: "109", width: "100%", height: "100%" })),
            React.createElement("clipPath", { id: "clip1" },
                React.createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React.createElement("clipPath", { id: "clip2" },
                React.createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React.createElement("clipPath", { id: "clip3" },
                React.createElement("rect", { x: "154", y: "180", width: "331", height: "331" }))),
        React.createElement("g", { clipPath: "url(#clip0)", transform: "translate(-87 -109)" },
            React.createElement("path", { d: "M88 359.5C88 221.153 200.153 109 338.5 109 476.847 109 589 221.153 589 359.5 589 497.847 476.847 610 338.5 610 200.153 610 88 497.847 88 359.5Z", fill: "#FAF4E6", fillRule: "evenodd" }),
            React.createElement("g", { clipPath: "url(#clip1)" },
                React.createElement("g", { clipPath: "url(#clip2)" },
                    React.createElement("g", { clipPath: "url(#clip3)" },
                        React.createElement("path", { d: "M426.222 423.902C426.004 423.794 403.447 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.774 187.416 310.387 187.138 293.263 186.392 276.325 201.453 272.733 232.246 257.692 361.171 314.463 440.904 396.048 484.852 412.154 493.039 433.355 486.506 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFECB3" }),
                        React.createElement("path", { d: "M426.222 423.902C426.004 423.794 403.446 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.775 187.416 310.387 187.138 306.44 186.966 302.504 187.645 298.737 189.152 306.922 192.49 317.637 200.811 322.083 220.094 327.95 245.543 320.999 291.928 330.865 324.09 337.868 346.198 348.265 366.27 361.768 383.751 383.468 411.844 406.025 423.794 406.243 423.902 423.071 432.236 429.958 452.636 421.625 469.467 417.371 478.254 409.669 484.237 401 486.858 416.254 491.625 434.178 484.807 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFE082" }),
                        React.createElement("path", { d: "M326.782 358.739C326.782 358.739 288.554 309.383 236.921 307.268 185.289 305.152 186.744 385.545 169.766 394.347 152.787 403.15 154.02 411.69 154.02 411.69 154.02 411.69 154.87 419.48 168.737 414.444 182.603 409.408 185.06 405.623 190.363 399.077 195.667 392.53 207.353 325.03 236.628 326.905 265.904 328.779 272.801 391.02 305.625 428.086 338.448 465.153 375.745 493.88 415.539 491.193 451.03 488.796 463.672 499.189 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.479 484.06 484.773 482.099 483.115 481.401 476.082 478.438 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.441 387.357 388.152 370.474 348.425 371.287 333.222 372.101 318.019 369.286 283.835 397.75 284.435 426.215 285.035 431.245 333.715 445.797 349.844 458.7 364.145 466.392 351.281 466.392 351.281 466.392 351.281 469.006 342.609 456.169 332.832 447.197 325.999 437.856 264.955 398.508 265.933 359.159 266.911 324.989 298.493 326.782 358.739Z", fill: "#FFD54F" }),
                        React.createElement("path", { d: "M483.115 481.4C476.082 478.437 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.44 387.357 388.151 370.474 348.424 371.287 333.221 372.101 318.019 369.286 283.834 397.75 284.434 426.215 285.034 431.245 333.715 445.798 349.844 458.7 364.144 466.393 351.281 466.393 351.281 466.393 351.281 469.007 342.608 456.169 332.831 447.197 325.998 437.856 264.955 398.508 265.933 365.519 266.753 336.174 289.09 328.606 331.79 327.471 347.975 326.782 358.74 326.782 358.74 326.782 358.74 334.667 420.014 388.135 444.741 441.604 469.467 424.363 477.658 452.607 494.409 452.612 494.412 452.616 494.414 452.62 494.416 462.048 497.306 467.604 501.252 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFCA28" }),
                        React.createElement("path", { d: "M483.115 481.4C476.082 478.437 458.942 469.968 451.09 455.089 441.076 436.115 450.101 440.73 418.729 414.44 387.356 388.151 370.473 348.424 371.286 333.221 371.974 320.358 370.067 293.905 386.709 286.433 366.873 293.105 351.306 307.963 351.306 333.221 351.306 357.898 367.377 388.151 398.749 414.44 430.121 440.73 420.099 436.674 431.11 455.089 445.398 478.982 468.356 477.694 470.186 502.562 470.799 502.909 471.386 503.236 471.953 503.532 473.476 504.332 475.356 503.741 476.143 502.21L484.656 485.659C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFB300" })))))));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z", fill: "#ffecb3" }),
            React.createElement("path", { d: "m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z", fill: "#ffe082" }),
            React.createElement("path", { d: "m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z", fill: "#ffd54f" }),
            React.createElement("path", { d: "m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z", fill: "#ffca28" }),
            React.createElement("g", null,
                React.createElement("path", { d: "m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z", fill: "#ffb300" })))));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { x: "87", y: "109", width: "502", height: "502" })),
            React.createElement("clipPath", { id: "clip1" },
                React.createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React.createElement("clipPath", { id: "clip2" },
                React.createElement("rect", { x: "154", y: "180", width: "331", height: "331" })),
            React.createElement("clipPath", { id: "clip3" },
                React.createElement("rect", { x: "154", y: "180", width: "331", height: "331" }))),
        React.createElement("g", { clipPath: "url(#clip0)", transform: "translate(-87 -109)" },
            React.createElement("path", { d: "M88 359.5C88 221.153 200.153 109 338.5 109 476.847 109 589 221.153 589 359.5 589 497.847 476.847 610 338.5 610 200.153 610 88 497.847 88 359.5Z", fill: "#FAF4E6", fillRule: "evenodd" }),
            React.createElement("g", { clipPath: "url(#clip1)" },
                React.createElement("g", { clipPath: "url(#clip2)" },
                    React.createElement("g", { clipPath: "url(#clip3)" },
                        React.createElement("path", { d: "M426.222 423.902C426.004 423.794 403.447 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.774 187.416 310.387 187.138 293.263 186.392 276.325 201.453 272.733 232.246 257.692 361.171 314.463 440.904 396.048 484.852 412.154 493.039 433.355 486.506 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFECB3" }),
                        React.createElement("path", { d: "M426.222 423.902C426.004 423.794 403.446 411.844 381.747 383.751 368.244 366.27 357.848 346.198 350.844 324.09 340.977 291.928 347.929 245.543 342.062 220.094 335.747 192.702 316.775 187.416 310.387 187.138 306.44 186.966 302.504 187.645 298.737 189.152 306.922 192.49 317.637 200.811 322.083 220.094 327.95 245.543 320.999 291.928 330.865 324.09 337.868 346.198 348.265 366.27 361.768 383.751 383.468 411.844 406.025 423.794 406.243 423.902 423.071 432.236 429.958 452.636 421.625 469.467 417.371 478.254 409.669 484.237 401 486.858 416.254 491.625 434.178 484.807 441.605 469.467 449.936 452.636 443.05 432.236 426.222 423.902Z", fill: "#FFE082" }),
                        React.createElement("path", { d: "M326.782 358.739C326.782 358.739 288.554 309.383 236.921 307.268 185.289 305.152 186.744 385.545 169.766 394.347 152.787 403.15 154.02 411.69 154.02 411.69 154.02 411.69 154.87 419.48 168.737 414.444 182.603 409.408 185.06 405.623 190.363 399.077 195.667 392.53 207.353 325.03 236.628 326.905 265.904 328.779 272.801 391.02 305.625 428.086 338.448 465.153 375.745 493.88 415.539 491.193 451.03 488.796 463.672 499.189 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.479 484.06 484.773 482.099 483.115 481.401 476.082 478.438 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.441 387.357 388.152 370.474 348.425 371.287 333.222 372.101 318.019 369.286 283.835 397.75 284.435 426.215 285.035 431.245 333.715 445.797 349.844 458.7 364.145 466.392 351.281 466.392 351.281 466.392 351.281 469.006 342.609 456.169 332.832 447.197 325.999 437.856 264.955 398.508 265.933 359.159 266.911 324.989 298.493 326.782 358.739Z", fill: "#FFD54F" }),
                        React.createElement("path", { d: "M483.115 481.4C476.082 478.437 458.943 469.968 451.091 455.089 441.077 436.115 450.102 440.73 418.73 414.44 387.357 388.151 370.474 348.424 371.287 333.221 372.101 318.019 369.286 283.834 397.75 284.434 426.215 285.034 431.245 333.715 445.798 349.844 458.7 364.144 466.393 351.281 466.393 351.281 466.393 351.281 469.007 342.608 456.169 332.831 447.197 325.998 437.856 264.955 398.508 265.933 365.519 266.753 336.174 289.09 328.606 331.79 327.471 347.975 326.782 358.74 326.782 358.74 326.782 358.74 334.667 420.014 388.135 444.741 441.604 469.467 424.363 477.658 452.607 494.409 452.612 494.412 452.616 494.414 452.62 494.416 462.048 497.306 467.604 501.252 471.953 503.533 473.476 504.332 475.356 503.741 476.143 502.211L484.656 485.66C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFCA28" }),
                        React.createElement("path", { d: "M483.115 481.4C476.082 478.437 458.942 469.968 451.09 455.089 441.076 436.115 450.101 440.73 418.729 414.44 387.356 388.151 370.473 348.424 371.286 333.221 371.974 320.358 370.067 293.905 386.709 286.433 366.873 293.105 351.306 307.963 351.306 333.221 351.306 357.898 367.377 388.151 398.749 414.44 430.121 440.73 420.099 436.674 431.11 455.089 445.398 478.982 468.356 477.694 470.186 502.562 470.799 502.909 471.386 503.236 471.953 503.532 473.476 504.332 475.356 503.741 476.143 502.21L484.656 485.659C485.478 484.06 484.773 482.098 483.115 481.4Z", fill: "#FFB300" })))))));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 245.6 247.7" }, props),
        React.createElement("style", { type: "text/css" }, "\r\n\t.st0{fill:#FFAD23;}\r\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#633001;}\r\n\t.st2{fill:#FCDC49;}\r\n\t.st3{fill:#633001;}\r\n"),
        React.createElement("g", null,
            React.createElement("path", { className: "st0", d: "M233.4,95.2c0,0.3,0,0.7-0.1,1.1c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8 c-1.9,1.4-4.3,1.7-6.4,1.1c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0 c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7c-0.1,0-0.2,0-0.2-0.1c-9.7-3.4-20.8-1.2-28.7,6.3h0L17.1,161l-2.9-2.9 c-0.3-0.3-0.7-0.7-0.9-1.1c-1.3-1.9-1.5-4.3-0.8-6.4c0.1-0.3,0.2-0.5,0.3-0.8c0.3-0.6,0.7-1.2,1.2-1.8c0.3-0.3,0.6-0.6,1-0.9l4-2.8 c49.4-35.2,92.3-78.6,127.1-128.2c2-2.9,5.8-3.7,8.8-2.1c0.6,0.3,1.1,0.7,1.6,1.2L173.5,32c-1.5,1.5-2.7,3.2-3.8,4.9c0,0,0,0,0,0.1 c-7,10.9-5.8,25.5,3.8,35.1c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2l0.2-0.2l8.3,8.3l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2 c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2c0,0.2,0.1,0.4,0.1,0.7C233.4,94.6,233.5,94.9,233.4,95.2z" }),
            React.createElement("path", { className: "st1", d: "M176.4,106.1c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C178.1,101.5,178.1,104.4,176.4,106.1z" }),
            React.createElement("path", { className: "st2", d: "M233.3,96.3c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-1.9,1.4-4.3,1.7-6.4,1.1 c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7 c-0.1,0-0.2,0-0.2-0.1c-9.5-2.8-20.3-0.5-27.8,7c0,0,0,0,0,0l0,0l-0.8-0.8h0L17.1,161h0l21.4-3.2c66.7-9.9,129.7-36.7,183.1-77.6 c0,0,0,0,0,0l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2C233.5,94.5,233.5,95.4,233.3,96.3z" }),
            React.createElement("path", { className: "st1", d: "M237.7,83.6l-18.1-18.1c-1.7-1.7-4-2.6-6.3-2.6c-2.4,0-4.6,1-6.3,2.7c0,0-0.1,0.1-0.1,0.1 c-7.5,7.5-19.6,7.5-27.1,0c-7.5-7.5-7.5-19.6,0-27.1c0,0,0.1-0.1,0.1-0.1c1.7-1.7,2.7-3.9,2.7-6.3c0-2.4-0.9-4.7-2.6-6.3l-17-17 C156.1,2,144.6,3,139,11c-34.2,48.8-76.4,91.5-125,126.1l-4,2.9c-8.1,5.8-9.1,17.4-2,24.5l17.3,17.3c1.7,1.7,3.9,2.6,6.3,2.6 c2.4,0,4.6-0.9,6.3-2.6l0,0c7.5-7.5,19.6-7.5,27.1,0c7.5,7.5,7.5,19.6,0,27.1l0,0c-1.7,1.7-2.6,3.9-2.6,6.3c0,2.4,0.9,4.6,2.6,6.3 l17.2,17.2c5.6,5.6,14.5,6.4,20.9,1.7l4-2.8c51.4-36.7,96.2-81.8,132.4-133.5C243.9,97.7,243.2,89.1,237.7,83.6z M232.2,98.9 c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-2.9,2.1-6.9,1.8-9.5-0.8l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7 c-11-11-28.7-11-39.7,0c0,0,0,0,0,0l0,0l-17.3-17.3c-3.1-3.1-2.7-8.4,0.9-10.9l4-2.8c49.3-35.2,92.3-78.6,127.1-128.2 c2.4-3.5,7.4-3.9,10.4-0.9l17,17c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-10.8,11-10.7,28.6,0.2,39.5 c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2l18.1,18.1C233.8,92.3,234.1,96.1,232.2,98.9z" }),
            React.createElement("path", { className: "st1", d: "M139.4,62.8l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C134.8,61.1,137.6,61.1,139.4,62.8z" }),
            React.createElement("path", { className: "st1", d: "M124,47.5l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C119.5,45.7,122.3,45.7,124,47.5z" }),
            React.createElement("path", { className: "st1", d: "M159.8,89.6c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C161.6,85,161.6,87.8,159.8,89.6z" }),
            React.createElement("path", { className: "st1", d: "M188.2,111.6l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C183.6,109.9,186.4,109.9,188.2,111.6z" }),
            React.createElement("path", { className: "st1", d: "M204.7,128.1l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C200.1,126.4,202.9,126.4,204.7,128.1z" }),
            React.createElement("path", { className: "st3", d: "M86.3,159.6c1.8,1.9,4.4,2.9,4.7,3c5.6,1.8,11.6,2.4,18,1.7c19.3-2.1,35.1-17.4,38.1-36.5 c1-6.3,0.5-12.5-1-18.2c-0.4-1.5-1.3-3.9-2.8-5.6c-0.7-0.8-1.6-1.4-2.6-1.7l-0.8-3.8c-0.2-0.9-1-1.4-1.9-1.2l-0.5,0.1l0,0l-0.5,0.1 c-0.9,0.2-1.4,1-1.2,1.9l0.8,3.8c0,0-0.1,0-0.1,0.1c-1.1,0.8-1.6,2-1.8,2.7c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2 c0,0.2-0.1,0.3-0.1,0.3l0,0c0,0.4,0,0.9,0,1.3c0,0.4,0,0.8,0,1.2c0,0.3,0,0.6,0,0.9c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.5 c0,0.5-0.1,0.9-0.1,1.4c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.4-0.1,0.8-0.2,1.3c0,0.3-0.1,0.6-0.1,0.8c-0.1,0.4-0.2,0.8-0.2,1.2 c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2-0.1,0.3-0.1,0.5c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.2-0.1,0.4-0.2,0.6 s-0.1,0.4-0.2,0.6c-0.1,0.3-0.2,0.5-0.3,0.8c0,0.1,0,0.1-0.1,0.2c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.1-0.1,0.3-0.2,0.4 c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.3-0.2,0.5-0.3,0.8c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.3-0.3,0.6-0.5,1c0,0,0,0.1-0.1,0.1 c-0.2,0.3-0.3,0.7-0.5,1c-0.1,0.2-0.2,0.5-0.4,0.7c-0.2,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.3,0.6-0.5,0.8c0,0,0,0,0,0 c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.3-0.4,0.6-0.7,0.9 c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.3-0.5,0.6-0.7,0.9c-0.2,0.2-0.3,0.4-0.5,0.6c-0.3,0.4-0.6,0.7-1,1.1 c-0.1,0.1-0.2,0.2-0.3,0.4c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.5-0.8,0.7 c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0c-0.2,0.1-0.3,0.3-0.5,0.4 c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.4c-0.3,0.2-0.5,0.4-0.8,0.6 l-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.2c-0.6,0.4-1.2,0.8-1.8,1.2c-0.6,0.4-1.2,0.7-1.9,1.1 c-0.1,0.1-0.3,0.2-0.4,0.2l-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.5,0.3-1.1,0.6-1.6,0.8c-0.2,0.1-0.4,0.2-0.6,0.3 c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.2-0.8,0.3-1.1,0.5c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.1-0.8,0.3-1.2,0.4 c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.4,0.1-0.5,0.1c-0.6,0.2-1.2,0.3-1.8,0.5 c0,0-0.1,0-0.1,0c-0.5,0.1-1.1,0.2-1.6,0.3l0,0c-2.2,0.5-7.7,1.2-11.2,2.7c-0.6,0.3-1.2,0.5-1.6,0.8c-0.5,0.3-0.9,0.6-1.1,1 c-0.2,0.2-0.3,0.5-0.4,0.8c0,0.1-0.1,0.3-0.1,0.4c0,0,0,0,0,0c0,0.1,0,0.3,0,0.4l0,0c0,0,0,0,0,0C84.7,157.6,85.4,158.7,86.3,159.6 z" }),
            React.createElement("path", { className: "st1", d: "M14.3,158.1c-0.4-0.3-0.7-0.7-0.9-1.1C13.6,157.4,13.9,157.8,14.3,158.1l2.8,2.9L14.3,158.1z M17.1,161 L17.1,161l13.7,13.7L17.1,161z M90.3,233.6c0.4,0.2,0.9,0.4,1.3,0.5C91.1,234,90.7,233.8,90.3,233.6z" }))));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 250 250" }, props),
        React.createElement("circle", { cx: "125", cy: "125", r: "125", fill: "url(#paint0_linear)" }),
        React.createElement("style", { type: "text/css" }, "\r\n\t.st0{fill:#FFAD23;}\r\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#633001;}\r\n\t.st2{fill:#FCDC49;}\r\n\t.st3{fill:#633001;}\r\n"),
        React.createElement("g", null,
            React.createElement("path", { className: "st0", d: "M233.4,95.2c0,0.3,0,0.7-0.1,1.1c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8 c-1.9,1.4-4.3,1.7-6.4,1.1c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0 c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7c-0.1,0-0.2,0-0.2-0.1c-9.7-3.4-20.8-1.2-28.7,6.3h0L17.1,161l-2.9-2.9 c-0.3-0.3-0.7-0.7-0.9-1.1c-1.3-1.9-1.5-4.3-0.8-6.4c0.1-0.3,0.2-0.5,0.3-0.8c0.3-0.6,0.7-1.2,1.2-1.8c0.3-0.3,0.6-0.6,1-0.9l4-2.8 c49.4-35.2,92.3-78.6,127.1-128.2c2-2.9,5.8-3.7,8.8-2.1c0.6,0.3,1.1,0.7,1.6,1.2L173.5,32c-1.5,1.5-2.7,3.2-3.8,4.9c0,0,0,0,0,0.1 c-7,10.9-5.8,25.5,3.8,35.1c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2l0.2-0.2l8.3,8.3l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2 c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2c0,0.2,0.1,0.4,0.1,0.7C233.4,94.6,233.5,94.9,233.4,95.2z" }),
            React.createElement("path", { className: "st1", d: "M176.4,106.1c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C178.1,101.5,178.1,104.4,176.4,106.1z" }),
            React.createElement("path", { className: "st2", d: "M233.3,96.3c-0.2,0.9-0.6,1.8-1.1,2.6c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-1.9,1.4-4.3,1.7-6.4,1.1 c-0.5-0.1-0.9-0.3-1.3-0.5c-0.6-0.3-1.2-0.8-1.8-1.3l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7c-3.4-3.4-7.4-5.7-11.6-7 c-0.1,0-0.2,0-0.2-0.1c-9.5-2.8-20.3-0.5-27.8,7c0,0,0,0,0,0l0,0l-0.8-0.8h0L17.1,161h0l21.4-3.2c66.7-9.9,129.7-36.7,183.1-77.6 c0,0,0,0,0,0l9.8,9.8c0.4,0.4,0.7,0.8,1,1.2c0.1,0.1,0.2,0.3,0.3,0.4v0c0.3,0.6,0.6,1.3,0.7,2C233.5,94.5,233.5,95.4,233.3,96.3z" }),
            React.createElement("path", { className: "st1", d: "M237.7,83.6l-18.1-18.1c-1.7-1.7-4-2.6-6.3-2.6c-2.4,0-4.6,1-6.3,2.7c0,0-0.1,0.1-0.1,0.1 c-7.5,7.5-19.6,7.5-27.1,0c-7.5-7.5-7.5-19.6,0-27.1c0,0,0.1-0.1,0.1-0.1c1.7-1.7,2.7-3.9,2.7-6.3c0-2.4-0.9-4.7-2.6-6.3l-17-17 C156.1,2,144.6,3,139,11c-34.2,48.8-76.4,91.5-125,126.1l-4,2.9c-8.1,5.8-9.1,17.4-2,24.5l17.3,17.3c1.7,1.7,3.9,2.6,6.3,2.6 c2.4,0,4.6-0.9,6.3-2.6l0,0c7.5-7.5,19.6-7.5,27.1,0c7.5,7.5,7.5,19.6,0,27.1l0,0c-1.7,1.7-2.6,3.9-2.6,6.3c0,2.4,0.9,4.6,2.6,6.3 l17.2,17.2c5.6,5.6,14.5,6.4,20.9,1.7l4-2.8c51.4-36.7,96.2-81.8,132.4-133.5C243.9,97.7,243.2,89.1,237.7,83.6z M232.2,98.9 c-35.6,50.9-79.7,95.3-130.2,131.4l-4,2.8c-2.9,2.1-6.9,1.8-9.5-0.8l-17.2-17.2l0,0c0,0,0,0,0,0c10.9-11,10.9-28.7,0-39.7 c-11-11-28.7-11-39.7,0c0,0,0,0,0,0l0,0l-17.3-17.3c-3.1-3.1-2.7-8.4,0.9-10.9l4-2.8c49.3-35.2,92.3-78.6,127.1-128.2 c2.4-3.5,7.4-3.9,10.4-0.9l17,17c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-10.8,11-10.7,28.6,0.2,39.5 c10.9,10.9,28.5,11,39.5,0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2l18.1,18.1C233.8,92.3,234.1,96.1,232.2,98.9z" }),
            React.createElement("path", { className: "st1", d: "M139.4,62.8l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C134.8,61.1,137.6,61.1,139.4,62.8z" }),
            React.createElement("path", { className: "st1", d: "M124,47.5l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C119.5,45.7,122.3,45.7,124,47.5z" }),
            React.createElement("path", { className: "st1", d: "M159.8,89.6c-1.7,1.7-4.6,1.7-6.3,0l-4.7-4.7c-1.7-1.7-1.7-4.6,0-6.3c1.7-1.7,4.6-1.7,6.3,0l4.7,4.7 C161.6,85,161.6,87.8,159.8,89.6z" }),
            React.createElement("path", { className: "st1", d: "M188.2,111.6l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C183.6,109.9,186.4,109.9,188.2,111.6z" }),
            React.createElement("path", { className: "st1", d: "M204.7,128.1l3.9,3.9c1.7,1.7,1.7,4.6,0,6.3c-1.7,1.7-4.6,1.7-6.3,0l-3.9-3.9c-1.7-1.7-1.7-4.6,0-6.3 C200.1,126.4,202.9,126.4,204.7,128.1z" }),
            React.createElement("path", { className: "st3", d: "M86.3,159.6c1.8,1.9,4.4,2.9,4.7,3c5.6,1.8,11.6,2.4,18,1.7c19.3-2.1,35.1-17.4,38.1-36.5 c1-6.3,0.5-12.5-1-18.2c-0.4-1.5-1.3-3.9-2.8-5.6c-0.7-0.8-1.6-1.4-2.6-1.7l-0.8-3.8c-0.2-0.9-1-1.4-1.9-1.2l-0.5,0.1l0,0l-0.5,0.1 c-0.9,0.2-1.4,1-1.2,1.9l0.8,3.8c0,0-0.1,0-0.1,0.1c-1.1,0.8-1.6,2-1.8,2.7c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2 c0,0.2-0.1,0.3-0.1,0.3l0,0c0,0.4,0,0.9,0,1.3c0,0.4,0,0.8,0,1.2c0,0.3,0,0.6,0,0.9c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.5 c0,0.5-0.1,0.9-0.1,1.4c0,0.3-0.1,0.5-0.1,0.8c-0.1,0.4-0.1,0.8-0.2,1.3c0,0.3-0.1,0.6-0.1,0.8c-0.1,0.4-0.2,0.8-0.2,1.2 c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0.4-0.2,0.8-0.3,1.2c0,0.2-0.1,0.3-0.1,0.5c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.2-0.1,0.4-0.2,0.6 s-0.1,0.4-0.2,0.6c-0.1,0.3-0.2,0.5-0.3,0.8c0,0.1,0,0.1-0.1,0.2c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.1-0.1,0.3-0.2,0.4 c-0.1,0.2-0.2,0.5-0.3,0.7c-0.1,0.3-0.2,0.5-0.3,0.8c-0.1,0.2-0.2,0.4-0.3,0.6c-0.2,0.3-0.3,0.6-0.5,1c0,0,0,0.1-0.1,0.1 c-0.2,0.3-0.3,0.7-0.5,1c-0.1,0.2-0.2,0.5-0.4,0.7c-0.2,0.3-0.3,0.6-0.5,0.9c-0.2,0.3-0.3,0.6-0.5,0.8c0,0,0,0,0,0 c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.3-0.4,0.6-0.6,0.9c-0.2,0.3-0.3,0.5-0.5,0.8c-0.2,0.3-0.4,0.6-0.7,0.9 c-0.1,0.1-0.2,0.2-0.3,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.3-0.5,0.6-0.7,0.9c-0.2,0.2-0.3,0.4-0.5,0.6c-0.3,0.4-0.6,0.7-1,1.1 c-0.1,0.1-0.2,0.2-0.3,0.4c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.2-0.5,0.5-0.8,0.7 c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0-0.1,0c-0.2,0.1-0.3,0.3-0.5,0.4 c-0.2,0.2-0.5,0.4-0.7,0.6c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c-0.2,0.1-0.3,0.2-0.5,0.4c-0.3,0.2-0.5,0.4-0.8,0.6 l-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.1-0.3,0.2c-0.6,0.4-1.2,0.8-1.8,1.2c-0.6,0.4-1.2,0.7-1.9,1.1 c-0.1,0.1-0.3,0.2-0.4,0.2l-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.5,0.3-1.1,0.6-1.6,0.8c-0.2,0.1-0.4,0.2-0.6,0.3 c-0.2,0.1-0.4,0.2-0.6,0.2c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.2-0.8,0.3-1.1,0.5c-0.2,0.1-0.4,0.2-0.7,0.3c-0.4,0.1-0.8,0.3-1.2,0.4 c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.2,0.1-0.4,0.1-0.5,0.1c-0.6,0.2-1.2,0.3-1.8,0.5 c0,0-0.1,0-0.1,0c-0.5,0.1-1.1,0.2-1.6,0.3l0,0c-2.2,0.5-7.7,1.2-11.2,2.7c-0.6,0.3-1.2,0.5-1.6,0.8c-0.5,0.3-0.9,0.6-1.1,1 c-0.2,0.2-0.3,0.5-0.4,0.8c0,0.1-0.1,0.3-0.1,0.4c0,0,0,0,0,0c0,0.1,0,0.3,0,0.4l0,0c0,0,0,0,0,0C84.7,157.6,85.4,158.7,86.3,159.6 z" }),
            React.createElement("path", { className: "st1", d: "M14.3,158.1c-0.4-0.3-0.7-0.7-0.9-1.1C13.6,157.4,13.9,157.8,14.3,158.1l2.8,2.9L14.3,158.1z M17.1,161 L17.1,161l13.7,13.7L17.1,161z M90.3,233.6c0.4,0.2,0.9,0.4,1.3,0.5C91.1,234,90.7,233.8,90.3,233.6z" })),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "125", y1: "0", x2: "125", y2: "250", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#AF6E5A" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#AF6E5A" })))));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("path", { d: "M10.9345 10.958C11.2051 10.6893 11.6388 10.6893 11.9093 10.958L13.6976 12.4015H13.7287C14.0904 12.7672 14.0904 13.3601 13.7287 13.7257C13.3669 14.0914 12.7803 14.0914 12.4185 13.7257L10.9345 12.0249L10.8782 11.9614C10.7733 11.8286 10.7153 11.6631 10.7153 11.4915C10.7153 11.2913 10.7942 11.0993 10.9345 10.958ZM6.00435 0C7.5968 0 9.12403 0.639405 10.2501 1.77755C11.3761 2.9157 12.0087 4.45936 12.0087 6.06895C12.0087 9.42074 9.32046 12.1379 6.00435 12.1379C2.68824 12.1379 0 9.42074 0 6.06895C0 2.71716 2.68824 0 6.00435 0Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$t, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$r, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var sizes$1 = {
    SM: "sm",
    MD: "md",
};
var variants$2 = {
    PRIMARY: "primary",
};

var getDisabledStyles$1 = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents$1 = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp$1 = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButtonSquare = styled.button(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  align-items: center;\n  background-color: #ffb300;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 12px;\n  font-weight: 400;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: #ffb300;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  color: white;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 12px;\n  font-weight: 400;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "36px" : "36px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp$1("backgroundHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp$1("boxShadowActive"), getDisabledStyles$1, removePointerEvents$1, space);
StyledButtonSquare.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$7;

var ButtonSquare = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButtonSquare, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
ButtonSquare.defaultProps = {
    variant: variants$2.PRIMARY,
    size: sizes$1.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButtonSquare = styled(ButtonSquare)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$8;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$9;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n  font-family: ", ";\n  font-size: ", ";\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n  font-family: ", ";\n  font-size: ", ";\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
}, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return fontFamily && getFontFamily(fontFamily, theme);
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "16px";
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, fontFamily = _a.fontFamily, fontSize = _a.fontSize, props = __rest(_a, ["isActive", "size", "variant", "as", "fontFamily", "fontSize"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY || variants.YELLOW ? "primary" : "textSubtle", fontFamily: fontFamily, fontSize: fontSize }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant, fontFamily: fontFamily, fontSize: fontSize }, props));
};
var templateObject_1$a;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$b;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var CardHeader = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$d;

var CardFooter = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$e;

var StyledCardRibbon = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$f;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 22%;\n    left: 5%;\n    right: 10%;\n    width: 75%;\n    height: 75%;\n    margin: auto;\n    transform: rotate(-5deg);\n    transition: border-color 0.2s ease-in-out;\n    background-repeat: no-repeat, no-repeat;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n  \n      background-image: url('data:image/svg+xml, <svg viewBox=\"0 0 14 12\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z\" fill=\"white\"/>\n</svg>\n')};\n      background-repeat: no-repeat, no-repeat;\n\n\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 22%;\n    left: 5%;\n    right: 10%;\n    width: 75%;\n    height: 75%;\n    margin: auto;\n    transform: rotate(-5deg);\n    transition: border-color 0.2s ease-in-out;\n    background-repeat: no-repeat, no-repeat;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n  \n      background-image: url('data:image/svg+xml, <svg viewBox=\"0 0 14 12\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z\" fill=\"white\"/>\n</svg>\n')};\n      background-repeat: no-repeat, no-repeat;\n\n\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.yellow;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.yellow;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.yellow;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$g;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$h, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$2 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$2.MD] = {
        fontSize: "20px",
    },
    _a[sizes$2.LG] = {
        fontSize: "24px",
    },
    _a[sizes$2.XL] = {
        fontSize: "40px",
    },
    _a[sizes$2.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  ", "\n  font-family: ", ";\n  font-weight: 400;\n  line-height: 1.1;\n  text-align: ", ";\n"], ["\n  ", "\n  font-family: ", ";\n  font-weight: 400;\n  line-height: 1.1;\n  text-align: ", ";\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$2.MD];
}, function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return getFontFamily(fontFamily, theme);
}, function (_a) {
    var textAlign = _a.textAlign;
    return textAlign;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$i;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$j;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$k, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$l;

var GridLayout = styled.div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$m;

var GridLayout$1 = styled(GridLayout)(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$n;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$o;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 300;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 300;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$p;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  font-family: ", ";\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  font-family: ", ";\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var fontFamily = _a.fontFamily, theme = _a.theme;
    return getFontFamily(fontFamily, theme);
});
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$q;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$D, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$r, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$s;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$J, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1512 1512" }, props),
        React.createElement("defs", null,
            React.createElement("style", null, ".cls-1{fill:#a16552;}.cls-2{fill:#f5dcb4;}.cls-3,.cls-7{fill:#4e3f3f;}.cls-4{fill:#e6646e;}.cls-5{fill:#5d5360;}.cls-6{fill:#fff;}.cls-7{opacity:0.35;}")),
        React.createElement("path", { className: "cls-1", d: "M107.06,284a275.78,275.78,0,0,0-9.82,71.82c0,1.7,0,3.37,0,5,.37,29.36-3.27,58.53-9.82,87.11C73.93,443.21,60,433.48,46.72,416.67c-34.95-44.27-23.3-115.33,19.81-132,16.31-6.32,30-5,40.61-.84Z" }),
        React.createElement("path", { className: "cls-2", d: "M107.06,284a275.78,275.78,0,0,0-9.82,71.82c0,1.7,0,3.37,0,5,.37,29.36-3.27,58.53-9.82,87.11C73.93,443.21,60,433.48,46.72,416.67c-34.95-44.27-23.3-115.33,19.81-132,16.31-6.32,30-5,40.61-.84Z" }),
        React.createElement("path", { className: "cls-1", d: "M751.29,416.67C738,433.46,724.09,443.19,710.57,448a369.59,369.59,0,0,1-9.83-87.1c0-1.66,0-3.33,0-5a274.93,274.93,0,0,0-9.9-72.08c10.66-4.14,24.3-5.48,40.61.84C774.59,301.34,786.24,372.4,751.29,416.67Z" }),
        React.createElement("path", { className: "cls-2", d: "M751.29,416.67C738,433.46,724.09,443.19,710.57,448a369.59,369.59,0,0,1-9.83-87.1c0-1.66,0-3.33,0-5a274.93,274.93,0,0,0-9.9-72.08c10.66-4.14,24.3-5.48,40.61.84C774.59,301.34,786.24,372.4,751.29,416.67Z" }),
        React.createElement("path", { className: "cls-1", d: "M616.94,448.92c-12.69,19.9-16.2,44.53-8.58,67,5.74,16.9,10.87,36,10.87,50.25,0,104.06-98.59,188.41-220.23,188.41S178.76,670.21,178.76,566.15c0-14.23,5.14-33.34,10.88-50.25,7.61-22.43,4.12-47.08-8.58-67A122.58,122.58,0,0,1,172.93,434,119.35,119.35,0,0,1,162,384c0-69.1,58.83-125.12,131.41-125.12a135.88,135.88,0,0,1,66.94,17.44,78.21,78.21,0,0,0,77.29,0,135.76,135.76,0,0,1,66.92-17.42c72.59,0,131.42,56,131.42,125.12a119.39,119.39,0,0,1-10.91,50A122.51,122.51,0,0,1,616.94,448.92Z" }),
        React.createElement("path", { className: "cls-2", d: "M616.94,448.92c-12.69,19.9-16.2,44.53-8.58,67,5.74,16.9,10.87,36,10.87,50.25,0,104.06-98.59,188.41-220.23,188.41S178.76,670.21,178.76,566.15c0-14.23,5.14-33.34,10.88-50.25,7.61-22.43,4.12-47.08-8.58-67A122.58,122.58,0,0,1,172.93,434,119.35,119.35,0,0,1,162,384c0-69.1,58.83-125.12,131.41-125.12a135.88,135.88,0,0,1,66.94,17.44,78.21,78.21,0,0,0,77.29,0,135.76,135.76,0,0,1,66.92-17.42c72.59,0,131.42,56,131.42,125.12a119.39,119.39,0,0,1-10.91,50A122.51,122.51,0,0,1,616.94,448.92Z" }),
        React.createElement("path", { className: "cls-3", d: "M286.81,589.43a12.65,12.65,0,0,0-12.55,14.29c7.8,55.75,60.68,98.88,124.75,98.88S516,659.47,523.76,603.72a12.66,12.66,0,0,0-12.56-14.29Z" }),
        React.createElement("path", { className: "cls-4", d: "M326.55,681.83a136.76,136.76,0,0,0,144.91,0c-9.08-31.47-38.16-24.22-72.45-24.22S335.64,650.36,326.55,681.83Z" }),
        React.createElement("path", { className: "cls-1", d: "M746.39,261.35c-26.06-10.11-46.75-4.78-61.28,3.58a320.3,320.3,0,0,0-12.25-30.74q-5.05-11-10.92-21.73C622.06,139.49,555,78.92,478,53.32l-1.52-41.41L426.7,41.81c-2-.22-4-.44-6-.62-3.68-.34-7.34-.59-11.05-.75L402.37,9.12,400.24,0c-2.48,0-4.92.07-7.28.27-46.37,3.76-69.44,45.88-73,53.1C243,79,176,139.52,136.07,212.46q-5.87,10.69-10.92,21.73A323.37,323.37,0,0,0,112.89,265c-.61-.37-1.23-.72-1.87-1.05-14.42-7.74-34.46-12.22-59.4-2.55C-3.15,282.59-17.93,372.86,26.45,429.11c18.11,22.9,37.17,35.44,55.52,41-.25,1-.47,2.07-.7,3.1a214.9,214.9,0,0,0-5,46.08c0,107.45,79.26,199.87,192.8,240.54a376.31,376.31,0,0,0,82.44,19.33,397.33,397.33,0,0,0,44,2.82c1.16,0,2.33,0,3.49,0C577.23,782,721.7,664.39,721.7,519.31a215.53,215.53,0,0,0-5-46.08c-.23-1-.46-2.07-.7-3.09,18.35-5.59,37.41-18.13,55.5-41.05C815.94,372.86,801.14,282.58,746.39,261.35ZM107.06,284a275.78,275.78,0,0,0-9.82,71.82c0,1.7,0,3.37,0,5,.37,29.36-3.27,58.53-9.82,87.11C73.93,443.21,60,433.48,46.72,416.67c-34.95-44.27-23.3-115.33,19.81-132,16.31-6.32,30-5,40.61-.84Zm518,150a122.51,122.51,0,0,1-8.14,14.93c-12.69,19.9-16.2,44.53-8.58,67,5.74,16.9,10.87,36,10.87,50.25,0,104.06-98.59,188.41-220.23,188.41S178.76,670.21,178.76,566.15c0-14.23,5.14-33.34,10.88-50.25,7.61-22.43,4.12-47.08-8.58-67A122.58,122.58,0,0,1,172.93,434,119.35,119.35,0,0,1,162,384c0-69.1,58.83-125.12,131.41-125.12a135.88,135.88,0,0,1,66.94,17.44,78.21,78.21,0,0,0,77.29,0,135.76,135.76,0,0,1,66.92-17.42c72.59,0,131.42,56,131.42,125.12A119.39,119.39,0,0,1,625.08,434Zm126.21-17.32C738,433.46,724.09,443.19,710.57,448a369.59,369.59,0,0,1-9.83-87.1c0-1.66,0-3.33,0-5a274.93,274.93,0,0,0-9.9-72.08c10.66-4.14,24.3-5.48,40.61.84C774.59,301.34,786.24,372.4,751.29,416.67Z" }),
        React.createElement("rect", { className: "cls-3", x: 355.46, y: 481.55, width: 21.16, height: 48.06, rx: 10.58, transform: "translate(-245.92 628.44) rotate(-65.45)" }),
        React.createElement("rect", { className: "cls-3", x: 421.4, y: 481.55, width: 21.16, height: 48.06, rx: 10.58, transform: "translate(151.6 1108.57) rotate(-114.55)" }),
        React.createElement("path", { className: "cls-3", d: "M285.83,434h0c-20.83,0-37.72-16-37.72-35.75V386.3c0-19.75,16.89-35.75,37.72-35.75h0c20.84,0,37.73,16,37.73,35.75v11.91C323.56,418,306.67,434,285.83,434Z" }),
        React.createElement("path", { className: "cls-5", d: "M285.83,350.55v41.71c0,9.87,8.45,17.87,18.86,17.87s18.87-8,18.87-17.87v-6C323.56,366.55,306.67,350.55,285.83,350.55Z" }),
        React.createElement("ellipse", { className: "cls-6", cx: 285.84, cy: 374.39, rx: 12.57, ry: 11.92 }),
        React.createElement("path", { className: "cls-3", d: "M512.17,434h0c-20.83,0-37.72-16-37.72-35.75V386.3c0-19.75,16.89-35.75,37.72-35.75h0c20.84,0,37.73,16,37.73,35.75v11.91C549.9,418,533,434,512.17,434Z" }),
        React.createElement("path", { className: "cls-5", d: "M512.17,350.55v41.71c0,9.87,8.45,17.87,18.86,17.87s18.87-8,18.87-17.87v-6C549.9,366.55,533,350.55,512.17,350.55Z" }),
        React.createElement("ellipse", { className: "cls-6", cx: 512.17, cy: 374.39, rx: 12.57, ry: 11.92 }),
        React.createElement("path", { className: "cls-7", d: "M402.37,9.12c-8.44-.84-26.92,12.44-49.05,35.48-5.51,5.74-11.26,12.11-17.16,19C292.81,114.46,242.55,194.66,225.33,277c-28.9,138.17-40.64,298.47,10.35,387.39C278.9,739.7,351.54,779.18,351.54,779.18a376.31,376.31,0,0,1-82.44-19.33C155.56,719.18,76.3,626.76,76.3,519.31a214.9,214.9,0,0,1,5-46.08c.23-1,.45-2.07.7-3.1-18.35-5.58-37.41-18.12-55.52-41-44.38-56.25-29.6-146.52,25.17-167.76,24.94-9.67,45-5.19,59.4,2.55.64.33,1.26.68,1.87,1.05a323.37,323.37,0,0,1,12.26-30.76q5.06-11,10.92-21.73C176,139.52,243,79,319.92,53.36c3.6-7.22,26.67-49.34,73-53.1,2.36-.2,4.8-.29,7.28-.27Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "m421.081 377.275c-.338-.167-35.23-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.116-50.547-48.996-50.977-26.488-1.153-52.688 22.143-58.244 69.774-23.266 199.426 64.548 322.759 190.747 390.738 24.913 12.664 57.707 2.559 70.468-23.797 12.887-26.035 2.235-57.59-23.794-70.481z", fill: "#ffecb3" }),
            React.createElement("path", { d: "m421.081 377.275c-.338-.167-35.231-18.652-68.796-62.108-20.886-27.039-36.968-58.088-47.802-92.284-15.261-49.75-4.508-121.5-13.583-160.865-9.768-42.37-39.115-50.547-48.996-50.977-6.106-.266-12.194.785-18.02 3.116 12.66 5.163 29.234 18.034 36.111 47.861 9.076 39.365-1.677 111.116 13.584 160.865 10.833 34.196 26.916 65.245 47.802 92.284 33.566 43.456 68.458 61.941 68.796 62.108 26.029 12.891 36.682 44.446 23.793 70.48-6.581 13.593-18.494 22.848-31.903 26.902 23.594 7.373 51.32-3.173 62.808-26.902 12.887-26.034 2.235-57.589-23.794-70.48z", fill: "#ffe082" }),
            React.createElement("path", { d: "m267.264 276.479s-59.132-76.346-138.999-79.618-77.615 121.081-103.878 134.697c-26.263 13.616-24.356 26.827-24.356 26.827s1.315 12.049 22.764 4.259 25.249-13.644 33.453-23.77 26.28-114.537 71.564-111.638 55.952 99.175 106.725 156.511 108.464 101.771 170.019 97.615c54.899-3.707 74.453 12.369 87.262 19.088 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.273-2.474.181-5.508-2.383-6.588-10.879-4.583-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465c44.03.928 51.81 76.228 74.32 101.177 19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-60.865 1.512-113.721 50.365-110.947 143.555z", fill: "#ffd54f" }),
            React.createElement("path", { d: "m509.085 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.385-125.632-3.095-76.393 40.934-75.465 51.811 76.228 74.321 101.177c19.958 22.12 31.857 2.223 31.857 2.223s4.043-13.415-15.814-28.538c-13.878-10.57-28.327-104.994-89.192-103.481-51.029 1.269-96.42 35.82-108.127 101.87-1.755 25.035-2.821 41.687-2.821 41.687s12.196 94.781 94.903 133.029c82.707 38.247 56.038 50.917 99.727 76.828.007.004.013.007.019.011 14.584 4.469 23.179 10.574 29.905 14.102 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.475.181-5.509-2.383-6.589z", fill: "#ffca28" }),
            React.createElement("g", null,
                React.createElement("path", { d: "m509.084 466.214c-10.879-4.584-37.391-17.684-49.537-40.699-15.49-29.35-1.529-22.211-50.057-62.876s-74.643-102.116-73.386-125.632c1.064-19.898-1.885-60.816 23.857-72.373-30.683 10.32-54.762 33.302-54.762 72.373 0 38.171 24.858 84.967 73.386 125.632 48.527 40.665 33.024 34.392 50.057 62.876 22.101 36.959 57.612 34.967 60.443 73.433.948.537 1.857 1.042 2.733 1.501 2.357 1.236 5.265.322 6.482-2.045l13.168-25.602c1.272-2.474.181-5.508-2.384-6.588z", fill: "#ffb300" })))));
};

var rotate$1 = keyframes(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$T)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var FloatingPanIcon = styled(Icon$S)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(FloatingPanIcon, { width: size + "px" }),
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$t, templateObject_2$6, templateObject_3$2, templateObject_4$1, templateObject_5;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$u, templateObject_2$7, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var Handle = styled.div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$v, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked },
        React.createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React.createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    yellow: "0px 0px 0px 1px #FFB300, 0px 0px 0px 4px rgb(255, 179, 0, .4)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var fontFamily = {
    titan: "Titan One",
    poppins: "Poppins",
};
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    fontFamily: fontFamily,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$6, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$t, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$w, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$x;

var ModalWrapper = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$y;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M28.94,84.09V96H12.43a2.31,2.31,0,0,1-1.95-3.52,17.62,17.62,0,0,1,15-8.39Z" }),
        React.createElement("path", { d: "M87.84,96H71.32V84.09h3.49a17.61,17.61,0,0,1,15,8.39A2.31,2.31,0,0,1,87.84,96Z" }),
        React.createElement("path", { d: "M43,41.79a2.94,2.94,0,0,1,.9,2.1v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3A3.2,3.2,0,0,1,43,41.79Z" }),
        React.createElement("path", { d: "M49.22,55a.88.88,0,0,1-1.16.43l-2-.93a.88.88,0,0,1-.43-1.17.87.87,0,0,1,.8-.51.74.74,0,0,1,.35.08l2,.93A.89.89,0,0,1,49.22,55Z" }),
        React.createElement("path", { d: "M54.64,53.28a.89.89,0,0,1-.43,1.17l-2,.93a.88.88,0,1,1-.71-1.6l2-.93a.74.74,0,0,1,.35-.08A.89.89,0,0,1,54.64,53.28Z" }),
        React.createElement("path", { d: "M61.63,41.79a2.94,2.94,0,0,1,.9,2.1v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3A3.2,3.2,0,0,1,61.63,41.79Z" }),
        React.createElement("path", { d: "M40.83,47.85a3,3,0,0,1-3.09-3v-1a3,3,0,0,1,3.09-3,3.2,3.2,0,0,1,2.2.87,2.94,2.94,0,0,1,.9,2.1v1A3,3,0,0,1,40.83,47.85Z" }),
        React.createElement("path", { d: "M48.79,53.78A.89.89,0,0,1,49.22,55a.88.88,0,0,1-1.16.43l-2-.93a.88.88,0,0,1-.43-1.17.87.87,0,0,1,.8-.51.74.74,0,0,1,.35.08Z" }),
        React.createElement("path", { d: "M54.64,53.28a.89.89,0,0,1-.43,1.17l-2,.93a.88.88,0,1,1-.71-1.6l2-.93a.74.74,0,0,1,.35-.08A.89.89,0,0,1,54.64,53.28Z" }),
        React.createElement("path", { d: "M59.43,40.92a3.2,3.2,0,0,1,2.2.87,2.94,2.94,0,0,1,.9,2.1v1a3.1,3.1,0,0,1-6.19,0v-1A3,3,0,0,1,59.43,40.92Z" }),
        React.createElement("path", { d: "M49.22,55a.88.88,0,0,1-1.16.43l-2-.93a.88.88,0,0,1-.43-1.17.87.87,0,0,1,.8-.51.74.74,0,0,1,.35.08l2,.93A.89.89,0,0,1,49.22,55Z" }),
        React.createElement("path", { d: "M54.21,54.45l-2,.93a.88.88,0,1,1-.71-1.6l2-.93a.74.74,0,0,1,.35-.08.88.88,0,0,1,.37,1.68Z" }),
        React.createElement("path", { d: "M43.93,43.89v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3,3.2,3.2,0,0,1,2.2.87A2.94,2.94,0,0,1,43.93,43.89Z" }),
        React.createElement("path", { d: "M62.53,43.89v1a3.1,3.1,0,0,1-6.19,0v-1a3,3,0,0,1,3.09-3,3.2,3.2,0,0,1,2.2.87A2.94,2.94,0,0,1,62.53,43.89Z" }),
        React.createElement("path", { d: "M95.82,69.89a1,1,0,0,0-1.29-.7c-1.3.41-2.56.76-3.78,1.07l1.07-5a1,1,0,1,0-2-.44l-1.28,6c-8.51,1.9-14.77,1.55-19.29.33A19.92,19.92,0,0,0,76.64,56a18.81,18.81,0,0,0-.4-3.84,2.33,2.33,0,0,1-.07-.25,2.66,2.66,0,0,0-.08-.33,9.74,9.74,0,0,0,3.73-3.08,10.41,10.41,0,0,0,.62-11.75h2.25a7.38,7.38,0,0,0,5.25-2.2,7.56,7.56,0,0,0,2.18-5.31,2.5,2.5,0,0,0-2.48-2.51h-14V15.9c0-.38,0-.74,0-1.1A11.93,11.93,0,0,0,59.45,4.21,48.61,48.61,0,0,1,41,4.33C34.06,3,27.12,7.71,26.61,14.88c0,.33,0,.67,0,1V26.73H12.62a2.4,2.4,0,0,0-1.74.74,2.44,2.44,0,0,0-.73,1.77,7.46,7.46,0,0,0,7.42,7.51h2.12a10.41,10.41,0,0,0,.62,11.75,9.73,9.73,0,0,0,3.84,3.13c0,.09,0,.17-.06.27l-.06.26A18.14,18.14,0,0,0,23.62,56c0,8.93,6.51,16.61,15.84,20,.19.08.38.14.57.2v7.9H36.41V96H63.85V84.09H60.06V76.24a27.75,27.75,0,0,0,7.07-3.49A31.47,31.47,0,0,0,77.2,74.26c1.3,0,2.66-.07,4.12-.2a1.26,1.26,0,0,0,.3.18l10.86,4a1.07,1.07,0,0,0,.35.06,1,1,0,0,0,1-.68,1.06,1.06,0,0,0-.61-1.34l-7.6-2.8a74.36,74.36,0,0,0,9.55-2.31A1.05,1.05,0,0,0,95.82,69.89ZM67.33,53.62a14.89,14.89,0,0,1,.89,4.18,14.56,14.56,0,0,1-4.91,10.74,14.33,14.33,0,0,1-4.47-4.29,9.86,9.86,0,0,0,1-1.36,1.06,1.06,0,0,0-.3-1.44,1,1,0,0,0-1.42.31,9.84,9.84,0,0,1-16.08,0,1,1,0,0,0-1.42-.31,1,1,0,0,0-.29,1.44A11.6,11.6,0,0,0,50.13,68a12,12,0,0,0,7.14-2.34A16.16,16.16,0,0,0,61.54,70a19.77,19.77,0,0,1-11.41,3.52c-10,0-18.1-7-18.1-15.68a14.93,14.93,0,0,1,.9-4.18,6.57,6.57,0,0,0-.7-5.56,7.87,7.87,0,0,1-.67-1.25,10.08,10.08,0,0,1,1-10.06h35.1a10.08,10.08,0,0,1,1,10.07A10.46,10.46,0,0,1,68,48.06,6.5,6.5,0,0,0,67.33,53.62Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M88.16,34.57,70,20.5,52.92,7.26a4.77,4.77,0,0,0-5.84,0L30,20.5,11.84,34.57A4.76,4.76,0,0,0,10,38.33V88.24A4.76,4.76,0,0,0,14.76,93H34.28A2.72,2.72,0,0,0,37,90.28V57.72A2.72,2.72,0,0,1,39.72,55H60.28A2.72,2.72,0,0,1,63,57.72V90.28A2.72,2.72,0,0,0,65.72,93H85.24A4.76,4.76,0,0,0,90,88.24V38.33A4.76,4.76,0,0,0,88.16,34.57Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M82.42,8.55a3.78,3.78,0,0,0-6.86,1.74C73.19,30,65.45,44.26,55.77,55l-17-1.37L28.67,67.16,36,71.38c-2.25,1.44-4.48,2.77-6.68,4a3.78,3.78,0,0,0,.95,7A58.1,58.1,0,0,0,39.92,84l-1.41,8,17.3,1.06L65.11,80C90.35,68.6,101.7,36.36,82.42,8.55Z" }),
        React.createElement("path", { d: "M22.87,83.27a12.82,12.82,0,0,1-11,.8L8.38,82.71a.8.8,0,0,1-.18-1.38l3-2.17a12.79,12.79,0,0,1,7.5-2.43,13.12,13.12,0,0,1,3.4.45A3.33,3.33,0,0,1,22.87,83.27Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    var textColor = isDark ? "#FFFFFF" : "#000000";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 160 26" }, props),
        React.createElement("path", { d: "M30.8524 19.7569C30.4803 19.7569 30.2173 19.6799 30.0633 19.5259C29.9221 19.372 29.8516 19.1282 29.8516 18.7946V7.65066C29.8516 7.31705 29.9285 7.07326 30.0825 6.91928C30.2365 6.75248 30.4931 6.66907 30.8524 6.66907H35.5679C37.3642 6.66907 38.6858 7.04759 39.5327 7.80463C40.3796 8.56167 40.803 9.69082 40.803 11.1921C40.803 12.6805 40.3796 13.8032 39.5327 14.5603C38.6987 15.3045 37.3771 15.6766 35.5679 15.6766H33.7394V18.7946C33.7394 19.1282 33.6624 19.372 33.5085 19.5259C33.3545 19.6799 33.0914 19.7569 32.7193 19.7569H30.8524ZM35.2599 12.8858C35.786 12.8858 36.1902 12.7446 36.4725 12.4624C36.7676 12.1801 36.9151 11.7566 36.9151 11.1921C36.9151 10.6147 36.7676 10.1848 36.4725 9.90253C36.1902 9.62025 35.786 9.47911 35.2599 9.47911H33.7394V12.8858H35.2599Z", fill: textColor }),
        React.createElement("path", { d: "M45.3484 20.0456C44.1423 20.0456 43.1735 19.6607 42.4421 18.8908C41.7236 18.1081 41.3643 17.011 41.3643 15.5996C41.3643 14.5218 41.6081 13.5787 42.0957 12.7703C42.5961 11.9619 43.2954 11.3396 44.1936 10.9034C45.1046 10.4543 46.1503 10.2297 47.3308 10.2297C48.306 10.2297 49.1657 10.3388 49.9099 10.5569C50.6669 10.7622 51.3598 11.0638 51.9885 11.4615V19.1602C51.9885 19.404 51.9436 19.5644 51.8538 19.6414C51.764 19.7184 51.5844 19.7569 51.3149 19.7569H49.3517C49.2106 19.7569 49.1015 19.7376 49.0245 19.6992C48.9475 19.6478 48.8834 19.5708 48.8321 19.4682L48.5819 18.8908C48.2097 19.2886 47.7607 19.5773 47.2346 19.7569C46.7213 19.9494 46.0926 20.0456 45.3484 20.0456ZM46.7919 17.428C47.2923 17.428 47.6837 17.3061 47.966 17.0623C48.2482 16.8186 48.3894 16.4721 48.3894 16.023V13.0205C48.1456 12.905 47.8376 12.8473 47.4655 12.8473C46.7855 12.8473 46.2402 13.0847 45.8296 13.5594C45.4318 14.0342 45.2329 14.7014 45.2329 15.5611C45.2329 16.8057 45.7526 17.428 46.7919 17.428Z", fill: textColor }),
        React.createElement("path", { d: "M54.667 19.7569C54.2949 19.7569 54.0319 19.6799 53.8779 19.5259C53.7239 19.372 53.6469 19.1282 53.6469 18.7946V11.1151C53.6469 10.8841 53.6854 10.7301 53.7624 10.6532C53.8522 10.5633 54.0318 10.5184 54.3013 10.5184H56.2837C56.4377 10.5184 56.5532 10.5441 56.6302 10.5954C56.72 10.6339 56.7713 10.7109 56.7841 10.8264L56.8804 11.4038C57.2397 11.0445 57.708 10.7622 58.2854 10.5569C58.8756 10.3388 59.53 10.2297 60.2486 10.2297C61.2879 10.2297 62.1283 10.5248 62.7699 11.1151C63.4115 11.6925 63.7322 12.5522 63.7322 13.6942V18.7946C63.7322 19.1282 63.6552 19.372 63.5013 19.5259C63.3601 19.6799 63.1035 19.7569 62.7314 19.7569H60.8645C60.4924 19.7569 60.2229 19.6799 60.0561 19.5259C59.9021 19.372 59.8251 19.1282 59.8251 18.7946V13.9444C59.8251 13.5594 59.7417 13.2836 59.5749 13.1167C59.4081 12.9499 59.1451 12.8665 58.7858 12.8665C58.4009 12.8665 58.0929 12.9692 57.862 13.1745C57.6438 13.3798 57.5348 13.6621 57.5348 14.0213V18.7946C57.5348 19.1282 57.4578 19.372 57.3038 19.5259C57.1627 19.6799 56.906 19.7569 56.5339 19.7569H54.667Z", fill: textColor }),
        React.createElement("path", { d: "M70.5354 20.0456C68.739 20.0456 67.3532 19.6286 66.3781 18.7946C65.4029 17.9605 64.9153 16.748 64.9153 15.1569C64.9153 14.1817 65.1399 13.322 65.5889 12.5778C66.038 11.8336 66.686 11.2562 67.5329 10.8456C68.3926 10.435 69.4062 10.2297 70.5739 10.2297C71.4592 10.2297 72.2034 10.3131 72.8065 10.4799C73.4224 10.6467 73.9677 10.9034 74.4425 11.2498C74.5836 11.3396 74.6542 11.4551 74.6542 11.5963C74.6542 11.6989 74.6029 11.8336 74.5002 12.0004L73.7111 13.367C73.6213 13.5466 73.5122 13.6364 73.3839 13.6364C73.3069 13.6364 73.185 13.5851 73.0182 13.4824C72.6718 13.2643 72.3446 13.1039 72.0366 13.0013C71.7415 12.8986 71.3694 12.8473 70.9203 12.8473C70.2787 12.8473 69.7591 13.0526 69.3613 13.4632C68.9764 13.8738 68.7839 14.4384 68.7839 15.1569C68.7839 15.8883 68.9828 16.4529 69.3806 16.8506C69.7783 17.2356 70.3237 17.428 71.0165 17.428C71.4271 17.428 71.7992 17.3703 72.1329 17.2548C72.4665 17.1393 72.8065 16.9789 73.1529 16.7736C73.3326 16.671 73.4609 16.6197 73.5379 16.6197C73.6534 16.6197 73.756 16.7095 73.8458 16.8891L74.7119 18.3711C74.7761 18.4994 74.8082 18.6021 74.8082 18.6791C74.8082 18.7946 74.7312 18.9036 74.5772 19.0063C74.0383 19.3527 73.4481 19.6093 72.8065 19.7761C72.1778 19.9558 71.4207 20.0456 70.5354 20.0456Z", fill: textColor }),
        React.createElement("path", { d: "M79.6881 20.0456C78.482 20.0456 77.5132 19.6607 76.7819 18.8908C76.0633 18.1081 75.704 17.011 75.704 15.5996C75.704 14.5218 75.9478 13.5787 76.4354 12.7703C76.9358 11.9619 77.6351 11.3396 78.5333 10.9034C79.4443 10.4543 80.4901 10.2297 81.6705 10.2297C82.6457 10.2297 83.5054 10.3388 84.2496 10.5569C85.0067 10.7622 85.6995 11.0638 86.3283 11.4615V19.1602C86.3283 19.404 86.2834 19.5644 86.1935 19.6414C86.1037 19.7184 85.9241 19.7569 85.6546 19.7569H83.6915C83.5503 19.7569 83.4412 19.7376 83.3643 19.6992C83.2873 19.6478 83.2231 19.5708 83.1718 19.4682L82.9216 18.8908C82.5495 19.2886 82.1004 19.5773 81.5743 19.7569C81.0611 19.9494 80.4323 20.0456 79.6881 20.0456ZM81.1316 17.428C81.632 17.428 82.0234 17.3061 82.3057 17.0623C82.588 16.8186 82.7291 16.4721 82.7291 16.023V13.0205C82.4853 12.905 82.1774 12.8473 81.8053 12.8473C81.1252 12.8473 80.5799 13.0847 80.1693 13.5594C79.7715 14.0342 79.5726 14.7014 79.5726 15.5611C79.5726 16.8057 80.0923 17.428 81.1316 17.428Z", fill: textColor }),
        React.createElement("path", { d: "M98.4184 19.0255C98.5082 19.1282 98.5531 19.2436 98.5531 19.372C98.5531 19.4874 98.5146 19.5837 98.4377 19.6607C98.3607 19.7248 98.258 19.7569 98.1297 19.7569H95.1465C94.9668 19.7569 94.8321 19.7441 94.7423 19.7184C94.6653 19.6799 94.5819 19.6093 94.4921 19.5067L91.8745 15.946V18.7946C91.8745 19.1282 91.7975 19.372 91.6435 19.5259C91.4896 19.6799 91.2265 19.7569 90.8544 19.7569H88.9875C88.6154 19.7569 88.3523 19.6799 88.1984 19.5259C88.0572 19.372 87.9866 19.1282 87.9866 18.7946V7.65066C87.9866 7.31705 88.0636 7.07326 88.2176 6.91928C88.3716 6.75248 88.6282 6.66907 88.9875 6.66907H90.8544C91.2265 6.66907 91.4896 6.75248 91.6435 6.91928C91.7975 7.07326 91.8745 7.31705 91.8745 7.65066V14.0983L94.4151 10.7879C94.4921 10.6852 94.5755 10.6147 94.6653 10.5762C94.7551 10.5377 94.8898 10.5184 95.0695 10.5184H98.0527C98.181 10.5184 98.2773 10.5569 98.3414 10.6339C98.4184 10.6981 98.4569 10.7879 98.4569 10.9034C98.4569 11.0317 98.412 11.1472 98.3222 11.2498L95.031 15.0222L98.4184 19.0255Z", fill: textColor }),
        React.createElement("path", { d: "M104.668 20.0456C103.59 20.0456 102.628 19.866 101.781 19.5067C100.947 19.1474 100.286 18.6085 99.7985 17.89C99.3109 17.1714 99.0671 16.2925 99.0671 15.2531C99.0671 13.6236 99.529 12.379 100.453 11.5193C101.377 10.6596 102.705 10.2297 104.437 10.2297C106.131 10.2297 107.414 10.6532 108.286 11.5C109.172 12.334 109.614 13.4953 109.614 14.9837C109.614 15.6252 109.332 15.946 108.767 15.946H102.724C102.724 16.4978 102.929 16.9212 103.34 17.2163C103.763 17.5114 104.398 17.659 105.245 17.659C105.771 17.659 106.208 17.6141 106.554 17.5243C106.913 17.4216 107.273 17.2741 107.632 17.0816C107.786 17.0174 107.889 16.9854 107.94 16.9854C108.055 16.9854 108.152 17.0623 108.229 17.2163L108.883 18.4481C108.947 18.5764 108.979 18.6727 108.979 18.7368C108.979 18.8523 108.902 18.9614 108.748 19.064C108.222 19.4105 107.626 19.6607 106.958 19.8146C106.291 19.9686 105.528 20.0456 104.668 20.0456ZM106.15 14.0406C106.15 13.553 106.009 13.1745 105.726 12.905C105.444 12.6356 105.021 12.5009 104.456 12.5009C103.892 12.5009 103.462 12.642 103.167 12.9243C102.872 13.1937 102.724 13.5658 102.724 14.0406H106.15Z", fill: textColor }),
        React.createElement("path", { d: "M116.211 20.0456C115.133 20.0456 114.113 19.9365 113.151 19.7184C112.189 19.4874 111.412 19.1667 110.822 18.7561C110.604 18.6149 110.495 18.4674 110.495 18.3134C110.495 18.2107 110.533 18.1017 110.61 17.9862L111.553 16.4849C111.656 16.331 111.759 16.254 111.861 16.254C111.926 16.254 112.035 16.2989 112.189 16.3887C112.663 16.6582 113.202 16.8763 113.805 17.0431C114.408 17.2099 115.005 17.2933 115.595 17.2933C116.198 17.2933 116.641 17.2035 116.923 17.0238C117.218 16.8442 117.366 16.5555 117.366 16.1577C117.366 15.7728 117.206 15.4713 116.885 15.2531C116.577 15.035 115.993 14.7591 115.133 14.4255C113.837 13.9379 112.824 13.3926 112.092 12.7896C111.374 12.1737 111.015 11.3396 111.015 10.2875C111.015 9.01718 111.47 8.04843 112.381 7.38121C113.292 6.71398 114.505 6.38037 116.019 6.38037C117.071 6.38037 117.969 6.47661 118.713 6.66907C119.47 6.84871 120.112 7.131 120.638 7.51593C120.856 7.68274 120.965 7.83671 120.965 7.97786C120.965 8.06767 120.927 8.17032 120.85 8.2858L119.907 9.78705C119.791 9.94103 119.688 10.018 119.599 10.018C119.534 10.018 119.425 9.97311 119.271 9.88329C118.527 9.3957 117.642 9.15191 116.615 9.15191C116.064 9.15191 115.64 9.24173 115.345 9.42137C115.05 9.601 114.902 9.89612 114.902 10.3067C114.902 10.589 114.979 10.82 115.133 10.9996C115.287 11.1792 115.493 11.3396 115.749 11.4808C116.019 11.6091 116.429 11.7759 116.981 11.9812L117.347 12.1159C118.296 12.488 119.04 12.8473 119.579 13.1937C120.131 13.5273 120.548 13.9444 120.83 14.4448C121.113 14.9324 121.254 15.5483 121.254 16.2925C121.254 17.4344 120.824 18.3455 119.964 19.0255C119.117 19.7056 117.866 20.0456 116.211 20.0456Z", fill: textColor }),
        React.createElement("path", { d: "M125.343 19.7569C125.151 19.7569 125.003 19.7248 124.9 19.6607C124.798 19.5965 124.721 19.4682 124.67 19.2757L122.187 10.9611C122.161 10.8841 122.148 10.8264 122.148 10.7879C122.148 10.6083 122.277 10.5184 122.533 10.5184H125.074C125.241 10.5184 125.362 10.5505 125.439 10.6147C125.516 10.666 125.568 10.7558 125.593 10.8841L126.633 15.2531L127.941 11.731C128.006 11.577 128.07 11.4744 128.134 11.423C128.211 11.3589 128.339 11.3268 128.519 11.3268H129.731C129.911 11.3268 130.033 11.3589 130.097 11.423C130.174 11.4744 130.245 11.577 130.309 11.731L131.598 15.2531L132.657 10.8841C132.695 10.7558 132.747 10.666 132.811 10.6147C132.875 10.5505 132.991 10.5184 133.157 10.5184H135.717C135.974 10.5184 136.102 10.6083 136.102 10.7879C136.102 10.8264 136.089 10.8841 136.064 10.9611L133.562 19.2757C133.51 19.4682 133.433 19.5965 133.331 19.6607C133.241 19.7248 133.1 19.7569 132.907 19.7569H131.021C130.841 19.7569 130.707 19.7248 130.617 19.6607C130.527 19.5837 130.45 19.4554 130.386 19.2757L129.116 15.7921L127.845 19.2757C127.794 19.4554 127.717 19.5837 127.614 19.6607C127.524 19.7248 127.39 19.7569 127.21 19.7569H125.343Z", fill: textColor }),
        React.createElement("path", { d: "M140.981 20.0456C139.775 20.0456 138.806 19.6607 138.075 18.8908C137.356 18.1081 136.997 17.011 136.997 15.5996C136.997 14.5218 137.241 13.5787 137.728 12.7703C138.229 11.9619 138.928 11.3396 139.826 10.9034C140.737 10.4543 141.783 10.2297 142.963 10.2297C143.938 10.2297 144.798 10.3388 145.542 10.5569C146.299 10.7622 146.992 11.0638 147.621 11.4615V19.1602C147.621 19.404 147.576 19.5644 147.486 19.6414C147.396 19.7184 147.217 19.7569 146.947 19.7569H144.984C144.843 19.7569 144.734 19.7376 144.657 19.6992C144.58 19.6478 144.516 19.5708 144.465 19.4682L144.214 18.8908C143.842 19.2886 143.393 19.5773 142.867 19.7569C142.354 19.9494 141.725 20.0456 140.981 20.0456ZM142.424 17.428C142.925 17.428 143.316 17.3061 143.598 17.0623C143.881 16.8186 144.022 16.4721 144.022 16.023V13.0205C143.778 12.905 143.47 12.8473 143.098 12.8473C142.418 12.8473 141.873 13.0847 141.462 13.5594C141.064 14.0342 140.865 14.7014 140.865 15.5611C140.865 16.8057 141.385 17.428 142.424 17.428Z", fill: textColor }),
        React.createElement("path", { d: "M150.28 23.6447C149.908 23.6447 149.645 23.5678 149.491 23.4138C149.35 23.2598 149.279 23.016 149.279 22.6824V11.654C149.857 11.2434 150.582 10.9034 151.454 10.6339C152.327 10.3645 153.238 10.2297 154.187 10.2297C158.062 10.2297 160 11.8721 160 15.1569C160 16.6453 159.589 17.8322 158.768 18.7176C157.947 19.6029 156.786 20.0456 155.284 20.0456C154.861 20.0456 154.45 19.9943 154.053 19.8916C153.668 19.789 153.347 19.6478 153.09 19.4682V22.6824C153.09 23.016 153.013 23.2598 152.859 23.4138C152.705 23.5678 152.442 23.6447 152.07 23.6447H150.28ZM154.457 17.4473C155.009 17.4473 155.419 17.242 155.689 16.8314C155.971 16.408 156.112 15.8434 156.112 15.1377C156.112 14.3036 155.945 13.7198 155.612 13.3862C155.291 13.0398 154.79 12.8665 154.11 12.8665C153.674 12.8665 153.328 12.9243 153.071 13.0398V16.1C153.071 16.5363 153.193 16.8699 153.437 17.1008C153.681 17.3318 154.021 17.4473 154.457 17.4473Z", fill: textColor }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.38998 4.50033C4.01476 2.49106 5.55649 0.634766 7.60049 0.634766C9.40427 0.634766 10.8665 2.09701 10.8665 3.90078V7.92728C11.3177 7.89544 11.7761 7.87911 12.2404 7.87911C12.6865 7.87911 13.1272 7.89418 13.5612 7.9236V3.90078C13.5612 2.09701 15.0234 0.634766 16.8272 0.634766C18.8712 0.634766 20.4129 2.49106 20.0377 4.50033L19.1539 9.23326C22.1872 10.5576 24.4809 12.8577 24.4809 15.748V17.4966C24.4809 19.8734 22.9085 21.8634 20.7102 23.2068C18.4948 24.5606 15.4978 25.3654 12.2404 25.3654C8.98304 25.3654 5.98604 24.5606 3.77065 23.2068C1.57242 21.8634 0 19.8734 0 17.4966V15.748C0 12.873 2.2701 10.5817 5.27785 9.25477L4.38998 4.50033ZM18.0212 9.85508L19.0555 4.3169C19.3159 2.92236 18.2459 1.63399 16.8272 1.63399C15.5753 1.63399 14.5604 2.64886 14.5604 3.90078V9.02479C14.2324 8.98273 13.8991 8.9494 13.5612 8.92524C13.128 8.89426 12.6873 8.87833 12.2404 8.87833C11.7753 8.87833 11.3168 8.89559 10.8665 8.92912C10.5286 8.95429 10.1953 8.98862 9.86729 9.03169V3.90078C9.86729 2.64886 8.85241 1.63399 7.60049 1.63399C6.18184 1.63399 5.11179 2.92235 5.37222 4.3169L6.40988 9.87345C3.16599 11.0784 0.999219 13.2586 0.999219 15.748V17.4966C0.999219 21.2906 6.03208 24.3662 12.2404 24.3662C18.4488 24.3662 23.4817 21.2906 23.4817 17.4966V15.748C23.4817 13.2458 21.2927 11.0562 18.0212 9.85508Z", fill: "#633001" }),
        React.createElement("path", { d: "M23.4815 17.4967C23.4815 21.2907 18.4486 24.3663 12.2402 24.3663C6.03189 24.3663 0.999023 21.2907 0.999023 17.4967V15.748H23.4815V17.4967Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.37202 4.31671C5.1116 2.92216 6.18164 1.63379 7.6003 1.63379C8.85222 1.63379 9.8671 2.64867 9.8671 3.90059V9.0315C10.6321 8.93102 11.4261 8.87813 12.2402 8.87813C13.0356 8.87813 13.8116 8.9286 14.5602 9.02459V3.90059C14.5602 2.64867 15.5751 1.63379 16.827 1.63379C18.2457 1.63379 19.3157 2.92216 19.0553 4.31671L18.021 9.85488C21.2925 11.056 23.4815 13.2457 23.4815 15.7478C23.4815 19.5418 18.4486 22.6174 12.2402 22.6174C6.03189 22.6174 0.999023 19.5418 0.999023 15.7478C0.999023 13.2584 3.16579 11.0782 6.40968 9.87326L5.37202 4.31671Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M9.11817 15.2485C9.11817 16.2833 8.55896 17.1221 7.86914 17.1221C7.17932 17.1221 6.62012 16.2833 6.62012 15.2485C6.62012 14.2138 7.17932 13.375 7.86914 13.375C8.55896 13.375 9.11817 14.2138 9.11817 15.2485Z", fill: "#633001" }),
        React.createElement("path", { d: "M17.7363 15.2485C17.7363 16.2833 17.1771 17.1221 16.4873 17.1221C15.7975 17.1221 15.2383 16.2833 15.2383 15.2485C15.2383 14.2138 15.7975 13.375 16.4873 13.375C17.1771 13.375 17.7363 14.2138 17.7363 15.2485Z", fill: "#633001" })));
};

var StyledLogo = styled.h1(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  font-family: \"Titan One\", cursive;\n  color: #af6e5a;\n  font-weight: 400;\n  font-size: 20px;\n  margin-left: 8px;\n"], ["\n  font-family: \"Titan One\", cursive;\n  color: #af6e5a;\n  font-weight: 400;\n  font-size: 20px;\n  margin-left: 8px;\n"])));
var Logo$1 = function () {
    return React.createElement(StyledLogo, null, "ApeSwap");
};
var templateObject_1$z;

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M15.42 47.18A34.73 34.73 0 0122 29.58a2.15 2.15 0 013.26-.24L32 36.09a2.15 2.15 0 01.29 2.67 21.06 21.06 0 0013.19 31.85 2.15 2.15 0 011.68 2.09v9.56a2.16 2.16 0 01-2.47 2.14 34.75 34.75 0 01-29.27-37.22M54.64 70.61a21 21 0 0016-16A2.15 2.15 0 0172.71 53h9.56a2.16 2.16 0 012.14 2.48 34.76 34.76 0 01-29 29A2.15 2.15 0 0153 82.27v-9.56a2.15 2.15 0 011.64-2.1zM72.71 47.17a2.13 2.13 0 01-2.09-1.68 21 21 0 00-31.86-13.2 2.15 2.15 0 01-2.67-.29l-6.75-6.76a2.15 2.15 0 01.24-3.24 34.76 34.76 0 0154.83 22.69 2.16 2.16 0 01-2.14 2.48z" }),
        React.createElement("path", { d: "M37 54.77a5.56 5.56 0 001.19 1.6 15.58 15.58 0 0023.11-4.62 15.75 15.75 0 001.94-6.22A5.64 5.64 0 0063 43.3a1.74 1.74 0 00-.67-.88l.21-1.37a.57.57 0 00-.48-.65h-.4a.57.57 0 00-.65.48l-.21 1.39a1.89 1.89 0 00-.94.69v.06l-.06.11c-.06.14-.11.29-.16.43s-.11.26-.16.38-.09.2-.13.29v.07l-.09.18c-.07.15-.14.3-.22.45s-.09.16-.13.25l-.22.4-.15.26-.23.37-.17.25c-.08.13-.16.25-.25.37l-.11.15-.2.28-.15.19-.15.18-.18.23-.23.26-.12.12-.18.21-.22.22c-.06.06-.11.12-.17.17l-.28.27-.3.27-.22.19-.27.23-.27.22-.13.09-.15.11a3.55 3.55 0 01-.31.23l-.26.18-.33.22-.13.08-.14.09-.34.2-.23.13c-.15.08-.3.17-.46.24l-.16.08-.29.13a2.75 2.75 0 01-.3.14l-.34.15-.3.11c-.1.05-.21.08-.31.12h-.08l-.22.08-.31.1h-.13l-.22.07-.35.1h-.22l-.77.17-.77.13H47l-.65.07H43.7l-.7.24a5.58 5.58 0 01-.59-.09 25.91 25.91 0 00-4.09-.51 4 4 0 00-.64.07 1.7 1.7 0 00-.51.19 1.59 1.59 0 00-.24.2l-.08.13a.88.88 0 00-.05.15 2.17 2.17 0 00.2 1.35z" })));
};

var FullLogo = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 1802 398" }, props),
        React.createElement("defs", null,
            React.createElement("style", null, ".cls-1{fill:#a16552;}.cls-2{fill:#f5dcb4;}.cls-3,.cls-7{fill:#4e3f3f;}.cls-4{fill:#e6646e;}.cls-5{fill:#5d5360;}.cls-6{fill:#fff;}.cls-7{opacity:0.35;}")),
        React.createElement("path", { className: "cls-1", d: "M54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94Z" }),
        React.createElement("path", { className: "cls-2", d: "M54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94Z" }),
        React.createElement("path", { className: "cls-1", d: "M383.4,212.61c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React.createElement("path", { className: "cls-2", d: "M383.4,212.61c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React.createElement("path", { className: "cls-1", d: "M314.85,229.06a39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45,61.61,61.61,0,0,1,314.85,229.06Z" }),
        React.createElement("path", { className: "cls-2", d: "M314.85,229.06a39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45,61.61,61.61,0,0,1,314.85,229.06Z" }),
        React.createElement("path", { className: "cls-3", d: "M146.41,300.76a6.45,6.45,0,0,0-6.41,7.29c4,28.45,31,50.45,63.65,50.45s59.67-22,63.65-50.45a6.45,6.45,0,0,0-6.4-7.29Z" }),
        React.createElement("path", { className: "cls-4", d: "M166.68,347.91a69.83,69.83,0,0,0,73.94,0c-4.64-16.06-19.47-12.36-37-12.36S171.32,331.85,166.68,347.91Z" }),
        React.createElement("path", { className: "cls-1", d: "M380.9,133.36c-13.3-5.16-23.85-2.44-31.27,1.83a163.15,163.15,0,0,0-6.25-15.69q-2.58-5.62-5.57-11.09C317.46,71.18,283.24,40.28,244,27.22L243.2,6.08,217.78,21.34,214.72,21c-1.88-.17-3.74-.3-5.64-.38l-3.71-16L204.28,0c-1.27,0-2.51,0-3.72.14-23.65,1.92-35.42,23.41-37.26,27.09C124,40.29,89.84,71.2,69.49,108.41q-3,5.46-5.57,11.09a167,167,0,0,0-6.26,15.69l-.95-.53c-7.36-3.95-17.58-6.23-30.31-1.3C-1.55,144.2-9.09,190.26,13.56,219c9.24,11.68,19,18.08,28.32,20.93-.12.52-.24,1.05-.35,1.58A109.88,109.88,0,0,0,39,265c0,54.83,40.44,102,98.38,122.73a191.69,191.69,0,0,0,42.06,9.87A201.87,201.87,0,0,0,201.88,399h1.78c90.93,0,164.64-60,164.64-134a109.88,109.88,0,0,0-2.53-23.51c-.12-.53-.23-1.06-.36-1.58,9.37-2.85,19.09-9.25,28.32-20.94C416.39,190.26,408.84,144.19,380.9,133.36ZM54.69,144.94a140.69,140.69,0,0,0-5,36.64c0,.87,0,1.72,0,2.57a188.47,188.47,0,0,1-5,44.45c-6.9-2.45-14-7.41-20.78-16C6.07,190,12,153.76,34,145.23c8.32-3.22,15.28-2.54,20.72-.43A.74.74,0,0,0,54.69,144.94ZM319,221.45a61.61,61.61,0,0,1-4.15,7.61,39.84,39.84,0,0,0-4.38,34.18c2.93,8.62,5.55,18.38,5.55,25.64C316,342,265.71,385,203.65,385S91.27,342,91.27,288.88c0-7.26,2.62-17,5.55-25.64a39.81,39.81,0,0,0-4.37-34.17,61.8,61.8,0,0,1-9.72-33.14c0-35.25,30-63.84,67.05-63.84a69.31,69.31,0,0,1,34.15,8.9,39.88,39.88,0,0,0,39.44,0,69.23,69.23,0,0,1,34.14-8.89c37,0,67.06,28.59,67.06,63.84A60.89,60.89,0,0,1,319,221.45Zm64.4-8.84c-6.77,8.57-13.88,13.53-20.78,16a188.85,188.85,0,0,1-5-44.44c0-.85,0-1.7,0-2.57a140.21,140.21,0,0,0-5.05-36.78c5.44-2.11,12.4-2.79,20.72.43C395.29,153.76,401.23,190,383.4,212.61Z" }),
        React.createElement("rect", { className: "cls-3", x: 181.43, y: 245.71, width: 10.8, height: 24.52, rx: 5.24, transform: "translate(-125.45 320.72) rotate(-65.45)" }),
        React.createElement("rect", { className: "cls-3", x: 215.08, y: 245.71, width: 10.8, height: 24.52, rx: 5.24, transform: "translate(77.43 565.71) rotate(-114.55)" }),
        React.createElement("path", { className: "cls-3", d: "M145.91,221.43h0c-10.63,0-19.25-8.16-19.25-18.24v-6.08c0-10.07,8.62-18.24,19.25-18.24h0c10.63,0,19.24,8.17,19.24,18.24v6.08C165.15,213.27,156.54,221.43,145.91,221.43Z" }),
        React.createElement("path", { className: "cls-5", d: "M145.91,178.87v21.28a9.63,9.63,0,0,0,19.24,0v-3C165.15,187,156.54,178.87,145.91,178.87Z" }),
        React.createElement("ellipse", { className: "cls-6", cx: 145.91, cy: 191.03, rx: 6.42, ry: 6.08 }),
        React.createElement("path", { className: "cls-3", d: "M261.39,221.43h0c-10.63,0-19.24-8.16-19.24-18.24v-6.08c0-10.07,8.61-18.24,19.24-18.24h0c10.63,0,19.25,8.17,19.25,18.24v6.08C280.64,213.27,272,221.43,261.39,221.43Z" }),
        React.createElement("path", { className: "cls-5", d: "M261.39,178.87v21.28a9.64,9.64,0,0,0,19.25,0v-3C280.64,187,272,178.87,261.39,178.87Z" }),
        React.createElement("ellipse", { className: "cls-6", cx: 261.39, cy: 191.03, rx: 6.42, ry: 6.08 }),
        React.createElement("path", { className: "cls-7", d: "M205.37,4.66c-4.31-.42-13.74,6.35-25,18.1-2.81,2.93-5.75,6.18-8.75,9.7C149.47,58.41,123.82,99.33,115,141.32c-14.74,70.5-20.73,152.3,5.29,197.67,22.05,38.44,59.11,58.59,59.11,58.59a191.69,191.69,0,0,1-42.06-9.87C79.43,367,39,319.81,39,265a109.88,109.88,0,0,1,2.54-23.51c.11-.53.23-1.06.35-1.58C32.52,237,22.8,230.64,13.56,219c-22.65-28.7-15.11-74.76,12.84-85.6,12.73-4.93,23-2.65,30.31,1.3l.95.53a167,167,0,0,1,6.26-15.69q2.58-5.62,5.57-11.09C89.84,71.2,124,40.29,163.3,27.23c1.84-3.68,13.61-25.17,37.26-27.09C201.77,0,203,0,204.28,0Z" }),
        React.createElement("path", { className: "cls-1", d: "M555,302.24q-7.46,2.88-26.78,2.87T496,301.58q-12.93-3.52-12.93-9,0-6.27,23.25-80.07t26.65-85q1.31-3.39,21-5.62a379.26,379.26,0,0,1,42.32-2.22q22.61,0,25,7.84,49.38,164.07,49.38,166.68t-3.13,5.22q-7.32,5.76-29,5.75-46.25,0-47.29-11l-1.83-17H564.3L563,291.79Q562.46,299.36,555,302.24Zm28.86-74.72-3.91-47h-5.75l-4.44,47Z" }),
        React.createElement("path", { className: "cls-1", d: "M687.61,336.72V170.56q0-5.48,14.63-11.23a85.7,85.7,0,0,1,31.61-5.75c5.23,0,9.32.62,12.28,1.83s4.79,2.44,5.49,3.66,2,6.44,3.92,15.67h2.09q.51-2.34,4.7-7.31a48.63,48.63,0,0,1,8.49-8.1q4.3-3.14,12.41-5.62a65,65,0,0,1,18.94-2.48,40.51,40.51,0,0,1,19.72,4.84q8.88,4.83,13.2,11.23a51.82,51.82,0,0,1,6.79,16.2,92.82,92.82,0,0,1,2.87,15.67q.4,5.88.4,17t-.79,21.95a199.41,199.41,0,0,1-2.87,22.08,77,77,0,0,1-6,19.33,59.94,59.94,0,0,1-9.93,14.63q-12,13.07-35.27,13.06a40.77,40.77,0,0,1-14.76-2.48q-6.4-2.48-9.53-5.88-6.54-7.05-7.58-12.54l-.26-2.61h-2.09l3.66,23.51v29.52q0,2.88-15,4.57a272.35,272.35,0,0,1-30.82,1.7q-15.81,0-21-1.43C689.35,340.6,687.61,339,687.61,336.72ZM772,197.47q-2.36-8.88-7.06-8.88t-6.79,5.23v68.44q0,6.81,7.05,6.8,9.15,0,9.15-40.5Q774.35,206.36,772,197.47Z" }),
        React.createElement("path", { className: "cls-1", d: "M934.75,246.07q0,17,16.2,17,9.4,0,24.56-6.4t15.94-6.4q4.95,0,13.06,14.89t8.1,21.94q0,10.2-20.9,15.42a168.41,168.41,0,0,1-40.89,5.22q-20,0-33.44-3.13t-21.94-8A63.5,63.5,0,0,1,871,271.28,67,67,0,0,1,866,257a107,107,0,0,1-2.61-23.77q0-47.55,24.82-65.58a75,75,0,0,1,27.43-12.8q15.15-3.66,35.8-3.66,66.09,0,66.09,46,0,48.85-74.19,48.86Zm-.52-38.15v17.25a15.21,15.21,0,0,0,12.41-6,22.62,22.62,0,0,0,4.84-14.63q0-15.67-8.1-15.68Q934.23,188.85,934.23,207.92Z" }),
        React.createElement("path", { className: "cls-1", d: "M1172.76,294.14q-7.85,5.75-21.82,9.53t-36,3.79A231,231,0,0,1,1073,303.8q-19.86-3.65-28.48-8.09t-8.62-8.63a118.79,118.79,0,0,1,4.18-30.43q4.17-15.81,9.93-15.81,1,0,21.68,7.06t31.09,7q10.46,0,13.59-2.22a7.35,7.35,0,0,0,3.13-6.4q0-4.19-5.75-7.45a66.61,66.61,0,0,0-14.37-5.74,128.6,128.6,0,0,1-18.67-7.19A141,141,0,0,1,1062,215.5a44.72,44.72,0,0,1-14.37-16.33,49.7,49.7,0,0,1-5.75-24.16q0-58,69.23-58,25.86,0,44.68,3.26t26.51,7.32q7.71,4,7.71,8,0,13.58-6.4,29.26t-12.41,15.67q-1.05,0-6.79-2.35-17.25-7.57-28.61-7.58t-15.41,2.09a6.79,6.79,0,0,0-4.05,6.41q0,4.31,5.74,7.05a80.13,80.13,0,0,0,14.24,5,116.75,116.75,0,0,1,18.55,6.8,112.66,112.66,0,0,1,18.68,10.71q8.63,6.13,14.37,17.37t5.75,26.13a52.13,52.13,0,0,1-8.1,28.47A49.87,49.87,0,0,1,1172.76,294.14Z" }),
        React.createElement("path", { className: "cls-1", d: "M1412.85,298.84q-3.4,6.27-35.4,6.27t-33.31-6.27l-8.88-47.55h-3.66l-8.36,47.55q-.79,6.27-45.72,6.27-12.54,0-16.59-1.44a9.19,9.19,0,0,1-5.62-4.83q-48.58-119.38-48.59-125.66t18.94-12.93a109.46,109.46,0,0,1,36.44-6.67q22.47,0,23.26,12l8.88,71.58h3.13l3.14-57.73q.26-6.52,13.32-11.5a74,74,0,0,1,26.39-5q13.32,0,20,3.26t6.92,8l2.87,63h2.88L1381.5,170q.78-6.27,17.63-11.36t29.65-5.1q12.81,0,20.12,3.66,12,5.74,12,13.59,0,.78-23.64,63.74T1412.85,298.84Z" }),
        React.createElement("path", { className: "cls-1", d: "M1515.78,307.46q-23.77,0-37.36-11.23-5.49-4.71-9.54-13.85T1464.83,261a38.7,38.7,0,0,1,5.88-21.42A43.08,43.08,0,0,1,1485,225.43a80.67,80.67,0,0,1,19.59-8.1,147.56,147.56,0,0,1,37.36-4.44h8.63q0-10.71-7.32-15.15-3.14-1.83-9.54-1.83t-15.41,3.39a98.26,98.26,0,0,0-15,6.93q-6,3.53-8.1,3.52-4.71,0-12.8-12.41t-8.1-22.6q0-3.39,9.67-8.88t27.3-10.06a136.9,136.9,0,0,1,34.35-4.57,133.15,133.15,0,0,1,28.87,2.74,86.1,86.1,0,0,1,19.86,6.67,40.4,40.4,0,0,1,13.06,10.45,71.92,71.92,0,0,1,8.1,11.75,44.47,44.47,0,0,1,4,13.59,131.35,131.35,0,0,1,1.83,23.77v78.64q0,2.88-14,4.57a227.87,227.87,0,0,1-27.69,1.7q-13.73,0-17.77-.78c-2.7-.53-4.31-1.13-4.83-1.83a9.49,9.49,0,0,1-1.31-3.66L1553.66,284h-2.09Q1545,307.46,1515.78,307.46Zm35-43.37V233.53a13,13,0,0,0-11,5.74,21.73,21.73,0,0,0-4.18,13.07q0,17.23,7.84,17.24a7.89,7.89,0,0,0,5.36-1.7A5,5,0,0,0,1550.79,264.09Z" }),
        React.createElement("path", { className: "cls-1", d: "M1644.83,336.72V170.56q0-5.48,14.63-11.23a85.76,85.76,0,0,1,31.62-5.75c5.22,0,9.31.62,12.28,1.83s4.78,2.44,5.48,3.66,2,6.44,3.92,15.67h2.09q.53-2.34,4.7-7.31a49,49,0,0,1,8.49-8.1q4.32-3.14,12.41-5.62a65.06,65.06,0,0,1,18.94-2.48,40.52,40.52,0,0,1,19.73,4.84q8.88,4.83,13.19,11.23a51.36,51.36,0,0,1,6.79,16.2,92,92,0,0,1,2.88,15.67q.39,5.88.39,17t-.78,21.95a199.47,199.47,0,0,1-2.88,22.08,76.15,76.15,0,0,1-6,19.33,60.19,60.19,0,0,1-9.92,14.63q-12,13.07-35.27,13.06a40.69,40.69,0,0,1-14.76-2.48q-6.4-2.48-9.54-5.88-6.53-7.05-7.58-12.54l-.26-2.61h-2.09l3.66,23.51v29.52q0,2.88-15,4.57a272.52,272.52,0,0,1-30.83,1.7q-15.81,0-21-1.43C1646.57,340.6,1644.83,339,1644.83,336.72Zm84.39-139.25q-2.35-8.88-7-8.88t-6.8,5.23v68.44q0,6.81,7.06,6.8,9.13,0,9.14-40.5Q1731.57,206.36,1729.22,197.47Z" })));
};

var Logo$2 = function () {
    return (React.createElement("svg", { height: "30px", viewBox: "0 0 512 512", id: "Capa_1", overflow: "hidden" },
        React.createElement("circle", { cx: "66.06", cy: "222.97", r: "66.06", fill: "#965A50" }),
        React.createElement("circle", { cx: "66.06", cy: "222.97", r: "41.29", fill: "#EBC9A0" }),
        React.createElement("circle", { cx: "445.94", cy: "222.97", r: "66.06", fill: "#965A50" }),
        React.createElement("circle", { cx: "445.94", cy: "222.97", r: "41.29", fill: "#EBC9A0" }),
        React.createElement("path", { d: "M442.589 262.049C434.223 247.613 429.42 231.394 429.42 214.709L429.42 214.708C429.42 142.335 385.056 80.378 322.065 54.39L322.065 24.774 280.775 41.29 272.517 8.258C250.736 15.519 232.156 30.756 218.161 45.556 140.604 62.839 82.581 131.946 82.581 214.71 82.581 231.395 77.778 247.614 69.412 262.05 56.692 283.998 49.549 308.532 49.549 334.452 49.549 427.948 141.98 503.742 256.001 503.742 370.022 503.742 462.453 427.948 462.453 334.452 462.452 308.532 455.308 283.997 442.589 262.049Z", fill: "#AF6E5A" }),
        React.createElement("path", { d: "M140.387 364.043C140.387 333.803 147.53 305.179 160.25 279.574 168.617 262.733 173.419 243.81 173.419 224.344 173.419 140.309 217.388 68.388 279.912 37.842L272.516 8.258C250.735 15.519 232.155 30.756 218.159 45.556 140.604 62.839 82.581 131.946 82.581 214.71 82.581 231.395 77.779 247.614 69.412 262.05 56.692 283.998 49.549 308.532 49.549 334.452 49.549 409.917 109.781 473.822 192.964 495.675 160.282 460.734 140.387 414.619 140.387 364.043Z", fill: "#965A50" }),
        React.createElement("path", { d: "M256 470.71C324.412 470.71 379.871 426.343 379.871 371.613 379.871 360.259 377.457 349.368 373.036 339.227 366.626 324.52 368.808 307.64 379.106 295.338 392.24 279.647 399.014 258.461 395.439 235.703 390.529 204.444 365.257 179.217 333.991 174.35 310.099 170.631 287.954 178.318 272.088 192.789 267.578 196.902 261.788 198.959 256.001 198.959 250.211 198.959 244.42 196.903 239.91 192.789 224.044 178.318 201.899 170.631 178.007 174.35 146.741 179.216 121.47 204.444 116.559 235.703 112.984 258.46 119.758 279.646 132.892 295.338 143.19 307.641 145.372 324.52 138.962 339.227 134.542 349.369 132.127 360.26 132.127 371.613 132.129 426.342 187.588 470.71 256 470.71Z", fill: "#FAEBC8" }),
        React.createElement("path", { d: "M132.129 371.612C132.129 390.134 138.597 407.407 149.653 422.237 143.715 403.826 140.387 384.321 140.387 364.042 140.387 333.802 147.53 305.178 160.25 279.573 168.617 262.732 173.419 243.809 173.419 224.343 173.419 207.036 175.379 190.287 178.887 174.263 178.592 174.305 178.304 174.303 178.008 174.349 146.742 179.215 121.472 204.443 116.56 235.701 112.985 258.459 119.76 279.645 132.893 295.336 143.191 307.638 145.374 324.517 138.964 339.225 134.543 349.368 132.129 360.259 132.129 371.612Z", fill: "#F5DCB4" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M239.476 330.323C238.234 330.323 236.976 330.045 235.791 329.452L219.275 321.194C215.194 319.154 213.541 314.194 215.581 310.113 217.629 306.032 222.581 304.379 226.662 306.419L243.178 314.677C247.259 316.717 248.912 321.677 246.872 325.758 245.419 328.653 242.508 330.323 239.476 330.323Z", fill: "#5D5360" }),
            React.createElement("path", { d: "M272.524 330.323C269.492 330.323 266.58 328.654 265.129 325.758 263.089 321.677 264.742 316.718 268.823 314.677L285.339 306.419C289.412 304.379 294.371 306.032 296.42 310.113 298.46 314.194 296.807 319.153 292.726 321.194L276.21 329.452C275.024 330.044 273.766 330.323 272.524 330.323Z", fill: "#5D5360" })),
        React.createElement("path", { d: "M182.319 363.355C177.318 363.355 173.378 367.786 174.071 372.739 179.197 409.356 213.924 437.677 256 437.677 298.077 437.677 332.803 409.356 337.929 372.739 338.622 367.786 334.682 363.355 329.681 363.355L182.319 363.355Z", fill: "#4B3F4E" }),
        React.createElement("path", { d: "M208.417 424.038C221.874 432.601 238.266 437.677 256 437.677 273.734 437.677 290.126 432.601 303.583 424.038 297.617 403.372 278.52 388.129 256 388.129 233.48 388.129 214.383 403.371 208.417 424.038Z", fill: "#E6646E" }),
        React.createElement("path", { d: "M181.677 272.516 181.677 272.516C167.995 272.516 156.903 261.424 156.903 247.742L156.903 239.484C156.903 225.802 167.995 214.71 181.677 214.71L181.677 214.71C195.359 214.71 206.451 225.802 206.451 239.484L206.451 247.742C206.452 261.424 195.36 272.516 181.677 272.516Z", fill: "#4B3F4E" }),
        React.createElement("path", { d: "M181.677 214.71 181.677 243.613C181.677 250.454 187.223 256 194.064 256 200.905 256 206.451 250.454 206.451 243.613L206.451 239.484C206.452 225.801 195.36 214.71 181.677 214.71Z", fill: "#5D5360" }),
        React.createElement("circle", { cx: "181.68", cy: "231.23", r: "8.258", fill: "#FFFFFF" }),
        React.createElement("path", { d: "M330.323 272.516 330.323 272.516C316.641 272.516 305.549 261.424 305.549 247.742L305.549 239.484C305.549 225.802 316.641 214.71 330.323 214.71L330.323 214.71C344.005 214.71 355.097 225.802 355.097 239.484L355.097 247.742C355.097 261.424 344.005 272.516 330.323 272.516Z", fill: "#4B3F4E" }),
        React.createElement("path", { d: "M330.323 214.71 330.323 243.613C330.323 250.454 335.869 256 342.71 256 349.551 256 355.097 250.454 355.097 243.613L355.097 239.484C355.097 225.801 344.005 214.71 330.323 214.71Z", fill: "#5D5360" }),
        React.createElement("circle", { cx: "330.32", cy: "231.23", r: "8.258", fill: "#FFFFFF" }),
        React.createElement("path", { d: "M256 437.677C258.792 437.677 261.538 437.508 264.258 437.262L264.258 421.161C264.258 416.601 260.564 412.903 256 412.903 251.436 412.903 247.742 416.601 247.742 421.161L247.742 437.262C250.462 437.508 253.208 437.677 256 437.677Z", fill: "#FF8087" }),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null),
        React.createElement("g", null)));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M53.92 72.29h.1zm31.59-45.16L56.45 14.87a2.75 2.75 0 00-2.07 0 2.64 2.64 0 00-1.46 1.47l-2.49 5.86a6.07 6.07 0 01.57 1.19l2.34 7.55h11.27a5.45 5.45 0 015.45 5.44v34.3l16.88-40a2.69 2.69 0 00-1.43-3.55zM53.92 72.29h.1zM51.82 73h-.15.18zm2.1-.66h.1zM50.39 30.94H33.08a5.44 5.44 0 00-5.43 5.44v43.27A2.64 2.64 0 0126.27 78L13 35.18a2.75 2.75 0 011.81-3.42l30.11-9.34a2.87 2.87 0 01.81-.14 2.59 2.59 0 011.44.43 2.71 2.71 0 011 1.19 1.15 1.15 0 01.11.31l.57 1.79zM53.92 72.29h.1zm-2.1.66h-.15.18zM53.92 72.29h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18zm0 0h-.15.18zm2.1-.66h.1zm0 0h.1zm-2.1.66h-.15.18zm0 0h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm0 0h.1zm-2.1.66h-.15.18zm0 0h-.15.18zm2.1-.66h.1zm0 0h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18zm2.1-.66h.1zm-2.1.66h-.15.18z" }),
        React.createElement("path", { d: "M64.61 33.57H33.08a2.81 2.81 0 00-2.79 2.81v46.16a2.8 2.8 0 002.79 2.8h31.53a2.81 2.81 0 002.81-2.8V36.38a2.82 2.82 0 00-2.81-2.81zm-2.22 26.66a4.28 4.28 0 01-.37.57 4.84 4.84 0 01-.68.73 3.94 3.94 0 01-1.23.72v.11c.78 3.75-1.18 7.14-4.46 9.1a10.28 10.28 0 01-1.48.75h-.2a11.84 11.84 0 01-2.09.66h-.18a13.78 13.78 0 01-2.9.28c-4.3.09-8.93-2.4-10.62-6.13a6.67 6.67 0 01-.55-1.76 6.46 6.46 0 01-.12-1.4v-.2a7.09 7.09 0 01.22-1.6v.06a4.09 4.09 0 01-2-1.46 4.58 4.58 0 01-.8-1.7c-.41-1.75.24-3.67 1.69-4.23h.1a4 4 0 012.07.14 12.49 12.49 0 012.6-4.33 11.47 11.47 0 014.72-3.14 3.41 3.41 0 012.84-1.89c0 .22.29 1.19.34 1.43h.59l1.77-1.06v1.46a11.38 11.38 0 014.94 3.4A12.4 12.4 0 0159 55l.31-.15a2.34 2.34 0 011.42-.11c.14 0 .29.08.45.13 1.72.69 2.31 3.39 1.21 5.36zM51.85 73h-.18.15zM54 72.26h-.1z" }),
        React.createElement("path", { d: "M52.57 53.41a4.66 4.66 0 00-2.35.62 2.84 2.84 0 01-2.74 0 4.7 4.7 0 00-2.37-.62 4.54 4.54 0 00-4.64 4.43 4.15 4.15 0 00.38 1.76 3.81 3.81 0 00.29.53 2.76 2.76 0 01.3 2.37 6.06 6.06 0 00-.38 1.78 5.08 5.08 0 00.12 1.1 5.62 5.62 0 00.67 1.82A7.32 7.32 0 0045 70.06l.86.36a9 9 0 003 .51 9.85 9.85 0 001.56-.13 9 9 0 002.1-.64 6.65 6.65 0 004.12-5.89 6.41 6.41 0 00-.38-1.78 2.83 2.83 0 01.3-2.37 3.39 3.39 0 00.29-.53 4.93 4.93 0 00.24-.64 4.42 4.42 0 00.15-1.1 4.55 4.55 0 00-4.67-4.44zM49.8 62l.89-.4a.72.72 0 01.19 0 .42.42 0 01.4.27.45.45 0 01-.22.59l-.88.41a.65.65 0 01-.19 0 .49.49 0 01-.42-.27.46.46 0 01.23-.6zm-3.39-.15a.46.46 0 01.41-.26.39.39 0 01.18 0l.9.41a.45.45 0 01.22.59.46.46 0 01-.6.22l-.89-.39a.46.46 0 01-.22-.62zm-1.57-1.86a1.3 1.3 0 01-1.33-1.26v-.42a1.34 1.34 0 012.68 0v.42a1.31 1.31 0 01-1.35 1.21zm7.76 6.31a4.59 4.59 0 01-7.51 0 .5.5 0 01.15-.68.49.49 0 01.68.14 3.59 3.59 0 005.85 0 .51.51 0 01.69-.14.5.5 0 01.14.63zm1.58-7.57a1.33 1.33 0 01-2.66 0v-.42a1.33 1.33 0 012.66 0z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 86.47 88.17" }, props),
        React.createElement("defs", null,
            React.createElement("style", null, ".prefix__cls-1{fill:#333834}")),
        React.createElement("path", { className: "prefix__cls-1", d: "M49.49 11.41a7.65 7.65 0 00-2.78-.11 7 7 0 00-2.12.88 2.91 2.91 0 00.7-.79.07.07 0 00-.07-.09 8.77 8.77 0 00-3.35 1.62 7.72 7.72 0 00-2 2.12 7.17 7.17 0 00.24-.91.11.11 0 000-.1l-.16.15a6.55 6.55 0 00-.81 1.09c-.33.47-.64.95-1 1.44A12.64 12.64 0 0037 19.5a3.67 3.67 0 00-.18-1.1l-.33.64a11.28 11.28 0 00-.49 2.08v-.21a5.12 5.12 0 00-.45-2.15s0 .21.07.31 0 .18 0 .27a6.64 6.64 0 00-.64-1.88 7.35 7.35 0 00-2.26-2.8 3.65 3.65 0 00-.49-.66c-.08-.09-.17 0-.14.09a1.7 1.7 0 01.14.51A5.88 5.88 0 0030 13.06a7 7 0 00-2.77-.92c-.1 0-.05.13 0 .16l.34.19a3.77 3.77 0 00-.81-.31A8 8 0 0025.5 12a5.72 5.72 0 00-2.35.38 1.67 1.67 0 00-.53.08 4.28 4.28 0 00-1.89 1.14 5 5 0 00-1.25 2.63.25.25 0 000 .08c0 .16-.05.33-.07.49v.06a.45.45 0 010 .11c.17-.23.35-.49.55-.71a2.65 2.65 0 01.29-.29 1.39 1.39 0 01.41-.23 5.62 5.62 0 012.68 0 1.53 1.53 0 00-1.08.7s0 .11.05.1a7.4 7.4 0 012.39-.2 13.68 13.68 0 011.41.32 1.82 1.82 0 00-1.06.31v.12c.58.12 1.17.22 1.74.37a7.91 7.91 0 00-2.83.74 6.42 6.42 0 00-3.32 3.29 4.49 4.49 0 00-.46.83 7.36 7.36 0 00-.43 1.38 3.26 3.26 0 00.15 1.39 10.3 10.3 0 01.52-1.47 5 5 0 01.47-.76 2.19 2.19 0 00-.12.33c-.09.26-.31.68-.21.95a.07.07 0 00.12 0 4.56 4.56 0 01.81-1 6.2 6.2 0 01.81-.52c-.22.26-.5.62-.47.83.14 0 .29-.08.4-.14.32-.19.69-.29 1-.48a8.18 8.18 0 00.76-.48h.18a8.88 8.88 0 00-3 2.49A7.34 7.34 0 0019.58 30a5.82 5.82 0 000 1.1.09.09 0 000 .05 7.66 7.66 0 00.31 1.64A3.62 3.62 0 0020.6 34a5 5 0 00-.8.79 3.8 3.8 0 00-.63 1v-.15l.09-.17a3 3 0 00-.55 1.2v.15a6.56 6.56 0 000-1.33c0-.14-.07-.28-.1-.42a2 2 0 00-.25.62 7.29 7.29 0 00-.3-1.78c-.11-.33-.23-.65-.36-1a3.79 3.79 0 00-.33-.74l-.07-.11a3.47 3.47 0 000 .56 4.45 4.45 0 00-.9-1.5 5.19 5.19 0 00-1.73-1.39s-.06 0 0 0a1.67 1.67 0 00.29.56 3.89 3.89 0 00-1.11-.8 4.58 4.58 0 00-1.64-.3 4 4 0 00-2.92 1.16 3.29 3.29 0 00.43-.09 4.7 4.7 0 01.75 0 3.29 3.29 0 01.6.15l.11.05a3.2 3.2 0 00-.67.14 1.51 1.51 0 00-.7.36v.05a2.06 2.06 0 011.46.17 3.14 3.14 0 00-.79.09 2.6 2.6 0 00-1.22.73v.05h.08a4.9 4.9 0 01.54 0 4.81 4.81 0 012.33.52 2.44 2.44 0 00-.46.07 2.21 2.21 0 00-1.12.47v.09a3.35 3.35 0 012 .32l-.34.06a1.55 1.55 0 00-.75.3v.06a9.31 9.31 0 01.82.73 4.66 4.66 0 001.17.61h-.13s-.07.07 0 .09a4.2 4.2 0 001.33.87 2.77 2.77 0 00-.7-.07v.07a2.07 2.07 0 00.47.4 3.47 3.47 0 00-.85-.05 5.31 5.31 0 00-3 1.09 5.3 5.3 0 00-1.66 2.71h.06a3.37 3.37 0 01.42-.6c-.1.21-.18.43-.26.64a7.52 7.52 0 00-.34 1.38 2.45 2.45 0 000 1c0 .06.1 0 .11 0s.11-.33.17-.49c0 .11-.07.23-.09.34a5.36 5.36 0 00-.06.68 3.25 3.25 0 00.21 1.23h.08c.06-.23 0-.5.09-.74a5.27 5.27 0 01.25-.86 5.56 5.56 0 011.11-1.73l-.09.36c-.08.35-.11.7-.17 1.05a.58.58 0 00.08.43h.09a6.1 6.1 0 01.59-1.27 3.08 3.08 0 01.92-.84 1.28 1.28 0 00-.09.32s0 .06 0 0a10.08 10.08 0 011.44-1l-.09.24s0 .06.06 0a13.56 13.56 0 011.41-.6A5.52 5.52 0 0016 39.5l-.1.13s0 .09.05.07a6.13 6.13 0 01.66-.25 7 7 0 00-1 .76A1.39 1.39 0 0015 41c.21-.12.36-.27.57-.38-.15.12-.28.27-.42.4a2.2 2.2 0 00-.63 1.14h.05a2.48 2.48 0 01.26-.19 3.25 3.25 0 00-.59.9 3.76 3.76 0 00-.28.88 2.11 2.11 0 00-.07.83h.08a1.74 1.74 0 00.1-.19q.09-.18 0 0c0 .1-.06.19-.08.3a3.29 3.29 0 000 1 4.76 4.76 0 00.58 2h.07a2.75 2.75 0 01.17-1c.09-.29 0 0 0 .13a5.42 5.42 0 000 .57 2.61 2.61 0 00.1.69c0 .21.08.42.13.63a1.87 1.87 0 00.34.79.29.29 0 010-.09c.06-.44.38-.74.56-1.14s.12-.56.21-.82a5.31 5.31 0 010 1.49 3.88 3.88 0 00.42-.39 6.25 6.25 0 00.79-1.36 3.28 3.28 0 00.19-1 5.33 5.33 0 00.07.54 5.78 5.78 0 010 .72l.09-.09a6.26 6.26 0 00.63-1.87V45v-.18a6.57 6.57 0 01.47 1.18h.07c.15-.51.36-1 .46-1.55a4 4 0 000-1.34 5.26 5.26 0 01.17.58 3.31 3.31 0 01.09.62l-.06.22a.3.3 0 000-.1v.1-.15a3.94 3.94 0 00.16-.91v.11c0 .3 0 .61.07.91s0 .31 0 .46v.46c0 .61-.06 1.23 0 1.86v.24c0 .07 0 .15.05.23a2.15 2.15 0 00.14.45 3.42 3.42 0 00.21.43c.07.14.16.27.24.41l.26.38.07.09.15.19.28.36.15.18.17.17.64.67.16.16.15.18.29.35.29.36a1.95 1.95 0 001.23.71 1.82 1.82 0 01.79.41 4.6 4.6 0 01.54.73c.08.13.16.26.23.39a1.58 1.58 0 01.1.43c0 .31.08.62.13.92s.11.61.17.91l.08.46.11.45a6.13 6.13 0 01.6 1.9v.92a5.65 5.65 0 000 .92v.46a3.57 3.57 0 010 .46v.46a.37.37 0 000 .23h.07a.25.25 0 00.15 0 18.9 18.9 0 012-.35 4.78 4.78 0 011 0h1.45a2.12 2.12 0 000-.5c0-.33-.05-.67-.08-1-.07-.67-.14-1.33-.19-2 0-.32-.05-.66-.05-1v-4.96a13.09 13.09 0 01.28-1.95c.12-.65.26-1.3.41-2l.42-1.94c.13-.66.23-1.31.35-2l.34-2c.11-.66.24-1.3.36-2s.24-1.29.41-1.94A11.82 11.82 0 0034.6 41a7.54 7.54 0 00.55.8 8.25 8.25 0 01.52-2.44c.06.46-.06 1 0 1.43a7.29 7.29 0 01.49 2.06V43h.06a3 3 0 00.83-1.17 8.6 8.6 0 00.46-1A5.15 5.15 0 0038 39.8c.08-.3.14-.61.2-.93s.08-.7.12-.19a4.91 4.91 0 01-.1 1.71c0 .06.06.13.11.08A8.21 8.21 0 0040 37.4a5.64 5.64 0 00.43-1.61v-.51.06c0 .21.06.23.1.35s.09.09.13 0a3.58 3.58 0 00.19-1.39 5.63 5.63 0 00-.13-1.53 3 3 0 00-.09-.41v-.1a14.07 14.07 0 01.76 2.24h.09a2.63 2.63 0 00.17-.42c.06.2.12.39.17.59a3 3 0 01.18 1.12 7.92 7.92 0 01-.42 1.87c0 .05 0 .13.08.11a.78.78 0 00.44-.4c.23-.44.49-.84.7-1.29.07-.15.14-.31.2-.47a7.54 7.54 0 01-.24 2.8 6.69 6.69 0 01-.45 1.15c-.15.3-.4.58-.52.88v.12l.05-.05a4.53 4.53 0 001.25-1.18 5.07 5.07 0 00.51-.79 3.43 3.43 0 00.19-.44c-.07.22-.15.45-.23.67 0 0 0 .17.09.12a2.81 2.81 0 00.89-1.07 8.86 8.86 0 00.87-1.82 5.73 5.73 0 00.27-.92 4.17 4.17 0 010 1c0 .06.06.1.09 0a7.19 7.19 0 00.57-3.43v-.39-.3c0-.1 0 0 0 0a9.85 9.85 0 01.48 2.28c0 .06.08.13.15.08a.93.93 0 00.28-.67c0-.6.13-1.18.13-1.78v-.61a8.65 8.65 0 011.1 4.74c0 .41-.16.84-.14 1.24 0 0 .07.13.12.1v-.08a5.43 5.43 0 00.79-1.93 8.56 8.56 0 00.17-1.13 5.63 5.63 0 000-.58c0 .28.07.57.1.86 0 0 .1.17.16.09a3.58 3.58 0 00.49-1.57 11 11 0 000-2.37 9.6 9.6 0 00-.17-1.21 5.76 5.76 0 01.45 1.14.06.06 0 00.11 0 8.85 8.85 0 00-1.69-5 8.71 8.71 0 00-4.47-2.88 6.2 6.2 0 00-1.4-.27 3.78 3.78 0 00.92-.47.09.09 0 000-.15 5.42 5.42 0 00-1.16-.13 7.27 7.27 0 002.5-.91.11.11 0 000-.17l-.32-.07A7.49 7.49 0 0047 20c.55-.25 1-.7 1.6-.89a.07.07 0 000-.1 2.66 2.66 0 00-1.1-.76L47 18a5.59 5.59 0 013.36.21c.08 0 .1-.08.08-.13-.26-.54-1.15-.93-1.65-1.19a4.16 4.16 0 00-.79-.29 8.08 8.08 0 014 0l.87.26h.09s.05 0 0-.07a4.36 4.36 0 00-1.65-1.33 5.74 5.74 0 00-1.23-.45 3.37 3.37 0 012.42.27s.07 0 .06-.07a2.4 2.4 0 00-1-.85 6.86 6.86 0 00-1-.48h.2a4.43 4.43 0 011 0 6.27 6.27 0 011.22.24c.23.08.44.24.67.31v-.07a6.58 6.58 0 00-4.16-2.95zM20.23 40v.07zm2.4 4.13a6.51 6.51 0 01-.07-1.82v-.64a8.53 8.53 0 011 .8c.05.09.1.22.19.27a2.17 2.17 0 00.13-.5A.66.66 0 0024 42a4 4 0 00.23.34 3.37 3.37 0 00.66.7 4.06 4.06 0 00.19.59c.09.24.24.46.32.7s.06.21.15.25.12-.42.13-.65a4.71 4.71 0 01.19.64 3 3 0 010 .89h.07c.18-.09.25-.42.32-.59a1 1 0 00.08-.23 3.1 3.1 0 01-.09.61 6.78 6.78 0 01-.38 1 2.31 2.31 0 00.71-.68 5.7 5.7 0 00.4-.91 3.55 3.55 0 00.12-.65 4.37 4.37 0 00-.28-3.21 5.31 5.31 0 00-1.44-1.8h.1a4.68 4.68 0 00.38.39c.17.15.36.26.53.41s.12.14.21.14a1 1 0 00-.16-.55 3.87 3.87 0 01.4.41 3.16 3.16 0 01.34.69h.07c.07 0 0-.42 0-.59v-.2a3 3 0 01.17.5 7.37 7.37 0 01.11.93 1.86 1.86 0 00.27-.79 4 4 0 00-.06-.85 3.5 3.5 0 00-.17-.55 3.83 3.83 0 00-1.49-2.35 4.7 4.7 0 00-1.59-.81h1.11v-.06a1 1 0 00-.57-.32 6.17 6.17 0 01.86 0 1.76 1.76 0 01.41.07.19.19 0 010 .07 3.46 3.46 0 00.72 1.35c.06.05.13-.07.12-.12L27.1 36a4.35 4.35 0 00.1.52 7 7 0 00.37 1A5 5 0 0028.65 39v.06s.09-.06.09-.11c-.07-.35-.27-.71-.37-1.06a6.62 6.62 0 01-.22-1.32 4.79 4.79 0 010-1.07l.12.09a.79.79 0 01.22.18 2.39 2.39 0 01.13.21 5.4 5.4 0 01.23.49v-.42a3.06 3.06 0 00-.38-1.7 1.43 1.43 0 00-.14-.2l.15-.61c0 .18.07.36.11.54.12.53.31 1 .46 1.53a.83.83 0 00.38.53c.07 0 .12 0 .11-.1a9.13 9.13 0 010-2.09 4.45 4.45 0 01.69-1.72 2.18 2.18 0 00.08.49.06.06 0 00.1 0l.52-1 .27-.46.11-.18a5.9 5.9 0 01.42-.6 1.36 1.36 0 000 .2c0 .06 0 .12-.05.18a8 8 0 00-.23 2.34 2.21 2.21 0 00-.05.25v-.16.18c0 .06 0 0 0 0v-.38a5.22 5.22 0 01.37-1c.14-.26.3-.6.49-.89a6.37 6.37 0 00-.26 2.27 26 26 0 00.17 2.64c0 .19 0 .39-.08.58-.1.61-.25 1.2-.4 1.8l-.46 1.79a33.94 33.94 0 00-.78 3.63 18.54 18.54 0 01-.68 3.61 6.78 6.78 0 01-.35.84 2.59 2.59 0 01-.5.75 1.91 1.91 0 01-.75.49.94.94 0 01-.44 0 1.85 1.85 0 01-.42-.17c-.26-.15-.51-.33-.79-.48l-.82-.43a9 9 0 01-1.48-1.12l-.34-.31-.15-.17-.12-.19a8.09 8.09 0 01-.34-.86 13.73 13.73 0 01-.64-1.72zm10.12-8.69h-.24c.14-.39.3-.77.47-1.16.09-.22-.07.32-.06.3 0 .27-.1.54-.14.81zm2.63-10.92h-.09a1.27 1.27 0 00.12-.23 2 2 0 01-.03.25zm-9.53 8.22h-.09c0-.1 0-.21.07-.32 0 .12.01.23.02.34zm-7.23 6.06h-.06a1 1 0 010-.17.93.93 0 00.06.19zm1.23 1.31h-.16c-.05-.12-.1-.25-.16-.37a2 2 0 01.32.39zm.64-7.88a5.17 5.17 0 01.08-1v.41c.06.31.05.86.31 1.08a.07.07 0 00.12 0 5.29 5.29 0 01.31-1.46 6.1 6.1 0 01.55-1 2 2 0 000 1.1c.17 0 .25-.23.34-.36.22-.36.55-.66.79-1a8.08 8.08 0 00.52-.9 5 5 0 001.33-.89 4.69 4.69 0 00.52-.47 1.18 1.18 0 00-.08.39 3.62 3.62 0 000 .87.07.07 0 00.08.05c.16 0 .29-.24.41-.38l.41-.22c-.06.12-.12.23-.17.35a8.19 8.19 0 00-.62 3.94h-.18a2.09 2.09 0 00-.51.08l.22-.07s.07-.08 0-.09a4 4 0 00-1.75.17 3.82 3.82 0 00-1.45.62 1.28 1.28 0 01.16-.27c0-.06 0-.11-.07-.07a2.58 2.58 0 00-.38.32 3.32 3.32 0 00-.79.46 8.87 8.87 0 01-.15-1.64z" }),
        React.createElement("path", { className: "prefix__cls-1", d: "M29.82 61.86a41 41 0 017.33-.71c7.43 0 14.58 3 22 3.45a22 22 0 005.37-.24C66.3 64 68 63.4 69.77 63c1.36-.32 2.75-.5 4.14-.69a3.18 3.18 0 012 .15 3.13 3.13 0 011.24 2.12c.4 1.53.76 3.06 1.07 4.61a4.91 4.91 0 010 2.74 4.12 4.12 0 01-2 2 18.11 18.11 0 01-6.42 1.64c-8.66.93-17.41-.17-26.1.36-7.38.45-14.75 2.07-22.11 1.36A12 12 0 0116.75 76 5.21 5.21 0 0114 72.09a3.64 3.64 0 011.59-3.3c.38-.25.83-.39 1.2-.67s.9-1 1.37-1.4a18.1 18.1 0 017.14-3.81 37.32 37.32 0 014.52-1.05z" }),
        React.createElement("path", { className: "prefix__cls-1", d: "M49.62 63.27a1 1 0 01.21-.46c.63-.78 1.25-1.56 1.84-2.36A23.71 23.71 0 0054 55.29s2.48-1.74 2.14-1.56a2.2 2.2 0 01.61-.17 1 1 0 001-1.22l-.18-.72a1 1 0 01.71-1.22l2.85-.73a1 1 0 00.85-.8c.26-.83 2.44-.51 3.7-.35a4.68 4.68 0 01.84.07.94.94 0 01.35.2c.44.4 1.65.07 2.23 0 1-.2 1.92 1.31 1.92 1.31a7 7 0 001.47 3.6 8.55 8.55 0 011 1.59 8.67 8.67 0 01.39 3.22 15.4 15.4 0 00.75 4.36c.06.18 0 .5-.19.39a24.13 24.13 0 01-15.9 6A44 44 0 0150.18 68a1.65 1.65 0 01-.71-.29 1.59 1.59 0 01-.33-1.39c.08-1.03.32-2.06.48-3.05z" }),
        React.createElement("path", { d: "M37.15 28.23c1 5 15.58 21.41 26.47 21.4", fill: "none", stroke: "#333834", strokeMiterlimit: 10 }),
        React.createElement("path", { className: "prefix__cls-1", d: "M50.77 45.27l-.13.13v.06l.26.6a.48.48 0 00.2 0 .73.73 0 00.09-.09c.07-.15-.42-.7-.42-.7z" }),
        React.createElement("path", { className: "prefix__cls-1", d: "M51.1 46l-.46.44c-.7.66-1.84 1.72-2 1.93a4.69 4.69 0 01-1.33.32l-2.09.17a3.09 3.09 0 00-.41.13 7.33 7.33 0 00-1.06 1 2.66 2.66 0 00-.34.66 10.82 10.82 0 00-.36 1.2 2.3 2.3 0 00.28-.06l.29-.11c.94-.4 1.81-1.28 3.17-1.58.76-.18 1.76.18 1.68.38s-1.19-.21-1.88-.11c-.85.11-2.26 1.23-2.87 1.46l-.25.1L43 52c-.12.43-.43 1.54-.57 2.16 0 .17-.08.31-.1.4s0 .09-.08.17v.12c-.27.54-.64 1.4-.85 1.77.13.22.39.7.62 1.14.25.48.44.9.36.9s-.21-.17-.26-.27c.06.16.18.49.11.49a.74.74 0 01-.19-.22.38.38 0 010 .17c0 .07 0 .1-.08.09-.25 0-.74-1.35-.85-1.28s.24.93 0 .81-.18-.82-.17-1.34a1.83 1.83 0 01.07-.47v-.11l.42-2.13a6.41 6.41 0 000-1.06c0-.31-.54-.91-.84-.59-.1.11-.57.67-1.08 1.23a16.31 16.31 0 01-1.22 1.3c-.18.41-1.52 1.07-1.52.82s.72-.17.66-.27-1.42.3-1.41.19a.11.11 0 01.1-.1C36 56 36 56 36 55.89s.06-.09.17-.13c-.07 0-.12 0-.12-.08s1.49-.38 1.58-.41a3.24 3.24 0 00.37-.19 23.87 23.87 0 001.56-2.87c.1-.3.76-1.84.76-1.84a11 11 0 01.32-1.53 10 10 0 01.38-1 1.38 1.38 0 01.21-.54s.4-1.54.49-2a1.57 1.57 0 000-.38c0-.28-.07-1.8-.07-2.46a.71.71 0 01.19-.53c.39-.45 1.31-1.53 1.9-2.38.14-.19.26-.39.35-.54.83-1.5.56-.06.56-.06l-.09.62s-.13.18-.35.45v.06a28.61 28.61 0 00-1.73 2.38 11.06 11.06 0 00.23 2 2.24 2.24 0 00.06.48.24.24 0 010 .09c0 .12.06.26.1.39a1.45 1.45 0 01.39-.79l.08-.06a.61.61 0 01.14-.1.67.67 0 010-.41c0-.42.5-.73.81-.58a.35.35 0 01.24.26l.17-.08h.14a2.06 2.06 0 011.45.13.56.56 0 01.53.09l-.11.15.33.1-.17.17a2.07 2.07 0 01.13 1.52v.13l-.08.18a.41.41 0 01.27.25c.13.32-.19.76-.61.8a.76.76 0 01-.42-.06 1.63 1.63 0 01-.17.22l-.27.2a1.28 1.28 0 01-.22.09v.06l.08.09c.26.25.89.17 1.62.11a1.79 1.79 0 001.11-.36 12.77 12.77 0 001.61-1.43l.21-.22c.19-.2.36-.39.46-.51v-.05.06l.26.6a.48.48 0 00.25.02z" }),
        React.createElement("path", { className: "prefix__cls-1", d: "M51.65 45.29l.54-.08a.35.35 0 01-.16.33 2 2 0 01-.93.48.48.48 0 01-.2 0l-.26-.6v-.06a5.11 5.11 0 01.23-.76c.08-.18.19-.39.39-.42a3.82 3.82 0 01-.14.75 3.3 3.3 0 01.34-.71c.1-.16.22-.34.41-.36a1.88 1.88 0 01-.29.94c.33-.19.41-.63.7-.47-.03.53-.15.83-.63.96z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M31.37,85.36a8.66,8.66,0,0,1,.72-1.1h0a9.56,9.56,0,0,1,3.42-2.66,12,12,0,0,1-.17-2V73.83a21.21,21.21,0,0,1-3.78-5.07,20.51,20.51,0,0,1-1.85-4.94l-1.55-1.09a7.08,7.08,0,0,1-2.67-7.81,5.5,5.5,0,0,1,.25-.63,4.71,4.71,0,0,1,.21-.52l.29-.58h0L27.8,50a18.23,18.23,0,0,1-2.45-7.15,16,16,0,0,1-.13-2.08,18,18,0,0,1,.17-2.44,8.7,8.7,0,0,1-.8-.68c-.31-.29-.61-.59-.9-.92-.31.36-.6.71-.88,1.07h0a69.76,69.76,0,0,0-13,2.66,2.63,2.63,0,0,0-1.7,3.21,2.45,2.45,0,0,0,3,1.8,65.18,65.18,0,0,1,8.07-1.91L19,44a33.91,33.91,0,0,0-3.12,10.55h0c-2,.41-4,.92-6.11,1.56a2.63,2.63,0,0,0-1.7,3.22,2.44,2.44,0,0,0,3,1.79c1.55-.47,3-.86,4.51-1.2h0a34.57,34.57,0,0,0,1.73,9.91h0a73,73,0,0,0-7.58,1.86,2.63,2.63,0,0,0-1.7,3.22,2.45,2.45,0,0,0,3,1.8,66.11,66.11,0,0,1,8.31-2h0a34.38,34.38,0,0,0,7.2,9.48h0A66.58,66.58,0,0,0,9.79,87.15a2.63,2.63,0,0,0-1.7,3.22,2.45,2.45,0,0,0,3,1.8,61.55,61.55,0,0,1,15.29-2.69,4.41,4.41,0,0,1,1.15-2.76,4.28,4.28,0,0,1,1-.82,4.33,4.33,0,0,1,2.17-.58A4,4,0,0,1,31.37,85.36Z" }),
        React.createElement("path", { d: "M71.18,90.43a1.78,1.78,0,0,0-.31-2,1.77,1.77,0,0,0-1.31-.57,1.72,1.72,0,0,0-1.2.47c-.14.13-.3.27-.45.39l-.16-.32-.35-.76c-1.06-2.28-4.11-3.73-5.8-4.38a8.78,8.78,0,0,0,.81-3.7V66.53l3.77-2.72h0l4.46-3.19.15-.12a4.35,4.35,0,0,0,1.38-1.81h0a4.49,4.49,0,0,0-.13-3.77L70.7,52.17c-.21.28-.44.55-.68.82a20.76,20.76,0,0,1-1.92,1.95l.79,1.58a1,1,0,0,1-.29,1.19l-1.29.92h0l-4.89,3.51V58.72A28,28,0,0,1,50.93,61.5h0c-.31,0-.61,0-.92,0h-.27a29.82,29.82,0,0,1-3.3-.21,28.15,28.15,0,0,1-6.23-1.47c-.65-.24-1.28-.49-1.88-.77h0l-.36-.16h0V59h0v3.13l-5.1-3.66-1.08-.77a.94.94,0,0,1-.3-1.19l.68-1.35h0a20.38,20.38,0,0,1-2-2L30,53c-.17-.19-.33-.38-.49-.58l-.34.68-.9,1.8a4,4,0,0,0-.32.85A4.39,4.39,0,0,0,28,58.36h0a4.39,4.39,0,0,0,1.17,1.84,4.11,4.11,0,0,0,.5.42l8.25,5.91v2.81h0V74.6h0v5a9,9,0,0,0,.74,3.57,10.25,10.25,0,0,0-3.08,1.36,5.61,5.61,0,0,0-2,2.27c-.39.84-.71,1.43-.95,1.85a1.4,1.4,0,0,0-.1.16c-.17-.14-.35-.29-.51-.44a1.79,1.79,0,0,0-2.52.1,1.76,1.76,0,0,0-.45.93h0A1.75,1.75,0,0,0,29.56,91c2,1.87,2.77,1.87,3.18,1.87.91,0,1.81-.49,3-2.57a5,5,0,0,0,.26-.46h0c.25-.45.5-1,.77-1.53.45-1,2.49-1.69,3.73-1.87A1.43,1.43,0,0,0,41,86.3a8.73,8.73,0,0,0,5.74,2.14h6.9a8.24,8.24,0,0,0,1.94-.22h0a8.66,8.66,0,0,0,3.78-1.92l.2.08c1.56.49,4.11,1.73,4.61,2.8l.14.3h0c.1.23.21.45.31.66.81,1.67,1.51,2.73,3,2.73.41,0,1.16,0,3.18-1.87A1.66,1.66,0,0,0,71.18,90.43ZM52.91,85.28H47.42a5.83,5.83,0,0,1-6-5.61V66.82a2.33,2.33,0,0,1,3.09-2.08,20.15,20.15,0,0,0,4.66.86,18.76,18.76,0,0,0,6.71-.81,2.31,2.31,0,0,1,3.06,2.08v6.45h0v5.27h0v1.08A5.82,5.82,0,0,1,52.91,85.28Z" }),
        React.createElement("path", { d: "M88.91,87.14a70.12,70.12,0,0,1-15,2.54v.19a4.3,4.3,0,0,1-1.4,3A11.84,11.84,0,0,1,69.66,95a72.68,72.68,0,0,0,20.5-2.81A2.63,2.63,0,0,0,91.92,89,2.45,2.45,0,0,0,88.91,87.14Z" }),
        React.createElement("path", { d: "M91.92,42.35a2.46,2.46,0,0,0-3-1.85,76.16,76.16,0,0,1-8.75,1.89h0a34.1,34.1,0,0,0-3.84-5.63,12.9,12.9,0,0,1-1.72,1.61,18.08,18.08,0,0,1,.17,2.44A17.48,17.48,0,0,1,74.63,43h0A16.66,16.66,0,0,1,74,46a18.3,18.3,0,0,1-.89,2.33,13.61,13.61,0,0,1-.73,1.42l2,4a7.13,7.13,0,0,1-2.23,9l-1.7,1.21h-.18c0,.05,0,.11,0,.16A20.85,20.85,0,0,1,65,73.49v.57h0v5.25h0v.3a11.55,11.55,0,0,1-.22,2.29A12.28,12.28,0,0,1,69,85.35a4.8,4.8,0,0,1,.55,0,4.35,4.35,0,0,1,2,.48,34.32,34.32,0,0,0,6.33-6.69h0A78,78,0,0,0,90.16,76.7a2.63,2.63,0,0,0,1.76-3.18,2.47,2.47,0,0,0-3-1.87,75.39,75.39,0,0,1-7.7,1.72h0c.39-.81.73-1.65,1.05-2.49q.3-.85.57-1.71c.17-.58.34-1.16.48-1.75s.27-1.08.38-1.63a31.21,31.21,0,0,0,.49-3.24c1.91-.38,3.91-.86,6-1.43a2.64,2.64,0,0,0,1.76-3.18,2.46,2.46,0,0,0-3-1.87c-1.57.44-3.11.81-4.59,1.13h0a33.87,33.87,0,0,0-2-9.9c2.47-.43,5.07-1,7.8-1.77A2.63,2.63,0,0,0,91.92,42.35Z" }),
        React.createElement("path", { d: "M11.13,30A66.84,66.84,0,0,1,21,27.85a10.34,10.34,0,0,1,.3-1.53,8.84,8.84,0,0,1,2.27-4A68.71,68.71,0,0,0,9.79,25a2.64,2.64,0,0,0-1.7,3.23A2.45,2.45,0,0,0,11.13,30Z" }),
        React.createElement("path", { d: "M76.35,27.36A5.79,5.79,0,0,0,73,23a5.17,5.17,0,0,0-1.9-.38,4.32,4.32,0,0,0-1.58.29c-.22-.6-.46-1.2-.71-1.79s-.49-1-.76-1.5a24.9,24.9,0,0,0-5.36-6.71,21.54,21.54,0,0,0-7.29-4.26l-.11-2.86L51.91,7.89l-.42,0-.76,0-.5-2.16L50.08,5h0a3.54,3.54,0,0,0-.46,0A5.78,5.78,0,0,0,46,6.76a7.49,7.49,0,0,0-1.41,1.92,23.36,23.36,0,0,0-12.64,11c-.27.5-.52,1-.76,1.5q-.21.47-.39.93l-.08.21c-.09.21-.17.42-.25.64a4.44,4.44,0,0,0-1.57-.28A5.17,5.17,0,0,0,27,23a5.56,5.56,0,0,0-3.17,3.74c-.07.25-.14.5-.19.76a8.84,8.84,0,0,0,1.63,7.07l.19.23a8.23,8.23,0,0,0,2.84,2.29c0,.1-.05.19-.08.3a.53.53,0,0,1,0,.12.29.29,0,0,1,0,.09,15.26,15.26,0,0,0-.34,3.18,14.38,14.38,0,0,0,.13,2,15.1,15.1,0,0,0,1.3,4.42A13.55,13.55,0,0,0,30,48.61a14,14,0,0,0,.8,1.26l.25.34a19.54,19.54,0,0,0,2.29,2.55c.21.19.43.39.65.57a3.47,3.47,0,0,0,.37.3,18.91,18.91,0,0,0,2.29,1.63c.42.27.85.51,1.3.75a22.94,22.94,0,0,0,3.15,1.39,25.66,25.66,0,0,0,5.67,1.34,27,27,0,0,0,3,.19H50a26.36,26.36,0,0,0,8.25-1.3h0a23.36,23.36,0,0,0,4.14-1.81,13.73,13.73,0,0,0,1.29-.77,17.21,17.21,0,0,0,2.21-1.62c.34-.28.67-.58,1-.89A18.17,18.17,0,0,0,69,50.21c.15-.2.29-.41.43-.62a13.26,13.26,0,0,0,.77-1.23h.06l0-.07a13.81,13.81,0,0,0,.72-1.44A14.22,14.22,0,0,0,71.59,45,13.84,13.84,0,0,0,72,43.11a14.69,14.69,0,0,0-.17-5.48c0-.07,0-.14,0-.21s0-.2-.07-.3a8.32,8.32,0,0,0,2.84-2.29l.18-.23a8.06,8.06,0,0,0,1.13-1.94,9.11,9.11,0,0,0,.43-1.31A8.82,8.82,0,0,0,76.35,27.36Zm-7.41,9A10.42,10.42,0,0,1,66.5,39a9.24,9.24,0,0,1-1.71,1.1A9.42,9.42,0,0,1,65,41.19a6.86,6.86,0,0,1,.1,1.05c0,.12,0,.23,0,.35s0,.21,0,.32a10.87,10.87,0,0,1-.18,1.41,12.11,12.11,0,0,1-.34,1.35A11.8,11.8,0,0,1,64.11,47c-.17.36-.35.71-.55,1s-.28.48-.44.72-.46.65-.71,1A16,16,0,0,1,50,55.23a16.12,16.12,0,0,1-12.07-5.14c-.16-.19-.33-.38-.49-.58L37,48.94c-.19-.26-.36-.53-.52-.8s-.32-.55-.46-.83a11.48,11.48,0,0,1-1-3,10.33,10.33,0,0,1-.17-1.26c0-.16,0-.32,0-.48v-.18a1,1,0,0,1,0-.17A6.85,6.85,0,0,1,35,41c.06-.3.13-.62.22-.94a9.7,9.7,0,0,1-1.84-1.2A10,10,0,0,1,32,37.61a10.29,10.29,0,0,1-2.53-6.35c0-.15,0-.31,0-.46v-1a5.23,5.23,0,0,1,.63-2.49A5.35,5.35,0,0,1,32,25.35a5.11,5.11,0,0,1,2.66-.74h.78a8.4,8.4,0,0,1,2.1-2,9.22,9.22,0,0,1,5.21-1.59,9.38,9.38,0,0,1,4.6,1.2,5.35,5.35,0,0,0,5.31,0,9.36,9.36,0,0,1,4.61-1.2,9.16,9.16,0,0,1,7.31,3.56,8.23,8.23,0,0,1,.66,1,8.08,8.08,0,0,1,.49,1,2.31,2.31,0,0,0-.37,0H54.89A3.17,3.17,0,0,0,52,28.56c0,.07,0,.14-.07.21a2.38,2.38,0,0,0-.11.38,2.73,2.73,0,0,0-.07.64v1a7.56,7.56,0,0,0,0,.83H48.24a7.56,7.56,0,0,0,0-.83v-1a3.18,3.18,0,0,0-3.16-3.18H34.65a2.22,2.22,0,0,0-.37,0,3,3,0,0,0-1.7.76,3.22,3.22,0,0,0-1.09,2.39v1a8.37,8.37,0,0,0,3.84,7.06h0l.42.26a6.84,6.84,0,0,0,.86.42,7.34,7.34,0,0,0,1.3.43,8,8,0,0,0,2,.24,8.24,8.24,0,0,0,2.4-.35h0a8.41,8.41,0,0,0,5.28-4.71h4.83a8.41,8.41,0,0,0,7.71,5.06,8.28,8.28,0,0,0,2.29-.32,7.64,7.64,0,0,0,1.29-.49l.53-.27a7.57,7.57,0,0,0,.76-.49,8.39,8.39,0,0,0,3.28-4.81c.34,0,.68,0,1,0s.68,0,1,0A10.57,10.57,0,0,1,68.94,36.31Z" }),
        React.createElement("path", { d: "M90.16,30.05a2.63,2.63,0,0,0,1.76-3.18,2.46,2.46,0,0,0-3-1.86,73.53,73.53,0,0,1-10,2.07,11.53,11.53,0,0,1-.23,5.29A79.48,79.48,0,0,0,90.16,30.05Z" }),
        React.createElement("path", { d: "M59.76,89.21A11.34,11.34,0,0,1,53.61,91H46.72a11.35,11.35,0,0,1-6.33-1.93,5.53,5.53,0,0,0-1.39.55l-.27.55c-.18.39-.36.75-.56,1.1a33.42,33.42,0,0,0,4.24,1.26,34.1,34.1,0,0,0,11.52.62h0a33.36,33.36,0,0,0,3.75-.64l1.36-.34.51-.15.13,0,.31-.1.19-.06h0l.52-.17.2-.06L62,91.23l.12,0,.09,0c-.12-.24-.23-.49-.34-.73A9.22,9.22,0,0,0,59.76,89.21Z" }),
        React.createElement("path", { d: "M50.91,38a1,1,0,0,0-.13.18,1,1,0,0,0-.06.16s0,0,0,0a.71.71,0,0,0,0,.45.74.74,0,0,0,1,.36l1.43-.66.25-.11.18-.12a.66.66,0,0,0,.17-.23.89.89,0,0,0,.07-.28.7.7,0,0,0-.06-.35.74.74,0,0,0-.66-.42h0a.63.63,0,0,0-.27.06l-.7.31-1,.45A.8.8,0,0,0,50.91,38Z" }),
        React.createElement("path", { d: "M44.55,48.16A10.14,10.14,0,0,0,50,49.72a10,10,0,0,0,5.45-1.57.85.85,0,0,0,.38-.53A.86.86,0,0,0,55.7,47a.31.31,0,0,0-.09-.11.81.81,0,0,0-1-.19l-.09,0a8.65,8.65,0,0,1-9,0,.86.86,0,0,0-1.19.26,1,1,0,0,0-.12.32A.87.87,0,0,0,44.55,48.16Z" }),
        React.createElement("path", { d: "M46.83,38.54l1.44.66a.74.74,0,0,0,1-.36h0a.73.73,0,0,0-.15-.82.8.8,0,0,0-.21-.15l-1-.45-.71-.31a.66.66,0,0,0-.27-.06h0a.73.73,0,0,0-.65.42h0a.7.7,0,0,0-.06.35.66.66,0,0,0,.25.51.91.91,0,0,0,.16.11Z" }),
        React.createElement("path", { d: "M51.87,35.32h0l0,0h0A0,0,0,0,1,51.87,35.32Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 100 100" }, props),
        React.createElement("path", { d: "M77.46,27.25l-5.68-1.53L66.1,24.2a1.05,1.05,0,0,1-.48-1.76l2.69-2.69a34.51,34.51,0,0,0-41.52,3.73,2,2,0,1,1-2.7-3,38.47,38.47,0,0,1,47.1-3.65l2.75-2.75a1.05,1.05,0,0,1,1.76.48l1.52,5.68L78.75,26A1.05,1.05,0,0,1,77.46,27.25Z" }),
        React.createElement("path", { d: "M24,33A17,17,0,1,0,41,50,17,17,0,0,0,24,33ZM34.16,46.57a11.86,11.86,0,0,1-1.48,4.77,12,12,0,0,1-13.29,5.71,12.17,12.17,0,0,1-4.45-2.17A4.32,4.32,0,0,1,14,53.65a1.66,1.66,0,0,1-.13-1h0a.36.36,0,0,1,0-.11l.06-.1a.93.93,0,0,1,.18-.16,1.38,1.38,0,0,1,.39-.14,3.61,3.61,0,0,1,.5-.06h.17a21.74,21.74,0,0,1,3,.4l.46.07h0l.5.05.15,0H21.2c.16,0,.33,0,.49-.06h.21l.59-.1.59-.14.09,0,.08,0h0l.27-.08.17,0,0,0h.05l.24-.08.17-.06h0l.06,0,.24-.09.23-.09.27-.12.22-.1.22-.11h0l.12-.07c.12,0,.23-.12.35-.18l.17-.1.27-.16.1-.06.1-.07.25-.16.21-.14.23-.17.12-.09.09-.07h0l.2-.17.22-.18.16-.14.23-.21,0,0,.21-.21.13-.13.16-.17L29,48.7l.08-.09.18-.2,0,0a2.09,2.09,0,0,0,.14-.17l.12-.14.11-.15.16-.21a.83.83,0,0,1,.08-.12c.06-.09.13-.18.19-.28a1.27,1.27,0,0,0,.13-.19l.18-.29.11-.2.17-.3c0-.07.07-.13.1-.19s.12-.23.17-.35l.06-.13,0-.06.1-.22.12-.29.12-.33,0-.08,0-.05,0,0,0,0a1.48,1.48,0,0,1,.73-.52h0L32.46,43a.45.45,0,0,1,.5-.37l.15,0,.15,0a.45.45,0,0,1,.37.5l-.16,1a1.37,1.37,0,0,1,.52.68A4.35,4.35,0,0,1,34.16,46.57Z" }),
        React.createElement("path", { d: "M76,33A17,17,0,1,0,93,50,17,17,0,0,0,76,33Zm1.61,23.33a.49.49,0,0,0-.34.46V58.3a.49.49,0,0,1-.49.49H74.9a.49.49,0,0,1-.49-.49V57A.5.5,0,0,0,74,56.5a12.09,12.09,0,0,1-2.66-1,.49.49,0,0,1-.22-.6l.7-2a.48.48,0,0,1,.67-.28,10.4,10.4,0,0,0,3,1.07c1.06,0,1.77-.53,1.77-1.33,0-.63-.33-1.18-1.92-1.82-2-.77-4-1.89-4-4.37a4,4,0,0,1,2.86-3.9.5.5,0,0,0,.34-.47V40.38a.49.49,0,0,1,.49-.49h1.83a.5.5,0,0,1,.5.49v1.16a.49.49,0,0,0,.41.49,5,5,0,0,1,2.2.85.49.49,0,0,1,.18.58l-.73,1.95a.49.49,0,0,1-.68.26,6.91,6.91,0,0,0-2.58-.8c-1.39,0-1.5.82-1.5,1.07,0,.57.32,1,2.17,1.72s3.75,1.88,3.75,4.57A4.31,4.31,0,0,1,77.59,56.33Z" }),
        React.createElement("path", { d: "M75.91,79.48a38.47,38.47,0,0,1-47.1,3.65l-2.75,2.75a1.05,1.05,0,0,1-1.76-.48l-1.52-5.68L21.25,74a1.05,1.05,0,0,1,1.29-1.29l5.68,1.53L33.9,75.8a1.05,1.05,0,0,1,.48,1.76l-2.69,2.69a34.51,34.51,0,0,0,41.52-3.73,2,2,0,0,1,2.7,3Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 220 240" }, props),
        React.createElement("path", { d: "M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" }),
        React.createElement("path", { d: "M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 69.62 66.19" }, props),
        React.createElement("path", { d: "M40.73.19A7.88,7.88,0,0,0,38,.08,6.61,6.61,0,0,0,35.84,1a3,3,0,0,0,.69-.79.06.06,0,0,0-.06-.1A8.63,8.63,0,0,0,33.12,1.7a7.57,7.57,0,0,0-2,2.12,9.32,9.32,0,0,0,.23-.91.1.1,0,0,0,0-.09L31.12,3a7.25,7.25,0,0,0-.81,1.08c-.33.47-.64,1-.95,1.45a12.37,12.37,0,0,0-1.15,2.78A3.38,3.38,0,0,0,28,7.18l0,0-.33.65a12,12,0,0,0-.48,2.1V9.7a5.14,5.14,0,0,0-.46-2.16s0,0,0,0,0,.21.07.31a2.11,2.11,0,0,1,0,.26,6.34,6.34,0,0,0-.64-1.88,7.42,7.42,0,0,0-2.26-2.8,3.65,3.65,0,0,0-.49-.66c-.07-.09-.17,0-.13.09a2.8,2.8,0,0,1,.14.51,6,6,0,0,0-2.12-1.55A7.1,7.1,0,0,0,18.5.92c-.09,0-.05.13,0,.16l.34.19A5.22,5.22,0,0,0,18,1,8,8,0,0,0,16.74.74a5.57,5.57,0,0,0-2.35.39s0,0,0,0a1.71,1.71,0,0,0-.53.08A4.53,4.53,0,0,0,12,2.38,5.08,5.08,0,0,0,10.7,5a0,0,0,0,0,0,0s0,0,0,.08a3.86,3.86,0,0,0-.06.49s0,0,0,0h0a.09.09,0,0,0,0,.06s0,.07,0,.11,0,0,0,0c.17-.23.35-.49.55-.71a3.83,3.83,0,0,1,.29-.28h0a1.32,1.32,0,0,1,.42-.23,5.58,5.58,0,0,1,2.67,0,1.51,1.51,0,0,0-1.08.71s0,.1,0,.09a8,8,0,0,1,2.39-.2,11.53,11.53,0,0,1,1.41.33,1.79,1.79,0,0,0-1.05.3.07.07,0,0,0,0,.12c.57.12,1.16.22,1.74.37a8.12,8.12,0,0,0-2.84.74,6.41,6.41,0,0,0-3.31,3.29,5.21,5.21,0,0,0-.47.83.05.05,0,0,0,0,0A6.58,6.58,0,0,0,11,12.47a3.26,3.26,0,0,0,.14,1.39l0,0a10,10,0,0,1,.52-1.48,5.58,5.58,0,0,1,.47-.76c0,.11-.09.22-.12.33-.09.26-.31.68-.2.95,0,.05.07.07.11,0a4.55,4.55,0,0,1,.82-1,6.16,6.16,0,0,1,.8-.53c-.22.27-.5.62-.47.83,0,0,0,0,0,0s.29-.07.4-.14c.32-.19.69-.29,1-.48a5.52,5.52,0,0,0,.77-.48h.17a9.1,9.1,0,0,0-3,2.49,7.41,7.41,0,0,0-1.66,5.13,5.68,5.68,0,0,0,0,1.09.43.43,0,0,1,0,.05,8.57,8.57,0,0,0,.31,1.65,3.75,3.75,0,0,0,.76,1.21,5.44,5.44,0,0,0-.8.79,4.13,4.13,0,0,0-.63,1c0-.06,0-.11.05-.16s0-.11.08-.17,0,0,0,0A3.06,3.06,0,0,0,10,25.4c0,.05,0,.1,0,.16a6.57,6.57,0,0,0,0-1.33c0-.15-.07-.28-.1-.42h0a2.06,2.06,0,0,0-.25.62,7.37,7.37,0,0,0-.3-1.78c-.11-.32-.23-.65-.36-1A3.76,3.76,0,0,0,8.58,21l-.08-.11a.05.05,0,0,0,0,.05,5.19,5.19,0,0,0,0,.56,4.38,4.38,0,0,0-.9-1.5,5.19,5.19,0,0,0-1.73-1.39s-.06,0,0,0a1.6,1.6,0,0,0,.3.56A4.08,4.08,0,0,0,5,18.36a4.57,4.57,0,0,0-1.63-.3A4,4,0,0,0,.42,19.22a0,0,0,0,0,0,0s0,0,0,0,.28-.07.43-.08a3.66,3.66,0,0,1,.74,0,2.93,2.93,0,0,1,.6.15l.11,0a2.62,2.62,0,0,0-.66.15A1.44,1.44,0,0,0,1,19.9S.94,20,1,20a2,2,0,0,1,1.45.17,2.76,2.76,0,0,0-.79.1,2.46,2.46,0,0,0-1.13.56h0a0,0,0,0,0,0,0H.59l.54,0h0a0,0,0,0,1,0,0,4.8,4.8,0,0,1,2.33.51,2.44,2.44,0,0,0-.46.07,2.14,2.14,0,0,0-1.12.48s0,.09,0,.08a3.34,3.34,0,0,1,2,.33l-.34.05a1.48,1.48,0,0,0-.74.3s0,.05,0,.06c.3.19.53.51.81.73A4.27,4.27,0,0,0,4.84,24h-.2s-.06.06,0,.09a4.29,4.29,0,0,0,1.33.86,2.77,2.77,0,0,0-.7-.07s-.05.05,0,.08a2.1,2.1,0,0,0,.48.39,3.57,3.57,0,0,0-.86,0,5.2,5.2,0,0,0-3,1.08A5.36,5.36,0,0,0,.15,29.09c0,.05.05.06.07,0a2.89,2.89,0,0,1,.41-.6c-.1.21-.18.43-.26.65A7.12,7.12,0,0,0,0,30.54a2.16,2.16,0,0,0,0,1c0,.05.09,0,.1,0s.11-.32.17-.49a3.58,3.58,0,0,0-.09.35A3.78,3.78,0,0,0,.21,32a3,3,0,0,0,.2,1.23v.06s0,0,0,0,.08,0,.08-.05a6,6,0,0,0,.09-.74,4.47,4.47,0,0,1,.26-.86A5.41,5.41,0,0,1,2,30c0,.11-.07.24-.1.35-.08.35-.1.7-.16,1.05a.54.54,0,0,0,.07.43s.08,0,.1,0a6,6,0,0,1,.58-1.26,3.12,3.12,0,0,1,.92-.85A1.78,1.78,0,0,0,3.3,30s0,.05.05,0a9.75,9.75,0,0,1,1.44-1,2.09,2.09,0,0,0-.08.23s0,.06.06.05a12.54,12.54,0,0,1,1.4-.6,5.6,5.6,0,0,0,1.1-.47s-.06.09-.1.13,0,.1,0,.07a6.13,6.13,0,0,1,.66-.25,7,7,0,0,0-1,.76,1.52,1.52,0,0,0-.56.79s0,0,0,0c.21-.12.36-.27.57-.38a5.4,5.4,0,0,0-.42.41A2.2,2.2,0,0,0,5.84,31a0,0,0,0,0,0,0l.27-.19a3.41,3.41,0,0,0-.59.9,3.11,3.11,0,0,0-.28.88,2.12,2.12,0,0,0-.08.83c0,.05.06,0,.08,0a1.14,1.14,0,0,0,.1-.19c.06-.12.07-.12,0,0s-.06.19-.08.3a3.73,3.73,0,0,0,0,1,4.91,4.91,0,0,0,.58,2s.07,0,.07,0a3.15,3.15,0,0,1,.17-1c.1-.3,0,0,0,.13a5.23,5.23,0,0,0,0,.56,3.29,3.29,0,0,0,.11.7,4.26,4.26,0,0,0,.13.62,1.65,1.65,0,0,0,.33.79s0,0,0,0a.24.24,0,0,0,0-.08h0A4.65,4.65,0,0,1,7.42,37c.11-.26.12-.57.21-.83a4.72,4.72,0,0,1,0,1.5A5.33,5.33,0,0,0,8,37.3,6.48,6.48,0,0,0,8.83,36,3.09,3.09,0,0,0,9,35a3.35,3.35,0,0,0,.08.54c0,.24,0,.48,0,.72,0,0,0,0,0,0a.38.38,0,0,0,.09-.09,5.67,5.67,0,0,0,.63-1.87c0-.16,0-.32,0-.48,0,0,0-.33,0-.19a6.57,6.57,0,0,1,.15,1.17c0,.05.06.05.07,0,.15-.52.36-1,.46-1.56a4,4,0,0,0,0-1.34,5.11,5.11,0,0,1,.16.58,3.44,3.44,0,0,1,.09.62,1.8,1.8,0,0,1-.06.22s0,0,0,0l0-.1v.09s0,0,0,0v-.16a3.4,3.4,0,0,0,.16-.91s0,.08,0,.11c0,.31.05.61.06.92a3.46,3.46,0,0,1,0,.46v.46c0,.61-.06,1.22,0,1.85l0,.24a1.89,1.89,0,0,0,.05.23,3.5,3.5,0,0,0,.14.46,3.29,3.29,0,0,0,.21.42c.07.14.16.27.24.41l.27.38.06.1,0,0,0,0,0,0,.14.19.29.36.14.18.17.17.64.67.16.16c.06.06.1.12.15.18l.29.36.29.36a2.69,2.69,0,0,0,.35.33,2.45,2.45,0,0,0,.88.38,1.75,1.75,0,0,1,.79.4,3.71,3.71,0,0,1,.54.74,2.14,2.14,0,0,1,.23.38,1.67,1.67,0,0,1,.11.44c0,.3.07.61.13.91s.1.61.16.91l.08.46.11.45a6.57,6.57,0,0,1,.42,1.79c0,.31,0,.61,0,.92s0,.62,0,.93a3,3,0,0,1,0,.91,3.73,3.73,0,0,0,0,.46.51.51,0,0,0,0,.24l.07,0h0a.26.26,0,0,0,.15,0,18.9,18.9,0,0,1,2-.35,6.68,6.68,0,0,1,1,0c.34,0,.67,0,1,0h.25a.31.31,0,0,0,.13,0h.06l0,0,0,0a1.75,1.75,0,0,0,0-.51c0-.33-.05-.67-.08-1-.07-.67-.14-1.32-.19-2,0-.33-.05-.66-.05-1,0-.17,0-.33,0-.49l0-.5,0-.5V42.86l0-1a14.45,14.45,0,0,1,.28-2c.12-.65.27-1.3.41-1.94s.29-1.3.42-1.95.23-1.31.35-2l.34-2c.11-.65.25-1.3.37-2s.23-1.3.4-1.94a12.9,12.9,0,0,0,.56,1.58c.17.27.36.54.55.8a8.13,8.13,0,0,1,.53-2.44c.06.46-.06,1,0,1.42a7.44,7.44,0,0,1,.48,2.06v0h0v.14a0,0,0,0,0,.05,0,3,3,0,0,0,.84-1.16,9.57,9.57,0,0,0,.45-1,5.78,5.78,0,0,0,.44-1.09,9.37,9.37,0,0,0,.19-.92c0-.22.08-.71.12-.2a4.75,4.75,0,0,1-.1,1.72c0,.06.06.12.11.07a8.17,8.17,0,0,0,1.7-3.06,5.8,5.8,0,0,0,.43-1.62,4.34,4.34,0,0,0,0-.51q0-.25,0,.06c0,.12.07.24.1.36a.07.07,0,0,0,.13,0,3.58,3.58,0,0,0,.19-1.39A6,6,0,0,0,32,21.59c0-.14-.06-.28-.1-.42l0-.09a14.44,14.44,0,0,1,.77,2.24s.06.05.08,0a1.94,1.94,0,0,0,.17-.42c.06.2.12.4.17.59a3,3,0,0,1,.12,1.09,8,8,0,0,1-.42,1.86s0,.13.08.11a.78.78,0,0,0,.44-.4c.24-.44.49-.84.7-1.29a5.11,5.11,0,0,0,.2-.47,7.75,7.75,0,0,1-.23,2.8,7.23,7.23,0,0,1-.45,1.15c-.16.3-.4.58-.53.89,0,0,0,.12.05.11a0,0,0,0,0,0,0l0-.06a4.36,4.36,0,0,0,1.25-1.17,5.16,5.16,0,0,0,.51-.8,2.44,2.44,0,0,0,.19-.44c-.07.23-.15.45-.22.68,0,0,0,.16.08.12a3,3,0,0,0,.9-1.08,9.83,9.83,0,0,0,.79-1.78,6.94,6.94,0,0,0,.26-.92,4.25,4.25,0,0,1-.05,1c0,.05.06.1.09,0a7.07,7.07,0,0,0,.57-3.43h0v-.05c0-.13,0-.26,0-.39a2.5,2.5,0,0,0-.05-.29s0,0,0,0a9.83,9.83,0,0,1,.47,2.28c0,.07.09.14.15.08a1,1,0,0,0,.29-.67c0-.6.12-1.17.12-1.78,0-.2,0-.4,0-.61a8.65,8.65,0,0,1,1.25,4.71c0,.41-.15.84-.14,1.24,0,.05.07.13.12.11s0,0,0,0l0-.08a5.41,5.41,0,0,0,.8-1.92A8.78,8.78,0,0,0,40.74,23a5.43,5.43,0,0,0,0-.58c0,.28.06.56.09.85,0,.05.11.17.16.09a3.68,3.68,0,0,0,.45-1.63,11.73,11.73,0,0,0,0-2.37,9.15,9.15,0,0,0-.18-1.15,5.44,5.44,0,0,1,.45,1.13c0,.06.12.08.12,0a8.82,8.82,0,0,0-1.7-5,8.66,8.66,0,0,0-4.47-2.88,6,6,0,0,0-1.42-.24,3.46,3.46,0,0,0,.92-.47.08.08,0,0,0,0-.14,4.83,4.83,0,0,0-1.15-.14,7.29,7.29,0,0,0,2.49-.91.11.11,0,0,0,0-.17l-.32-.07a7.24,7.24,0,0,0,2.15-.55c.54-.25,1-.7,1.59-.89,0,0,0-.07,0-.1A2.55,2.55,0,0,0,38.74,7a5.09,5.09,0,0,0-.54-.22,5.51,5.51,0,0,1,3.36.2c.08,0,.1-.08.08-.13-.26-.54-1.15-.93-1.65-1.19a3.39,3.39,0,0,0-.73-.27,7.85,7.85,0,0,1,4,0v0h0l.86.26h0l.09,0h0s0,0,0-.07h0a4.31,4.31,0,0,0-1.64-1.32,5.54,5.54,0,0,0-1.24-.46,3.4,3.4,0,0,1,2.43.27s.06,0,0-.07a2.31,2.31,0,0,0-1-.84,5.33,5.33,0,0,0-1-.48l.2,0a4.44,4.44,0,0,1,1,0A5.63,5.63,0,0,1,44.34,3c.24.08.44.24.67.3,0,0,0,0,0,0s0,0,0-.06A6.6,6.6,0,0,0,40.73.19ZM11.47,28.8l0,.07h0A.15.15,0,0,1,11.47,28.8Zm2.4,4.13a7.37,7.37,0,0,1-.07-1.82c0-.22,0-.43,0-.64a9.69,9.69,0,0,1,1,.8c.05.1.1.23.19.28a0,0,0,0,0,.05,0A1.82,1.82,0,0,0,15.2,31a.66.66,0,0,0,0-.24,2.71,2.71,0,0,0,.24.35,2.84,2.84,0,0,0,.65.69,4.06,4.06,0,0,0,.19.59c.09.25.24.46.32.7s.06.21.15.26h0a1.18,1.18,0,0,0,.12-.65,3.61,3.61,0,0,1,.19.64,3,3,0,0,1,0,.89s0,0,.07,0,.25-.42.33-.6.05-.15.08-.23a4.44,4.44,0,0,1-.1.62,7.22,7.22,0,0,1-.38,1,0,0,0,0,0,0,0,2.27,2.27,0,0,0,.7-.68,4.93,4.93,0,0,0,.4-.91v0a4.67,4.67,0,0,0,.13-.65A4.43,4.43,0,0,0,18,29.63a5.56,5.56,0,0,0-1.4-1.85l.1,0c.12.13.25.26.38.38s.37.26.53.41.13.14.21.14h0c0-.12-.07-.37-.16-.55a3.87,3.87,0,0,1,.4.41,2.67,2.67,0,0,1,.34.7s.05,0,.07,0,0-.42,0-.58a1.52,1.52,0,0,0,0-.21,3,3,0,0,1,.17.5,6,6,0,0,1,.11.93s0,0,0,0a1.73,1.73,0,0,0,.27-.79,3.49,3.49,0,0,0-.06-.86v0a4.21,4.21,0,0,0-.16-.55,3.9,3.9,0,0,0-1.49-2.35,4.93,4.93,0,0,0-1.6-.81c.37,0,.74,0,1.11,0a0,0,0,0,0,0-.06,1.16,1.16,0,0,0-.58-.32,6.32,6.32,0,0,1,.87,0,2,2,0,0,1,.41.07.14.14,0,0,0,0,.07,3.44,3.44,0,0,0,.71,1.35c.07.06.13-.06.12-.12,0-.25-.06-.51-.08-.77a3,3,0,0,0,.09.52,7.93,7.93,0,0,0,.37,1,4.83,4.83,0,0,0,1.08,1.53.25.25,0,0,1,0,.07s0,0,.05,0,.1-.07.09-.11c-.07-.36-.27-.71-.37-1.07a8.46,8.46,0,0,1-.22-1.32,5.37,5.37,0,0,1,0-1.06l.13.08a.76.76,0,0,1,.21.19h0c.05.07.1.14.14.21a3.52,3.52,0,0,1,.22.49s0,0,0,0a.13.13,0,0,1,0-.06s0,0,0,0h0v0c0-.1,0-.19,0-.3v0h0a3,3,0,0,0-.38-1.7,1.43,1.43,0,0,0-.14-.2l.15-.61c0,.18.07.37.11.54.12.53.31,1,.46,1.53a.84.84,0,0,0,.39.53c.06,0,.11,0,.11-.1a8.6,8.6,0,0,1,0-2.09A4.52,4.52,0,0,1,21.57,21a2.11,2.11,0,0,0,.09.49c0,.05.06.06.09,0l.53-1,.26-.46.11-.18q.2-.3.42-.6a1.23,1.23,0,0,0,0,.2c0,.06,0,.12,0,.18A8,8,0,0,0,22.81,22a2,2,0,0,0,0,.26s0,0,0,0a.57.57,0,0,1,0-.15.88.88,0,0,1,0,.17s0,0,0,0,0-.25,0-.38a4.57,4.57,0,0,1,.38-1,8,8,0,0,1,.48-.9,6.61,6.61,0,0,0-.52,2.18,26,26,0,0,0,.17,2.64c0,.2-.05.39-.08.58-.1.61-.25,1.2-.4,1.8l-.45,1.79a29.66,29.66,0,0,0-.78,3.63A17.71,17.71,0,0,1,21,36.3a6.28,6.28,0,0,1-.34.85,2.93,2.93,0,0,1-.51.75,1.82,1.82,0,0,1-.75.48.82.82,0,0,1-.44,0,1.32,1.32,0,0,1-.41-.17c-.27-.15-.52-.33-.8-.48l-.82-.43a8.92,8.92,0,0,1-1.47-1.12l-.34-.31a1.42,1.42,0,0,1-.27-.36,6.32,6.32,0,0,1-.35-.85A16.43,16.43,0,0,1,13.87,32.93ZM24,24.24h-.1l-.13,0h0c.14-.39.3-.77.47-1.16.1-.22-.06.32-.06.3,0,.27-.1.54-.13.81Zm2.64-10.92h-.09l.12-.23Zm-9.54,8.22H17l.06-.32C17.07,21.33,17.08,21.43,17.09,21.54ZM9.86,27.6l-.06,0c0-.05,0-.11,0-.17S9.85,27.56,9.86,27.6Zm1.23,1.32-.16,0c0-.12-.1-.24-.16-.36A1.44,1.44,0,0,1,11.09,28.92ZM11.73,21a5.11,5.11,0,0,1,.08-1c0,.13,0,.27,0,.4.06.31.05.86.31,1.09a.07.07,0,0,0,.12,0A5.68,5.68,0,0,1,12.59,20a7,7,0,0,1,.55-1c-.08.38-.18.9,0,1.1,0,0,0,0,0,0s.25-.23.33-.36c.23-.36.55-.66.79-1a8.16,8.16,0,0,0,.53-.9A5.34,5.34,0,0,0,16.11,17a4.51,4.51,0,0,0,.51-.47,1.5,1.5,0,0,0-.08.39,3.61,3.61,0,0,0,0,.87.07.07,0,0,0,.08,0c.16,0,.29-.24.41-.38l.42-.22c-.06.12-.13.23-.18.35a8.07,8.07,0,0,0-.61,3.94h-.19a2.85,2.85,0,0,0-.51.08l.22-.07s.07-.08,0-.09a4.32,4.32,0,0,0-1.75.17,3.59,3.59,0,0,0-1.44.63,1,1,0,0,1,.15-.28c0-.06,0-.11-.07-.07a2.55,2.55,0,0,0-.37.32,3,3,0,0,0-.79.46A9.57,9.57,0,0,1,11.73,21Z" }),
        React.createElement("path", { d: "M21.06,50.64a41.94,41.94,0,0,1,7.33-.71c7.44,0,14.58,3,22,3.45a21.45,21.45,0,0,0,5.37-.24c1.78-.33,3.49-1,5.25-1.37,1.37-.31,2.76-.5,4.14-.69a3.18,3.18,0,0,1,2,.15,3.14,3.14,0,0,1,1.25,2.12c.39,1.53.75,3.07,1.06,4.61a4.91,4.91,0,0,1,0,2.74,4.06,4.06,0,0,1-2.05,1.95A17.9,17.9,0,0,1,61,64.29c-8.66.93-17.41-.17-26.1.36-7.38.45-14.75,2.07-22.11,1.36A12,12,0,0,1,8,64.75a5.23,5.23,0,0,1-2.78-3.87,3.63,3.63,0,0,1,1.59-3.3c.39-.26.83-.39,1.2-.68s.9-1,1.37-1.4a18.1,18.1,0,0,1,7.14-3.81A39.29,39.29,0,0,1,21.06,50.64Z" }),
        React.createElement("path", { d: "M40.87,52.05a.87.87,0,0,1,.2-.46c.64-.77,1.25-1.56,1.84-2.36,1.19-1.6,2.34-3.39,2.35-5.38-.34.18,2.47-1.51,2.14-1.34a2.05,2.05,0,0,1,.6-.16,1,1,0,0,0,1-1.23l-.18-.72a1,1,0,0,1,.72-1.22l2.84-.73a1.34,1.34,0,0,0,.55-.23,1.31,1.31,0,0,0,.3-.57c.11-.33.21-.67.3-1a1,1,0,0,1,1.67-.44,3.08,3.08,0,0,0,1.73,1.09,5.83,5.83,0,0,1,.84.07.94.94,0,0,1,.35.2,1,1,0,0,0,1.49,0l.27-.32a1,1,0,0,1,1.75.41,13.33,13.33,0,0,0,2.11,4.78,8.94,8.94,0,0,1,1,1.59,8.72,8.72,0,0,1,.38,3.23,15.35,15.35,0,0,0,.76,4.35c.06.19,0,.5-.2.39a24.06,24.06,0,0,1-15.9,6,43.23,43.23,0,0,1-8.38-1.22,1.67,1.67,0,0,1-.7-.28,1.61,1.61,0,0,1-.34-1.39C40.47,54.07,40.71,53,40.87,52.05Z" }),
        React.createElement("path", { d: "M28.4,26.11c0,.1,4.29,3.7,4.29,3.7S44,38.42,54.86,38.41" }),
        React.createElement("path", { d: "M37.44,35.83l-.11.11s0,0,0,.05l.2.52a.51.51,0,0,0,.17,0l.08-.07C37.84,36.32,37.44,35.83,37.44,35.83Z" }),
        React.createElement("path", { d: "M37.69,36.48l-.4.36c-.62.53-1.62,1.39-1.78,1.56a4,4,0,0,1-1.14.22l-1.78.07a2.9,2.9,0,0,0-.35.1,6,6,0,0,0-.93.78,2,2,0,0,0-.31.55,9,9,0,0,0-.35,1l.24,0,.25-.08a12.8,12.8,0,0,1,2.74-1.23c.65-.12,1.48.22,1.41.38s-1-.22-1.59-.16a13.55,13.55,0,0,0-2.48,1.14L31,41.2l-.4.09c-.12.36-.42,1.29-.56,1.81l-.1.33-.07.14-.05.1c-.25.45-.59,1.17-.78,1.47.1.19.3.61.48,1h0v0h0c.19.42.34.78.27.78s-.17-.15-.21-.24c0,.14.13.42.07.42l0,0a.65.65,0,0,1-.15-.19.39.39,0,0,1,0,.14h0c0,.06,0,.09-.07.08-.21,0-.58-1.17-.67-1.12s.17.8-.06.69-.12-.7-.09-1.14a1.86,1.86,0,0,1,.07-.4l0-.09.44-1.79v0a5.61,5.61,0,0,0,.08-.89c0-.27-.43-.79-.69-.53l-1,1c-.44.46-.91.93-1.08,1.06-.17.34-1.33.85-1.32.64s.62-.12.57-.21-1.21.21-1.2.11,0-.07.09-.08-.13,0-.13-.06.06-.08.15-.11c-.06,0-.1,0-.1-.07s1.28-.27,1.36-.29h0a2.3,2.3,0,0,0,.32-.15,19.9,19.9,0,0,0,1.43-2.37c.09-.25.71-1.53.71-1.53a9.34,9.34,0,0,1,.32-1.29c.16-.43.36-.84.36-.84a1.3,1.3,0,0,1,.2-.45s.39-1.29.49-1.72a1.14,1.14,0,0,0,0-.32c0-.24,0-1.53,0-2.09a.62.62,0,0,1,.18-.44c.35-.37,1.17-1.25,1.7-2h0a4.33,4.33,0,0,0,.32-.45c.76-1.24.48,0,.48,0l-.1.52v0l-.31.37,0,0a24.89,24.89,0,0,0-1.55,2,9.13,9.13,0,0,0,.12,1.7,2.1,2.1,0,0,0,0,.41s0,0,0,.08,0,.22.07.33a1.17,1.17,0,0,1,.36-.65l.07,0,.12-.08h0a.56.56,0,0,1,0-.35c.06-.35.45-.6.71-.46a.3.3,0,0,1,.19.23h0l.15-.06.12,0a1.76,1.76,0,0,1,1.22.16.51.51,0,0,1,.45.1l0,0,0,0-.1.13,0,0s0,0,0,0l.28.09-.15.14a1.74,1.74,0,0,1,0,1.23,1.17,1.17,0,0,1-.05.11,1.07,1.07,0,0,1-.07.15.36.36,0,0,1,.22.22c.1.28-.19.64-.55.66a.61.61,0,0,1-.35-.07,0,0,0,0,1,0,0,1.19,1.19,0,0,1-.15.18l-.24.16-.19.07,0,.05,0,0,.06.08a0,0,0,0,1,0,0c.21.22.75.18,1.37.15a1.51,1.51,0,0,0,1-.26,12,12,0,0,0,1.42-1.16l.18-.18c.17-.16.32-.31.41-.41l0,0s0,0,0,.05l.2.52A.51.51,0,0,0,37.69,36.48Z" }),
        React.createElement("path", { d: "M38.19,35.88l.46-.05a.31.31,0,0,1-.15.28,1.76,1.76,0,0,1-.81.37.51.51,0,0,1-.17,0l-.2-.52s0,0,0-.05a3.72,3.72,0,0,1,.22-.64c.07-.15.17-.32.34-.34a2.73,2.73,0,0,1-.14.63,2.77,2.77,0,0,1,.31-.59c.09-.13.2-.28.36-.29a1.54,1.54,0,0,1-.28.79c.29-.15.37-.52.61-.38C38.71,35.54,38.6,35.79,38.19,35.88Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 85.46 85.46" }, props),
        React.createElement("path", { fill: "#e8e3e2", d: "M85.46 42.73A42.73 42.73 0 1142.73 0a42.68 42.68 0 0142.73 42.73z" }),
        React.createElement("path", { fill: "#bec8be", d: "M65.39 79a42.75 42.75 0 01-45.32 0 42.75 42.75 0 0145.32 0zM49.11 11.68a27.13 27.13 0 0114.71 12.73c.31.57.6 1.14.87 1.73a25.7 25.7 0 011 2.46c.16.48.31.95.44 1.43v.08a21.8 21.8 0 01.79 5.76v.4a29.74 29.74 0 00.78 7c.1.41.2.82.31 1.22 0 .19.09.37.13.55l.06.24a17.38 17.38 0 01.39 3.69c0 11.6-11.55 21-25.8 21h-.27a31.23 31.23 0 01-3.52-.25 30.48 30.48 0 01-6.59-1.55C23.33 64.92 17 57.53 17 48.94a17.38 17.38 0 01.4-3.69l.06-.24c0-.18.08-.36.13-.55.11-.4.21-.81.3-1.22a29.23 29.23 0 00.79-7v-.4a22.05 22.05 0 01.78-5.74c.13-.51.29-1 .46-1.51a25.7 25.7 0 011-2.46c.27-.59.56-1.16.87-1.73a27.14 27.14 0 0114.7-12.73 20.44 20.44 0 0112.62.01z" }),
        React.createElement("path", { fill: "#e8e3e2", d: "M60.87 40.12a9.61 9.61 0 00.87-4 10.26 10.26 0 00-10.51-10 10.82 10.82 0 00-5.35 1.39 6.25 6.25 0 01-6.18 0 10.76 10.76 0 00-5.35-1.39 10.26 10.26 0 00-10.5 10 9.61 9.61 0 00.87 4 10.53 10.53 0 00.65 1.19 6.26 6.26 0 01.68 5.36 14.3 14.3 0 00-.87 4c0 8.32 7.89 15.07 17.61 15.07S60.4 59 60.4 50.68a14 14 0 00-.87-4 6.23 6.23 0 01.69-5.36 10.53 10.53 0 00.65-1.2z" }),
        React.createElement("path", { fill: "#bec8be", d: "M18.21 45a9.12 9.12 0 01-4.44-3.28c-3.55-4.5-2.37-11.71 2-13.41a5.45 5.45 0 014.75.2l.15.08M64.78 28.61a5.45 5.45 0 014.9-.29c4.38 1.7 5.56 8.91 2 13.41A9.16 9.16 0 0167.25 45M42.79 60.49a11.34 11.34 0 01-9.49-4.92 1 1 0 111.7-1.09 9.64 9.64 0 0015.65 0 1 1 0 111.67 1.09 11.34 11.34 0 01-9.53 4.92z" }),
        React.createElement("rect", { fill: "#bec8be", x: 39.05, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-65.45 39.954 46.838)" }),
        React.createElement("rect", { fill: "#bec8be", x: 44.72, y: 44.77, width: 1.82, height: 4.14, rx: 0.85, transform: "rotate(-114.55 45.635 46.84)" }),
        React.createElement("path", { fill: "#bec8be", d: "M33.75 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86zM51.84 41.12a2.94 2.94 0 01-3-2.86v-1a2.94 2.94 0 013-2.85 2.94 2.94 0 013 2.85v1a2.94 2.94 0 01-3 2.86z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$U,
    GroupsIcon: Icon$V,
    HamburgerIcon: Icon$W,
    HamburgerCloseIcon: Icon$X,
    HomeIcon: Icon$Y,
    IfoIcon: Icon$Z,
    InfoIcon: Icon$_,
    LanguageIcon: Icon$$,
    LogoIcon: Logo,
    ApeLogo: Logo$1,
    StatsIcon: Icon$10,
    FullLogo: FullLogo,
    ApeIcon: Logo$2,
    MoonIcon: Icon$11,
    MoreIcon: Icon$12,
    NftIcon: Icon$13,
    apeNFTIcon: Icon$14,
    GoldenBananaIcon: Icon$15,
    PoolIcon: Icon$16,
    SunIcon: Icon$17,
    TelegramIcon: Icon$18,
    TicketIcon: Icon$19,
    TradeIcon: Icon$1a,
    TwitterIcon: Icon$1b,
    DiscordIcon: Icon$1c,
    ApeZone: Icon$1d,
    MonkeyLight: Icon$1e
});

var MenuButton = styled(Button)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$A;

var StyledLink$1 = styled(Link$1)(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Logo$3 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush; _a.isDark; var href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(FullLogo, { width: "160px" })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$X, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$W, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$B;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Stats",
        icon: "StatsIcon",
        href: "/stats",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "apeNFTIcon",
        href: "/nft",
    },
    {
        label: "ApeZone",
        icon: "ApeZone",
        href: "/apezone",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Discord",
        icon: "DiscordIcon",
        href: "https://discord.gg/AbVxfGRCSd",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/ape_swap",
            },
            {
                label: "Announcements",
                href: "https://t.me/ape_swap_news",
            },
            {
                label: "Regional",
                href: "https://apeswap.gitbook.io/apeswap-finance/social-media-and-resources/international-telegram-groups",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/ape_swap",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: 400;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: 400;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$C, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$b, null) : React.createElement(Icon$9, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$D, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$E;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$u, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: "https://info.apeswap.finance/token/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95", target: "_blank" },
                React.createElement(Icon$F, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "12px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, null,
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            langs && (React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); }))))));
};
var templateObject_1$F, templateObject_2$c, templateObject_3$7, templateObject_4$3;

var StyledPanel = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$G;

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("title", null, "\u7F16\u7EC4"),
        React.createElement("g", { id: "\\u9875\\u9762-1", stroke: "none", strokeWidth: 1, fill: "none", fillRule: "evenodd" },
            React.createElement("g", { id: "ONTO-Landing-Page", transform: "translate(-48.000000, -53.000000)", stroke: "#000000", strokeWidth: 3 },
                React.createElement("g", { id: "\\u7F16\\u7EC4", transform: "translate(50.000000, 57.000000)" },
                    React.createElement("path", { d: "M3.14572653,3.565339 L3.14572653,3.565339 L0,0.420257608 L0,11.1571295 C0,13.9054947 1.04857551,16.6532371 3.14572653,18.7495428 C7.3406516,22.9427771 14.141751,22.9427771 18.336676,18.7495428 L3.14572653,3.565339 Z", id: "Fill-11\\u5907\\u4EFD" }),
                    React.createElement("path", { d: "M18.1336247,18.3291295 L18.1336247,18.3291295 L21.2793512,21.4735881 L21.2793512,10.7367162 C21.2793512,7.98897381 20.2307757,5.24123142 18.1336247,3.14492569 C13.9386996,-1.04830856 7.13760023,-1.04830856 2.94267516,3.14492569 L18.1336247,18.3291295 Z", id: "Fill-12\\u5907\\u4EFD" }))))));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 200.17 228.32" }, props),
        React.createElement("defs", null,
            React.createElement("style", null, ".prefix__cls-1{fill:#2ac98b;fill-rule:evenodd}")),
        React.createElement("title", null, "Nabox"),
        React.createElement("g", { id: "prefix__\\u56FE\\u5C42_2", "data-name": "\\u56FE\\u5C42 2" },
            React.createElement("g", { id: "prefix__\\u56FE\\u5C42_1-2", "data-name": "\\u56FE\\u5C42 1" },
                React.createElement("path", { className: "prefix__cls-1", d: "M0 64.12v106.34l30.79 17.75v-76.07l30.68 17.72v76.02l30.8 17.75V117.28L0 64.12z" }),
                React.createElement("path", { className: "prefix__cls-1", d: "M69.94 54.39l30.85-18.08 38.33 22.43-30.83 18zM100.83 0l-93 54.41 100.29 58.8v115.11l30.42-17.72V94.15l30.74-18V192.5l30.87-18.17V58.11z" })))));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1f,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$1i,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$1g,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$1h,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$1j,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1k,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "ONTO Wallet",
        icon: Icon$1l,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "NABOX Wallet",
        icon: Icon$1m,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1n,
        connectorId: ConnectorNames.Injected,
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.binance.org/smart-chain/wallet/metamask.html", external: true },
            React.createElement(Icon$x, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$H;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            navigator.clipboard.writeText(JSON.stringify(toCopy));
            setIsTooltipDisplayed(true);
            setTimeout(function () {
                setIsTooltipDisplayed(false);
            }, 1000);
        } }, props),
        children,
        React.createElement(Icon$w, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$I, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account, logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var StyledAvatar = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.name, name = _b === void 0 ? "Ape" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.name ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$1e, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: name },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: name },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$J, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$3, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$K, templateObject_2$f, templateObject_3$8, templateObject_4$4, templateObject_5$2;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$L;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$M;

var ResetCSS = createGlobalStyle(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Titan One', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Titan One', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$N;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#af6e5aff",
    primaryBright: "#ffd54fff",
    primaryDark: "#0098A1",
    secondary: "#965a50ff",
    success: "#31D0AA",
    warning: "#FFB237",
    green: "#009859ff",
    yellow: "#FFB300",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#965a50ff", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#EFF4F5", text: "#af6e5aff;", textDisabled: "#BDC2C4", textSubtle: "#009859ff", borderColor: "#965a50ff", card: "#FFFFFF", yellow: "#FFB300", white: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#009859ff", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#FFFFFF", textDisabled: "#666171", textSubtle: "#FFFFFF", borderColor: "#524B63", card: "#27262c", yellow: "#FFB300", white: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS, YELLOW = variants.YELLOW;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[YELLOW] = {
        background: lightColors.yellow,
        backgroundActive: lightColors.yellow,
        backgroundHover: lightColors.yellow,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b[YELLOW] = __assign({}, light$1.yellow),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ApeIcon, Icon$6 as ArrowBackIcon, Icon$7 as ArrowDownIcon, Icon$8 as ArrowDropDownIcon, Icon$9 as ArrowDropDownSmallIcon, Icon$a as ArrowDropUpIcon, Icon$b as ArrowDropUpSmallIcon, Icon$c as ArrowForwardIcon, Icon$d as AutoRenewIcon, BackgroundImage, Icon$f as BananaGoldenIcon, Icon$i as BananaGoldenPairIcon, Icon$e as BananaIcon, Icon$h as BananaPairIcon, GridLayout as BaseLayout, Icon$j as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$k as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, ButtonSquare, Icon$m as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$l as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon$o as Checkmark2Icon, Icon as CheckmarkCircleIcon, Icon$n as CheckmarkIcon, Icon$p as ChevronDownIcon, Icon$q as ChevronLeftIcon, Icon$r as ChevronRightIcon, Icon$s as ChevronUpIcon, Icon$t as CloseIcon, Icon$u as CogIcon, Icon$v as CommunityIcon, ConnectorNames, Icon$w as CopyIcon, Dropdown, Icon$1 as ErrorIcon, Flex, Heading, Icon$x as HelpIcon, IconButton, IconButtonSquare, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$y as ListViewIcon, Icon$z as LogoIcon, Icon$A as LogoRoundIcon, Menu, Icon$B as MetamaskIcon, Icon$C as MinusIcon, Modal, ModalProvider, Icon$g as MonkeyLight, Icon$D as OpenNewIcon, Icon$F as PancakeRoundIcon, Icon$E as PancakesIcon, Icon$G as PrizeIcon, Progress, Icon$J as ProgressBunny, Radio, Icon$H as RemoveIcon, ResetCSS, Icon$N as SearchIcon, Icon$O as SearchIcon2, Skeleton, Spinner, Svg, Icon$P as SwapVertIcon, Icon$Q as SyncAltIcon, Tag, Text, Icon$L as Ticket, Icon$M as TicketRound, ToastContainer, Toggle, Icon$I as VerifiedIcon, Icon$R as WarningIcon, Icon$K as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, localStorageKey, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
