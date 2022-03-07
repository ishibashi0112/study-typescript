import type { NextPage } from 'next'

let foo:number =123
function double(x:number):number | undefined{
  if(x<0){
    return
  }
  return x * 2
}

let hoge = {} as {bar:number}
hoge.bar = 1


const boo: boolean = false
const str: string = "test"
const num: number = 123
const nu: null = null
const und: undefined = undefined


const Home: NextPage = () => {
  return (<div>test</div>)
}

export default Home
