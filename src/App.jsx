import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Fruits from './Fruits'
import Prophets from './Prophets'
import BookStore from './BookStore'

function App() {
  // const [count, setCount] = useState(0)
  const actors = ['Ibrahim', 'Yusuf', 'Isa', 'Musa', 'Omar', 'Usman', 'Ali']
  
  const books = [
    {id: 1, name: 'Physics', price: 120},
    {id: 1, name: 'Math', price: 130},
    {id: 1, name: 'Chemistry', price: 120},
    {id: 1, name: 'Biology', price: 150},
  ]

  const fruits = [
    {name: 'Apple', price: 280, quantity: '1 kg'},
    {name: 'Orange', price: 300, quantity: '1 kg'},
    {name: 'Guava', price: 100, quantity: '1 kg'},
    {name: 'Dates', price: 800, quantity: '1 kg'},
  ];

  return (
    <>
      <h1>Vite + React</h1>
      {
        <BookStore books={books}></BookStore>
      }

      {
        fruits.map(fruit => <Fruits fruit={fruit}></Fruits>)
      }
      <Prophets name={"Muhammad Sallahua'laihi Wa Sallam"}></Prophets>
      {
        actors.map(actor => <Prophets name={actor}></Prophets>)
      }
      {/* <Todo Task='Learn React' isDone={true}></Todo>
      <Todo Task='Core Concepts' isDone={false}></Todo>
      <Todo Task='Try Jsx' isDone={true}></Todo>
      <DisplayPhone name="phone" price="5000"></DisplayPhone>
      <DisplayPhone name="Laptop" price="20000"></DisplayPhone>
      <DisplayPhone name="Watch" price="2000"></DisplayPhone>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student></Student>
      <Student ></Student>
      <Fruits></Fruits> */}
    </>
  )
}

const DisplayPhone = (props) =>{
  // console.log(props);
  return (
    <h3 style={{color: 'goldenrod'}}>Device-Name: {props.name} Price: {props.price}</h3>
  )
}

const Person = () => {
  const age = 25;
  const money = 100;
  const person = {name: 'Jahid', age: 20};
  return <h3>I am {person.name} with : {age + money} years old</h3>
}

// const [grade, score] = {grade: 7, score: 99};
const Student = ({grade = 1, score = 0}) => {
  console.log(grade, score);
  return (
    <div className='student'>
      <h4>This is a Student</h4>
      <p>grade: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}

// function Fruits(){

//   return (
//     <div style={{padding: '20px', margin: '20px', border: '3px solid tomato', borderRadius: '10px'}}>
//       <h4>This is a Person</h4>
//       <p>name:</p>
//       <p>age:</p>
//     </div>
//   )
// }

export default App
