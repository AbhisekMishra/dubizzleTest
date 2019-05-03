import { connect } from 'react-redux'
import Home from './home.component';

const mapStateToProps = state => {
  return {
    gists: state.gists,
    user: state.user,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);