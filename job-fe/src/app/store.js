import { configureStore } from '@reduxjs/toolkit';
import tagReducer from "../features/admin/Slice/tagSlice"
import newReducer from "../features/admin/Slice/newSlice"
import workReducer from "../features/admin/Slice/workSlice"
import companyReducer from "../features/admin/Slice/companySlice"
import checkCompanyReducer from "../features/admin/Slice/checkCompanySlice"
import typeWorkReducer from "../features/admin/Slice/typeWorkSlice"
import userReducer from "../features/admin/Slice/userSlice"
import formCVReducer from "../features/admin/Slice/formCVSlice"
import contactReducer from "../features/admin/Slice/contactSlice"
import socialNetworkReducer from "../features/admin/Slice/socialNetworkSlice"
import binhluanReducer from "../features/admin/Slice/binhluanSlice"
import inforReducer  from '../features/admin/Slice/inforSlice';
const rootReducer = {
  tags: tagReducer,
  news: newReducer,
  works: workReducer,
  companys: companyReducer,
  binhluans: binhluanReducer,
  checkCompanys: checkCompanyReducer,
  users: userReducer,
  infor: inforReducer,
  typeWorks: typeWorkReducer,
  formCVs: formCVReducer,
  contacts: contactReducer,
  socialNetworks: socialNetworkReducer,
}
export default configureStore({
  reducer: rootReducer
});
