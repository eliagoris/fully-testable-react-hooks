import "@testing-library/jest-dom/extend-expect"
import React from "react"

import { render } from "../../utils/test-utils"
import Text from "./text"

test("expect small size when no size is passed", () => {
  const { getByTestId } = render(<Text>I'm a random text</Text>)

  getByTestId("text")
})
