import { lexer, TokensList } from "marked";
import { readFile, readFileSync } from "read-file-safe";

export async function readMarkdownString(path: string) {
  return readFile(path);
}

export function readMarkdownStringSync(path: string) {
  return readFileSync(path);
}

export async function readMarkdown(path: string) {
  return readMarkdownString(path).then((text) => {
    if(text === undefined) {
      return undefined;
    } else {
      return lexer(text);
    }
  });
}

export function readMarkdownSync(path: string) {
  const text = readMarkdownStringSync(path);
  if(text === undefined) {
    return undefined;
  } else {
    return lexer(text);
  }
}

export {
  TokensList
}
