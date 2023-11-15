import React, { useEffect, useRef } from "react";

export const OutsideClickCloseContainer = ({
  setState,
  children,
  OutsideClickFunction,
}) => {
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = (e) => {
    if (!dropdownRef.current?.contains(e.target)) {
      setState && setState(false);
      OutsideClickFunction && OutsideClickFunction();
    }
  };

  return <div ref={dropdownRef}>{children}</div>;
};
