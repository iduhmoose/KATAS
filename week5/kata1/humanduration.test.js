const formatDuration = require("./humanduration");

describe("test cases", () => {
    it ("should return 'now' if the input is 0", () => {
        expect(formatDuration(0)).toBe("now");
    });

    it("should format in seconds if input < 60", () => {
        expect(formatDuration(1)).toBe("1 second");
        expect(formatDuration(30)).toBe("30 seconds");
    });

    it("should format in minutes if input > 60", () => {
        expect(formatDuration(60)).toBe("1 minute");
        expect(formatDuration(62)).toBe("1 minute and 2 seconds");
        expect(formatDuration(120)).toBe("2 minutes");
        expect(formatDuration(124)).toBe("2 minutes and 4 seconds");
    });

    it("should format in hours if input > 3600", () => {
        expect(formatDuration(3600)).toBe("1 hour");
        expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
        expect(formatDuration(3720)).toBe("1 hour and 2 minutes");
        expect(formatDuration(7200)).toBe("2 hours");
        expect(formatDuration(7201)).toBe("2 hours and 1 second");
    });

    it("should format in days if input > 86400", () => {
        expect(formatDuration(86400)).toBe("1 day");
        expect(formatDuration(86460)).toBe("1 day and 1 minute");
        expect(formatDuration(86465)).toBe("1 day, 1 minute and 5 seconds");
        expect(formatDuration(86400 * 2)).toBe("2 days");
    });

    it("should format in years if input > 31,536,000", () => {
        expect(formatDuration(31536000)).toBe("1 year");
        expect(formatDuration(63072000)).toBe("2 years");
        expect(formatDuration(31539662)).toBe("1 year, 1 hour, 1 minute and 2 seconds");
        expect(formatDuration(63072065)).toBe("2 years, 1 minute and 5 seconds");
    });
});