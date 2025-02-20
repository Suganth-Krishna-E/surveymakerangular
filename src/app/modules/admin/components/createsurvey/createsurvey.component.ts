import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SurveyService } from '../../services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrl: './createsurvey.component.css'
})
export class CreatesurveyComponent {
  adminId!: string;
  createSurveyFormGroup: FormGroup;

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) {
    this.createSurveyFormGroup = new FormGroup({
      title: new FormControl('', []),
      description: new FormControl('', []),
      questions: new FormArray([]),
      adminId: new FormControl()
    });
  }

  ngOnInit() {
    this.createSurveyFormGroup.controls['adminId'].setValue(this.route.parent?.snapshot.paramMap.get('id'));
  }

  get questions() {
    return this.createSurveyFormGroup.get('questions') as FormArray;
  }

  addQuestion() {
    const questionGroup = new FormGroup({
      questionNumber: new FormControl(),
      type: new FormControl(),  
      title: new FormControl(),
      options: new FormArray([]),
      fileType: new FormControl()
    });

    this.questions.push(questionGroup);  
  }

  getFormControl(index: number) {
    return this.questions.controls[index] as FormGroup;
  }

  copyQuestion(index: number) {
    const questionGroup = this.questions.at(index);

    this.questions.insert(index + 1, questionGroup);
  }

  deleteQuestion(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this question?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.questions.removeAt(index);
      }
    });
  }

  onSubmitCreateSurvey() {
    this.questions.controls.forEach((question, index) => {
      (question as FormGroup).get('questionNumber')?.setValue(index + 1);
    });

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to publish this survey?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, publish it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.surveyService.publishSurvey(this.createSurveyFormGroup.value).subscribe({
          next: (response) => {
            Swal.fire('Published!', response.toString(), 'success');
          }
        });
      }
    });
  }

  trackByFn(index: number, item: any) {
    return item.id; 
  }
  

}
