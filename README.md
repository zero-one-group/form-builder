
# @01group/form-builder

This is a lightweight react hook library to simplify approach in building formik form.

## Story behind
In our cases, we often found our development process was couples doing process in order to building form.

We find a better approach to make this more efficiency.

## Installation
```bash
yarn add @01group/form-builder
```

or if you prefer to choose `npm`

```bash
npm install -S @01group/form-builder
```

## Usage
This main library is using a react hook `useZeroForm`. It will return `fields` and `values`.


### Description
**fields**: list of object field that useful to handle form

**values**: object of value, it could be to fill `initialValues` in `formik`


### Example
**Nb.** Below is our approach. You might used your own, if you think this not suit enough for you.

```typescript
import { Formik, Form } from 'formik'
import { useZeroForm, ZeroFormTypes } from '@01group/form-builder';

export const DATA = {
  name: '',
  province_id: '',
  city_id: '',
  date_of_birth: '',
};

export const generalOptions = {
  name: {
    type: 'text',
    label: 'Your name',
    isRequired: true,
  },
  province_id: {
    type: 'select',
    label: 'Province',
    placeholder: 'Select a province',
  },
  city_id: {
    type: 'select',
    label: 'City',
    placeholder: 'Select a city',
  },
};

export function Example() {
  const { fields, values } = useZeroForm({ data: DATA as ZeroFormTypes, options: generalOptions });

  return (
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <Form>
        {(fields ?? []).map((field, i) => (
          <GenerateField key={i} isReadonly={isReadonly} {...field} />
        ))}
      </Form>
    </Formik>
  )
}

export function GenerateField(props: ZeroFieldItem) {
  const inputProps = {
    id: props.name,
    name: props.name,
    label: props.label,
    placeholder: props.placeholder,
    isRequired: props.isRequired,
    isReadOnly: props.isReadonly,
  };
  const selectProps = {
    ...inputProps,
    items: props.selectOptions ?? [],
  };

  const elements: Partial<Record<Partial<ZeroFieldTypes>, JSX.Element>> = {
    select: <Select {...selectProps} />,
    text: <TextField {...inputProps} />,
    row: <Textarea {...inputProps} />,
    file: <Dropzone width="full" {...inputProps} />,
  };

  return elements[props.type] ?? <TextField {...inputProps} />;
}
```
