import type { Color } from 'chroma-js'

interface CreateSchemeFromColorsOptions {
  colors: ColorScheme
  type?: 'dark' | 'light'
}

export declare function createSchemeFromColors({
  colors,
  type
}: CreateSchemeFromColorsOptions): FullTheme

interface BuildThemeFromSchemeOptions {
  name: string
  scheme: FullTheme
  isBordered?: boolean
}

export declare function buildThemeFromScheme({
  name,
  scheme,
  isBordered
}: BuildThemeFromSchemeOptions): object

interface BuildThemeFromColorsOptions {
  name: string
  colors: ColorScheme
  isBordered?: boolean
}

export declare function buildThemeFromColors({
  name,
  colors,
  isBordered
}: BuildThemeFromColorsOptions): object

export declare const exampleTheme: FullTheme
export declare const exampleColors: ColorScheme

export interface Syntax {
  keyword: Color
  func: {
    name: Color
    param: Color
  }

  class: {
    name: Color
  }

  langs?: {
    html?: {
      tag?: Color
      tagName?: Color
      attributes?: Color
    }
    css?: {
      class?: Color
      id?: Color
      pseudo?: Color
      properties?: Color
      units?: Color
    }
    markup?: {
      heading?: Color
      punctuation?: Color
    }
  }

  punctuation: Color
  comment: Color
  string: Color
  numeric: Color
  operator: Color

  variables: Color
  constant: Color
  macros: Color

  regexp: Color
  special: Color
  misc: Color
}

export interface Editor {
  bg: Color
  fg: Color
  cursor: Color
  selection: {
    active: Color
    inactive: Color
  }
  findMatch: {
    active: Color
    inactive: Color
  }
  lineNumber: {
    active: Color
    normal: Color
  }
  indentGuide: {
    active: Color
    normal: Color
  }
}

export interface UserInterface {
  fg: Color
  bg: Color
  border: Color
  borderActive: Color
  selection: {
    active: Color
    hover: Color
    normal: Color
  }
  panel: {
    bg: Color
    shadow: Color
  }
}

export interface Common {
  primary: Color
  primaryContent: Color
  accent: Color
  info: Color
  warn: Color
  success: Color
  error: Color
  brackets1: Color
  brackets2: Color
  brackets3: Color
}

export interface Git {
  added: Color
  modified: Color
  deleted: Color
  ignored: Color
}

export interface Terminal {
  ansiBlack: Color
  ansiBrightBlack: Color
  ansiBlue: Color
  ansiBrightBlue: Color
  ansiCyan: Color
  ansiBrightCyan: Color
  ansiGreen: Color
  ansiBrightGreen: Color
  ansiRed: Color
  ansiBrightRed: Color
  ansiMagenta: Color
  ansiBrightMagenta: Color
  ansiYellow: Color
  ansiBrightYellow: Color
  ansiWhite: Color
  ansiBrightWhite: Color
  background: Color
  border: Color
  foreground: Color
  selectionBackground: Color
}

export interface FullTheme {
  type: 'dark' | 'light'
  syntax: Syntax
  editor: Editor
  ui: UserInterface
  common: Common
  git: Git
  terminal: Terminal
}

export interface ColorScheme {
  editor: {
    bg: string
    fg: string
    cursor: string
    lineNumber?: string
  }

  ui: {
    bg: string
    fg: string
    border: string
    shadow?: string
  }

  primary: string
  primaryContent: string
  accent: string

  success?: string
  info?: string
  warn?: string
  error?: string
  misc?: string

  syntax: {
    keyword: string
    variables: string
    string: string

    punctuation: string
    numeric: string
    class: string

    const?: string
    comment?: string
    regexp?: string
    macros?: string

    func?: {
      name?: string
      param?: string
    }

    brackets?: {
      1?: string
      2?: string
      3?: string
    }
  }
}
