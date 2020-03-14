import "styled-components"

interface TypoSetting {
  size: string
  line_height: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      baseBackground: string
      base: string
      special: string
      link: string
    }
    settings: {
      small: TypoSetting
      medium: TypoSetting
      large: TypoSetting
      [key: string]: TypoSetting
      desktop_breakpoint: string
    }
  }
}
