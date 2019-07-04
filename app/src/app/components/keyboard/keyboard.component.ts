import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'keyboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {

	value: string = "";
	keyboard: Keyboard;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
  	this.keyboard = new Keyboard({
  		onChange: input => this.onChange(input),
  		onKeyPress: button =>this.onKeyPress(button)
  	});
  }

  onChange = (input: string)=>{
  	this.value = input;
  	console.log("Input changed", input);
  }

  onKeyPress = (button: string) => {
  	console.log("Button Pressed", button);

  	//Handling shift and caps lock buttons
  	if (button ==="{shift}" || button === "{lock}") {
  		this.handleShift();
  	}
  }

  onInputChange = (event: any) => {
  	this.keyboard.setInput(event.target.value);
  }

  handleShift = () => {
  	let currentLayout = this.keyboard.options.layoutName;
  	let shitToggle = currentLayout === "default" ? "shift" : "default";

  	this.keyboard.setOptions({
  		layoutName: shitToggle
  	})
  }

}
