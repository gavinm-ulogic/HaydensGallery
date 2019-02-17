import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hayden' ;

  dataSet = [
    {
      key: "Crossflow-Turbine",
      title: "Crossflow Turbine",
      images: [
        {url: "Mill-Turbine-Booklet.png", text: "some text about this1111"}, 
        {url: "Mill-Turbine-Booklet2.png", text: "some text about this22222"}
      ],
      imagesParsed: []
    },    
    {
      key: "Life-of-Ply",
      title: "Life of Ply",
      images: [
        {url: "Life-of-Ply.png", text: "some text about thisAAAA"}, 
        {url: "Life-of-Ply2.png", text: "some text about thisBBBBB"}
      ],
      imagesParsed: []
    }
  ]

  currentSection = null;
  imageIndex = 0;
  showFullScreen = false;

  constructor() {
    let self = this;
    for( let section of this.dataSet) {
      for (let image of section.images) {
        section.imagesParsed.push({url: `assets/images/${section.key}/${image.url}`, text: image.text, clickAction: () => this.handleImageClick(self)});
      }
    }

    this.currentSection = this.dataSet[0];
  }

  selectSection(section) {
    this.currentSection = section;
  }

  handleImageChange(newIndex) {
    this.imageIndex = newIndex;
  }

  handleImageClick(context) {
    // alert(context.currentSection.imagesParsed[context.imageIndex].url);
    context.showFullScreen = true;
  }
}
