export default function formatDateToUTC(date) {
  return "" + date.getFullYear() + addZeroIfLessThan10(date.getMonth()) + addZeroIfLessThan10(date.getDate());
}

function addZeroIfLessThan10(num) {
  if (parseInt(num) < 10) return `0${num}`;
}

export const formatUTCToDate = (utc) => {
  return new Date(utc.substring(0, 4), utc.substring(4, 6), utc.substring(6, 8));
}