import { Type } from "src/app/shared/types/types/type";
import { Importance } from "src/app/shared/types/types/importance";

export class Goal {
    id!: number;
    name!: string;
    type!: Type;
    importance!: Importance
}
