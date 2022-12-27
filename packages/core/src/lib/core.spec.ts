import { renderHook } from '@testing-library/react';
import { useZeroForm, ZeroFormOptions } from './core';

const DATA = { name: 'YOUR NAME' };

describe('core', () => {
  it('should return name with default type is text', () => {
    const { result } = renderHook(() => useZeroForm({ data: DATA }));
    const expectedResult = {
      type: 'text',
      label: 'Name',
      name: 'name',
      value: 'YOUR NAME',
    };

    expect(result.current.fields[0].type).toBe(expectedResult.type);
    expect(result.current.fields[0].label).toBe(expectedResult.label);
    expect(result.current.fields[0].name).toBe(expectedResult.name);
    expect(result.current.fields[0].value).toBe(expectedResult.value);

    expect(result.current.values['name']).toBe(expectedResult.value);
  });

  it('should return name with custom options', () => {
    const options: ZeroFormOptions = {
      name: {
        type: 'select',
        label: 'Your name is',
        selectOptions: [{ label: 'satu', value: 1 }],
      },
    };
    const { result } = renderHook(() => useZeroForm({ options, data: DATA }));
    const expectedResult = {
      type: 'select',
      label: 'Your name is',
      name: 'name',
      value: 'YOUR NAME',
      selectOptions: [{ label: 'satu', value: 1 }],
    };
    expect(result.current.fields[0].type).toBe(expectedResult.type);
    expect(result.current.fields[0].label).toBe(expectedResult.label);
    expect(result.current.fields[0].name).toBe(expectedResult.name);
    expect(result.current.fields[0].value).toBe(expectedResult.value);
    expect(JSON.stringify(result.current.fields[0].selectOptions)).toBe(
      JSON.stringify(expectedResult.selectOptions)
    );

    expect(result.current.values['name']).toBe(expectedResult.value);
  });
});
