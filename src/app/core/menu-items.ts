 

  import { Injectable } from '@angular/core';

  /*
   * Menu interface
   */
  export interface Menu {
      state: string;
      name?: string;
      type?: string;
      icon?: string;
      children?: Menu[];
  }
  
  const HeaderOneItems= [
   
        {
            state:'populares',
            name:"Populares",
            type:"link",
            icon: 'headset_mic'
        } ,
        {
            state:'niños',
            name:"Niños",
            type:"link",
            icon: 'headset_mic'
        } ,
        {
            state:'teatro',
            name:"Teatro",
            type:"link",
            icon: 'headset_mic'
        } ,
        {
          state:'home/populares',
          name:"Mejores",
          type:"sub",
          icon: 'headset_mic'
      },
        {
            state:'home/2019',
            name:"2019",
            type:"sub",
            icon: 'headset_mic'
        } ,
        {
            state:'home/2018',
            name:"2018",
            type:"sub",
            icon: 'headset_mic'
        } ,
        {
            state:'home/2017',
            name:"2017",
            type:"sub",
            icon: 'headset_mic'
        } ,
        {
            state:'home/2016',
            name:"2016",
            type:"sub",
            icon: 'headset_mic'
        } ,
        {
            state:'home/2015',
            name:"2015",
            type:"sub",
            icon: 'headset_mic'
        } ,

  ];
  
  const FooterOneItems= [
    {
      state:'home/populares',
      name:"Populares",
      type:"link",
      icon: 'headset_mic'
  } ,
  {
      state:'home/niños',
      name:"Niños",
      type:"link",
      icon: 'headset_mic'
  } ,
  {
      state:'home/teatro',
      name:"Teatro",
      type:"link",
      icon: 'headset_mic'
  } ,
  {
    state:'home/populares',
    name:"Mejores",
    type:"sub",
    icon: 'headset_mic'
},
  {
      state:'home/2019',
      name:"2019",
      type:"sub",
      icon: 'headset_mic'
  } ,
  {
      state:'home/2018',
      name:"2018",
      type:"sub",
      icon: 'headset_mic'
  } ,
  {
      state:'home/2017',
      name:"2017",
      type:"sub",
      icon: 'headset_mic'
  } ,
  {
      state:'home/2016',
      name:"2016",
      type:"sub",
      icon: 'headset_mic'
  } ,
  {
      state:'home/2015',
      name:"2015",
      type:"sub",
      icon: 'headset_mic'
  } 

 
  ]
  
  @Injectable()
  export class MenuItems {
  
     /*
      * Get all header menu
      */
     getMainMenu(): Menu[] {
        return HeaderOneItems;
     }
  
     /*
      * Get all footer menu
      */
     getFooterOneMenu(): Menu[] {
        return FooterOneItems;
     }
  }
  