import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { InvestmentResult } from '../investment-result';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
 
  investmenSrv = inject(InvestmentService);
  
  
  get results(){
    return this.investmenSrv.investmentResult;
  }

}
