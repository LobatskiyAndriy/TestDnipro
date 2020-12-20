import { combineReducers } from 'redux';
import aplicantsReduser from './aplicants';
import usersReduser from './users';



const rootReducer = combineReducers({
    users: usersReduser,
    aplicants: aplicantsReduser,
    // newApplicants:newApplicants
})


export default rootReducer;
 