import React, { Fragment, memo, useRef } from 'react';
import classNames from 'classnames';
import { Button, Form } from 'react-bootstrap';
import { Div, Span } from '@/components';

const ButtonComponent = ({
  children,
  border,
  variant = 'primary',
  height,
  width,
  text,
  as,
  accept,
  className,
  textWrapClassName,
  textClassName,
  borderless,
  onClick,
  onChange,
  disabled,
  gap,
  backgroundColor,
  size = 'p16',
  weight = 'bold',
  color,
  type,
  reactIconLeft,
  reactIconLeftColor,
  reactIconLeftSize,
  reactIconLeftClassName,
  reactIconRight,
  reactIconRightColor,
  reactIconRightSize,
  reactIconRightClassName,

  // Amoeba Icons
  amoebaIconLeft: AmoebaIconLeft,
  amoebaIconLeftColor,
  amoebaIconLeftSize,
  amoebaIconLeftClassName,
  amoebaIconRight: AmoebaIconRight,
  amoebaIconRightColor,
  amoebaIconRightSize,
  amoebaIconRightClassName,
}) => {
  const IconLeft = reactIconLeft;
  const IconRight = reactIconRight;
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <Fragment>
      <Button
        variant={variant || 'primary'}
        onClick={as === 'file' ? handleClick : onClick}
        disabled={disabled}
        type={type}
        className={classNames(
          backgroundColor && `bg-${backgroundColor}`,
          borderless && 'border-none',
          className
        )}
        style={{
          width: width,
          height: height,
          border: border,
        }}
      >
        <Div
          gap={gap}
          flex center
          className={textWrapClassName}
        >
          {reactIconLeft && (
            <IconLeft
              size={reactIconLeftSize || 24}
              className={reactIconLeftClassName}
              color={
                (reactIconLeftColor && `var(--${reactIconLeftColor})`) ||
                (color && `var(--${color})`)
              }
            />
          )}

          {AmoebaIconLeft && (
            <AmoebaIconLeft
              width={amoebaIconLeftSize || 24}
              height={amoebaIconLeftSize || 24}
              iconClassName={amoebaIconLeftClassName}
              stroke={amoebaIconLeftColor}
            />
          )}

          <Span
            color={color}
            weight={weight}
            size={size}
            className={textClassName}
          >
            {text || children}
          </Span>

          {reactIconRight && (
            <IconRight
              size={reactIconRightSize || 24}
              className={reactIconRightClassName}
              color={
                (reactIconRightColor && `var(--${reactIconRightColor})`) ||
                (color && `var(--${color})`)
              }
            />
          )}

          {AmoebaIconRight && (
            <AmoebaIconRight
              width={amoebaIconRightSize || 24}
              height={amoebaIconRightSize || 24}
              iconClassName={amoebaIconRightClassName}
              stroke={amoebaIconRightColor}
            />
          )}
        </Div>
      </Button>
      {as === 'file' && (
        <Form.Control
          type='file'
          accept={accept}
          ref={hiddenFileInput}
          onChange={onChange}
          className='display-none'
        />
      )}
    </Fragment>
  );
};

export default memo(ButtonComponent);
