import React, {Component} from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import TodoList from '../components/TodoList'
import {getVisibleTodos, getIsFetching} from '../reducers';

class VisibleTodoList extends Component{
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter){
      this.fetchData();
    }
  }

  fetchData(){
    const {filter, fetchTodos} = this.props;
    fetchTodos(filter);
  }

  render() {
    const {toggleTodo,isFetching,todos} = this.props;
    //return loading... if there is no todos
    if(isFetching && !todos.length){
      return <p>Loading...</p>
    }
    return <TodoList todos={todos} onTodoClick={toggleTodo}/>;
  }
}


const mapStateToProps = (state,ownProps) => {
  const filter = ownProps.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
};


export default connect(mapStateToProps,actions)(VisibleTodoList);
