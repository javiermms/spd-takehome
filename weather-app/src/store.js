import React from "react";


export default class Store extends React.compnenents {

    constructir(props) {
        super(props);
        //Main App State
        this.state = {
            appName: "Moody Weather"

        }
    }

    render() {
        return React.Children.map(this.props.childern, (child) => {
            return React.cloneElement(child, { ...this.state })
        });

    }
}