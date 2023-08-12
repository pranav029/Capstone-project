export namespace TimeUtils {
    export interface TimesInfo {
        time: string,
        value: string
    }
    export function getTimes(start: string): TimesInfo[] {
        let times: TimesInfo[] = []
        const maxTime = new Date(Date.parse("Wed Nov 03 2004 00:00:00 GMT+0530 (India Standard Time)"))
        let startTime = start.length == 0 ? new Date(Date.parse("Wed Nov 02 2004 07:00:00 GMT+0530 (India Standard Time)")) : new Date(Date.parse(start))
        let lastTimeIdx = start.length == 0 ? 17 : 18
        //Generating time list from a certain startTime
        for (let i = (lastTimeIdx == 17 ? 0 : 1); i < lastTimeIdx; ++i) {
            let tempTime = new Date(startTime);
            tempTime.setTime(tempTime.getTime() + (i * 60 * 60 * 1000))
            times.push({
                time: tempTime.toLocaleString('en-Us', { hour: 'numeric', minute: 'numeric', hour12: true }),
                value: tempTime.toString()
            })
            if (tempTime.toString() === maxTime.toString()) break;
        }
        return times;
    }

    export function getTime(date: string): string {
        let tempTime = new Date(Date.parse(date))
        return tempTime.toLocaleString('en-Us', { hour: 'numeric', minute: 'numeric', hour12: true })
    }
}