import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drum-pad',
  templateUrl: './drum-pad.component.html',
  styleUrls: ['./drum-pad.component.scss']
})
export class DrumPadComponent implements OnInit {

  @Input()
  soundsSrs: string;

  @Input()
  keyName: string;

  audio: HTMLAudioElement;
  isActive: boolean = false;

  constructor() {
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardKeyupEvent(event: KeyboardEvent) {
    let x = event.key;
    if (x === this.keyName) {
      this.isActive = false;
    }
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = event.key;
    if (x === this.keyName) {
      this.isActive = true;
      this.click();
    }
  }


  ngOnInit() {
    this.audio = new Audio();
    if (this.soundsSrs) {
      this.audio.src = this.soundsSrs;
    }
  }

  click() {
    this.audio.load();
    this.audio.play();
  }

  repeatToggle() {
    this.audio.loop = !this.audio.loop;
    console.log(this.audio.loop);
  }


}
