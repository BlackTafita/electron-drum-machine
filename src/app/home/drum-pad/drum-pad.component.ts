import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drum-pad',
  templateUrl: './drum-pad.component.html',
  styleUrls: ['./drum-pad.component.scss']
})
export class DrumPadComponent implements OnInit {

  @Input()
  soundsSrs: string;

  audio: HTMLAudioElement;

  constructor() {
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
