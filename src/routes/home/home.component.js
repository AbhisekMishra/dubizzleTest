import React, {Component} from 'react';
import Header from '../../components/header';
import UserInput from '../../components/user-input';
import GistList from '../../components/gist-list';

class Home extends Component {
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