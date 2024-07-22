import createTemplate from '../createTemplate.js'
import { type ColorScheme } from '../types.js'

const colors: ColorScheme = {
  editor: {
    bg: '#242936',
    fg: '#dcdfeb'
  },
  ui: {
    bg: '#1f2430',
    fg: '#6c739a'
  },

  cursor: '#FF00E4',
  gutter: '#495162',

  border: '#171b24',

  primary: '#aeaaff',
  primaryContent: '#fff',
  accent: '#6C51E2',

  // Misc colors
  success: '#99cc99',
  info: '#79B6FF',
  warn: '#E0B494',
  error: '#E04A7E',

  keyword: '#ad72f3',
  variables: '#ee6584',
  string: '#cae790',
  func: {
    name: '#79b9ee',
    param: '#e0bdf2',
    lambda: '#ad72f3',
    call: '#ffd173'
  },

  const: '#f5dd87',
  macros: '#f29e74',
  punctuation: '#9899c5',
  comment: '#546E7A',
  class: '#FFCB6B',
  numeric: '#c9adff',
  regexp: '#95e6cb',

  shadow: '#00000050',

  brackets: {
    1: '#f3a84d',
    2: '#e68aff',
    3: '#49d9e8'
  }
}

const template = createTemplate(colors)

export default template
