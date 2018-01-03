import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import {ThreadsService} from './services/threads.service';
import { LoadThreadsEffectService } from 'app/store/effects/load-threads-effect.service';
import { storeReducer } from './store/reducers/storeReducer';
import { uiState } from 'app/store/reducers/uiStateReducer';
import { uiStoreData } from 'app/store/reducers/uiStoreDataReducer';

import { StoreModule, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects/src/effects.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { INITIAL_APPLICATION_STATE } from './store/application-state';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(storeReducer),
    // StoreModule.provideStore(combineReducers({uiState, uiStoreData}), INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoadThreadsEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
