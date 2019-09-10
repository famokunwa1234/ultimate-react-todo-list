import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";
import { runInThisContext } from 'vm';

class App extends Component {
  state={
    items: [ ],
   //{ id: 1, title: "wake up"}, { id: 2, title: "make breakfast"}
  id:uuid(),
  item: "",
  editItem:false 
  };
    // first step to write b4  2nd
    // handleChange= (e)=>{console.log("handle Change")}
    // second step to write dt let text appear in d form box
  handleChange= e => {
    this.setState({
      item: e.target.value
    });
    };
    // first step to write b4  2nd
  //handleSubmit= (e)=>{console.log("handle Submit")}
  // second step to write dt let text appear in d form box
   handleSubmit = e => {
     e.preventDefault();
     const newItem ={
       id:this.state.id,
       title:this.state.item
     }
     const updatedItems = [...this.state.items,newItem];
     this.setState({
       items:updatedItems,
       item: "",
       id: uuid(),
       editItem: false
     },
      () => console.log(this.state) 
     );
   };

    // first step to write b4  2nd
  //clearList= ()=>{console.log("clear list");
  // second step to write dt let text appear in d form box
clearList = () => {
  this.setState({
    items: []
  });
};
  handleDelete= id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterdItems
    });
};
  handlEdit= id => {
    const filterdItems = this.state.items.filter(item => item.id !== id);
     const selectedItem = this.state.items.find(item => item.id === id);
     this.setState({
       items:filterdItems,
       item:selectedItem.title,
       id:id,
       editItem: true
     })
  };
  
  render() {
    //console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
         <h3 className="text-capitalize text-center">todo input</h3>
         <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}
          />
         <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}
         />
        </div>
         </div>
         </div>
    );
    }
    }

    export default App;


    




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

