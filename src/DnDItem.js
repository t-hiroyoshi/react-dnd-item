import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import DropPositions from "./DropPositions";
import ItemTypes from './ItemTypes';

const dropTarget = {
  drop(props, monitor, component) {
    const { id } = props;
    const position = getPosition(monitor, component);
    return { position, id };
  }
};

const dragSource = {
  beginDrag(props) {
    const { id } = props;
    return { id };
  },
  endDrag(props, monitor) {
    const source = monitor.getItem();
    const target = monitor.getDropResult();
    if (target.position) props.dropAction(target.position, source.id, target.id);
  }
};

function getPosition(monitor, component) {
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
  const target = findDOMNode(component).getBoundingClientRect();
  const clientOffset = monitor.getClientOffset();
  const firstYLine = (target.bottom - target.top) / 3;
  const secondYLine = firstXLine * 2;
  const firstXLine = (target.right - target.left) / 3;
  const secondXLine = firstYLine * 2;
  const dropYPosition = clientOffset.y - target.top;
  const dropXPosition = clientOffset.x - target.left;
  const position = dropYPosition < firstYLine
    ? dropXPosition < firstXLine ? TOP_LEFT : secondXLine > dropXPosition ? TOP_CENTER : TOP_RIGHT
    : secondYLine > dropYPosition
      ? dropXPosition < firstXLine ? MIDDLE_LEFT : secondXLine > dropXPosition ? MIDDLE_CENTER : MIDDLE_RIGHT
      : dropXPosition < firstXLine ? BOTTOM_LEFT : secondXLine > dropXPosition ? BOTTOM_CENTER : BOTTOM_RIGHT;
  return position;
}

@DropTarget(ItemTypes.DND_ITEM, dropTarget, connect => ({ connectDropTarget: connect.dropTarget() }))
@DragSource(ItemTypes.DND_ITEM, dragSource, connect => ({ connectDragSource: connect.dragSource() }))
export default class DnDItem extends Component {
  static proptypes = {
    areaLine: PropTypes.array,
    children: PropTypes.node.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    dropAction: PropTypes.func.isRequired,
    hoverAction: PropTypes.func,
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  };

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      children
    } = this.props;

    return connectDragSource(connectDropTarget(
      <div>
        { children }
      </div>
    ));
  }
}
