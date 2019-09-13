import * as React from 'react'
import './HelloClass.css'

//コンポーネントのProps定義。
export interface Props {
    name : string;
    enthsiasmLevel?:number　/**option定義*/
}

//コンポーネントのState定義。
interface State {
    currententhsiasm : number;
}

//クラスコンポーネント。
//React.Componentを継承。ジェネリクスで、Propsの型を指定。
//型引数：第一引数はPropsの型、第二引数はstateの型。
class HelloClass extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
            currententhsiasm : props.enthsiasmLevel || 1
        }
    }

    //typescriptの場合、イベントハンドラのthis束縛問題はアローファンクションで解決する。
    onClickInclement = () => {
        this.setState((state,props)=>({
            currententhsiasm : state.currententhsiasm + 1
        }));
    } 

    onClickDeclement = () => {
        this.setState((state,props)=>({
            currententhsiasm : state.currententhsiasm - 1
        }));
    } 

    render(){
        //Objectの分割代入　https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
        const { name } = this.props;

        if(this.state.currententhsiasm <= 0){
            throw new Error('You could be a litte more enthsiastic.');
        }
    
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMark(this.state.currententhsiasm)}
                </div>
                <button onClick={this.onClickInclement}>inclement</button>
                <button onClick={this.onClickDeclement}>decrement</button>
            </div>
        )
    }
}

function getExclamationMark(numChars : number){
    return Array(numChars+1).join("!");
}

export default HelloClass