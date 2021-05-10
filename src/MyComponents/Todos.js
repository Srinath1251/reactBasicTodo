import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let todoStyle = {
        minHeight : "70vh",
        margin : "40px auto"
    }
    return (<>
        <div className="container my-4" style={todoStyle}>
            <h2 className="my-3">Todos List</h2>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((item) => {
                    return (<TodoItem todo={item} key={item.sno} onDelete={props.onDelete} />)
                })
            }

            <h2 className="my-3">Courses List</h2>
            {props.courses.length === 0 ? "No courses found" :
                props.courses.map((item) => {
                    return (<>
                        <h3>{item.title}</h3>
                        <button key={item.sno} className='btn btn-danger btn-sm' onClick={() => { props.onCourseDelete(item) }}>DELETE</button>
                        <button className="btn btn-sm btn-info">SHOW</button>
                    </>)
                })
            }
        </div>
        </>
    )
}
