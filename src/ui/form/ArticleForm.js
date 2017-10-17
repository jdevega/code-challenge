import React from 'react';
import PropTypes from 'prop-types';
// import { Checkbox, Form, TextArea } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import SubmitButton from '../form/SubmitButton';
import withReduxField from '../../forms/withReduxField';
import Input from './Input';

const ConnectedInput = withReduxField(Input);

const CreateArticle = props =>
  <Form onSubmit={props.handleSubmit}>
    <ConnectedInput name="author" label="Author" placeholder="Your name is..." type="text" validate={{ required: true }} />
    <ConnectedInput name="title" label="Title" placeholder="The article title..." type="text" validate={{ required: true }} />
    <ConnectedInput name="content" label="Content" placeholder="The article content..." type="text" validate={{ required: true }} />
    <ConnectedInput name="tags" label="Tags" placeholder="Comma separated values..." type="text" validate={{ required: true }} />
    <SubmitButton onClick={props.handleSubmit} />
  </Form>;

CreateArticle.defaultProps = {
  handleSubmit: e => e.preventDefault(),
};

CreateArticle.propTypes = {
  handleSubmit: PropTypes.func,
};

export default CreateArticle;
