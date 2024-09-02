import React from "react";

export const ImageIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      width: Math.min(width * 0.5, 50),
      height: Math.min(height * 0.5, 50),
      color: "#ccc",
    }}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

export const VideoIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      width: Math.min(width * 0.5, 50),
      height: Math.min(height * 0.5, 50),
      color: "#ccc",
    }}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
