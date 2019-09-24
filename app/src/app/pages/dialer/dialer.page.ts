import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import Keyboard from 'simple-keyboard';
// import { KeyboardComponent } from '../../components/keyboard/keyboard.component';

@Component({
	selector: 'dialer',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './dialer.page.html',
	styleUrls: ['./dialer.page.scss', "../../../../node_modules/simple-keyboard/build/css/index.css",],
})
export class DialerPage implements OnInit {

	value: string = "";
	keyboard: Keyboard;

	constructor() { }

	ngOnInit() {}

	ngAfterViewInit() {
		this.keyboard = new Keyboard({
			onChange: input => this.onChange(input),
			onKeyPress: button =>this.onKeyPress(button),
			mergeDisplay: true,
			layoutName: "numbers",
			theme: "hg-theme-default hg-layout-default myTheme",
			layout: {
				default: [
				"q w e r t y u i o p",
				"a s d f g h j k l",
				"{shift} z x c v b n m {backspace}",
				"{numbers} {space} {ent}"
				],
				shift: [
				"Q W E R T Y U I O P",
				"A S D F G H J K L",
				"{shift} Z X C V B N M {backspace}",
				"{numbers} {space} {ent}"
				],
				numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"]
			},
			display: {
				"{numbers}": "123",
				"{ent}": "return",
				"{escape}": "esc ⎋",
				"{tab}": "tab ⇥",
				"{backspace}": "⌫",
				"{capslock}": "caps lock ⇪",
				"{shift}": "⇧",
				"{controlleft}": "ctrl ⌃",
				"{controlright}": "ctrl ⌃",
				"{altleft}": "alt ⌥",
				"{altright}": "alt ⌥",
				"{metaleft}": "cmd ⌘",
				"{metaright}": "cmd ⌘",
				"{abc}": "ABC"
			},
			buttonTheme: [
			{
				class: "hg-red",
				buttons: "4 5 6"
			},
			{
				class: "hg-highlight",
				buttons: "Q q"
			}
			]

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

		if (button === "{numbers}" || button === "{abc}") this.handleNumbers();
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

	handleNumbers =()=> {
		let currentLayout = this.keyboard.options.layoutName;
		let numbersToggle = currentLayout !== "numbers" ? "numbers" : "default";

		this.keyboard.setOptions({
			layoutName: numbersToggle
		});
	}

}
