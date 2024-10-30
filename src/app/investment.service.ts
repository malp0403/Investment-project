import { Injectable, signal } from '@angular/core';
import { InvestmentInput } from './investment-input';
import { InvestmentResult } from './investment-result';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  investmentResult  = signal<InvestmentResult[] | undefined>(undefined);
  constructor() {}

   calculateInvestmentResults(data: InvestmentInput){
    let { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    let annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });

    }

    this.investmentResult.set(annualData);

  }
}
