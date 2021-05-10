import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react' // this is usestate hook.For updating 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // In the begining check the local storage of the todoList
  let initTodo;
  if (localStorage.getItem("todosList") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todosList"));
  }

  const onDelete = (todo) => {
    console.log('You have clicked on delete Button', todo);
    setTodos(todosList.filter((e) => {
      return e !== todo;
    }
    ));
    localStorage.setItem("todosList", JSON.stringify(todosList));
  }

  const addTodo = (title, desc) => {
    console.log('Adding Todo item', title, desc);
    let sno;
    if (todosList.length === 0) {
      sno = 0;
    } else {
      sno = todosList[todosList.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todosList, myTodo]);
    console.log(myTodo);
  }

  // setTodos is a function which updates the list
  const [todosList, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todosList));
  }, [todosList])

  const onCourseDelete = (course) => {
    setCourses(courses.filter((e) => {
      return e !== course;
    }));
  }

  const [courses, setCourses] = useState([
    {
      sno: 1,
      title: 'PHP',
      desc: 'This is a course on PHP development'
    },
    {
      sno: 2,
      title: 'Python',
      desc: 'This is a course on Python Django Framework'
    },
  ]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (<>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todosList} onDelete={onDelete} courses={courses} onCourseDelete={onCourseDelete} />
            </>)
          }}>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
