import fs from "node:fs";
import { pathToFileURL } from "node:url";

const pdfjsPath =
  "C:\\Users\\yangxianbang\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\pdfjs-dist\\legacy\\build\\pdf.mjs";

globalThis.DOMMatrix = class DOMMatrix {
  constructor() {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
  }
};
globalThis.ImageData = class ImageData {};
globalThis.Path2D = class Path2D {};

const { getDocument } = await import(pathToFileURL(pdfjsPath).href);

const pdfPath =
  "F:\\电脑管家迁移文件\\xwechat_files\\wxid_ejq3ar1s8a0k22_0d67\\msg\\file\\2026-05\\BOSS简历.pdf";

const data = new Uint8Array(fs.readFileSync(pdfPath));
const pdf = await getDocument({
  data,
  disableFontFace: true,
  isEvalSupported: false,
  useWorkerFetch: false,
}).promise;

const pages = [];

for (let pageIndex = 1; pageIndex <= pdf.numPages; pageIndex += 1) {
  const page = await pdf.getPage(pageIndex);
  const content = await page.getTextContent();
  pages.push(content.items.map((item) => item.str).join(" "));
}

console.log(pages.join("\n"));
