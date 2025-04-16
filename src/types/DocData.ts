import { JSX } from "react";

export interface Code {
  type: 'code';
  content: string;
  language: string;
  result?: ConsoleResult | WebResult;
}

export interface WebResult {
  type: 'web';
  css?: Code;
  content: JSX.Element | null;
}

export interface ConsoleResult {
  type: 'console';
  content: string[];
}

export interface Text {
  type: 'text';
  content: (string | {name?: string, url: string})[];
}