import { Injectable } from '@angular/core';
import { Contact, ContactFieldType, Contacts, IContactField, IContactFindOptions } from '@ionic-native/contacts';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {
	public allContacts: any[]
	public contactList;
  everyone;

  constructor(private contacts: Contacts, private platform: Platform) {
  this.everyone=this.contacts.find(['displayName', 'name', 'phoneNumbers'], {filter:"",multiple:true, hasPhoneNumber:true}) 
  console.log(JSON.stringify(this.everyone));
}

  getContacts() {
    return this.everyone;
  }

// getContactsFromAddressbook(): Promise<string[]> {
//     const getContacts = (): Promise<Contact[]> => {
//       if (!this.platform.is('cordova')) {
//         return Promise.reject(new Error('Cannot get contacts: not cordova.'));
//       }
 
//       const fields: ContactFieldType[] = ["name", "displayName","phoneNumbers"];
//       const options: IContactFindOptions = {
//         filter: "Test",
//         multiple: true,
//         desiredFields: ["name"],
//         hasPhoneNumber:true}
//       return this.contacts.find(fields, options);
//     };

 
//     return new Promise((resolve, reject) => {
//       getContacts()
//         .then((contacts) => {
//           const arrayOfArrays: any[] = contacts
//             .map((contact) => {
//             	console.log("THIS IS SUPPOSED TO BE A CONTACT: "+ JSON.stringify(contact))
//               return contact
//             });
//           const flattenedArray: any[] = [].concat(...arrayOfArrays);
//           // const uniqueArray: string[] = [...new Set(flattenedArray)];
//           resolve(flattenedArray);
//         })
//         .catch((e: Error) => {
//           reject(e);
//         });
//     });
//   }


}
