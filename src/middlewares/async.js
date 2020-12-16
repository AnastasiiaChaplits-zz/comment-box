export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // Wait for the promise to resolve, 
  // then create a new action with data and dispatch it
  action.payload.then(
    function (response) {
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    }
  )
};