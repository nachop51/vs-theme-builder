import type { Color } from 'chroma-js'

export interface Syntax {
  keyword: Color
  func: {
    name: Color
    param: Color
    lambda: Color
    call: Color
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
  gutter: {
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
  }

  ui: {
    bg: string
    fg: string
  }

  cursor: string
  gutter: string

  border: string

  primary: string
  primaryContent: string
  accent: string

  success: string
  info: string
  warn: string
  error: string

  keyword: string
  variables: string
  string: string

  func: {
    name: string
    param: string
    lambda: string
    call: string
  }

  const: string
  macros: string
  punctuation: string
  comment: string
  class: string
  numeric: string
  regexp: string

  shadow: string

  brackets: {
    1: string
    2: string
    3: string
  }
}
