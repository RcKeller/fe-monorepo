import React, { ElementType } from 'react'

export interface IButton {
  as: ElementType;
}

const Button = React.forwardRef<ElementType, IButton>(
  ({
  as = "button",
  ...props
}, ref) => {
  const ComponentElement = as ? as : "button"
  return (
    <ComponentElement ref={ref} {...props} />
  )
}
);

Button.displayName = "Button"

Button.defaultProps = {
  as: "button"
}

export { Button }
