import { forwardRef, memo, useState } from "react";
import { Form } from "react-bootstrap";
import classNames from "classnames";
import { Div, Label, Tooltip } from "@/components";
import {
  defaultFont,
  dangerColor,
  successColor,
  inputColor,
  inputBorderColor,
} from "@/styles/design-systems/variables/Variables.module.scss";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { MdInfoOutline } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";

const Input = forwardRef(
  (
    {
      as = "input",
      type = "text",
      inputMode,
      rows,
      name,

      isRequired,
      requiredText = "*",

      fontFamily = defaultFont,

      height,

      label,
      labelSize = "l16",
      labelWeight = "bold",

      backgroundColor = "pr-00",
      color = inputColor,
      borderColor = inputBorderColor,
      errorColor = dangerColor,

      value,
      inputSize = "p16",
      inputWeight = "normal",

      radius = 4,

      className = "",
      inputClassName = "",

      onChange,
      onKeyUp,
      onKeyDown,
      onFocus,
      onBlur,

      isError,
      hideErrorIcon,
      errorHint,

      isValid,
      hideValidIcon,

      customInlineLeftIcon,
      customInlineRightIcon,

      disabled,

      id,
      placeholder,

      maxLength,
      showMaxLetter,

      tooltipText,

      children,
    },
    ref
  ) => {
    const [inputType, setInputType] = useState(type);

    return (
      <Form.Group className={className}>
        <Div className="x-input-component" height={height}>
          <Div flex alignCenter gap={1} className="x-label">
            {label && (
              <Label size={labelSize} weight={labelWeight} text={label} />
            )}

            {isRequired && (
              <Label
                color={dangerColor}
                size={labelSize}
                text={requiredText}
              />
            )}

            {tooltipText && (
              <Tooltip text={tooltipText}>
                <MdInfoOutline size={20} className="pb-1" />
              </Tooltip>
            )}
          </Div>

          <Div relative>
            <Form.Control
              as={as}
              name={name}
              type={inputType}
              rows={rows}
              id={id}
              ref={ref}
              inputMode={inputMode}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
              maxLength={maxLength}
              onChange={onChange}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
              onBlur={onBlur}
              className={classNames(
                "x-input",
                `paragraph-${inputSize}`,
                as === "select" && "cursor-pointer",
                `font-${fontFamily}-${inputWeight}`,
                `corner-radius-${radius}`,
                `bg-${!disabled ? backgroundColor : "pr-75"}`,
                `border-${!disabled ? borderColor : "none"}`,
                isError && !disabled && `border-${dangerColor}`,
                isValid && !disabled && `border-${successColor}`,
                inputClassName,

                // conditional for padding right icon
                `x-pe-${
                  [
                    type === "password",
                    (!!isError && !hideErrorIcon) ||
                      (!!isValid && !hideValidIcon),
                    !!customInlineRightIcon,
                  ].filter((con) => con).length
                }`,

                // conditional for padding left icon
                !!customInlineLeftIcon && "x-ps-1"
              )}
              style={{
                color: `var(--${
                  disabled ? "pr-300" : isError ? errorColor : color
                })`,
              }}
            >
              {children}
            </Form.Control>

            {as === "select" && (
              <Div absolute className="end-0 top-0 h-100 px-1 py-2">
                <Div flex center gap={1} className="px-1 h-100">
                  <BiChevronDown size={24} />
                </Div>
              </Div>
            )}

            {customInlineLeftIcon && (
              <Div absolute className="start-0 top-0 h-100 p-2">
                <Div
                  flex
                  center
                  gap={1}
                  className={classNames(
                    "px-1 h-100",
                    !!isError && dangerColor,
                    !!isValid && successColor
                  )}
                >
                  {customInlineLeftIcon}
                </Div>
              </Div>
            )}

            {(type === "password" ||
              !!isError ||
              !!isValid ||
              !!customInlineRightIcon) && (
              <Div absolute className="end-0 top-0 h-100 px-1 py-2">
                <Div
                  flex
                  center
                  gap={1}
                  className={classNames(
                    "px-1 h-100",
                    !!isError && dangerColor,
                    !!isValid && successColor
                  )}
                >
                  {type === "password" && (
                    <>
                      {inputType !== "text" ? (
                        <AiFillEye
                          className="cursor-pointer"
                          onClick={() => setInputType("text")}
                        />
                      ) : (
                        <AiFillEyeInvisible
                          className="cursor-pointer"
                          onClick={() => setInputType("password")}
                        />
                      )}
                    </>
                  )}
                  {!!isError && !hideErrorIcon && (
                    <HiOutlineExclamationCircle />
                  )}
                  {!!isValid && !hideValidIcon && <HiOutlineCheckCircle />}

                  {customInlineRightIcon}
                </Div>
              </Div>
            )}
          </Div>

          <Div flex between>
            {isError && errorHint && (
              <Label
                className="x-error-hint"
                size={labelSize}
                color={errorColor}
                text={errorHint}
              />
            )}

            {showMaxLetter && (
              <Label
                size="p14"
                weight="normal"
                marginless
                className={classNames("text-end", !isError && "w-100")}
                text={`${value?.length || 0}/${maxLength}`}
              />
            )}
          </Div>
        </Div>
      </Form.Group>
    );
  }
);

export default memo(Input);
