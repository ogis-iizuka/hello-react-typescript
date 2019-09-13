import React from 'react';
import { StringLiteral } from '@babel/types';

//Types
it('関数', () => {
  //関数の型を定義
  //引数にnumber,numberを取り、戻り値がnumberの関数。
  //関数の型定義では、引数と戻り値の間を＝＞でつなぐ。（アロー関数と混同しそう、、）
  let myAdd : (x:number ,y:number) => number;

  myAdd = function(x:number,y:number) : number{
    return 1;
  }

  //型推論されるので、右辺の型定義は必須ではない。
  myAdd = function(x,y)  {
    return 1;
  };
  myAdd = (x,y) =>{
    return 1;
  }

  //型定義と実装を、つなげて書くとこんな感じ
  let myAdd2 : (x:number,y:number) => number = (x,y)=>1;

});

it('デフォルトパラメータ', () => {

  function buildName(firstName : string,lastName = "defaultName") {
    return firstName + " " + lastName;
  }

  expect(buildName("Eiji")).toEqual("Eiji defaultName");
  expect(buildName("Eiji",undefined)).toEqual("Eiji defaultName");
  expect(buildName("Eiji","Iizuka")).toEqual("Eiji Iizuka");

  //型の定義としてはOptional Parameter扱いになる
  let funcType : (x: string,y?: string) => string = buildName;
  expect(funcType("Eiji")).toEqual("Eiji defaultName");

});

//可変長引数
it('Rest Parameter', () => {

  function buildName(firstName : string,...restOfName : string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  expect(buildName("Eiji")).toEqual("Eiji ");
  expect(buildName("Eiji","Iizuka")).toEqual("Eiji Iizuka");
  expect(buildName("1","2","3")).toEqual("1 2 3");

});

//オーバーロードは個別にシグニチャを定義する感じでちょっとトリッキー。
it('オーバーロード', () => {

  //インタフェースとして関数の定義を提供する
  function format(value : string) : string;
  function format(value : number) : string;

  //実装はどちらでも受けれるように実装
  function format(value : string | number) : string{
    if(typeof(value) === "string"){
      return "#" + value + "#";
    }
    if(typeof(value) === "number"){
      return "#" + value.toPrecision() + "#";
    }
    throw new Error();
  }

  expect(format("Eiji")).toEqual("#Eiji#");
  expect(format(1)).toEqual("#1#");

});
