import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icar } from '../model/table';
import { carArr } from '../const/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  carArr: Array<Icar> = carArr;

  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }

  @ViewChild('make') make!: ElementRef;
  @ViewChild('model') model!: ElementRef;
  @ViewChild('year') year!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  @ViewChild('isElectric') isElectric!: ElementRef;

  onAddcar() {
    let newObj: Icar = {
      make: this.make.nativeElement.value,
      model: this.model.nativeElement.value,
      year: this.year.nativeElement.value,
      color: this.color.nativeElement.value,
      isElectric: this.isElectric.nativeElement.value,
      carId: this.generateUuid(),
    };
    console.log(newObj);
    this.carArr.push(newObj);

    this.make.nativeElement.value = '';
    this.model.nativeElement.value = '';
    this.year.nativeElement.value = '';
    this.color.nativeElement.value = '';
    this.isElectric.nativeElement.value = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
