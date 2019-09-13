import React from 'react';

//Types
it('インタフェース', () => {
  //通常
  interface LabeledValue{
    label : string;
  }

  function printLabel(labeledObj : LabeledValue){
    console.log(labeledObj.label);
  }

  let myObj = {size:10,label:"Size 10 Object!"};
  printLabel(myObj);
  //OptionalProperties出ない場合、属性は必須。
  //printLabel({});

});

it('Optional Properties', () => {
  //Optional Properties
  interface SquareConfig{
    //属性は任意。
    color? : string,
    width? : number
  }

  function createSquare(config : SquareConfig) : {color : string;area : number}{
    let newSquare = {
      color : "White",
      area : 100
    };

    if(config.color){
      newSquare.color = config.color;
    }

    if(config.width){
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({color: "black"})
  expect(mySquare).toEqual({color : "black",area : 100});
  mySquare = createSquare({width: 20})
  expect(mySquare).toEqual({color : "White",area : 400});

});

it('Readonly properties', () => {
  interface Point{
    readonly x : number,
    readonly y : number,
  }

  let p1 : Point = {x : 10,y : 20};
  //compile error.
  //p1.x = 1;
});


it('Function types', () => {
  //関数インタフェースを定義。
  interface SearchFunc{
    (source : string,subString: string) : boolean;
  }

  //アロー関数で関数を定義。
  let mySearch : SearchFunc = (source:string, subString : string) : boolean =>{
    let result : number = source.search(subString);
    //return "";
    return result > -1;
  }

  expect(mySearch("111","1")).toEqual(true);
});


it('Indexed types', () => {
  //添え字付きの型
  interface StringArray{
    [index : number] : string;
  }

  // コンパイルエラー
  // let myArray : StringArray = [111,222];
  let myArray : StringArray = ["111","222"];
  expect(myArray[0]).toEqual("111");
});

it('Extending Interfaces', () => {
  interface Shape{
    color : string;
  }

  interface Square extends Shape{
    sideLength : number;
  }

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;

});
