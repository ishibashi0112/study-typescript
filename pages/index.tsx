import type { NextPage } from 'next'

// booleanリテラルtype
const foo: true = true

// stringリテラルtype
const foge:"foo" = "foo"

// numberリテラルtype
const num:  2 = 2

//ワイドニングの性質
const bar = "test" as const
let aaa = bar

const bbb: number[] = [1,2,3]
const ccc: (number | string | boolean)[] = [1,"test",true]

//Tuple型　要素と数も指定
const ddd:[number,string] = [1,"test"]

//unknownm型
const eee: unknown = "test"
if(typeof eee === "string"){
  eee.substr(2)
}

//void型
function test():void{
  alert("test")
}
const test2 = ():void=>{
  alert("test")
}
const test3: ()=> void = ()=>{
  alert("test")
}

const Home: NextPage = () => {
  return (<div>test</div>)
}

export default Home
