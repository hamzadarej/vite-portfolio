import { FC, ReactNode } from "react";
import { cn } from "../utility/cn";

const WaveBox: FC<{ children: ReactNode; extraClass?: string }> = ({
  children,
  extraClass = "waveRunOne",
}) => (
  <>
    <div className={cn("waveBox absolute inset-0 w-full h-full", extraClass)}>
      <span />
      <span />
      <span />
      <span />
    </div>
    {children}
    <div
      className={cn(
        "waveBox rotate-180 absolute inset-0 w-full h-full",
        extraClass,
      )}
    >
      <span />
      <span />
      <span />
      <span />
    </div>
  </>
);

export default WaveBox;
