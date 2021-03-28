const {ReactDraggable: Draggable, React, ReactDOM} = window;

class App extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  };

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {x, y} = this.state.controlledPosition;
    this.setState({controlledPosition: {x: x - 10, y}});
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const {controlledPosition} = this.state;
    const {x, y} = controlledPosition;
    this.setState({controlledPosition: {x, y: y - 10}});
  };

  onControlledDrag = (e, position) => {
    const {x, y} = position;
    this.setState({controlledPosition: {x, y}});
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    const {deltaPosition, controlledPosition} = this.state;
    return (
	<div>
      <div className="top">
        <h1>Tables Draggable</h1>
        <Draggable {...dragHandlers}>
          <img src="images/table-1.png" />
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src="images/table-2.png" />
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src="images/table-3.png" />
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src="images/table-4.png" />
        </Draggable>
        <Draggable {...dragHandlers}>
          <img src="images/table-5.png" />
        </Draggable>		
      </div>
	  <div className="sala">
	  
	  </div>
	</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
