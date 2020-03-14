import { render, RenderResult } from "@testing-library/react"
import React from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "../styles/theme"

const AllTheProviders: React.FunctionComponent = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender: (ui: any, options?: any) => RenderResult = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
