import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../../providers/contacts.service';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  // contacts: string[] = [];
  contactsPromise: Promise<void>;
  contacts;


  constructor(private router: Router, private contactService: ContactsService, private platform: Platform ) { 

    this.platform.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.contactService.getContacts()
      .then((results)=>{
        this.contacts=results;
        console.log(JSON.stringify(this.contacts));
      })
      .catch((error)=>{
        console.log(error);
      })
    });
  }

  ngOnInit() {

    // this.contactsPromise = this.contactService.getContactsFromAddressbook()
    //   .then((results: any[]) => {
    //     this.contacts = results;
    //     console.log(this.contacts)
    //   })
    //   .catch((e: Error) => {
    //     console.error(e.message);
    //   });

    
  }
}
