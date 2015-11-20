import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext }from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { DnDItem, DropPositions } from "react-dnd-item";

@DragDropContext(HTML5Backend)
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      somethings = [
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
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case TOP_CENTER:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case TOP_RIGHT:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case MIDDLE_LEFT:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case MIDDLE_CENTER:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case MIDDLE_RIGHT:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case BOTTOM_LEFT:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case BOTTOM_CENTER:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    case BOTTOM_RIGHT:
      this.setState({ message: `${sourceId} dropped on ${targetId} ${position}` });
    default:
      this.setState({ message: "error!" });
    }
  }

  render() {
    const { somethings, message } = this.state;
    const dropAction = ::this.dropAction;

    return (
      <div>
        <h1>{ message }</h1>
        {somethings.map({something =>
          <DnDItem dropAction={dropAction} id={something.id} key={something.id}>
            <div>{item.name}</div>
          </DnDItem>
        })}
      </div>
    );
  }
}

ReactDOM.render(<Example />), document.getElementById('example'));
