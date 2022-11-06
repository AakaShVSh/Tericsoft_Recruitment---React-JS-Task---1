import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { fakedatareducer } from "./Fakedata/fakedata.reducer";

const rootreducer = combineReducers({
fake:fakedatareducer
})
export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))