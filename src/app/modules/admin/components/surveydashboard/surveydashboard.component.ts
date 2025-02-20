import { Component } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surveydashboard',
  templateUrl: './surveydashboard.component.html',
  styleUrl: './surveydashboard.component.css',
})
export class SurveydashboardComponent {
  listOfSurveys!: surveyDetail[];

  constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.surveyService
      .getAllSurveysByAdminId(
        this.route.parent?.snapshot.paramMap.get('id') || ''
      )
      .subscribe({
        next: (response) => {
          this.listOfSurveys = response;
        },
      });
  }
}

interface surveyDetail {
  surveyId: string;
  surveyTitle: string;
  adminId: string;
}
