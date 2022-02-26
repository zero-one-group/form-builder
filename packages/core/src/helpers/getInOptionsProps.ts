import { ZeroFormOptions } from '../types/common';

/**
 * Get an option from options in props
 *
 * @param options {@link ZeroFormOptions}
 * @param name string
 * @returns
 */
export function getInOptionsProps(options: ZeroFormOptions, name: string) {
  if (!options) return undefined;
  const findIndex = (Object.keys(options) ?? []).findIndex(
    (val) => val === name
  );
  if (findIndex >= -1) {
    return (Object.values(options) ?? [])[findIndex];
  }
  return undefined;
}
