import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reduce-words',
  templateUrl: './reduce-words.component.html',
  styleUrls: ['./reduce-words.component.scss']
})

export class ReduceWordsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    },
    replaceTexts: {
      selectFileBtn: 'Select Text File',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  fileUploaded(event){
    if(event.status===200){
      this.router.navigateByUrl('/data-list')
    }
  }
}