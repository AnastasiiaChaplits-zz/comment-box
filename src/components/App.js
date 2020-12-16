import React from 'react';
import { Route } from 'react-router-dom';

import CommentList from './CommentList';
import CommentBox from './CommentBox';

export default () => {
  return (
    <div>
      <Route path="/post" component={CommentBox} />
      <Route path="/" component={CommentList} exact />
    </div>
  )
}