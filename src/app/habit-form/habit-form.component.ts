import { Habit } from './../models/habit.model';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss']
})
export class HabitFormComponent implements OnInit {

  habitForm: FormGroup;

  @Input() habit: Habit | undefined;

  @Output() save = new EventEmitter<Habit>();
  @Output() annull = new EventEmitter<void>();

  constructor(private readonly fb: FormBuilder) {
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

  public onSubmit(): void {

    if (this.habitForm.valid ) {
      const habit = this.habitForm.value as Habit;
      this.habitForm.reset();
      this.save.emit(habit);
    }

  }

  public onCancel(): void {
    this.annull.emit();
  }

  ngOnInit(): void {
    if (this.habit) {
      this.habitForm.patchValue(this.habit);
    } else {
      this.habitForm.reset();
    }
  }


}
