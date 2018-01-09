import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { SelectUserAction } from 'app/store/actions';

@Component({
  selector: 'user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  constructor(private store: Store<ApplicationState>) { }

  onSelectUser(event: MouseEvent) {
    const newUserId = (<HTMLSelectElement>event.target).value;
    this.store.dispatch(new SelectUserAction(+newUserId));
  }

  ngOnInit() {
  }

}
