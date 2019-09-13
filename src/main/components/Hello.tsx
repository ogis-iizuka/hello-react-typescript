//reactコンポーネントは拡張子tsxとする。

import * as React from 'react'
import './Hello.css'

//コンポーネントのProps定義。
export interface Props {
    name : string;
    enthsiasmLevel?:number　/**option定義*/
}

//関数コンポーネントの定義。通常はpropsで受けると思うが、
//この例はデフォルトを指定したいので、オブジェクトリテラルで型を指定している。
//function Hello(props : Props){
function Hello({name,enthsiasmLevel=1} : Props){
    if(enthsiasmLevel <= 0){
        throw new Error('You could be a litte more enthsiastic.');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMark(enthsiasmLevel)}
            </div>
        </div>
    )
}

function getExclamationMark(numChars : number){
    return Array(numChars+1).join("!");
}

export default Hello;