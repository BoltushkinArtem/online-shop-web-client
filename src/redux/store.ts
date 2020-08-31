import { createStore, combineReducers, applyMiddleware, Action } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import headerReducer from "./header-reducer";

let rootReducer = combineReducers({
  header: headerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type InferActionType<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;

export default store;
