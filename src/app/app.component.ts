import { Component } from '@angular/core';
import { ITest } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userName: string = 'Ilya Platonov';
  public exampleObject: ITest = {type: 'simple', text: 'some'}
  public login: string = 'ILPlatonov'

  public changeUserName(): void {
    this.userName = this.generateRandomString(10)
  }

  public changeLogin(): void {
    this.login = this.generateRandomString(7)
  }

  public changeObjValue(): void {
    this.exampleObject.text = 'new text';
  }

  public changeObjByLink(): void {
    this.exampleObject = {type: this.generateRandomString(4), text: this.generateRandomString(6)}
  }

  private generateRandomString(length: number): string {
    return Math.random().toString(36).substring(2, length + 2);
  }
}
