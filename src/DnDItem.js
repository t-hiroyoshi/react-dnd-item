import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import DnDHelper from './DnDHelper';
import ItemTypes from './ItemTypes';

@DragSource(ItemTypes.ITEM, DnDHelper.dragSource, DnDHelper.dragCollect)
@DropTarget(ItemTypes.ITME, DnDHelper.dropTarget, DnDHelper.dropCollect)
export default class DnDItem extends Component {
  static proptypes = {
    areaLine: PropTypes.array,
    children: PropTypes.node.isRequired,
    dropAction: PropTypes.func.isRequired,
    hoverAction: PropTypes.func,
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    );
  }
}
