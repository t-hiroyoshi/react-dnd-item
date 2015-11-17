import { findDOMNode } from 'react-dom';
import DropPositions from './DropPositions';

export default class DnDHelper {
  static dragSource = {
    beginDrag(props) {
      const { id } = props;
      return { id };
    },
    endDrag(props, monitor) {
      const source = monitor.getItem();
      const target = monitor.getDropResult();
      props.dropAction(target.position, source.id, target.id);
    }
  };

  static dropTarget = {
    drop(props, monitor, component) {
      const { id } = props;
      const position = this.getPosition(props, monitor, component);
      return { position, id };
    }
    // ToDo: hoverAction
    // hover(props, monitor, component) {
    //   const source = monitor.getItem();
    //   const { id } = props;
    //   const position = this.getPosition(props, monitor, component);
    //   const target = { id, position };
    //   props.hoverAction(position, source.id, target.id);
    // }
  };

  getPosition(props, monitor, component) {
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
    const target = findDOMNode(component).getBoundingRect();
    const clientOffset = monitor.getClientOffset();
    const firstYLine = (target.bottom - target.top) / 3;
    const secondYLine = firstXLine * 2;
    const firstXLine = (target.right - target.left) / 3;
    const secondXLine = firstYLine * 2;
    const dropYPosition = clientOffset.y - target.top;
    const dropXPosition = clientOffset.x - target.left;
    const position = (dropYPosition < firstYLine)
      ? (dropXPosition < firstXLine)
        ? TOP_LEFT
        : (secondXLine < dropXPosition)
          ? TOP_RIGHT
          : TOP_CENTER
      : (secondYLine < dropYPosition)
        ? (dropXPosition < firstXLine)
          ? BOTTOM_LEFT
          : (secondXLine < dropXPosition)
            ? BOTTOM_RIGHT
            : BOTTOM_CENTER
        : (dropXPosition < firstXLine)
          ? MIDDLE_LEFT
          : (secondXLine < dropXPosition)
            ? MIDDLE_RIGHT
            : MIDDLE_CENTER;
    return position;
  }

  dragCollect(connect, monitor) {
    const connectDragSource = connect.dragSource();
    return { connectDragSource };
  }

  dropCollect(connect, monitor) {
    const connectDropTarget = connect.dropTarget();
    return { connectDropTarget };
  }
}
