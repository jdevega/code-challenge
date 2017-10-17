import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import withHomeLink from '../withHomeLink';

describe('Links withHomeLink', () => {
  const Mock = () => <div />;

  it('Adds onClick to enhanced Component', () => {
    const Enhanced = withHomeLink(Mock);
    const wrapper = mount(<MemoryRouter><Enhanced /></MemoryRouter>);

    const subject = wrapper.find(Mock).first();
    expect(subject.exists()).toBe(true);
    expect(subject.prop('onClick')).toBeDefined();
  });
})
;
