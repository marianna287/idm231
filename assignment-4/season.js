function season() {
    var seasonTime =-1
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var season = ['Fall', 'Winter', 'Spring', 'Summer'];

  if ((month == 9 && day >=22) || (month == 10 && day <=31) || (month == 11 && day <=30) || (month == 12 && day <=21)) {
      seasonTime = 0;
  } else if ((month == 1 && day <=31) || (month == 2 && day <=29) || (month == 3 && day <=21) || (month == 12 && day >=22)) {
        seasonTime = 1;
  } else if ((month == 3 && day >=22) || (month == 4 && day <=30) || (month == 5 && day <=31) || (month == 6 && day <=21)) {
    seasonTime = 2;
  } else if ((month == 6 && day >=22) || (month == 7 && day <=31) || (month == 8 && day <=31) || (month == 9 && day <=21)) {
    seasonTime = 3;
  }
  document.getElementById("time").innerHTML = season[seasonTime];
}

/**
 * Take the year passed and subtract it from the current year
 */
//function getAge(inputYear) {
  // Get current year
// const currentYear = new Date().getFullYear();
  // Get passed in input year
//  const year = inputYear;
  // Calculate age
//  const age = currentYear - year;
//  return age;
