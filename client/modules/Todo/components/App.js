import React, {Component} from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component{
  render(){
    return(
       <div>
         <AddTodo />
         <VisibleTodoList />
         <Footer />
       </div>
    )
  }
}

export default App
