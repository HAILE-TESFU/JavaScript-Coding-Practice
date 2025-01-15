// Create the function fridayTheThirteenths that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

// The return value should be a string where each date is seperated by a space. The date should be formatted like 9/13/2014 where months do not have leading zeroes and are separated with forward slashes.

// If no end year is given, only return friday the thirteenths during the start year.

function fridayTheThirteenths(startYear, endYear) {
    endYear = endYear || startYear;
    let retiredDays = [];

    for(let year= startYear; year<=endYear; year++){
        for(let month= 0; month<12; month++){
            let date = new Date(year, month, 13);
            if(date.getDay() === 5){
                retiredDays.push(`${month+1}/${date.getDate()}/${date.getFullYear()}`)
            }
        }
    }

    return retiredDays.join(' ')
}

console.log(fridayTheThirteenths(1999, 2000));

module.exports = fridayTheThirteenths;
