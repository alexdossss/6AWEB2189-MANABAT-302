import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demonstration"; //Text Interpolation
  imageUrl = "https://zig.news/images/XPuZx2c7r1q27oGqHNBDrow3nDzUmuY43sOEG34_dfw/rs:fill:320:320/g:sm/mb:500000/ar:1/aHR0cHM6Ly96aWcu/bmV3cy91cGxvYWRz/L3VzZXIvcHJvZmls/ZV9pbWFnZS81NjE2/L2UxM2RjYjFlLTY0/Y2YtNGQwZi1iYTg1/LTQ1Y2Q3MjFiNDFk/MC5qcGc";
  w = 400;
  h = 400;
  textColor = 'blue';
  isHighlighted = true;
  yourName= "";

  count= 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

  studentName ="Alexander Manabat"
  score= 95;

  nImageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-KUqdGV4vF4T0KWZkdtHd9JzdWNT8r6w9Bw2Frt8CJwcKIUQLok-CoKKn7a_0GSmncs&usqp=CAU";
  colsSpanValue = 3;

  isDisabled =true;

  isPassing = true;

  boxColor ="purple";
  boxSize = "150px";
}
