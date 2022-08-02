import React, { Component } from 'react';
import SubmitButton from "./Submit";

class LocalStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            food: "",
            result: ""
        }
    }

    onChange = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }


    handleSubmitButton = () => {
        this.setState({
            ...this.state, result: <SubmitButton username={this.state.username} favoriteFood={this.state.food} />
        })
    }

    handleClearButton = () => {
        localStorage.clear();
        this.setState({
            ...this.state, username: "", food: ""
        })
    }



    render() {
        return (
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.onChange} placeholder="user name" />
                <input type="text" name="food" value={this.state.food} onChange={this.onChange} placeholder=" favorite food"/>
                <button onClick={this.handleSubmitButton}>Submit</button>
                <button onClick={this.handleClearButton}>Clear</button>
                {this.state.result}
            </div>
        );
    }
}

export default LocalStorage;