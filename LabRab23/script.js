let languageData = {
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
  






  
// Елементи електромережі
const powerStations = [
  { power: 10 },  // Потужність 10 МВт
  { power: 50 },  // Потужність 50 МВт
];

const solarPanels = [
  { powerDay: 2, powerNight: 0 },  // Денна потужність 2 МВт, нічна - 0 МВт
  { powerDay: 1, powerNight: 1 },  // Денна потужність 1 МВт, нічна - 1 МВт
];

const residentialBuildings = [
  { numApartments: 100 },  // 100 квартир
  { numApartments: 200 },  // 200 квартир
];

const powerLines = [
  { capacity: 50, price: 10 },  // Потужність передачі 50 МВт, ціна - 10 за МВт
  { capacity: 100, price: 5 },  // Потужність передачі 100 МВт, ціна - 5 за МВт
];

// Розрахунок потреби в електриці вдень і вночі
function calculatePowerDemand(isDay) {
  let totalDemand = 0;
  
  // Додавання потужності електростанцій
  for (const station of powerStations) {
    totalDemand += station.power;
  }
  
  // Додавання потужності сонячних панелей
  for (const panel of solarPanels) {
    totalDemand += isDay ? panel.powerDay : panel.powerNight;
  }
  
  // Додавання споживання житлових будинків
  for (const building of residentialBuildings) {
    totalDemand += isDay ? building.numApartments * 4 : building.numApartments * 1;
  }
  
  return totalDemand;
}

// Розрахунок вартості електрики вдень і вночі
function calculateCost(isDay) {
  let totalCost = 0;
  
  // Розрахунок вартості за передачу енергії по лініях
  for (const line of powerLines) {
    const capacity = line.capacity;
    const price = line.price;
    
    const demand = calculatePowerDemand(isDay);
    
    if (demand <= capacity) {
      totalCost += demand * price;
    } else {
      totalCost += capacity * price;
      const surplus = demand - capacity;
      totalCost += surplus * price * -1;  // Отримання прибутку за зайву енергію
    }
  }
  
  return totalCost;
}

// Розрахунок потреби в електриці та вартості вдень
const dayDemand = calculatePowerDemand(true);
const dayCost = calculateCost(true);

// Розрахунок потреби в електриці та вартості вночі
const nightDemand = calculatePowerDemand(false);
const nightCost = calculateCost(false);

console.log(`Потреба в електриці вдень: ${dayDemand} МВт`);
console.log(`Вартість електрики вдень: ${dayCost} грн.`);
console.log(`Потреба в електриці вночі: ${nightDemand} МВт`);
console.log(`Вартість електрики вночі: ${nightCost} грн.`);