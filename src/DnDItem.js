import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import DropPositions from './DropPositions';
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
    if (target) props.dropAction(target.position, source.id, target.id);
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
  const targetBoundingClientRect = findDOMNode(component).getBoundingClientRect();
  const clientOffset = monitor.getClientOffset();
  const firstYLine = (targetBoundingClientRect.bottom - targetBoundingClientRect.top) / 3;
  const secondYLine = firstYLine * 2;
  const firstXLine = (targetBoundingClientRect.right - targetBoundingClientRect.left) / 3;
  const secondXLine = firstXLine * 2;
  const dropYPosition = clientOffset.y - targetBoundingClientRect.top;
  const dropXPosition = clientOffset.x - targetBoundingClientRect.left;

  if (dropYPosition < firstYLine) {
    if (dropXPosition < firstXLine) {
      return TOP_LEFT;
    } else if (firstXLine < dropXPosition && dropXPosition < secondXLine) {
      return TOP_CENTER;
    } else if (dropXPosition > secondXLine) {
      return TOP_RIGHT;
    }
  } else if (firstYLine < dropYPosition && dropYPosition < secondYLine) {
    if (dropXPosition < firstXLine) {
      return MIDDLE_LEFT;
    } else if (firstXLine < dropXPosition && dropXPosition < secondXLine) {
      return MIDDLE_CENTER;
    } else if (dropXPosition > secondXLine) {
      return MIDDLE_RIGHT;
    }
  } else {
    if (dropXPosition < firstXLine) {
      return BOTTOM_LEFT;
    } else if (firstXLine < dropXPosition && dropXPosition < secondXLine) {
      return BOTTOM_CENTER;
    } else if (dropXPosition > secondXLine) {
      return BOTTOM_RIGHT;
    }
  }
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
