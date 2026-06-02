import { Component } from '@angular/core';

@Component({
  selector: 'app-citation',
  imports: [],
  templateUrl: './citation.html',
  styleUrl: './citation.css',
})
export class CitationComponent{
  citation: string[] = [
    "i am a goat", 
    "There is a saying, that people often tend to beleive what they want to",
    "What is the true meaning of greatness ? is it power ? fame ? sucess ?  longevity ? dominance ? ",
    "what is it that lead us to envy other, to carve out our jealousy into other people live when we can just not mind"
  ]

  current : string = "What is true greatness ? power ? sucess ? or longevity ? dominance ? ";
  
  change(){
    const index = Math.floor(Math.random() * this.citation.length)
    this.current = this.citation[index]
  }
}
