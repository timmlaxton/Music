import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup,} from 'react-bootstrap';
import {SearchOutlined} from 'react-icons/'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-title">Music Master</div>
            <FormGroup>
                <InputGroup> 
                <FormControl
                type="text"
                placeholder="Search for an Artist">
                </FormControl>
                <button>Search</button>
                </InputGroup>
            </FormGroup>
            <div className="Profile">
            <div>Artist Picture</div>
            <div>Artist Name</div>
            </div>
            <div className="Gallery">
                Gallery
            </div>
            </div>
            
        )
            
    }
}

export default App;