import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "./store";

export const AppUseSelector: TypedUseSelectorHook<RootReducerType> = useSelector
