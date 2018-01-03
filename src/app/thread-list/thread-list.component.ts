import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css']
})
export class ThreadListComponent implements OnInit {

  @Input()
  public threads;

  @Output()
  threadSelected = new EventEmitter();

  constructor() { }

  selectThread(threadId: number) {
    this.threadSelected.next(threadId);
  }

  ngOnInit() {

  }

}
