import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export const ModalOuter = ({
  state,
  setState,
  children,
}) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const modalRef = useRef();
  const handleClickInside = () => {
    setClickedOutside(false);
  }

  useEffect(() => {
    if (clickedOutside) {
      setState(false);
    }
  }, [clickedOutside, setState]);



  return (
    <>
      {state ? (
        <>
          <div
            ref={modalRef}
            className="randomClass"
            onClick={handleClickInside}
          >
            {children}
          </div>
        </>
      ) : null
      }
    </>
  );
};
