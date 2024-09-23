import { Component, OnInit } from '@angular/core';
import { CvService } from './cv.service';
import { Experience } from '../../shared/models/Experience';
import { BehaviorSubject } from 'rxjs';
import { CvData } from '../../shared/models/CvData';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public cvData: CvData = {};
  
  constructor(private cvService: CvService) {}

  ngOnInit(): void {   
    this.getData();
  }

  private getData(): void { 
    this.cvService.getData('pz').subscribe((resp: CvData) =>
    { 
        this.cvData = resp;
    });
  }
}
