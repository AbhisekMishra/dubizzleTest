import { connect } from 'react-redux'
// import { toggleTodo } from '../../redux/actions';
import Home from './home.component';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
        return todos
  }
}

const mapStateToProps = state => {
  return {
    gists: state.gists,
    user: state.user,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);