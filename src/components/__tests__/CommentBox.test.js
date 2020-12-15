import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />)
});

afterAll(() => {
  wrapped.unmount()
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

it('has a text area that user can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
})