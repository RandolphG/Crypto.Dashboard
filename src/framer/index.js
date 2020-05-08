import React, { useState } from "react";
import { Frame, useCycle } from "framer";

export function FramerBtn() {
  const [onHover, onHoverSet] = useState(false);

  const [animate, cycle] = useCycle(
    { scale: 1.2, background: "#85F" },
    { scale: 1.0 }
  );

  const transition = {
    duration: 1,
    yoyo: Infinity,
  };

  /**
   * click handler
   */
  const onClick = () => {
    onHoverSet(!onHover);
    console.log("onClick");
  };

  return (
    <Frame
      top={50}
      right={12}
      onTap={() => cycle()}
      border="#fff 2px"
      width={100}
      background="#FF4"
      height={25}
      radius={3}
      color={"000"}
      center
      onClick={onClick}
    >
      DASHBOARD
    </Frame>
  );
}
