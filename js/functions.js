//5.16. Функции возвращаются

function checkMeetingTimeframe (startWorkingDay, endWorkingDay, beginningMeeting, durationMeeting) {
  const parsedStartWorkingDay = parseToIntArray(startWorkingDay);
  const parsedEndWorkingDay = parseToIntArray(endWorkingDay);
  const parsedBeginningMeeting = parseToIntArray(beginningMeeting);

  const startWorkingDayInMinutes = convertToMinutes(parsedStartWorkingDay);
  const endWorkingDayInMinutes = convertToMinutes(parsedEndWorkingDay);
  const beginningMeetingInMinutes = convertToMinutes(parsedBeginningMeeting);

  const isMeetingAfterWorkStart = startWorkingDayInMinutes <= beginningMeetingInMinutes;
  const isMeetingBeforeWorkEnd = (beginningMeetingInMinutes + durationMeeting) <= endWorkingDayInMinutes;

  return isMeetingAfterWorkStart && isMeetingBeforeWorkEnd;
}

function parseToIntArray(inputValue) {
  const tempArray = inputValue.split(':');
  const intArray = tempArray.map(Number);

  return intArray;
}

function convertToMinutes(timeArray) {
  const HOURS = 0;
  const MINUTES = 1;

  return (timeArray[HOURS] * 60) + timeArray[MINUTES];
}

console.log(checkMeetingTimeframe('08:00', '17:30', '14:00', 90));
console.log(checkMeetingTimeframe('8:0', '10:0', '8:0', 120));
console.log(checkMeetingTimeframe('08:00', '14:30', '14:00', 90));
console.log(checkMeetingTimeframe('14:00', '17:30', '08:0', 90));
console.log(checkMeetingTimeframe('8:00', '17:30', '08:00', 900));
