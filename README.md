# [WIP] React DnD Item
[![Build Status](https://travis-ci.org/t-hiroyoshi/react-dnd-item.svg)](https://travis-ci.org/t-hiroyoshi/react-dnd-item)

### Welcome PR and issues!

A draggable and droppable item component for React.
Simple React DnD wrapper to use your functions which depend on drop position.
Drag and drop are controlled by [React DnD](https://github.com/gaearon/react-dnd).

You can try demo!

```sh
git clone git@github.com:t-hiroyoshi/react-dnd-item.git
cd react-dnd-item
npm i
npm start
```

and open `http://localhost:8080`!

## Installation

```sh
npm install react-dnd-item --save
```

## Examples

```js
import React, { Component } from 'react';
import { DragDropContext }from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { DnDItem, DropPositions } from "react-dnd-item";

@DragDropContext(HTML5Backend)
export default class YourComponent extends Component {
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
      ]
    };
  }

  dropAction(position, sourceId, targetId) {
    // sourceId: dragged item id, targetId: dropped item id
    // This function is good for call flux actions.
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
      // some actions
    case TOP_CENTER:
      // some actions
    case TOP_RIGHT:
      // some actions
    case MIDDLE_LEFT:
      // some actions
    case MIDDLE_CENTER:
      // some actions
    case MIDDLE_RIGHT:
      // some actions
    case BOTTOM_LEFT:
      // some actions
    case BOTTOM_CENTER:
      // some actions
    case BOTTOM_RIGHT:
      // some actions
    default:
    }
  }

  render() {
    const { somethings } = this.state;
    const dropAction = ::this.dropAction;

    // ToDo: You can set your hover actions!
    // const hoverActions = ::this.hoverActions;

    // ToDo: You can set your component area divider!
    // const areaLine = ["20px 20px", "220px 120px"];

    return (
      <div>
        {somethings.map(something =>
          <DnDItem dropAction={dropAction} id={something.id} key={something.id}>
            <div>{item.name}</div>
          </DnDItem>
        )}
      </div>
    );
  }
}
```
