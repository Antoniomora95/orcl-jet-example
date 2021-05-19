import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as bootstrap from "ojs/ojbootstrap";

import { FormLayoutElement } from "ojs/ojformlayout";
import { CheckboxsetElement } from "ojs/ojcheckboxset";
import { OptionElement } from "ojs/ojoption";
import 'ojs/ojbutton';
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import { ojButtonEventMap } from "ojs/ojbutton";

class DashboardViewModel {
  private currentId: ko.Observable<number>;
  private checkList: ko.ObservableArray<{}>;
  dataProvider: any;


  constructor() {
    this.checkList = ko.observableArray([
      { id: 1, value: "laptop" },
      { id: 2, value: "tablet" },
      { id: 3, value: "smartphone" },
    ]);
    this.currentId = ko.observable(0)

    this.dataProvider = new ArrayDataProvider(this.checkList, {
      keyAttributes: "id",
    });

    this.clickEvent = this.clickEvent.bind(this)
  }



  connected(): void {
    // call this when loaded
    this.setCurrentId();
    document.title = "Dashboard module";
  }


  setCurrentId(){
    // length will change in the second attempt so use it only once
    let length = this.checkList().length;
    let currentId = this.currentId();

    currentId === 0 ? (this.currentId(length)) : this.currentId ( currentId +1 );
    console.log('executed', this.currentId())
  }
length
  public clickEvent(event: ojButtonEventMap['ojAction']) {
    this.setCurrentId();
  }
  getCurrentId() {
    console.log('i think it is executed a lot')
    return this.currentId;
  }


}

bootstrap.whenDocumentReady().then(() => {
  let element = document.getElementById("dashboard-container");
  console.log(element, 'dashboard-container element')
  ko.applyBindings(new DashboardViewModel(), element);
});

export = DashboardViewModel;
