import {Injectable} from '@angular/core';

@Injectable()
export class GlobalUtilities {

    BASEURL = 'http://wadokya.com/';

    public hideShowLoader(action) {
        let loadingId = document.getElementById('loading');
        if(action) {
            loadingId.style.display = 'block';
        } else {
            loadingId.style.display = 'none';
        }
    }

    public getTodayDate() {
        let dateObj = new Date(),
            month = dateObj.getUTCMonth() + 1,
            day = dateObj.getUTCDate(),
            year = dateObj.getUTCFullYear(),
            newdate = year + "-" + month + "-" + day;
        return newdate;
    }

    public parseDateCompute(input) {
        let parts = input.split('-');
        // Note: months are 0-based
        return new Date(parts[0], parts[1]-1, parts[2]);
    }

    public getNameCompute(day) {
        if (day == 0) return 'Sunday';
        else if (day == 1) return 'Monday';
        else if (day == 2) return 'Tuesday';
        else if (day == 3) return 'Wednesday';
        else if (day == 4) return 'Thursday';
        else if (day == 5) return 'Friday';
        return 'Saturday';
    }

    public getDateDay(getDate) {
        // let d = this.parseDate('2018-10-29');
        let d = this.parseDateCompute(getDate);
        let weekday = d.getDay();
        let weekdayName = this.getNameCompute(weekday);
        return weekdayName;
    }

}