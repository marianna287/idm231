// alert("hello");

const findZodiac = (event) => {
    let dateOfBirth = document.querySelector('input[type="date"]');
    event.preventDefault();
    dateOfBirth = new Date(dateOfBirth.value);
    const month = dateOfBirth.getMonth();
    const day = dateOfBirth.getDate();
    
    let zodiacSign = "";
    let zodiacDate = "";



    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
        zodiacSign = "aquarius";
        zodiacDate = "January 20th - February 18th";
      } else if ((month === 1 && day >=19) || (month === 2 && day <=20)) {
        zodiacSign = "pisces";
        zodiacDate = "February 19th - March 20th";
      } else if ((month === 2 && day >=21) || (month === 3 && day <=19)) {
        zodiacSign = "aries";
        zodiacDate = "March 21 - April 19th";
      } else if ((month === 3 && day >=20) || (month === 4 && day <=20)) {
        zodiacSign = "taurus";
        zodiacDate = "April 20th - May 20th";
      } else if ((month === 4 && day >=20) || (month === 5 && day <=20)) {
        zodiacSign = "gemini";
        zodiacDate = "May 21 - June 20th";
      } else if ((month === 5 && day >=21) || (month === 6 && day <=22)) {
        zodiacSign = "cancer";
        zodiacDate = "June 21 - July 22";
      } else if ((month === 6 && day >=23) || (month === 7 && day <=22)) {
        zodiacSign = "leo";
        zodiacDate = "July 23rd - August 22";
      } else if ((month === 7 && day >=23) || (month === 8 && day <=22)) {
        zodiacSign = "virgo";
        zodiacDate = "August 23rd - September 22nd";
      } else if ((month === 8 && day >=23) || (month === 9 && day <=22)) {
        zodiacSign = "libra";
        zodiacDate = "September 23rd - October 22";
      } else if ((month === 9 && day >=23) || (month === 10 && day <=21)) {
        zodiacSign = "scorpio";
        zodiacDate = "October 23rd - November 21";
      } else if ((month === 10 && day >=22) || (month === 11 && day <=21)) {
        zodiacSign = "sagittarius";
        zodiacDate = "November 22 - December 21";
      } else if ((month === 11 && day >=22) || (month === 0 && day <=19)) {
        zodiacSign = "capricorn";
        zodiacDate = "December 22nd - January 19th";
    }
  
    document.getElementById("zodiac-sign").innerHTML = zodiacSign;
    document.getElementById("zodiac-date").innerHTML = zodiacDate;

    const imageElement = document.querySelector(".zodiacImage");
    imageElement.src = "images/{zodiacSign}.png";
    imageElement.alt = zodiacSign;


};    





