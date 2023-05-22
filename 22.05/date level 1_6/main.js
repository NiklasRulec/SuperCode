date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

function amPm(hour) {
  if (hour.getHours() < 12) {
    console.log("AM");
  } else {
    console.log("PM");
  }
}

amPm(date1);
amPm(date2);
amPm(date3);
amPm(date4);
