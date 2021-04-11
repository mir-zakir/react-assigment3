import React from "react";

const Link = ({ href, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.prevantDefault();

    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
