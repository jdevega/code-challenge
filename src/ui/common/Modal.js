import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal as ModalComponent } from 'semantic-ui-react';
import { MODAL_SIZES } from '../constants';

const Modal = props => (
  <ModalComponent size={props.size} open={props.open} onClose={props.onClose}>
    <ModalComponent.Header>{props.header}</ModalComponent.Header>
    <ModalComponent.Content>
      <p>{props.content}</p>
    </ModalComponent.Content>
    <ModalComponent.Actions>
      <Button negative icon="x" labelPosition="right" content="No" onClick={props.onCancelClick} />
      <Button
        positive
        icon="trash"
        labelPosition="right"
        content="Yes"
        onClick={props.onConfirmClick}
      />
    </ModalComponent.Actions>
  </ModalComponent>
);

Modal.defaultProps = {
  content: 'Modal content',
  header: 'Modal header',
  open: true,
  size: 'mini',
  onCancelClick: e => e.preventDefault(),
  onClose: e => e.preventDefault(),
  onConfirmClick: e => e.preventDefault(),
};

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirmClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
  size: PropTypes.oneOf(MODAL_SIZES),
};

export default Modal;
