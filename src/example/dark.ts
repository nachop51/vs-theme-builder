import color from 'chroma-js'
import type {
  ColorScheme,
  Common,
  Editor,
  FullTheme,
  Git,
  Syntax,
  Terminal,
  UserInterface
} from '../types.d.ts'

const colors: ColorScheme = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb',
    cursor: '#ff00e4',
    lineNumber: '#495162'
  },

  ui: {
    bg: '#1f2430',
    fg: '#6c739a',
    border: '#171b24',
    shadow: '#00000050'
  },

  primary: '#6c51e2',
  primaryContent: '#fff',
  accent: '#aeaaff',

  // Misc colors
  success: '#99cc99',
  info: '#79b6ff',
  warn: '#e0b494',
  error: '#e04a7e',

  syntax: {
    keyword: '#ad72f3',
    variables: '#ee6584',
    string: '#cae790',
    func: {
      name: '#79b9ee',
      param: '#e0bdf2'
    },
    const: '#f5dd87',
    macros: '#f29e74',
    punctuation: '#9899c5',
    comment: '#546e7a',
    class: '#ffcb6b',
    numeric: '#c9adff',
    regexp: '#95e6cb',

    brackets: {
      1: '#f3a84d',
      2: '#e68aff',
      3: '#49d9e8'
    }
  }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */

const syntax: Syntax = {
  keyword: color(colors.syntax.keyword),

  func: {
    name: color(colors.syntax.func!.name!),
    param: color(colors.syntax.func!.param!)
  },

  class: {
    name: color(colors.syntax.class)
  },

  langs: {
    html: {
      tag: color(colors.syntax.punctuation),
      tagName: color(colors.syntax.variables),
      attributes: color(colors.syntax.macros!).luminance(0.35).brighten(0.3)
    },
    css: {
      class: color(colors.syntax.class),
      id: color(colors.syntax.regexp!),
      pseudo: color(colors.syntax.punctuation),
      properties: color(colors.syntax.func!.name!).brighten(0.75),
      units: color(colors.syntax.numeric)
    },
    markup: {
      heading: color(colors.primary),
      punctuation: color(colors.syntax.macros!)
    }
  },

  punctuation: color(colors.syntax.punctuation),
  comment: color(colors.syntax.comment!),
  string: color(colors.syntax.string),
  numeric: color(colors.syntax.numeric),
  operator: color(colors.info!),

  variables: color(colors.syntax.variables),
  constant: color(colors.syntax.const!),
  macros: color(colors.syntax.macros!),

  regexp: color(colors.syntax.regexp!),
  special: color(colors.warn!),
  misc: color(colors.accent)
}

const editor: Editor = {
  bg: color(colors.editor.bg),
  fg: color(colors.editor.fg),
  cursor: color(colors.editor.cursor),
  selection: {
    active: color(colors.accent).alpha(0.25),
    inactive: color(colors.accent).alpha(0.15)
  },
  findMatch: {
    active: color(colors.accent).brighten(0.5).alpha(0.5),
    inactive: color(colors.accent).alpha(0.25)
  },
  lineNumber: {
    active: color(colors.editor.lineNumber!),
    normal: color(colors.editor.lineNumber!).alpha(0.6)
  },
  indentGuide: {
    active: color(colors.primary).alpha(0.6),
    normal: color(colors.primary).alpha(0.1)
  }
}

const ui: UserInterface = {
  fg: color(colors.ui.fg),
  bg: color(colors.ui.bg),
  border: color(colors.ui.border),
  borderActive: color(colors.primary),
  selection: {
    active: color(colors.accent).alpha(0.4),
    hover: color(colors.accent).alpha(0.1),
    normal: color(colors.accent).alpha(0.3)
  },
  panel: {
    bg: color(colors.editor.bg),
    shadow: color(colors.ui.shadow!)
  }
}

const common: Common = {
  primary: color(colors.primary),
  primaryContent: color(colors.primaryContent),
  accent: color(colors.accent),
  info: color(colors.info!),
  warn: color(colors.warn!),
  success: color(colors.success!),
  error: color(colors.error!),
  brackets1: color(colors.syntax.brackets![1]!),
  brackets2: color(colors.syntax.brackets![2]!),
  brackets3: color(colors.syntax.brackets![3]!)
}

const git: Git = {
  added: color(colors.success!),
  modified: color(colors.info!).alpha(0.7),
  deleted: color(colors.error!).alpha(0.7),
  ignored: color(colors.ui.fg).alpha(0.5)
}

const terminal: Terminal = {
  ansiBlack: color('#3f4451'),
  ansiBrightBlack: color('#4f5666'),
  ansiBlue: color('#4aa5f0'),
  ansiBrightBlue: color('#4dc4ff'),
  ansiCyan: color('#42b3c2'),
  ansiBrightCyan: color('#4cd1e0'),
  ansiGreen: color('#8cc265'),
  ansiBrightGreen: color('#a5e075'),
  ansiRed: color('#e05561'),
  ansiBrightRed: color('#ff616e'),
  ansiMagenta: color('#c162de'),
  ansiBrightMagenta: color('#de73ff'),
  ansiYellow: color('#f0c758'),
  ansiBrightYellow: color('#ffec80'),
  ansiWhite: color('#d7dae0'),
  ansiBrightWhite: color('#e6e6e6'),
  background: color(colors.ui.bg),
  border: color(colors.ui.border),
  foreground: color(colors.editor.fg).darken(0.3),
  selectionBackground: color(colors.accent).darken(0.5).alpha(0.6)
}

const theme: FullTheme = {
  type: 'dark',
  syntax,
  git,
  ui,
  terminal,
  common,
  editor
}

// you can use the package like this to create a theme if you want to be more specific with the colors

// or just use

// const theme = createSchemeFromColors(colors, 'dark')

export { theme as exampleTheme, colors as exampleColors }
