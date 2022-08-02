import React, { Component } from "react";

function WithLocalStorage(WrappedComponent, HandlerHoc) {

    return class extends Component {

        componentDidMount() {
            HandlerHoc(this.props.username, this.props.favoriteFood)
        }

        render() {
            return <WrappedComponent />
        }

    }
}

export default WithLocalStorage;