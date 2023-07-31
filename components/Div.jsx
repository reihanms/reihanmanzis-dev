import classNames from 'classnames';
import React, { forwardRef, memo } from 'react';

const Div = memo(
  forwardRef(
    (
      {
        id,
        children,
        className,
        backgroundColor,
        radius = 0,
        color,
        style,
        flex,
        column,
        fixed,
        absolute,
        relative,
        zIndex,
        alignCenter,
        alignStart,
        alignBaseline,
        alignEnd,
        alignStretch,
        justifyCenter,
        justifyStart,
        justifyEnd,
        center,
        between,
        centerBetween,
        gap,
        pointer,
        width,
        height,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        onClick,
        onMouseOver,
        onMouseOut,
        tabIndex,
        title,
        setInnerHTML,

        top,
        bottom,
        left,
        right
      },
      ref
    ) => {
      const isBgVarExist = backgroundColor && ['#', 'rgb', 'rgba'].some((el) => backgroundColor.includes(el));

      const dangerouslySetInnerHTML = !!setInnerHTML ? { __html: setInnerHTML } : null;

      return (
        <div
          id={id}
          ref={ref}
          tabIndex={tabIndex}
          title={title}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className={classNames(
            className,
            radius && `corner-radius-${radius}`,
            flex && 'd-flex',
            column && 'flex-column',
            fixed && `position-fixed`,
            absolute && `position-absolute`,
            relative && `position-relative`,
            center && 'justify-content-center align-items-center',
            between && 'justify-content-between',
            centerBetween && 'justify-content-between align-items-center',
            justifyCenter && 'justify-content-center',
            justifyStart && 'justify-content-start',
            backgroundColor && !isBgVarExist && `bg-${backgroundColor}`,
            color,
            justifyEnd && 'justify-content-end',
            alignStart && 'align-items-start',
            alignEnd && 'align-items-end',
            alignBaseline && 'align-items-baseline',
            alignCenter && 'align-items-center',
            alignStretch && 'align-items-stretch',
            pointer && 'cursor-pointer',
            gap && `gap-${gap}`
          )}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          style={{
            ...style,
            width,
            height,
            minWidth,
            minHeight,
            maxWidth,
            maxHeight,
            zIndex,
            backgroundColor: isBgVarExist ? backgroundColor : null,

            top,
            bottom,
            left,
            right
          }}
        >
          {children}
        </div>
      );
    }
  )
);

export default Div;
