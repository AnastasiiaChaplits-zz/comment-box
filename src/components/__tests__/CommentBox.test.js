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
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  })

  it('has a text area that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  })

  it('empty text area when submit a form', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  })
})