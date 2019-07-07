import { data3 } from './../../../assets/data3';
import { data2 } from './../../../assets/data2';
import { ConfigurationService } from './../configuration/configuration.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data1 } from 'src/assets/data1';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) {}

  public getTreding() {
    const horribleData = data1;
    const charData = [];
    const trend = [];
    const lower = [];
    const upper = [];
    horribleData.forEach(dataObject => {
      trend.push(dataObject.trend);
      lower.push(dataObject.yhat_lower);
      upper.push(dataObject.yhat_upper);
    });
    charData.push({ label: 'trend', data: trend });
    charData.push({ label: 'lower', data: lower });
    charData.push({ label: 'upper', data: upper });
    return charData;
  }
  public getAnotherTreding() {
    const horribleData = data2;
    const charData = [];
    const trend = [];
    const lower = [];
    const upper = [];
    horribleData.forEach(dataObject => {
      trend.push(dataObject.trend);
      lower.push(dataObject.yhat_lower);
      upper.push(dataObject.yhat_upper);
    });
    charData.push({ label: 'trend', data: trend });
    charData.push({ label: 'lower', data: lower });
    charData.push({ label: 'upper', data: upper });
    return charData;
  }
  public getComparationTreding() {
    const horribleData1 = data1;
    const horribleData2 = data2;
    const charData = [];
    const trend1 = [];
    const trend2 = [];
    horribleData1.forEach(dataObject => {
      trend1.push(dataObject.trend);
    });
    horribleData2.forEach(dataObject => {
      trend2.push(dataObject.trend);
    });
    charData.push({ label: 'person1', data: trend1 });
    charData.push({ label: 'person2', data: trend2 });
    return charData;
  }
  public getComparationTreding2() {
    const horribleData = data3;
    const charData = [];
    const trend = [];
    const lower = [];
    const upper = [];
    horribleData.forEach(dataObject => {
      trend.push(dataObject.trend);
      lower.push(dataObject.yhat_lower);
      upper.push(dataObject.yhat_upper);
    });
    charData.push({ label: 'trend', data: trend });
    charData.push({ label: 'lower', data: lower });
    charData.push({ label: 'upper', data: upper });
    return charData;
  }
}
