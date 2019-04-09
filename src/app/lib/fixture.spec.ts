import { OptionType } from './contracts/contracts';

export const baseFrequency = [
  { value: 0, label: 'Bitte auswählen' },
  { value: 1, type: OptionType.minute, label: 'Minute' },
  { value: 2, type: OptionType.hour, label: 'Stunde' },
  { value: 3, type: OptionType.day, label: 'Tag' },
  { value: 4, type: OptionType.week, label: 'Woche' },
  { value: 5, type: OptionType.month, label: 'Monat' },
  { value: 6, type: OptionType.year, label: 'Jahr' }
];

export const numeral = [
  {value: 1, label: '1.'},
  {value: 2, label: '2.'},
  {value: 3, label: '3.'},
  {value: 4, label: '4.'},
  {value: 5, label: '5.'},
  {value: 6, label: '6.'},
  {value: 7, label: '7.'},
  {value: 8, label: '8.'},
  {value: 9, label: '9.'},
  {value: 10, label: '10.'},
  {value: 11, label: '11.'},
  {value: 12, label: '12.'},
  {value: 13, label: '13.'},
  {value: 14, label: '14.'},
  {value: 15, label: '15.'},
  {value: 16, label: '16.'},
  {value: 17, label: '17.'},
  {value: 18, label: '18.'},
  {value: 19, label: '19.'},
  {value: 20, label: '20.'},
  {value: 21, label: '21.'},
  {value: 22, label: '22.'},
  {value: 23, label: '23.'},
  {value: 24, label: '24.'},
  {value: 25, label: '25.'},
  {value: 26, label: '26.'},
  {value: 27, label: '27.'},
  {value: 28, label: '28.'},
  {value: 29, label: '29.'},
  {value: 30, label: '30.'},
  {value: 31, label: '31.'}
];

export const months = [
  {value: 1, label: 'Januar'},
  {value: 2, label: 'Februar'},
  {value: 3, label: 'März'},
  {value: 4, label: 'April'},
  {value: 5, label: 'Mai'},
  {value: 6, label: 'Juni'},
  {value: 7, label: 'July'},
  {value: 8, label: 'August'},
  {value: 9, label: 'September'},
  {value: 10, label: 'Oktober'},
  {value: 11, label: 'November'},
  {value: 12, label: 'Dezember'}
];

export function getHours() {
  const hours = [];
  for (let x = 0; x < 24; x++) {
    hours.push({value: x, label: `${x}`});
  }
  return hours;
}

export function getMinutes(step: number = 5) {
  const minutes = [];
  for (let x = 0; x < 60; x = x + step) {
    minutes.push({value: x, label: `${x}`});
  }
  return minutes;
}

export const defaultConfig = {
  quartz: false,
  bootstrap: true,
  multiple: false,
};

export const defaultValidateConfig = {
  validate: false,
};

export const daysOfWeekPosix = [
  {value: 0, label: 'Sonntag'},
  {value: 1, label: 'Montag'},
  {value: 2, label: 'Dienstag'},
  {value: 3, label: 'Mittwoch'},
  {value: 4, label: 'Donnerstag'},
  {value: 5, label: 'Freitag'},
  {value: 6, label: 'Samstag'}
];

export const daysOfWeekQuartz = [
  {value: 1, label: 'Sonntag'},
  {value: 2, label: 'Montag'},
  {value: 3, label: 'Dienstag'},
  {value: 4, label: 'Mittwoch'},
  {value: 5, label: 'Donnerstag'},
  {value: 6, label: 'Freitag'},
  {value: 7, label: 'Samstag'}
];

export const baseFrequencyForService = {
  none: 0,
  minute: 1,
  hour: 2,
  day: 3,
  week: 4,
  month: 5,
  year: 6
};
