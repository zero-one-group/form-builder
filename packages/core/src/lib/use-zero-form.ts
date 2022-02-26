import { sentenceCase } from 'change-case';

import { ZeroFieldItem, ZeroFormProps, ZeroFormTypes } from '../types';
import { findLabelInOptions, findValuesInData } from './helpers';

export interface UseZeroFormReturn {
  fields: ZeroFieldItem[];
  values: ZeroFormTypes;
}

/**
 * React hook that will return a useful Object to handle your form
 *
 * @param props {@link ZeroFormProps}
 * @returns
 */
export function useZeroForm(props: ZeroFormProps): UseZeroFormReturn {
  const { data, options = {} } = props;

  const getFields = (): ZeroFieldItem[] => {
    return Object.keys(data).map((val, i) => {
      const values = Object.values(data);
      const name = val;
      const value = values[i];

      const findLabel = () => {
        if (options) {
          const label = findLabelInOptions(options, name);
          return label;
        }
        return undefined;
      };

      return {
        type: 'text',
        ...findLabel(),
        name,
        value,
        label: findLabel()?.label ?? sentenceCase(name),
      };
    }) as ZeroFieldItem[];
  };

  const getValues = () => findValuesInData(data);

  return { fields: getFields(), values: getValues() };
}
