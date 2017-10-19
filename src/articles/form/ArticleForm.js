import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import SubmitButton from '../../ui/form/SubmitButton';
import withReduxField from '../../forms/withReduxField';
import withBooleanValue from '../../forms/withBooleanValue';
import Input from '../../ui/form/Input';
import TextArea from '../../ui/form/TextArea';
import Checkbox from '../../ui/form/Checkbox';

const ConnectedInput = withReduxField(Input);
const ConnectedTextArea = withReduxField(TextArea);
const ConnectedCheckbox = withReduxField(withBooleanValue(Checkbox));

const CreateArticle = props => (
  <Form onSubmit={props.handleSubmit}>
    <ConnectedInput
      name="author"
      label="Author"
      placeholder="Your name is..."
      type="text"
      validate={{ required: true }}
    />
    <ConnectedInput
      name="title"
      label="Title"
      placeholder="The article title..."
      type="text"
      validate={{ required: true }}
    />
    <ConnectedTextArea
      name="content"
      label="Content"
      placeholder="The article content..."
      validate={{ required: true }}
    />
    <ConnectedInput
      name="tags"
      label="Tags"
      placeholder="Comma separated values..."
      type="text"
      validate={{ required: true }}
      normalize={value => value.split(',')}
    />
    <ConnectedCheckbox name="published" label="Published" />
    <SubmitButton onSubmit={props.handleSubmit} submitText={props.submitText} />
  </Form>
);

CreateArticle.defaultProps = {
  handleSubmit: e => e.preventDefault(),
  submitText: 'Submit',
};

CreateArticle.propTypes = {
  handleSubmit: PropTypes.func,
  submitText: PropTypes.string,
};

export default CreateArticle;
