import { connect } from 'react-redux'
import { setUser, searchGistByUser } from '../../redux/actions';
import UserInput from './userInput.component';

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: val => {
      dispatch(setUser(val))
    },
    searchGistByUser: user => {
      dispatch(searchGistByUser(user))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserInput);