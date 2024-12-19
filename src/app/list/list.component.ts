import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ilist } from '../model/list';
import { listArr } from '../const/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listArr: Array<Ilist> = listArr;
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

  @ViewChild('listItem') listItem!: ElementRef;

  onAddlist() {
    let newObj: Ilist = {
      listItem: this.listItem.nativeElement.value,
      listId: this.generateUuid(),
    };
    console.log(newObj);
    this.listArr.push(newObj);
    this.listItem.nativeElement.value = '';
  }
  constructor() {}

  ngOnInit(): void {}
}
