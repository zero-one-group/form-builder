import { sentenceCase } from 'change-case';

import { getInOptionsProps, getValuesInDataProps } from '../helpers';
import { ZeroFieldItem, ZeroFormProps, ZeroFormTypes } from '../types';

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

      const getOption = () => {
        if (options) {
          const label = getInOptionsProps(options, name);
          return label;
        }
        return undefined;
      };

      return {
        type: 'text',
        ...getOption(),
        name,
        value,
        label: getOption()?.label ?? sentenceCase(name),
      };
    });
  };

  const getValues = () => getValuesInDataProps(data);

  return { fields: getFields(), values: getValues() };
}
