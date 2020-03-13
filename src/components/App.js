import React, {Component} from 'react';

import SearchBar from "./SearchBar";
import PostList from "./PostList";
import Notice from "./Notice";

class App extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <PostList/>
                <Notice/>
            </div>
        );
    }
}

export default App;