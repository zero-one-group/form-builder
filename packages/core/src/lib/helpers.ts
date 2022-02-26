import { ZeroFormOptions, ZeroFormTypes } from '../types/common';

/**
 *
 * @param options {@link ZeroFormOptions}
 * @param name string
 * @returns
 */
export function findLabelInOptions(options: ZeroFormOptions, name: string) {
  if (!options) return undefined;
  const findIndex = (Object.keys(options) ?? []).findIndex(
    (val) => val === name
  );
  if (findIndex >= -1) {
    return (Object.values(options) ?? [])[findIndex];
  }
  return undefined;
}

/**
 *
 * @param data {@link ZeroFormTypes}
 *
 * @returns
 */
export function findValuesInData(data: ZeroFormTypes): ZeroFormTypes {
  const transform = Object.keys(data).map((val, i) => {
    const values = Object.values(data);
    const name = val;
    const value = values[i];
    return { [name]: value };
  });
  return Object.assign({}, ...transform);
}
