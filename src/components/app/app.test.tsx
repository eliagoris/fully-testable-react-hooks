import React from "react"
import ReactDOM from "react-dom"

import { App } from "./app"

describe("App", function() {
  it("Should render without crashing", function() {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
