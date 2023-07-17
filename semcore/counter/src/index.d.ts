import { UnknownProperties, Intergalactic } from '@semcore/core';
import { BoxProps } from '@semcore/flex-box';

/** @deprecated */
export interface ICounterProps extends CounterProps, UnknownProperties {}
export type CounterProps = BoxProps & {
  /** Counter theme or custom color */
  theme?: 'warning' | 'danger' | string;

  /** Counter size
   * @default m */
  size?: 'm' | 'l' | 'xl';
};

declare const Counter: Intergalactic.Component<'div', CounterProps>;

/** @deprecated */
export interface IAnimatedNumberBaseProps extends AnimatedNumberBaseProps, UnknownProperties {}
export type AnimatedNumberBaseProps = {
  /** Animates number change, receives value between 0 and 1 and returns value in range from 0 to 1, e.g. for linear easing pass (t) => t */
  easing?: (t: number) => number;
  /** Stringify number, receives a fraction value */
  formatValue?: (value: number) => string;
  duration?: number;
  delay?: number;
  initValue?: number;
  value: number;
};

export declare const AnimatedNumber: Intergalactic.Component<'div', AnimatedNumberBaseProps>;

export default Counter;
