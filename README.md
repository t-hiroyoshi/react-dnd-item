# React DnD Item
[![Build Status](https://travis-ci.org/t-hiroyoshi/react-dnd-item.svg)](https://travis-ci.org/t-hiroyoshi/react-dnd-item)

### Welcome PR and issues!

A draggable and droppable item component for React.

Simple React DnD wrapper to use your functions which depend on drop position.

Drag and drop are controlled by [React DnD](https://github.com/gaearon/react-dnd).

## Demo

You can try demo!

```sh
git clone git@github.com:t-hiroyoshi/react-dnd-item.git
cd react-dnd-item
npm i
npm start
```

and `open http://localhost:8080`!

## Installation

```sh
npm install react-dnd-item --save
```

## Examples

```js
import React, { Component } from 'react';
import { DragDropContext }from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { DnDItem, DropPositions } from 'react-dnd-item';

@DragDropContext(HTML5Backend)
export default class ExampleDnD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      somethings: [
        {id: '1', name: 'somethigs1'},
        {id: '2', name: 'somethigs2'},
        {id: '3', name: 'somethigs3'},
        {id: '4', name: 'somethigs4'},
        {id: '5', name: 'somethigs5'},
        {id: '6', name: 'somethigs6'}
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
      // return some action
    case TOP_CENTER:
      // return some action
    case TOP_RIGHT:
      // return some action
    case MIDDLE_LEFT:
      // return some action
    case MIDDLE_CENTER:
      // return some action
    case MIDDLE_RIGHT:
      // return some action
    case BOTTOM_LEFT:
      // return some action
    case BOTTOM_CENTER:
      // return some action
    case BOTTOM_RIGHT:
      // return some action
    default:
      return false;
    }
  }

  hoverAction(position, sourceId, targetId) {
    // same as dropActions
  }

  render() {
    const { somethings } = this.state;

    // dropAction is required but hoverAction is optional.
    const dropAction = ::this.dropAction;
    const hoverAction = ::this.hoverAction;

    // ToDo: You can set your component area divider!
    // const areaLine = ["20px 20px", "220px 120px"];

    // You can set your style to dnd item.
    const yourStyle = {
      background: "blue"
    };

    return (
      <div>
        {somethings.map(something =>
          <DnDItem dropAction={dropAction} hoverAction={hoverAction} id={something.id} key={something.id}>
            <div style={yourStyle}>{something.name}</div>
          </DnDItem>
        )}
      </div>
    );
  }
}
```
