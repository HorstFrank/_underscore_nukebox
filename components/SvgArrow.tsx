import styles from "../styles/SvgArrow.module.css";

type SVGArrow = {
  height?: number;
  width?: number;
  color?: string;
  strokeWidth?: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  rotate?: number;
};

export function SvgArrow(prop: SVGArrow) {
  const length = prop.height || 500;
  const width = prop.width || 300;
  const color = prop.color || "red";
  const strokeWidth = prop.strokeWidth || 10;
  const strokeLinecap = prop.strokeLinecap || "round";
  const rotate = prop.rotate || 0;

  return (
    <svg
      className={styles.svgcontainer}
      style={{ transform: `rotate(${rotate}deg)` }}
      width={width}
      height={+length + +strokeWidth}
    >
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        x1={width / 2}
        y1={strokeWidth / 2} /* shift down depend by strokeWidth () */
        x2={width / 2}
        y2={length}
      />
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        // x1={width / 2 - 20}
        x1={0 + strokeWidth / 2}
        y1={length - width / 2}
        x2={width / 2}
        y2={length}
      />
      <line
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        x1={width - strokeWidth / 2}
        y1={length - width / 2}
        x2={width / 2}
        y2={length}
      />
    </svg>
  );
}
