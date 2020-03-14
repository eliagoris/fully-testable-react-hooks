import React from "react"
import styled from "styled-components"

type Size = "small" | "medium" | "large"

interface Props {
  size?: Size
  className?: string
  children?: React.ReactNode
}

const StyledText = styled.p<{ selectedSize: Size }>(
  ({ theme, selectedSize }) => {
    const {
      settings: {
        [selectedSize]: { size, line_height }
      },
      color: { special }
    } = theme

    return `
      margin: 0;
      font-size: ${size};
      line-height: ${line_height};
      color: ${selectedSize === "large" ? special : "inherit"}
  `
  }
)

/**
 * Component responsible for rendering default text attributes and styles according to props
 */
const Text: React.FC<Props> = ({ size = "small", children, className }) => (
  <StyledText selectedSize={size} className={className} data-testid="text">
    {children}
  </StyledText>
)

export default Text
