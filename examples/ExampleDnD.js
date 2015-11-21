import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext }from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import { DnDItem, DropPositions } from "../src/index";

@DragDropContext(HTML5Backend)
class ExampleDnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      somethings: [
        {id: "1", name: "somethigs1"},
        {id: "2", name: "somethigs2"},
        {id: "3", name: "somethigs3"},
        {id: "4", name: "somethigs4"},
        {id: "5", name: "somethigs5"},
        {id: "6", name: "somethigs6"}
      ],
      message: ""
    };
  }

  dropAction(position, sourceId, targetId) {
    const {
      TOP_LEFT,
      TOP_CENTER,
      TOP_RIGHT,
      MIDDLE_LEFT,
      MIDDLE_CENTER,
      MIDDLE_RIGHT,
      BOTTOM_LEFT,
      BOTTOM_CENTER,
      BOTTOM_RIGHT
    } = DropPositions;

    switch (position) {
    case TOP_LEFT:
      this.setState({ message: `TOP_LEFT ${sourceId} dropped on ${targetId}` });
    case TOP_CENTER:
      this.setState({ message: `TOP_CENTER ${sourceId} dropped on ${targetId}` });
    case TOP_RIGHT:
      this.setState({ message: `TOP_RIGHT ${sourceId} dropped on ${targetId}` });
    case MIDDLE_LEFT:
      this.setState({ message: `MIDDLE_LEFT ${sourceId} dropped on ${targetId}` });
    case MIDDLE_CENTER:
      this.setState({ message: `MIDDLE_CENTER ${sourceId} dropped on ${targetId}` });
    case MIDDLE_RIGHT:
      this.setState({ message: `MIDDLE_RIGHT ${sourceId} dropped on ${targetId}` });
    case BOTTOM_LEFT:
      this.setState({ message: `BOTTOM_LEFT ${sourceId} dropped on ${targetId}` });
    case BOTTOM_CENTER:
      this.setState({ message: `BOTTOM_CENTER ${sourceId} dropped on ${targetId}` });
    case BOTTOM_RIGHT:
      this.setState({ message: `BOTTOM_RIGHT ${sourceId} dropped on ${targetId}` });
    default:
    }
  }

  render() {
    const {
      somethings,
      message
    } = this.state;
    const dropAction = ::this.dropAction;

    return (
      <div>
        <h1>{ message }</h1>
        {somethings.map(something =>
          <DnDItem dropAction={dropAction} id={something.id} key={something.id}>
            <div>{something.name}</div>
          </DnDItem>
        )}
      </div>
    );
  }
}

ReactDOM.render(<ExampleDnD />, document.getElementById('example'));
