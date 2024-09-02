import React from "react";
import "../styles/animations.css";
import { ImageIcon, VideoIcon } from "./SvgIcons";

export const GhostLoader = ({
  type,
  width,
  height,
  borderRadius,
  style,
}: {
  type: "blank" | "image" | "video";
  width: number;
  height: number;
  borderRadius: number;
  style?: React.CSSProperties;
}) => {
  let svgContent: JSX.Element | null = null;

  if (type === "image") {
    svgContent = <ImageIcon width={width} height={height} />;
  } else if (type === "video") {
    svgContent = <VideoIcon width={width} height={height} />;
  }

  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: "pulse 1.5s ease-in-out infinite",
        ...style,
      }}
    >
      {svgContent}
    </div>
  );
};
