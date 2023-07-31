import { forwardRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Label } from "@/components";

const TooltipOverlay = forwardRef(
  (
    {
      children,
      text,
      placement = "right",
      showInterval = 150,
      hideInterval = 350,
    },
    ref
  ) => {
    const renderTooltip = (props) => (
      <Tooltip className="x-tooltip-component" {...props}>
        <Label size="l14" color="pr-500" text={text} />
      </Tooltip>
    );

    return (
      <OverlayTrigger
        placement={placement}
        delay={{ show: showInterval, hide: hideInterval }}
        overlay={renderTooltip}
      >
        <div ref={ref}>{children}</div>
      </OverlayTrigger>
    );
  }
);

export default TooltipOverlay;
