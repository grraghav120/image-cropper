import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DataService } from '../data.service';
@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss'],
})
export class UploadDialogComponent implements OnInit {
  msg:any;
  needCrop:boolean=false;
  maxWidthCrop:any=200;
  maxHeightCrop:any=200;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  signForm!: FormGroup;
  selectedFile!: File;
  signUploadName: any;
  imageUrl: any;
  signUploadExt: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataServ:DataService,
  ) {this.msg=data;}
  ngOnInit(): void {
    this.signForm = new FormGroup({
      signimage: new FormControl('', Validators.required),
    });
    this.maxHeightCrop=200;
    this.maxWidthCrop=200;
    this.needCrop=false;
  }

  onPick(event: any) {
    this.imageChangedEvent = event;
    this.maxHeightCrop=200;
    this.maxWidthCrop=200;
    this.needCrop=false;
    if (event.target.files.length > 0) {
      this.selectedFile = <File>event.target.files[0];

      if ( this.selectedFile.type === 'image/jpeg' || this.selectedFile.type === 'image/png') {

        if((this.selectedFile.size/1024)>100){
          this.signUploadName = '';
          this.imageUrl='';
          this.signUploadExt='';
          alert('Image size should be less than 100KB');
          this.signForm.patchValue({ signimage: '' });
          return;
        }

        this.signUploadName = this.selectedFile.name;
        let arr=this.selectedFile.type.split('/');
        this.signUploadExt=arr[1];
        // console.log(this.signUploadExt);
        const reader = new FileReader();
        reader.onload = (event:any) => {
          this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.selectedFile);
        return;
      }

      else {
        this.signUploadName = '';
        this.imageUrl='';
        this.signUploadExt='';
        alert('Image type is not Supported');
        this.signForm.patchValue({ signimage: '' });
        return;
      }
    }
    
    else {
      this.signUploadName = '';
      this.imageUrl='';
      this.signUploadExt='';
      console.log('No file choosen');
      return;
    }

  }

  needCropButton(){
    this.needCrop=true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
  onUpload(){
    if(!this.needCrop) this.dataServ.getImage(this.imageUrl);
    else this.dataServ.getImage(this.croppedImage);
  }

}
