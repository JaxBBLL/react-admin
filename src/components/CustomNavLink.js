import React from "react";
import { withRouter } from "react-router-dom";

const CustomNavLink = props => {
  return React.createElement(
    props.tag,
    {
      style: { paddingLeft: 40 },
      onClick: () => props.history.push(props.to),
      className:
        props.location.pathname === props.to
          ? "ant-menu-item ant-menu-item-selected"
          : "ant-menu-item"
    },
    props.children
  );
};

export default withRouter(CustomNavLink);
