import React from 'react';
import { StringLiteral } from '@babel/types';

//Types
it('クラス', () => {

  //可視性はpublic/protected/private
  //Abstractクラスもある（Javaと同じ）
  class Greeter {
    //Member変数
    private greeting : string;
    //コンストラクタ
    constructor(message : string){
      this.greeting = message;
    }
    //メソッド
    //デフォルトはpublic.
    greet() : string{
      return "Hello," + this.greeting;
    }
  }

  let greeter = new Greeter("world");
  expect(greeter.greet()).toEqual("Hello,world")
});


//Getter・Setter
it('Getter・Setter', () => {

  class Employee {
    //Member変数
    private _fullName : string = "";

    get fullName() : string{
      return this._fullName;
    }

    set fullName(fullName : string){
      this._fullName = fullName.toUpperCase();
    }
  }

  let employee = new Employee();
  employee.fullName = "aaaa"
  expect(employee.fullName).toEqual("AAAA")
});
