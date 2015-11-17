# [WIP] React DnD Item
[![Build Status](https://travis-ci.org/t-hiroyoshi/react-dnd-item.svg)](https://travis-ci.org/t-hiroyoshi/react-dnd-item)

A draggable and droppable item component for React.
Simple React DnD wrapper to use your functions which depend on drop position.

Drag and drop are controlled by [React DnD](https://github.com/gaearon/react-dnd).

## Installation

```sh
npm install react-dnd-item --save
```

## Examples

```js
import React, { Component } from 'react';
import { DnDItem, DropPositions } from "react-dnd-item";

export default class YourComponent extends Component {
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
    const dropAction = ::this.dropAction;

    // ToDo: You can set your hover actions!
    // const hoverActions = ::this.hoverActions;

    // ToDo: You can set your component area divider!
    // const areaLine = ["20px 20px", "220px 120px"];

    return (
      <div>
        {somethis.map({item =>
          <DnDItem dropActions={dropAction} id={item.id} key={item.id}>
            <div>{item.name}</div>
          </DnDItem>
        })}
      </div>
    );
  }
}
```
