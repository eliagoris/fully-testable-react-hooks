import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      baseBackground: string
      base: string
      special: string
      link: string
    }
  }
}
