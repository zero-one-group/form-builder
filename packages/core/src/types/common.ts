import { InputPropsTypes, ZeroFieldTypes } from './input';

export type ZeroSelectItem = {
  label: string;
  value: string | number;
};

export type ZeroCheckboxItem = {
  name: string;
  value: string | number;
};

export interface ZeroOptions {
  type: InputPropsTypes;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  selectOptions?: ZeroSelectItem[];
  isReadonly?: boolean;
  checkboxes?: ZeroCheckboxItem[];
}

export interface ZeroFieldItem extends ZeroOptions {
  name: string;
  value?: string;
}

export interface ZeroFormTypes {
  [key: string]: string;
}

export interface ZeroFormSelectOptions {
  [key: string]: ZeroSelectItem[];
}

export interface ZeroFormOptions {
  [key: string]: ZeroOptions;
}

export interface ZeroFormProps {
  data: ZeroFormTypes;
  options?: ZeroFormOptions;
}
