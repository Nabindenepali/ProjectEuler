console.time('computation');

// Knowledge available to us
const knowledge = {
    date: '1900-1-1',
    weekDay: 1 // Monday
};

// Map of days count for all the months
const daysInMonth = {
    1: 31,
    2: {
        leap_year: 29,
        not_leap_year: 28
    },
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

/***
 * Checks if a given year is a leap year or not
 * @param year
 * @returns {string} - 'leap_year' or 'not_leap_year' based on whether the year is a leap year or not
 */
function isLeapYear(year) {
    // If a year is divisible by 100, it also needs to be divisible by 4 to be a leap year
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return 'leap_year';
        }
        return 'not_leap_year';
    }
    // In all other scenarios, it needs to be divisible by 4 to be a leap year
    if (year % 4 === 0) {
        return 'leap_year';
    }
    return 'not_leap_year';
}

/**
 * Returns Julian day number for any given date
 * @param date - Date that needs to be converted into a JDN
 * @returns {*} JDN value for the date
 */
function julianDayNumber(date) {
    const [year, month, day] = date.split('-').map(n => parseInt(n));
    const a = (14 - month) / 12;
    const y = year + 4800 - a;
    const m = month + 12*a - 3;
    return Math.floor(day + ((153*m + 2) / 5) + 365*y + (y/4) - (y/100) + (y/400) - 32045);
}

/**
 * Returns the number of days between from date and end date
 * @param fromDate
 * @param toDate
 * @returns {number} - Total number of days during the period
 */
function getNumberOfDaysBetween(fromDate, toDate) {
    return julianDayNumber(toDate) - julianDayNumber(fromDate);
}

/**
 * Returns the week day for the given date
 * @param date
 */
function getWeekDay(date) {
    if (date === knowledge.date) {
        return knowledge.weekDay;
    }
    return (knowledge.weekDay + getNumberOfDaysBetween(knowledge.date, date)) % 7;
}

/**
 * Returns the number of days between the given dates
 * such that the given month date falls on the specified week day
 * @param fromDate - Start date (inclusive)
 * @param toDate - End date (inclusive)
 * @param weekDay - Day of week starting from Sunday as 0
 */
function getNumberOfDays(fromDate, toDate, weekDay) {
    const [fromYear, fromMonth, fromDay] = fromDate.split('-').map(n => parseInt(n));
    const [toYear, toMonth, toDay] = toDate.split('-').map(n => parseInt(n));
    var dayCount = 0;
    var currentWeekDay = getWeekDay(fromDate);
    // Check if the first day in the period meets the condition or not
    if (currentWeekDay === weekDay) {
        dayCount++;
    }
    for (var year = fromYear; year <= toYear; year++) {
        for (var month = year === fromYear ? fromMonth : 1; month <= 12; month++) {
            if (year === toYear && month === toMonth) { // Break if the last month of the period
                break;
            }
            if (year === fromYear && month === fromMonth) { // Handle the first month in the period
                if (month === 2) { // Check if the year is leap or not if the month is February
                    currentWeekDay = (currentWeekDay + (daysInMonth[month][isLeapYear(year)] - fromDay + 1)) % 7;
                } else {
                    currentWeekDay = (currentWeekDay + (daysInMonth[month] - fromDay + 1)) % 7;
                }
            } else {
                if (month === 2) { // Check if the year is leap or not if the month is February
                    currentWeekDay = (currentWeekDay + daysInMonth[month][isLeapYear(year)]) % 7;
                } else {
                    currentWeekDay = (currentWeekDay + daysInMonth[month]) % 7;
                }
            }
            if (currentWeekDay === weekDay) {
                dayCount++;
            }
        }
    }
    return dayCount;
}

console.log(getNumberOfDays('1901-1-1', '2000-12-31', 0, 1));

console.timeEnd('computation');

