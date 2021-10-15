function formatDuration (seconds) {
    const year = "year";
    const day = "day";
    const hour = "hour";
    const minute = "minute";
    const second = "second";
    const and = " and ";
    const comma = ", ";
    let result = "";

    if (seconds === 0) {
        return "now";
    }
    let yr = Math.floor(seconds / 31536000);
    let days = Math.floor((seconds % 31536000) / 86400);
    let hr = Math.floor((seconds % 86400) / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;

    if (yr) {
        yr > 1 ? result += yr + " " + year + "s" : result += yr + " " + year;
    }

    if (days) {
        if ( yr && (hr || min || sec)) {
            result += comma;
        } else if (yr) {
            result += and;
        }
        days > 1 ? result += days + " " + day + "s" : result += days + " " + day;
    }

    if (hr) {
        if ( (yr || days) && (min || sec)) {
            result += comma;
        } else if (yr || days) {
            result += and;
        }
        hr > 1 ? result += hr + " " + hour + "s" : result += hr + " " + hour;
    }

    if (min) {
        if ((yr || days || hr) && sec) {
            result += comma;
        } else if (yr || days || hr) {
            result += and;
        }

        min > 1 ? result += min + " " + minute + "s" : result += min + " " + minute;
    }

    if (sec) {
        if (days || hr || min) result += and;
        sec > 1 ? result += sec + " " + second + "s" : result += sec + " " + second;
    }

    return result;
}

module.exports = formatDuration;