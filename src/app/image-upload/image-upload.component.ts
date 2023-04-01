import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
import { DataService } from './data.service';
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit{
  UploadForm!:FormGroup;
  isDownload:boolean=false;
  imgSrc: string='';
  constructor(public dialog: MatDialog,private dataServ:DataService){ }
  ngOnInit(): void {
    this.UploadForm = new FormGroup({
      sign:new FormControl('',Validators.required),
    });
  }

  openDialog(msg:any) {
    const dialogRef = this.dialog.open(UploadDialogComponent,
      {
        data: msg //transfer data to the upload component
      });
    dialogRef.afterClosed().subscribe(result => {
      if(result!==true){
        console.log('No file choosen');
        this.imgSrc='';
        this.dataServ.profilePic='';
        this.UploadForm.reset();
      }
      else{
        this.imgSrc=this.dataServ.profilePic;
      }
    });
  }

  onDownloadImage(){
    const link=document.createElement('a');
    link.href=this.imgSrc;
    link.download='ThankYou.jpeg';
    link.click();
    setTimeout(() => {
      this.isDownload=true;
    }, 2000);
  }

  onReupload(btn:any){
    if(btn==='R'){
      this.isDownload=false;
      this.imgSrc='';
      this.dataServ.profilePic='';
      this.UploadForm.reset();
        
    }
    else{
      const link=document.createElement('a');
      link.href='https://github.com/grraghav120/ImgUploadAndCrop';
      link.click();
    }
  }

}
