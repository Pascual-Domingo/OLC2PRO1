(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* BASICS */\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n/* PADDING */\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n/* GUTTER */\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n/* CURSOR */\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n.cm-tab { display: inline-block; text-decoration: inherit; }\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n/* DEFAULT THEME */\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n.CodeMirror-composing { border-bottom: 2px solid; }\n/* Default styles for common addons */\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n/* STOP */\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n.CodeMirror-widget {}\n.CodeMirror-rtl pre { direction: rtl; }\n.CodeMirror-code {\n  outline: none;\n}\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: #EEFFFF;\n}\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: #546E7A;\n  border: none;\n}\n.cm-s-material .CodeMirror-guttermarker,\n.cm-s-material .CodeMirror-guttermarker-subtle,\n.cm-s-material .CodeMirror-linenumber {\n  color: #546E7A;\n}\n.cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n.cm-s-material div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n.cm-s-material .CodeMirror-line::selection,\n.cm-s-material .CodeMirror-line>span::selection,\n.cm-s-material .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n.cm-s-material .CodeMirror-line::-moz-selection,\n.cm-s-material .CodeMirror-line>span::-moz-selection,\n.cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n.cm-s-material .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cm-s-material .cm-keyword {\n  color: #C792EA;\n}\n.cm-s-material .cm-operator {\n  color: #89DDFF;\n}\n.cm-s-material .cm-variable-2 {\n  color: #EEFFFF;\n}\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #f07178;\n}\n.cm-s-material .cm-builtin {\n  color: #FFCB6B;\n}\n.cm-s-material .cm-atom {\n  color: #F78C6C;\n}\n.cm-s-material .cm-number {\n  color: #FF5370;\n}\n.cm-s-material .cm-def {\n  color: #82AAFF;\n}\n.cm-s-material .cm-string {\n  color: #C3E88D;\n}\n.cm-s-material .cm-string-2 {\n  color: #f07178;\n}\n.cm-s-material .cm-comment {\n  color: #546E7A;\n}\n.cm-s-material .cm-variable {\n  color: #f07178;\n}\n.cm-s-material .cm-tag {\n  color: #FF5370;\n}\n.cm-s-material .cm-meta {\n  color: #FFCB6B;\n}\n.cm-s-material .cm-attribute {\n  color: #C792EA;\n}\n.cm-s-material .cm-property {\n  color: #C792EA;\n}\n.cm-s-material .cm-qualifier {\n  color: #DECB6B;\n}\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #DECB6B;\n}\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}\n", "",{"version":3,"sources":["styles.css","../node_modules/codemirror/lib/codemirror.css","../node_modules/codemirror/theme/material.css"],"names":[],"mappings":"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","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import '~codemirror/lib/codemirror';\n@import '~codemirror/theme/material';\n","/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n","/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material.CodeMirror {\n  background-color: #263238;\n  color: #EEFFFF;\n}\n\n.cm-s-material .CodeMirror-gutters {\n  background: #263238;\n  color: #546E7A;\n  border: none;\n}\n\n.cm-s-material .CodeMirror-guttermarker,\n.cm-s-material .CodeMirror-guttermarker-subtle,\n.cm-s-material .CodeMirror-linenumber {\n  color: #546E7A;\n}\n\n.cm-s-material .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::selection,\n.cm-s-material .CodeMirror-line>span::selection,\n.cm-s-material .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-line::-moz-selection,\n.cm-s-material .CodeMirror-line>span::-moz-selection,\n.cm-s-material .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material .cm-comment {\n  color: #546E7A;\n}\n\n.cm-s-material .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material .cm-variable-3,\n.cm-s-material .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pasco\desktop\compi2\laboratorio\OLC2PRO1\src\styles.css */"./src/styles.css");


/***/ })

},[[4,"runtime"]]]);
//# sourceMappingURL=styles.js.map