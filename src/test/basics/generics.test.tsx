import React from 'react';
import { StringLiteral } from '@babel/types';

it('Generics', () => {
  function identity<T>(args : T) : T {
    return args;
  }

  expect(identity("aaa")).toEqual("aaa");
  expect(identity(1)).toEqual(1);
  expect(identity({"foo" : "bar"})).toEqual({"foo" : "bar"});

  //どちらでもOK
  //function loggingIdentity<T>(args : T[]) : T[] {
  function loggingIdentity<T>(args : Array<T>) : Array<T> {
    console.log(args.length)
    return args;
  }
  expect(loggingIdentity(["aaa","bbb"])).toEqual(["aaa","bbb"]);
});

it('Genericsを用いた型宣言', () => {
  function identity<T>(args : T) : T {
    return args;
  }
  //Genericsによる型定義
  //やり方は関数定義と同じ。
  let myIdentity : <T>(args:T) => T = identity;
  
  //interfaceにGenericsを設定した例
  //1.メソッドにGenerics
  interface GenericIdentityFn {
    <T>(args : T) : T;
  }
  let myIdentity2 : GenericIdentityFn = (t)=>t;

  //2.型宣言にGenerics
  interface GenericIdentityFn2<T> {
    (args : T) : T;
  }
  let myIdentity3 : GenericIdentityFn2<string> = (t)=>t;

});


it('Genericsを用いたクラス定義', () => {
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = (x:number,y:number)=>x+y;

});