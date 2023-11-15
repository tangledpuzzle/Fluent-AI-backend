import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
  width: 1500px;
  height: 95vh;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: 0px 12px 36px #efe0f5;
  /* background-image: url("your-image-url"); */
  .custom-drawer-class {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

function DrawerComponent({ anchor, children, triggerDrawer }) {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  useEffect(() => {
    setToggleDrawer(triggerDrawer);
  }, [triggerDrawer]);

  return (
    <div>
      <StyledDrawer
        anchor={anchor}
        open={toggleDrawer}
        classes={{ paper: "custom-drawer-class" }}
        onClose={() => setToggleDrawer(false)}
      >
        {children}
      </StyledDrawer>
    </div>
  );
}

export default DrawerComponent;
