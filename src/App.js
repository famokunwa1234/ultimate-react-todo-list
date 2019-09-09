import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";

class App extends Component {
  render() {
    return (
      <div>
     <TodoInput />
     <TodoList />




    {/* <div className="container">
     <div className="row">
       <div className="col-4 bg-warning">
          hello
       </div>
       <div className="col-4 bg-danger">
          hello
       </div>
       <div className="col-4 bg-primary">
          hello
       </div>
     </div>
    </div> */}
      </div>
    );
  }
}



export default App;

























// class Counter extends Component {
//   state={
//     count:0
//   };
//   handleIncrease= () => {
//     console.log("called first :", this.state.count);
//     this.setState({
//       count: this.state.count + 1
//     },() => console.log("called second :", this.state.count)
//     );
//     // this.setState({
//     //   count: this.state.count + 2
//     // });
//     console.log("called third :", this.state.count);
//   }
// render() {
//       return (
//         <React.Fragment>
//          <div style={{ margin: "3rem", fontSize: "2rem" }}>
//            <button type="button">decrease</button>
//            <span style={{ margin: "1rem" }}>count : {this.state.count}</span>
//            <button type="button" onClick={this.handleIncrease}>increase</button>
//          </div>
//         </React.Fragment>

//         );
//         }
//        }

  //FORM COMTROL 
// class Form extends Component {
//   state = {
//     firstName: " ",
//     lastName: " ",
//     people: []
//   }
//    handlechange= (event) => {
//   //   console.log(event.target.name);
//   //   console.log(event.target.value);

//   //   const textValue = event.target.value;
//   //   if (event.target.name === "firstName") {
//   //     this.setState({
//   //       firstName: textValue
//   //     });
//   //   } 
//   // };

//   this.setState({
//     [event.target.name]:event.target.value
//   });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     const firstName = this.state.firstName;
//     const lastName = this.state.lastName;
//     console.log(firstName, lastName);
//   };
//   render() {
//     return (
//       <section>
//         <article>
//           <form onsubmit={this.handleSubmit}>
//             <input type="text" name="firstName" value={this.state.firstName} onChange={this.state.handleChange} />
//             <input type="text" name="lastName" value={this.state.lastName} onChange={this.state.handleChange} />
//             <button type="submit">submit</button>
//           </form>
//         </article>

//         <article>
//           <h1>people</h1>
//           <div>{this.state.people}</div>
//         </article>
//       </section>
//     );
//   }
// }


















//MAKE A LIST WITH PROPTYPE
// //install as seperate module prop-types
// //built in type checking to validate props
// //array,bool,function,number,object,string,symbol

// //const person =({ person: {img, name, age, info} }) => {
// const Person = ({ img, name, age, info }) => {
//   return (
//     <article>
//       <img src={img} width="50npx" alt="person" />
//       <h4>name: {name}</h4>
//       <h4>age: {age}</h4>
//       <h4>info: {info}</h4>
//     </article>
//   );
// };

// class PersonList extends Component {
//   state = {
//     People: [
//       {
//         id:1,
//         img: "../img/avatar-1.png",
//         name: "tolu",
//         age:40
//       },
//       {
//         id:2,
//         img: "../img/avatar-2.png",
//         name: "rotimi",
//         age:78
//       },
//       {
//         id:3,
//         img: "../img/avatar-3.png",
//         name: "bolatito",
//         age:98
//       },
//       {
//         id:4,
//         img: "../img/avatar-4.png",
//         name: "ajibade",
//         info: "lord is good all d tme",
//         age: 68
//       },
//     ]
//   };
//   render() {
//     return (
//       <section>
//        {this.state.People.map((item) => (<Person key={item.id}
//        img= {item.img}
//        name= {item.name}
//        age= {item.age}
//        info= {item.info}   
//          /> 
//        ))}
//       </section>
//     );
//   } 
// }

