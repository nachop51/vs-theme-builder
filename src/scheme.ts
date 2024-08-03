import color from 'chroma-js'
import type { Editor, Syntax, Terminal, UserInterface, ColorScheme, Git, Common, FullTheme } from './types.js'

interface createSchemeFromColorsProps {
  colors: ColorScheme
  type?: 'dark' | 'light'
}

export default function createSchemeFromColors ({ colors, type = 'dark' }: createSchemeFromColorsProps): FullTheme {
  const syntax: Syntax = {
    keyword: color(colors.keyword),

    func: {
      name: color(colors.func.name),
      param: color(colors.func.param)
    },

    class: {
      name: color(colors.class)
    },

    langs: {
      html: {
        tag: color(colors.punctuation),
        tagName: color(colors.variables),
        attributes: color(colors.macros).luminance(0.35).brighten(0.3)
      },
      css: {
        class: color(colors.class),
        id: color(colors.regexp),
        pseudo: color(colors.punctuation),
        properties: color(colors.func.name).brighten(0.75),
        units: color(colors.numeric)
      },
      markup: {
        heading: color(colors.primary),
        punctuation: color(colors.macros)
      }

    },

    punctuation: color(colors.punctuation),
    comment: color(colors.comment),
    string: color(colors.string),
    numeric: color(colors.numeric),
    operator: color(colors.info),

    variables: color(colors.variables),
    constant: color(colors.const),
    macros: color(colors.macros),

    regexp: color(colors.regexp),
    special: color(colors.warn),
    misc: color(colors.accent)
  }

  const editor: Editor = {
    bg: color(colors.editor.bg),
    fg: color(colors.editor.fg),
    cursor: color(colors.cursor),
    selection: {
      active: color(colors.accent).alpha(0.25),
      inactive: color(colors.accent).alpha(0.15)
    },
    findMatch: {
      active: color(colors.accent).brighten(0.5).alpha(0.5),
      inactive: color(colors.accent).alpha(0.25)
    },
    gutter: {
      active: color(colors.gutter),
      normal: color(colors.gutter).alpha(0.8)
    },
    indentGuide: {
      active: color(colors.primary).alpha(0.6),
      normal: color(colors.primary).alpha(0.1)
    }
  }

  const ui: UserInterface = {
    fg: color(colors.ui.fg),
    bg: color(colors.ui.bg),
    border: color(colors.border),
    borderActive: color(colors.primary),
    selection: {
      active: color(colors.accent).alpha(0.4),
      hover: color(colors.accent).alpha(0.1),
      normal: color(colors.accent).alpha(0.3)
    },
    panel: {
      bg: color(colors.editor.bg),
      shadow: color(colors.shadow)
    }
  }

  const common: Common = {
    primary: color(colors.primary),
    primaryContent: color(colors.primaryContent),
    accent: color(colors.accent),
    info: color(colors.info),
    warn: color(colors.warn),
    success: color(colors.success),
    error: color(colors.error),
    brackets1: color(colors.brackets[1]),
    brackets2: color(colors.brackets[2]),
    brackets3: color(colors.brackets[3])
  }

  const git: Git = {
    added: color(colors.success),
    modified: color(colors.info).alpha(0.7),
    deleted: color(colors.error).alpha(0.7),
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
    border: color(colors.border),
    foreground: color(colors.editor.fg).darken(0.3),
    selectionBackground: color(colors.accent).darken(0.5).alpha(0.6)
  }

  return {
    type,
    syntax,
    editor,
    ui,
    terminal,
    git,
    common
  }
}
