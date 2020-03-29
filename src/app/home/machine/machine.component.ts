import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  active: boolean = false;
  metronomeBPM: number = 120;
  metronomeAudioSrc: string = 'assets/audio/hat.wav';
  metronomeAudio: HTMLAudioElement;

  metronome$: Observable<number>;

  get metronomeMs() {
    return Number((1000 / (this.metronomeBPM / 60)).toFixed());
  }

  constructor() { }

  ngOnInit() {
    this.metronomeAudio = new Audio();
    this.metronomeAudio.src = this.metronomeAudioSrc;
    this.metronomeAudio.load();

    interval(this.metronomeMs).pipe(
      filter(() => this.active),
    ).subscribe((i) => {
      if (i % 2) {
        this.metronomeAudio.load();
        this.metronomeAudio.play();
      } else {
        this.metronomeAudio.pause();
      }
    });
  }

  toggle() {
    this.active = !this.active;
  }

}
