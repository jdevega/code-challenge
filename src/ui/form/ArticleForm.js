import React from 'react';
// import PropTypes from 'prop-types';
import { Checkbox, Form, Input, TextArea } from 'semantic-ui-react';
import SubmitButton from '../form/SubmitButton';

const CreateArticle = () =>
  <Form>
    <Form.Field control={Input} label="Author" placeholder="Who are you?" />
    <Form.Field control={Input} label="Title" placeholder="This has to be concise" />
    <Form.Field control={TextArea} label="Content" placeholder="Share your thoughts with us..." />
    <Form.Field control={Input} label="Tags" placeholder="Comma separated tags" />
    <Form.Field control={Checkbox} label="Published" />
    <Form.Field control={SubmitButton} />
  </Form>;

CreateArticle.propTypes = {

};

export default CreateArticle;
