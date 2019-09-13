import React from 'react';

//引数、戻り値に型アノテーションをつける。
function taxed(amount :number) : number {
  return amount * 1.1;
}

it('型アノテーション', () => {
  expect(taxed(1)).toEqual(1.1);
  expect(taxed(2)).toEqual(2.2);

  // let calc : string;
  // calc = taxed(1); //compile error.
});

//Types
it('型の網羅', () => {
  //boolean
  let flag : boolean = false;
  //number
  let num : number = 1;
  //string
  let str : string = "111";

  //array
  let array : number[] = [1,2,3];
  array.push(4)
  //compile error.
  //array.push("4")

  //arrayその２
  let array2 : Array<Number> = [1,2,3]
  array2.push(4)
  //compile error.
  //array2.push("4")

  //tuple 複数の方の異なる配列を表現する
  let x : [string,number,boolean];
  x = ["111",222,false];
  //compile error.
  //x = [111,222,false];
  //x = ["111","222",false];
  //宣言した型が全部設定されないとコンパイルエラー。
  //x = ["111"];

  //添え字付きでアクセスすると、キャストされる
  let str2 : string = x[0];
  //compile error.
  // let num2 : number = x[0];

  //any型　なんでも設定できる。
  let any1 : any = "xxx";
  any1 = 1;
  any1 = false;

  //unknown型 any型だが利用する際は設定値に対する型チェックが入る
  //コンパイルエラー toFixedはnumber型にしかない
  //let provablyNumbers : unknown[] = ["1"];
  //OK（VSCode上は、おそらくtsconfig.jsonの設定によりコンパイルエラーになっている？）
  let provablyNumbers : unknown[] = [1];
  provablyNumbers[0].toFixed(1);

  //void 型が全くないことを指す。
  let voidFunc = () : void =>{
    console.log("this is void func.")
  };
  //error.
  //let retVal : string = voidFunc();

  //never 発生しない値を指す。
  //無限ループや例外スローが該当する。
  let neverFunc = () : never =>{
    throw new Error();
  };

  try{
    //error.
    let retVal : string = neverFunc();
  }catch(e){
  }

  //object型
  let object = {
    foo : "foo",
    bar : 1
  }

  //enum
  enum Color {RED=1,GREEN=2,BLUE=3}
  let c: Color = Color.GREEN;

  //Type Assertion　いわゆるキャストに相当。
  let someValue : any = "this is a string."

  //compile errorにはならないが保管が聞かない
  //let strLength : number = someValue.length;
  //これはJSXと衝突するので、TSXファイルでは使用できません。
  //let casted : string = <string>someValue;
  //そのためtsxファイルでは asを使ってキャストします。
  let casted : string = someValue as string;
  let strLength : number = casted.length;
  expect(strLength).toEqual(17);
});
