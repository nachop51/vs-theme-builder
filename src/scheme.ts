import color from 'chroma-js'
import type { Editor, Syntax, Terminal, UserInterface, ColorScheme, Git, Common, FullTheme } from './types.js'
import { defaultColors } from './constants.js'

interface createSchemeFromColorsProps {
  colors: ColorScheme
  type?: 'dark' | 'light'
}

export default function createSchemeFromColors ({ colors, type = 'dark' }: createSchemeFromColorsProps): FullTheme {
  const syntax: Syntax = {
    keyword: color(colors.keyword),

    func: {
      name: color(colors?.func?.name ?? defaultColors.func.name),
      param: color(colors?.func?.param ?? colors.variables)
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
        properties: color(colors?.func?.name ?? defaultColors.func.name).brighten(0.75),
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
    operator: color(colors.info ?? defaultColors.info),

    variables: color(colors.variables),
    constant: color(colors.const),
    macros: color(colors.macros),

    regexp: color(colors.regexp),
    special: color(colors.warn ?? defaultColors.warn),
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
      shadow: color(colors?.shadow ?? defaultColors.shadow)
    }
  }

  const common: Common = {
    primary: color(colors.primary),
    primaryContent: color(colors.primaryContent),
    accent: color(colors.accent),

    info: color(colors.info ?? defaultColors.info),
    warn: color(colors.warn ?? defaultColors.warn),
    success: color(colors.success ?? defaultColors.success),
    error: color(colors.error ?? defaultColors.error),

    brackets1: color(colors?.brackets?.[1] ?? defaultColors.brackets[1]),
    brackets2: color(colors?.brackets?.[2] ?? defaultColors.brackets[2]),
    brackets3: color(colors?.brackets?.[3] ?? defaultColors.brackets[3])
  }

  const git: Git = {
    added: color(colors?.success ?? defaultColors.success),
    modified: color(colors.info ?? defaultColors.info).alpha(0.7),
    deleted: color(colors.error ?? defaultColors.error).alpha(0.7),
    ignored: color(colors.ui.fg).alpha(0.5)
  }

  const terminal: Terminal = {
    ansiBlack: color(defaultColors.ansiBlack),
    ansiBrightBlack: color(defaultColors.ansiBrightBlack),
    ansiBlue: color(defaultColors.ansiBlue),
    ansiBrightBlue: color(defaultColors.ansiBrightBlue),
    ansiCyan: color(defaultColors.ansiCyan),
    ansiBrightCyan: color(defaultColors.ansiBrightCyan),
    ansiGreen: color(defaultColors.ansiGreen),
    ansiBrightGreen: color(defaultColors.ansiBrightGreen),
    ansiRed: color(defaultColors.ansiRed),
    ansiBrightRed: color(defaultColors.ansiBrightRed),
    ansiMagenta: color(defaultColors.ansiMagenta),
    ansiBrightMagenta: color(defaultColors.ansiBrightMagenta),
    ansiYellow: color(defaultColors.ansiYellow),
    ansiBrightYellow: color(defaultColors.ansiBrightYellow),
    ansiWhite: color(defaultColors.ansiWhite),
    ansiBrightWhite: color(defaultColors.ansiBrightWhite),
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
