import React, { Fragment, Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,
    };
  }

  toggleTrue = () => {
    if (this.state.isTrue) {
      this.setState({
        isTrue: false,
      });
      return;
    }
    this.setState({
      isTrue: true,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>{this.props.propsMsg}</h1>
        {this.state.isTrue && (
          <Fragment>
            <p>The current value is {this.state.isTrue.toString()}</p>
          </Fragment>
        )}
        {this.state.isTrue ? <p>YUP IT'S TRUE</p> : <p>NOPE IT'S NOT TRUE</p>}
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          TOGGLE
        </a>
      </Fragment>
    );
  }
}
