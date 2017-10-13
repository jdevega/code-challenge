import React from 'react';
import PropTypes from 'prop-types';
import CalendarDate from '../common/CalendarDate';
import TagList from '../tag/List';
import Tag from '../tag/Tag';

const Footer = props => (
  <div className="footer">
    <CalendarDate dateText={props.dateText} />
    <TagList>{props.tags.map(tag => <Tag key={`${tag}-index`} text={tag} />)}</TagList>
  </div>
);

Footer.defaultProps = {
  dateText: 'dateText name',
  tags: [],
};

Footer.propTypes = {
  dateText: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf[PropTypes.string],
};

export default Footer;
