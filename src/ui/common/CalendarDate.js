import React from 'react';
import PropTypes from 'prop-types';

const CalendarDate = props => (
  <div className="calendar-date">
    <div className="icon" />
    <div className="text">{props.dateText}</div>
  </div>
);

CalendarDate.propTypes = {
  dateText: PropTypes.string.isRequired,
};

export default CalendarDate;
