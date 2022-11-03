import { NormalRegistrationComponent } from './normal-registration/normal-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BtableComponent } from './components/btable/btable.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'form',
    children: [
      { path: 'reacative-form', component: ReactiveFormComponent, pathMatch:'full' },
      { path: 'normal-form', component: NormalRegistrationComponent}
      ]
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tableData', component: BtableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
