import {Component, OnInit, Input, Renderer2, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-files-uploader',
  templateUrl: './files-uploader.component.html',
  styleUrls: ['./files-uploader.component.scss']
})
export class FilesUploaderComponent implements OnInit {
  files: File[];
  displayLabel: string;

  @Input() multiple: boolean;
  @Output() onUpload: EventEmitter<any> = new EventEmitter();
  constructor(
      public element: ElementRef,
      public render: Renderer2
  ) { }

  ngOnInit() {
    this.displayLabel = 'Browse...';
    if(this.multiple){
      const childElement = this.element.nativeElement.children[0].children[1];
      this.render.setAttribute(childElement,'multiple', 'true');
    }
  }

  handleFileInput(filesInput){
    if(filesInput && filesInput.length > 1) {
      this.displayLabel = filesInput.length+ ' files Selected';
    }else if(filesInput && filesInput.length === 1){
      this.displayLabel = filesInput[0].name;
    }else {
      this.displayLabel = 'Browse...';
    }
    console.log(filesInput);
    this.files = filesInput;
    this.onUpload.emit(filesInput);
  }

}
