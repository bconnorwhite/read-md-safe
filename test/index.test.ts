import { beforeEach, afterEach, test, expect } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { readMarkdown, readMarkdownString, readMarkdownSync, readMarkdownStringSync } from "../source";

beforeEach(async () => {
  mock({
    "/test": {
      "note.md": "# Title"
    }
  });
});

afterEach(async () => {
  restore();
});

const token = {
  type: "heading",
  raw: "# Title",
  depth: 1,
  text: "Title",
  tokens: [{
    type: "text",
    raw: "Title",
    text: "Title"
  }]
};

test("read", async () => {
  return readMarkdown("/test/note.md").then((tokensList) => {
    expect(tokensList?.[0]).toEqual(token);
  });
});

test("read undefined", async () => {
  return readMarkdown("/test/nope.md").then((tokensList) => {
    expect(tokensList).toBe(undefined);
  });
});

test("read string", async () => {
  return readMarkdownString("/test/note.md").then((text) => {
    expect(text).toBe("# Title");
  });
});

test("read sync", async () => {
  expect(readMarkdownSync("/test/note.md")?.[0]).toEqual(token);
});

test("read undefined sync", async () => {
  expect(readMarkdownSync("/test/nope.md")).toBe(undefined);
});

test("read string", async () => {
  expect(readMarkdownStringSync("/test/note.md")).toBe("# Title");
});
