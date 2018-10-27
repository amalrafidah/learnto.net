import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SkillPage } from '../../pages/skill/skill'

@Component({
  selector: 'page-create-acc',
  templateUrl: 'create-acc.html',
})
export class CreateAccPage {

  constructor(private authService: AuthService){}

  onSignup(form: NgForm) {
    this.authService.signUp(form.value.email, form.value.password)
    .then(data => console.log(data))
    .catch(error => console.log(error));

  }

}
