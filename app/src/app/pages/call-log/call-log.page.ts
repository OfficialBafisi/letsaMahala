import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'

import { CallLog, CallLogObject } from '@ionic-native/call-log/ngx';


@Component({
	selector: 'call-log',
	templateUrl: './call-log.page.html',
	styleUrls: ['./call-log.page.scss'],
})
export class CallLogPage implements OnInit {

	filters: CallLogObject[];
	logsFound: any;
	logsFoundText: string;
	listStyle: string;

	constructor( 
		private callLog: CallLog,
		private platform: Platform ) { 

		this.platform.ready().then(()=>{
			this.callLog.hasReadPermission().then(
				hasPermission => {
					if(!hasPermission){
						this.callLog.requestReadPermission().then(results => {
							this.getContacts("type", "1","===");
						})
						.catch((e=> alert("requestReadPermission: "+ JSON.stringify(e))))
					}
					else{
						this.getContacts("type","1","==");
					}
				})
			.catch(e=> alert("hasPermission: "+ JSON.stringify(e) ))
		})

	}

	ngOnInit() {
	}

	getContacts(name, value, operator) {
		if (value == '1') {
			this.listStyle = "Incoming Calls";
		}
		else if (value == '2') {
			this.listStyle = "Outgoing Calls"
		}
		else if (value='5') {
			this.listStyle="Rejected Calls"	
		}

		//Get Yesterday time
		let today = new Date();
		let yesterday = new Date(today);
		yesterday.setDate(today.getDate() - 1);
		let fromTime = yesterday.getTime();

		this.filters = [{
			name: name,
			value: value,
			operator: operator,
		},
		{
			name: "date",
			value: fromTime.toString(),
			operator: ">="
		}];

		this.callLog.getCallLog(this.filters)
		.then((results)=> {
			this.logsFoundText = JSON.stringify(results);
			this.logsFound = results;
		})
		.catch(e=> alert(" LOG: "+ JSON.stringify(e)))


	}

}

