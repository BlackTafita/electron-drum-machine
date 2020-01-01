import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drum-pad',
  templateUrl: './drum-pad.component.html',
  styleUrls: ['./drum-pad.component.scss']
})
export class DrumPadComponent implements OnInit {

  soundsSrs = '../../../assets/audio/kick.wav';

  audio: HTMLAudioElement;

  constructor() {
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.soundsSrs;
    console.log(this.audio);
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
