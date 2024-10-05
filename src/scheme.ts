import color from 'chroma-js'
import type {
  Editor,
  Syntax,
  Terminal,
  UserInterface,
  ColorScheme,
  Git,
  Common,
  FullTheme
} from './types.js'
import { defaultColors } from './constants.js'

interface CreateSchemeFromColorsOptions {
  colors: ColorScheme
  type?: 'dark' | 'light'
}

export function createSchemeFromColors({
  colors,
  type = 'dark'
}: CreateSchemeFromColorsOptions): FullTheme {
  const syntax: Syntax = {
    keyword: color(colors.syntax.keyword),

    func: {
      name: color(colors.syntax?.func?.name ?? defaultColors.func.name),
      param: color(colors.syntax?.func?.param ?? colors.syntax.variables)
    },

    class: {
      name: color(colors.syntax.class)
    },

    langs: {
      html: {
        tag: color(colors.syntax.punctuation),
        tagName: color(colors.misc ?? colors.syntax.variables),
        attributes: color(
          colors.syntax.macros ?? colors.syntax.const ?? colors.syntax.variables
        )
          .luminance(0.35)
          .brighten(0.3)
      },
      css: {
        class: color(colors.syntax.class),
        id: color(colors.syntax.regexp ?? colors.syntax.string),
        pseudo: color(colors.syntax.punctuation),
        properties: color(
          colors.syntax?.func?.name ?? defaultColors.func.name
        ).brighten(0.75),
        units: color(colors.syntax.numeric)
      },
      markup: {
        heading: color(colors.syntax.variables),
        punctuation: color(
          colors.syntax.macros ?? colors.syntax.const ?? colors.syntax.variables
        )
      }
    },

    punctuation: color(colors.syntax.punctuation),
    comment: color(colors.syntax.comment ?? defaultColors.comment),
    string: color(colors.syntax.string),
    numeric: color(colors.syntax.numeric),
    operator: color(colors.info ?? defaultColors.info),

    variables: color(colors.syntax.variables),
    constant: color(colors.syntax.const ?? colors.syntax.variables),
    macros: color(
      colors.syntax.macros ?? colors.syntax.const ?? colors.syntax.variables
    ),

    regexp: color(colors.syntax.regexp ?? colors.syntax.string),
    special: color(colors.warn ?? defaultColors.warn),
    misc: color(colors.misc ?? colors.accent)
  }

  const editor: Editor = {
    bg: color(colors.editor.bg),
    fg: color(colors.editor.fg),
    cursor: color(colors.editor.cursor),
    selection: {
      active: color(colors.primary).alpha(0.25),
      inactive: color(colors.primary).alpha(0.15)
    },
    findMatch: {
      active: color(colors.primary).brighten(0.45).alpha(0.45),
      inactive: color(colors.primary).alpha(0.25)
    },
    lineNumber: {
      active: color(colors.editor.lineNumber ?? defaultColors.lineNumber),
      normal: color(colors.editor.lineNumber ?? defaultColors.lineNumber).alpha(
        0.4
      )
    },
    indentGuide: {
      active: color(colors.accent).alpha(0.6),
      normal: color(colors.accent).alpha(0.1)
    }
  }

  const ui: UserInterface = {
    fg: color(colors.ui.fg),
    bg: color(colors.ui.bg),
    border: color(colors.ui.border),
    borderActive: color(colors.accent),
    selection: {
      active: color(colors.primary).alpha(0.4),
      hover: color(colors.primary).alpha(0.1),
      normal: color(colors.primary).alpha(0.3)
    },
    panel: {
      bg: color(colors.editor.bg),
      shadow: color(colors.ui?.shadow ?? defaultColors.shadow)
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

    brackets1: color(colors.syntax?.brackets?.[1] ?? defaultColors.brackets[1]),
    brackets2: color(colors.syntax?.brackets?.[2] ?? defaultColors.brackets[2]),
    brackets3: color(colors.syntax?.brackets?.[3] ?? defaultColors.brackets[3])
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
    border: color(colors.ui.border),
    foreground: color(colors.editor.fg).darken(0.3),
    selectionBackground: color(colors.primary).darken(0.5).alpha(0.6)
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
