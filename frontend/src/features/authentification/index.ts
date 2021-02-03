import { combineReducers } from 'redux';
import { reducer as userAuthReducer } from './modules/user/reducer';
import * as userAuthActions from './modules/user/actions';
import * as userAuthTypes from './modules/user/types';

import * as adminAuthActions from './modules/admin/actions';
import * as adminAuthTypes from './modules/admin/types';
import { reducer as adminAuthReducer } from './modules/admin/reducer';

export { userAuthActions };
export { userAuthTypes };
export { adminAuthActions };
export { adminAuthTypes };
export const authReducer = combineReducers({
  user: userAuthReducer,
  admin: adminAuthReducer,
});

export { Account } from './ui/organisms/Account';
export { SignUp } from './ui/organisms/SignUp';
export { UserLogin } from './ui/organisms/UserLogin';
export { AdminLogin } from './ui/organisms/AdminLogin';
