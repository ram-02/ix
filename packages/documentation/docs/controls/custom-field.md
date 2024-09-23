import Playground from '@site/src/components/PlaygroundV2';
import Props from '@site/docs/auto-generated/ix-custom-field/props.md';
import Events from '@site/docs/auto-generated/ix-custom-field/events.md';
import Tags from '@site/docs/auto-generated/ix-custom-field/tags.md';

# Custom Field

<Tags />

With the help of `ix-custom-field` you are able to create form fields that can host any component / markup, while still having access to all validation states as well as ascociated explanatory texts like `helper-text`, `valid-text`, `info-text`, `warning-text` or `invalid-text`.
The component will check if any of its children has one of these classes set:
`ix-valid, ix-info, ix-warning or ix-invalid`
If this is the case the custom field will display the corresponding text.

Custom fields can be used to migrate from the existing input validation (native inputs) to the new validation / froms concept.

### Basic

<Playground
  name="custom-field"
  examplesByName
></Playground>

### Validation

<Playground
  name="custom-field-validation"
  examplesByName
  height="24rem"
></Playground>

## API

### Properties

<Props />

### Events

<Events/>