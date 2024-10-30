import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { InvestmentInput } from '../investment-input';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investmentSrv: InvestmentService;

  constructor(private investmentService:InvestmentService){
    this.investmentSrv= investmentService
  }

  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('0');
  enterDuration = signal('10');

  onSubmit() {
    let data: InvestmentInput = {
      initialInvestment: +this.enterInitialInvestment(),
      duration: +this.enterAnnualInvestment(),
      expectedReturn: +this.enterExpectedReturn(),
      annualInvestment: +this.enterDuration(),
    };

    var result = this.investmentSrv.calculateInvestmentResults(data);

    this.enterInitialInvestment.set('0');
    this.enterAnnualInvestment.set('0');
    this.enterExpectedReturn.set('0');
    this.enterDuration.set('0');

    console.log(result);
  }
}
