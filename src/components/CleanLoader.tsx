import React from "react";
import { GhostLoader } from "./GhostLoader";
import { CleanLoaderProps } from "../types";

export const CleanLoader: React.FC<CleanLoaderProps> = ({
  children,
  waitFor,
  element,
  type = "blank",
  width = 100,
  height = 100,
  borderRadius = 8,
  style,
}) => {
  return (
    <>
      {!waitFor ? (
        element ? (
          <div style={{ ...style }}>{element}</div>
        ) : (
          <GhostLoader
            type={type}
            width={width}
            height={height}
            borderRadius={borderRadius}
            style={style}
          />
        )
      ) : (
        children
      )}
    </>
  );
};

export default CleanLoader;
