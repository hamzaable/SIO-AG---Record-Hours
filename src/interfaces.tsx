import { Moment } from "moment";

export interface TIMELOG{
    id: string;
    taskname: string;
    startTime: Moment | undefined;
    finishTime: Moment | undefined;
    date:  Moment | undefined;
    durationMinutes : number | undefined
}
