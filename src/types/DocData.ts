import { JSX } from "react";

export interface Code {
  type: 'code';
  content: string;
  language: string;
  result?: Result;
}

export interface Result {
  type: 'web' | 'console';
  css: boolean;
  content: string[] | JSX.Element;
}

export interface Text {
  type: 'text';
  content: (string | {name?: string, url: string})[];
}