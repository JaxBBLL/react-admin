import React from "react";
import { withRouter } from "react-router-dom";

const CustomNavLink = props => {
  const { tag = "a", activeClassName, className, style } = props;
  return React.createElement(
    tag,
    {
      className:
        props.location.pathname === props.to ? activeClassName : className,
      style,
      onClick: () => props.history.push(props.to)
    },
    props.children
  );
};

export default withRouter(CustomNavLink);
