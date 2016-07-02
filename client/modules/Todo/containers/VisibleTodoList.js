
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import {getVisibleTodos} from '../reducers';


const mapStateToProps = (state,ownProps) => ({
  todos: getVisibleTodos(state, ownProps.filter)
});

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id))
//   }
// });

const VisibleTodoList = connect(
   mapStateToProps,
   {onTodoClick:toggleTodo}
)(TodoList);

export default VisibleTodoList