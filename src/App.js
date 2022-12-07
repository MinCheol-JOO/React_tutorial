import logo from './logo.svg';
import './App.css';
import Customer from './components/customer'
import { PureComponent } from 'react';

const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'하이',
  'birthday':'961222',
  'gender' : '남자',
  'job': '대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'sae',
  'birthday':'961222',
  'gender' : '남자',
  'job': '대학생'
},

{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':'bom',
  'birthday':'961222',
  'gender' : '남자',
  'job': '대학생'
}]

function App() {
  return (
    customers.map(c =>{
      return(
        <Customer
        key = {c.id}
        id = {c.id}
        image = {c.image}
        name = {c.name}
        birthday = {c.birthday}
        job = {c.job}/>
      )
    }
    )
  )
}
  
//     <div>
//     <Customer
//     id = {customers[0].id}
//     image = {customers[0].image}
//     name = {customers[0].name}
//     birthday = {customers[0].birthday}
//     gender = {customers[0].gender}
//     job = {customers[0].job}
//     ></Customer>
//     <Customer
//     id = {customers[0].id}
//     image = {customers[0].image}
//     name = {customers[0].name}
//     birthday = {customers[0].birthday}
//     gender = {customers[0].gender}
//     job = {customers[0].job}
//     ></Customer>

//     <Customer
//     id = {customers[0].id}
//     image = {customers[0].image}
//     name = {customers[0].name}
//     birthday = {customers[0].birthday}
//     gender = {customers[0].gender}
//     job = {customers[0].job}
//     ></Customer>

// </div>
export default App;
