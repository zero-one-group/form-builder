import { ZeroFieldTypes } from './input';

export type ZeroSelectItem = {
  label: string;
  value: string | number;
};

export type ZeroCheckboxItem = {
  name: string;
  value: string | number;
};

export interface ZeroOptions {
  type: ZeroFieldTypes;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  // list option of select
  selectOptions?: ZeroSelectItem[];
  isReadonly?: boolean;
  isLoading?: boolean;
  onChange?: (value: string) => void;
  checkboxes?: ZeroCheckboxItem[];
  // set accepted file types.
  accept?: string | string[];
  // whether allow to upload multiple files or not
  multiple?: boolean;
  // meta options. for another wider purposes
  meta?: ZeroMetaOptions;
}

export interface ZeroFieldItem extends ZeroOptions {
  name: string;
  value?: string;
}

export interface ZeroMetaOptions {
  [key: string]: string | boolean | number | string[] | boolean[] | number[];
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
