import { Habit } from './../models/habit.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss']
})
export class HabitsComponent {

  @Input() habits: Habit[] | null = [];
  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<{habit: Habit, index: number}>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  public onAdd(): void {
    this.add.emit();
  }

  public onEdit(habit: Habit, index: number): void {
    this.edit.emit({habit, index});
  }

  public onDelete(index: number): void {
    this.delete.emit(index);
  }
}
