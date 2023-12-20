import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string | undefined;
  @Input() styles: {} | undefined;
  type: string = '';

  
  
  assignType():void{
  if(this.label === 'author' || this.label === 'title') {
      this.type = 'text'
  } else if(this.label === 'email'){
      this.type = 'email'
  }
    
  }
  ngOnInit(){
    this.assignType()
  }
}