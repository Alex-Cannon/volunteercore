import formatDateUTC from "./formatDateUTC.js";
import { formatUTCToDate } from "./formatDateUTC";

const date = new Date(2019, 1, 1);
const expectedDateUTC = "20190101";

test("format date to utc and utc to date works properly", () => {
  expect(formatDateUTC(date)).toEqual(expectedDateUTC);
  expect(formatUTCToDate(expectedDateUTC) instanceof Date).toEqual(true);
  expect(formatUTCToDate(expectedDateUTC).toDateString()).toEqual(date.toDateString());
});
