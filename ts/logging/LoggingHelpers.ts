import * as moment from "moment";
import { ILog } from "./Logging";

export class LoggingHelpers {
    static logLevels = ["debug", "info", "warn", "error"];
    static logLevel: string = "debug";

    static filterByMaxLength(logs: ILog[], maxLen: number): ILog[] {
        var count = 0;
        return logs.filter(l => {
            if (count > maxLen)
                return false;

            var str = JSON.stringify(l);
            count += str.length;

            return count < maxLen;
        });
    }
    
    static canLog(level: string): boolean {
        var requiredIndx = this.logLevels.indexOf(this.logLevel);
        if (requiredIndx == -1)
            requiredIndx = 2;

        var levelIndx = this.logLevels.indexOf(level);
        if (levelIndx == -1)
            levelIndx = 2;

        return levelIndx >= requiredIndx;
    }
}