import {instance} from "./api";
import {ColorType} from "../types/types";

export const ColorsAPI = {
    getColors: () => {
        return instance.get<Array<ColorType>>("/colors");
    },
};
