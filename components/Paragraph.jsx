import React, { forwardRef, memo } from 'react';
import classNames from 'classnames';
import { useWindowDimensions } from '@/services/hooks';
import { Span } from '@/components';
import { defaultFont } from "@/styles/design-systems/variables/Variables.module.scss";

const Paragraph = memo(
  forwardRef(
    (
      {
        children,
        text,
        textOptional,
        className,
        elementType = 'p',
        size = "p16",
        tabletSize,
        mobileSize,
        fontFamily = defaultFont,
        weight = "normal",
        wrap,
        backgroundColor,
        marginless,
        color,
        style,
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
        forField,
        elementRef,
        title,
      },
      ref
    ) => {
      const { isTabletDimension, isMobileDimension } = useWindowDimensions();

      const isTabletSize = (tabletSize || tabletFontSize) && isTabletDimension;
      const isMobileSize = (mobileSize || mobileFontSize) && isMobileDimension;

      const paragraphBreakpoint = isMobileSize ? mobileSize : isTabletSize ? tabletSize : size;
      const fontSizeBreakpoint = isMobileSize ? mobileFontSize : isTabletSize ? tabletFontSize : fontSize;

      const isTabletLineHeight = tabletLineHeight && isTabletDimension;
      const isMobileLineHeight = mobileLineHeight && isMobileDimension;

      const lineHeightBreakpoint = isMobileLineHeight ? mobileLineHeight : isTabletLineHeight ? tabletLineHeight : lineHeight;

      const styles = {
        backgroundColor,
        width,
        height,
        fontSize: fontSizeBreakpoint,
        lineHeight: lineHeightBreakpoint,
        fontWeight
      };

      const Element = elementType;
      return (
        <Element
          ref={elementRef}
          className={classNames(
            className,
            marginless && 'm-0',
            `font-${fontFamily}-${weight}`,
            `paragraph-${paragraphBreakpoint}`,
            color && `${color}`,
            wrap && 'text-wrap',
            pointer && 'cursor-pointer',
            lineHeight && `line-height-${lineHeight}`,
            centered && 'text-center',
            italic && 'fst-italic'
          )}
          style={{ ...styles, ...style }}
          onClick={onClick}
          htmlFor={Element === 'label' ? forField : ''}
          title={title}
        >
          {text}
          {textOptional && (
            <Span color='paw-80' className='ps-1'>
              {textOptional}
            </Span>
          )}
          {children}
        </Element>
      );
    }
  )
);

export default Paragraph;
