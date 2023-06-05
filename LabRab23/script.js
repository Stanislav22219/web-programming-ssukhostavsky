/*let languageData = {
    ua: {
      languageName: "ua",
      question: "Введіть номер дня неділі від 1 до 7?",
      error: "Неправильний ввід даних. Будь ласка, спробуйте ще раз.",
      daysOfWeek: {
        1: "Понеділок",
        2: "Вівторок",
        3: "Середа",
        4: "Четвер",
        5: "П'ятниця",
        6: "Субота",
        7: "Неділя",
      },
    },
    en: {
      languageName: "en",
      question: "Enter the day number of the week (from 1 to 7)?",
      error: "Invalid input. Please try again.",
      daysOfWeek: {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
      },
    },
  };
  
  function checkNumberInput(number) {
    let parsedNumber = parseInt(number);
    return !isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= 7;
  }
  
  function getAnswerToQuestion(question, error) {
    let answer = prompt(question);
    while (!checkNumberInput(answer)) {
      alert(error);
      answer = prompt(question);
    }
    return parseInt(answer);
  }
  
  let language = prompt("Виберіть мову 'ua' або 'en'?");
  while (!languageData[language.toLowerCase()]) {
    alert("Неправильний ввід даних. Будь ласка, спробуйте ще раз.");
    language = prompt("Виберіть мову 'ua' або 'en'?");
  }
  let selectedLanguage = languageData[language.toLowerCase()];
  
  let dayNumber = getAnswerToQuestion(
    selectedLanguage.question,
    selectedLanguage.error
  );
  
  let selectedDay = selectedLanguage.daysOfWeek[dayNumber];
  alert(selectedDay);
  */






