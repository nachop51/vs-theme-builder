import type { Color } from 'chroma-js'

/**
 * Options of the `createSchemeFromColors` function
 */
interface CreateSchemeFromColorsOptions {
  // The color scheme to create the theme from
  colors: ColorScheme
  // Whether the scheme is for a dark or light theme
  type?: 'dark' | 'light'
}

/**
 * Creates a full theme scheme from a color scheme, so you can later
 * modify as you want or build a VS Code theme from it.
 */
export declare function createSchemeFromColors({
  colors,
  type,
}: CreateSchemeFromColorsOptions): FullTheme

/**
 * Options of the `buildThemeFromScheme` function
 */
interface BuildThemeFromSchemeOptions {
  // The name of the theme
  name: string
  // The full theme scheme to build the theme from
  scheme: FullTheme
  // Whether the theme should have borders
  isBordered?: boolean
}

/**
 * Builds a VS Code theme from a full theme scheme
 *
 * @returns {object} The VS Code theme JSON object
 */
export declare function buildThemeFromScheme({
  name,
  scheme,
  isBordered,
}: BuildThemeFromSchemeOptions): object

/**
 * Options of the `buildThemeFromColors` function
 */
interface BuildThemeFromColorsOptions {
  // The name of the theme
  name: string
  // The color scheme to build the theme from
  colors: ColorScheme
  // Whether the theme should have borders
  isBordered?: boolean
  // Whether the scheme is for a dark or light theme
  type?: 'dark' | 'light'
}

/**
 * Creates a full theme scheme from a color scheme, basically you do two steps in one
 * go, first creating the scheme from colors and then building the theme from the scheme.
 */
export declare function buildThemeFromColors({
  name,
  colors,
  isBordered,
  type,
}: BuildThemeFromColorsOptions): object

/**
 * An example dark theme FullTheme
 */
export declare const exampleTheme: FullTheme
/**
 * An example dark theme ColorScheme
 */
export declare const exampleColors: ColorScheme

/**
 * Syntax highlighting colors in the VS Code Editor
 */
export interface Syntax {
  // Keywords like "if", "else", "return", etc.
  keyword: Color

  // Function colors
  func: {
    // Function name color
    name: Color
    // Function parameter color
    param: Color
  }

  // Class colors
  class: {
    // Class name color
    name: Color
  }

  // Specific language colors
  langs?: {
    // HTML specific colors
    html?: {
      // Tag color
      tag?: Color
      // Tag name color
      tagName?: Color
      // Attribute color
      attributes?: Color
    }

    // CSS specific colors
    css?: {
      // Class selector color
      class?: Color
      // ID selector color
      id?: Color
      // Pseudo-class/color color
      pseudo?: Color
      // Property name color
      properties?: Color
      // CSS Units color
      units?: Color
    }

    // Markup specific colors
    markup?: {
      // Heading color
      heading?: Color
      // Punctuation color
      punctuation?: Color
    }
  }

  // Punctuation in general (semicolons, commas, colons, etc.)
  punctuation: Color
  // Comment color ("// comment" or "/* comment */")
  comment: Color
  // String literal color ("text")
  string: Color
  // Numeric literal color (123, 12.34, etc.)
  numeric: Color

  // Variable name color (varName, myVariable, etc.)
  variables: Color
  // Constant name color (CONST_NAME, etc.)
  constant: Color
  // Macro name color (#define MACRO_NAME, or constants from some libraries in some languages)
  macros: Color

  // Regex pattern color (/^regex$/)
  regexp: Color
}

/**
 * VSCode Editor colors
 */
export interface Editor {
  // Background color
  bg: Color
  // Foreground color
  fg: Color
  // Cursor color (the blinking line)
  cursor: Color
  // Selection colors (when you select text)
  selection: {
    // Active selection color (when the editor is focused)
    active: Color
    // Inactive selection color (when the editor is not focused)
    inactive: Color
  }

  // When searching for text in the editor, the highlight colors
  findMatch: {
    // Active match color (the current one)
    active: Color
    // Inactive match color (the other matches)
    inactive: Color
  }

  // Line number colors on the side of the editor (the numbers showing each line)
  lineNumber: {
    // Current line number color
    active: Color
    // Other line numbers color
    normal: Color
  }

  // Background color of the line where the cursor is located
  lineHighlightBackground: Color

  // Indent guide colors (the vertical lines showing indentation levels, if enabled)
  indentGuide: {
    // Active indent guide color
    active: Color
    // Normal indent guide color
    normal: Color
  }
}

/**
 * VSCode User Interface colors
 */
export interface UserInterface {
  // Background color
  bg: Color
  // Foreground color
  fg: Color
  // Color of the borders in the UI
  border: Color
  // Color of active borders in the UI (like focused panels)
  borderActive: Color

  // Selection colors in the UI (like selected items in lists)
  selection: {
    // Active selection color (when the UI element is focused)
    active: Color
    // Inactive selection color (when the UI element is not focused)
    hover: Color
    // Normal selection color
    normal: Color
  }

  // Panel colors, mainly used for widgets
  panel: {
    // Panel background color
    bg: Color
    // Panel shadow color
    shadow: Color
  }
}

/**
 * Common colors used in various parts of the theme and VSCode
 */
export interface Common {
  // Primary color, used for primary buttons and highlights
  primary: Color
  // Primary content color, used for text/icons on primary colored backgrounds
  primaryContent: Color
  // Accent color, used only for small details and highlights
  accent: Color
  // Informational messages color
  info: Color
  // Warning messages color
  warn: Color
  // Success messages color
  success: Color
  // Error messages color
  error: Color

  // First level of bracket colors
  brackets1: Color
  // Second level of bracket colors
  brackets2: Color
  // Third level of bracket colors
  brackets3: Color
}

/**
 * Git colors used in the Source Control panel and diffs
 */
export interface Git {
  // Added lines/files color
  added: Color
  // Modified lines/files color
  modified: Color
  // Deleted lines/files color
  deleted: Color
  // Ignored files color
  ignored: Color
}

/**
 * Terminal colors used in the integrated terminal
 * Standard ANSI colors plus background, foreground, border and selection
 */
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

/**
 * Full theme scheme including all sections
 */
export interface FullTheme {
  // Whether the theme is dark or light
  type: 'dark' | 'light'
  // Syntax highlighting colors
  syntax: Syntax
  // VSCode Editor colors
  editor: Editor
  // VSCode User Interface colors
  ui: UserInterface
  // Common colors used in various parts of the theme and VSCode
  common: Common
  // Git colors used in the Source Control panel and diffs
  git: Git
  // Terminal colors used in the integrated terminal
  terminal: Terminal
}

/**
 * A simplified color scheme to create a full theme from
 */
export interface ColorScheme {
  // VSCode Editor colors
  editor: {
    // Background color
    bg: string
    // Foreground color
    fg: string
    // Cursor color (the blinking line)
    cursor: string
    // Selection colors (when you select text)
    lineNumber?: string
    // Background color of the line where the cursor is located
    lineHighlightBackground?: string
  }

  // VSCode User Interface colors
  ui: {
    // Background color
    bg: string
    // Foreground color
    fg: string
    // Color of the borders in the UI
    border: string
    // Color of active borders in the UI (like focused panels)
    shadow?: string
  }

  // Primary color, used for primary buttons and highlights
  primary: string
  // Primary content color, used for text/icons on primary colored backgrounds
  primaryContent: string
  // Accent color, used only for small details and highlights
  accent: string

  // Success messages color
  success?: string
  // Informational messages color
  info?: string
  // Warning messages color
  warn?: string
  // Error messages color
  error?: string
  // Added lines/files color
  misc?: string

  // Syntax highlighting colors
  syntax: {
    // Keywords like "if", "else", "return", etc.
    keyword: string
    // Variable name color (varName, myVariable, etc.)
    variables: string
    // String literal color ("text")
    string: string

    // Punctuation in general (semicolons, commas, colons, etc.)
    punctuation: string
    // Numeric literal color (123, 12.34, etc.)
    numeric: string
    // Class name color
    class: string

    // Constant name color (CONST_NAME, etc.)
    const?: string
    // Comment color ("// comment" or "/* comment */")
    comment?: string
    // Regex pattern color (/^regex$/)
    regexp?: string
    // Macro name color (#define MACRO_NAME, or constants from some libraries in some languages)
    macros?: string

    // Function colors
    func?: {
      // Function name color
      name?: string
      // Function parameter color
      param?: string
    }

    // Bracket colors
    brackets?: {
      // First level of bracket colors
      1?: string
      // Second level of bracket colors
      2?: string
      // Third level of bracket colors
      3?: string
    }
  }

  git?: {
    // Added lines/files color
    added?: string
    // Modified lines/files color
    modified?: string
    // Deleted lines/files color
    deleted?: string
    // Ignored files color
    ignored?: string
  }
}
