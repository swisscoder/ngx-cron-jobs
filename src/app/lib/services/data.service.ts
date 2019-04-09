import { Injectable } from '@angular/core';
import { CronJobsConfig, CronJobsSelectOption, CronJobsValidationConfig, OptionType } from '../contracts/contracts';

@Injectable()
export class DataService {

  private defaultConfig: CronJobsConfig = {
    quartz: false,
    bootstrap: true,
    multiple: false,
  };

  private defaultValidateConfig: CronJobsValidationConfig = {
    validate: false,
  };

  // need to check if Monday is 0, for German cron jobs
  private daysOfWeekPosix: Array<CronJobsSelectOption> = [
    {value: 0, label: 'Sonntag'},
    {value: 1, label: 'Montag'},
    {value: 2, label: 'Dienstag'},
    {value: 3, label: 'Mittwoch'},
    {value: 4, label: 'Donnerstag'},
    {value: 5, label: 'Freitag'},
    {value: 6, label: 'Samstag'}
  ];

  // need to check if Sunday is 1, for German cron jobs
  private daysOfWeekQuartz: Array<CronJobsSelectOption> = [
    {value: 1, label: 'Sonntag'},
    {value: 2, label: 'Montag'},
    {value: 3, label: 'Dienstag'},
    {value: 4, label: 'Mittwoch'},
    {value: 5, label: 'Donnerstag'},
    {value: 6, label: 'Freitag'},
    {value: 7, label: 'Samstag'}
  ];

  private numeral: Array<CronJobsSelectOption> = [
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

  // assuming Umlauts are no problem
  private _months: Array<CronJobsSelectOption> = [
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

  // assuming Umlauts are no problem
  private _baseFrequency: Array<CronJobsSelectOption> = [
    { value: 0, label: 'Bitte auswählen' },
    { value: 1, type: OptionType.minute, label: 'Minute' },
    { value: 2, type: OptionType.hour, label: 'Stunde' },
    { value: 3, type: OptionType.day, label: 'Tag' },
    { value: 4, type: OptionType.week, label: 'Woche' },
    { value: 5, type: OptionType.month, label: 'Monat' },
    { value: 6, type: OptionType.year, label: 'Jahr' }
  ];

  private _hours: Array<CronJobsSelectOption>;
  private _minutes: Array<CronJobsSelectOption>;


  public get baseFrequency(): Array<CronJobsSelectOption> {
    return [
      ...this._baseFrequency
    ];
  }

  public get daysOfMonth(): Array<CronJobsSelectOption> {
    return [
      ...this.numeral
    ];
  }

  public get months(): Array<CronJobsSelectOption> {
    return [
      ...this._months
    ];
  }

  public get hours(): Array<CronJobsSelectOption> {
    return [
      ...this._hours
    ];
  }

  public get minutes(): Array<CronJobsSelectOption> {
    return [
      ...this._minutes
    ];
  }

  constructor() {
    this._hours = [];
    for (let x = 0; x < 24; x++) {
      this._hours.push(<CronJobsSelectOption>{value: x, label: `${x}`});
    }

    this._minutes = [];
    for (let x = 0; x < 60; x = x + 5) {
      this._minutes.push(<CronJobsSelectOption>{value: x, label: `${x}`});
    }

  }


  getConfig(config: CronJobsConfig = {}): CronJobsConfig {
    return {
      ...this.defaultConfig,
      ...config
    };
  }

  getValidate(validateConfig: CronJobsValidationConfig = {}): CronJobsValidationConfig {
    return {
      ...this.defaultValidateConfig,
      ...validateConfig
    };
  }

  getDaysOfWeek(quartz: Boolean = false): Array<CronJobsSelectOption> {
    if (quartz) {
      return [
        ...this.daysOfWeekQuartz
      ];
    }
    return [
      ...this.daysOfWeekPosix
    ];
  }

}
