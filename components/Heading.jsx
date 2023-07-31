import React, { memo } from "react";
import classNames from "classnames";
import { useWindowDimensions } from "@/services/hooks";
import { defaultFont } from "@/styles/design-systems/variables/Variables.module.scss";

const Heading = memo(
  ({
    children,
    text,
    className,
    size = "h3",
    tabletSize,
    mobileSize,
    fontFamily = defaultFont,
    weight = "normal",
    backgroundColor,
    marginless,
    color,
    style = {},
    pointer,
    width,
    height,
    italic,
    fontSize,
    tabletFontSize,
    mobileFontSize,
    fontWeight,
    lineHeight,
    tabletLineHeight,
    mobileLineHeight,
    onClick,
    centered,
  }) => {
    const HeadingElement = size;
    const { isTabletDimension, isMobileDimension } = useWindowDimensions();

    const isTabletSize = (tabletSize || tabletFontSize) && isTabletDimension;
    const isMobileSize = (mobileSize || mobileFontSize) && isMobileDimension;

    const headingBreakpoint = isMobileSize
      ? mobileSize
      : isTabletSize
      ? tabletSize
      : size;
    const fontSizeBreakpoint = isMobileSize
      ? mobileFontSize
      : isTabletSize
      ? tabletFontSize
      : fontSize;

    const isTabletLineHeight = tabletLineHeight && isTabletDimension;
    const isMobileLineHeight = mobileLineHeight && isMobileDimension;

    const lineHeightBreakpoint = isMobileLineHeight
      ? mobileLineHeight
      : isTabletLineHeight
      ? tabletLineHeight
      : lineHeight;

    const styles = {
      backgroundColor,
      width,
      height,
      fontSize: fontSizeBreakpoint,
      lineHeight: lineHeightBreakpoint,
      fontWeight,
    };
    return (
      <HeadingElement
        className={classNames(
          className,
          marginless && "m-0",
          `font-${fontFamily}-${weight}`,
          `heading-${headingBreakpoint}`,
          color && `${color}`,
          pointer && "cursor-pointer",
          height && `line-height-${height}`,
          centered && "text-center",
          italic && "fst-italic"
        )}
        style={{ ...styles, ...style }}
        onClick={onClick}
      >
        {text}
        {children}
      </HeadingElement>
    );
  }
);

export default Heading;
