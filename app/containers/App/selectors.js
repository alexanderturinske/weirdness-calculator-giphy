import { createSelector } from 'reselect';

const selectRouter = state => state.router;

// TODO: Fix usage of selector from react-boilerplate
const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectLocation };
