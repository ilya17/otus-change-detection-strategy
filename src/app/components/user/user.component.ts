import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITest } from 'src/app/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  // public exampleDate: Date = new Date();
  // public timer?: NodeJS.Timeout;

  private userName: string = 'user component';

  public get userValue(): string {
    console.log('CHANGES');
    return this.userName;
  }

  // @Input() public someObj?: ITest;

  // @Input() set userValue(value: string) {
  //   console.log(value);
  // }

  // constructor(private cdr: ChangeDetectorRef) {
  //   this.timer = setInterval(() => {
  //     this.exampleDate = new Date();
  //     this.cdr.markForCheck();
  //   }, 1000)
  // }

  public ngOnInit(): void {
    // this.timer = setInterval(() => {
    //   this.exampleDate = new Date();
    //   this.cdr.markForCheck();
    // }, 1000)
  }
}
