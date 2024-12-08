//5.16. Функции возвращаются

function checkMeetingTimeframe (startWorkingDay, endWorkingDay, beginningMeeting, durationMeeting) {
  const startWorkingDayInMinutes = convertToMinutes(startWorkingDay);
  const endWorkingDayInMinutes = convertToMinutes(endWorkingDay);
  const beginningMeetingInMinutes = convertToMinutes(beginningMeeting);

  const isMeetingAfterWorkStart = startWorkingDayInMinutes <= beginningMeetingInMinutes;
  const isMeetingBeforeWorkEnd = (beginningMeetingInMinutes + durationMeeting) <= endWorkingDayInMinutes;

  return isMeetingAfterWorkStart && isMeetingBeforeWorkEnd;
}

function convertToMinutes(inputValue) {
  const [hours, minutes] = inputValue.split(':');

  return (Number(hours) * 60) + Number(minutes);
}

console.log(checkMeetingTimeframe('08:00', '17:30', '14:00', 90));
console.log(checkMeetingTimeframe('8:0', '10:0', '8:0', 120));
console.log(checkMeetingTimeframe('08:00', '14:30', '14:00', 90));
console.log(checkMeetingTimeframe('14:00', '17:30', '08:0', 90));
console.log(checkMeetingTimeframe('8:00', '17:30', '08:00', 900));
