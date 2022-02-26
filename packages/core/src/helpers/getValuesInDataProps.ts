import { ZeroFormTypes } from '../types/common';

/**
 * Get a value in data of props
 *
 * @param data {@link ZeroFormTypes}
 *
 * @returns
 */
export function getValuesInDataProps(data: ZeroFormTypes): ZeroFormTypes {
  const transform = Object.keys(data).map((val, i) => {
    const values = Object.values(data);
    const name = val;
    const value = values[i];
    return { [name]: value };
  });
  return Object.assign({}, ...transform);
}
