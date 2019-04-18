import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../products';

@Component({
    selector: 'app-edit',
    templateUrl: 'edit.page.html',
    styleUrls: ['edit.page.scss']
})
export class EditPage {

    productForm: FormGroup;
    id: any = '';
    product_name: string = '';
    product_description: string = '';
    product_price: number = null;

    constructor(public api: ApiService,
        public loadingController: LoadingController,
        public alertController: AlertController,
        public route: ActivatedRoute,
        public router: Router,
        private formBuilder: FormBuilder) {}


    async getProduct(id) {
        if (this.route.snapshot.paramMap.get('id') == 'null') {
            this.presentAlertConfirm('You are not choosing an item from the list');
        } else {
            const loading = await this.loadingController.create({
                message: 'Loading...'
            });
            await loading.present();
            await this.api.getProduct(id)
                .subscribe(data => {
                    this.id = data.id;
                    this.productForm.setValue({
                        product_name: data.product_name,
                        product_description: data.product_description,
                        product_price: data.product_price
                    });
                    loading.dismiss();
                }, err => {
                    console.log(err);
                    loading.dismiss();
                });
        }
    }

    async onFormSubmit(form: NgForm) {
        await this.api.updateProduct(this.id, form)
            .subscribe(res => {
                let id = res['id'];
                this.router.navigate(['/tabs', { outlets: { details: id } }]);
            }, (err) => {
                console.log(err);
            });
    }

    async presentAlertConfirm(msg: string) {
        const alert = await this.alertController.create({
            header: 'Warning!',
            message: msg,
            buttons: [{
                text: 'Okay',
                handler: () => {
                    this.router.navigate(['']);
                }
            }]
        });

        await alert.present();
    }


}