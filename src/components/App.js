import React, {Component} from 'react';

import SearchBar from "./SearchBar";
import PostList from "./PostList";

class App extends Component {

    render() {
        return (
            <div>
                <SearchBar/>
                <PostList/>
            </div>
        );
    }
}

export default App;