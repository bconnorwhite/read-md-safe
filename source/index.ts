import { lexer, TokensList } from "marked";
import { readFile, readFileSync } from "read-file-safe";

export async function readMarkdownString(path: string) {
  return readFile(path);
}

export function readMarkdownStringSync(path: string) {
  return readFileSync(path);
}

export async function readMarkdown(path: string) {
  return readMarkdownString(path).then((text) => lexer(text));
}

export function readMarkdownSync(path: string) {
  return lexer(readMarkdownStringSync(path));
}

export {
  TokensList
}
