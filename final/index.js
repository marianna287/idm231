// alert("hello");

const orderedZodiacSigns = {
  "aquarius": {
    sign: "Aquarius",
    date: "January 20th - February 18th",
    audio: new Audio('sounds/examples_projects_05-soundboard_src_sounds_bullet.mp3')
  },
  
  "pisces": {
    sign: "Pisces",
    date: "February 19th - March 20th",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },
  
  "aries": {
    sign: "Aries",
    date: "March 21 - April 19th",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },
  
  "taurus": {
    sign: "Taurus",
    date: "April 20th - May 20th",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "gemini": {
    sign: "Gemini",
    date: "May 21 - June 20th",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "cancer": {
    sign: "Cancer",
    date: "June 21 - July 22",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "leo": {
    sign: "Leo",
    date: "July 23rd - August 22",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "virgo": {
    sign: "Virgo",
    date: "August 23rd - September 22nd",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "libra": {
    sign: "Libra",
    date: "September 23rd - October 22",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "scorpio": {
    sign: "Scorpio",
    date: "October 23rd - November 21",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "sagittarius": {
    sign: "Sagittarius",
    date: "November 22 - December 21",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },

  "capricorn": {
    sign: "Capricorn",
    date: "December 22nd - January 19th",
    audio: new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
  },
}


const findZodiac = (event) => {
    let dateOfBirth = document.querySelector('input[type="date"]');
    event.preventDefault();
    dateOfBirth = new Date(dateOfBirth.value);
    const month = dateOfBirth.getMonth();
    const day = dateOfBirth.getDate();
    
    let zodiac = "";

    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
        zodiac = 'aquarius';
      } else if ((month === 1 && day >=19) || (month === 2 && day <=20)) {
        zodiac = 'pisces';
      } else if ((month === 2 && day >=21) || (month === 3 && day <=19)) {
        zodiac = 'aries';
      } else if ((month === 3 && day >=20) || (month === 4 && day <=20)) {
        zodiac = 'taurus';
      } else if ((month === 4 && day >=20) || (month === 5 && day <=20)) {
        zodiac = 'gemini'
      } else if ((month === 5 && day >=21) || (month === 6 && day <=22)) {
        zodiac = 'cancer';
      } else if ((month === 6 && day >=23) || (month === 7 && day <=22)) {
        zodiac = 'leo';
      } else if ((month === 7 && day >=23) || (month === 8 && day <=22)) {
        zodiac = 'virgo'; 
      } else if ((month === 8 && day >=23) || (month === 9 && day <=22)) {
        zodiac = 'libra'; 
      } else if ((month === 9 && day >=23) || (month === 10 && day <=21)) {
        zodiac = 'scorpio'; 
      } else if ((month === 10 && day >=22) || (month === 11 && day <=21)) {
        zodiac = 'sagittarius';
      } else if ((month === 11 && day >=22) || (month === 0 && day <=19)) {
        zodiac = 'capricorn'; 
    }

      selectZodiacSign(zodiac);
  };    
  
  function selectZodiacSign(zodiac){
    const { sign, date, audio } = orderedZodiacSigns[zodiac];
  
    document.getElementById("zodiac-sign").innerHTML = sign;
    document.getElementById("zodiac-date").innerHTML = date;

    const imageElement = document.querySelector(".zodiacImage");
    imageElement.src = `images/${sign}.png`;
    imageElement.alt = sign;

    audio.play();  
};    

const buttons = document.getElementsByClassName("js-button");

console.log(buttons);
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', () => {
    console.log(buttons[i]);
    selectZodiacSign(buttons[i].id);
  })
}




