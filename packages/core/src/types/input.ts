import {
  DetailedHTMLFactory,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react';

export type InputPropsTypes = HTMLInputTypeAttribute;
export type ZeroFieldTypes = HTMLInputTypeAttribute;
export type ZeroInputElement = DetailedHTMLFactory<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
