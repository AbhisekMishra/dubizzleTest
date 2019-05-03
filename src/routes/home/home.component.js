import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header';
import UserInput from '../../components/user-input';
import GistList from '../../components/gist-list';

class Home extends Component {
    static propTypes = {
        gists: PropTypes.arrayOf.isRequired,
        user: PropTypes.string.isRequired,
        isFetching: PropTypes.bool.isRequired,
    }
    render() {
        const { gists, user, isFetching } = this.props;
        return (
            <div>
                <Header />
                <UserInput />
                {user && <GistList gists={gists} isFetching={isFetching} />}
            </div>
        );
    }
}

export default Home;