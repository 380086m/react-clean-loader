export interface CleanLoaderProps {
  children: React.ReactNode;
  waitFor: any;
  element?: JSX.Element;
  type?: "blank" | "image" | "video";
  width?: number;
  height?: number;
  borderRadius?: number;
  style?: CSSProperties;
}
