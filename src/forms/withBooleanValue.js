import { mapProps } from 'recompose';
import { pathOr } from 'ramda';

export default mapProps(props => ({
  ...props,
  input: { ...props.input, value: !!pathOr(false, ['input', 'value'], props) },
}));
