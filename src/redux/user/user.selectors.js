import {createSelector} from 'reselect';

const selectUser = state=> state.user;
debugger
export const selectCurrentUser =createSelector(
    [selectUser],
    user => user.currentUser
);