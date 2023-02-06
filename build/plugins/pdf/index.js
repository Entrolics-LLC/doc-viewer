"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var pdfjsWorker = __importStar(require("pdfjs-dist/build/pdf.worker.entry"));
var react_1 = __importDefault(require("react"));
var react_pdf_1 = require("react-pdf");
var styled_components_1 = __importDefault(require("styled-components"));
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
var PDFRenderer = function (_a) {
    var _b;
    var mainState = _a.mainState;
    console.log('mainState', mainState);
    return (react_1.default.createElement("div", null,
        "Testing new: ", (_b = Object === null || Object === void 0 ? void 0 : Object.keys(mainState)) === null || _b === void 0 ? void 0 :
        _b.toString()));
    // return (
    //   <PDFProvider mainState={mainState}>
    //     <Container id="pdf-renderer" data-testid="pdf-renderer">
    //       <PDFControls />
    //       <PDFPages />
    //     </Container>
    //   </PDFProvider>
    // );
};
exports.default = PDFRenderer;
PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"])), function (props) {
    return props.theme.disableThemeScrollbar ? "" : "width: 10px";
}, function (props) { return props.theme.secondary; }, function (props) { return props.theme.tertiary; }, function (props) { return props.theme.primary; });
var templateObject_1;
