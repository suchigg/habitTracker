import { Habit } from './models/habit.model';
import { Observable } from 'rxjs';
import { HabitService } from './services/habit.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  adding = false;
  habitForm: FormGroup;

  constructor(
    private readonly habitsService: HabitService,
    private readonly fb: FormBuilder
  ) {
    this.habitForm = this.fb.group({
      name: [undefined, [Validators.required]],
      frequency: [undefined, [Validators.required]],
      description: [undefined],
    });
  }

  get name(): AbstractControl | null {
    return this.habitForm.get('name');
  }

  get frequency(): AbstractControl | null {
    return this.habitForm.get('frequency');
  }

  get habits(): Observable<Habit[]> {
    return this.habitsService.findAll();
  }

  public onSubmit(): void {

    if (this.habitForm.valid ) {
      this.habitsService.save(this.habitForm.value);
      this.adding = false;
    }

  }
}
