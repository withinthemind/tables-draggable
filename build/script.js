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

  render() {
    return (
	<div>
      <div className="top">
        <h1>Tables Draggable</h1>
        <Draggable>
          <img src="images/table-1.png" />
        </Draggable>
        <Draggable>
          <img src="images/table-2.png" />
        </Draggable>
        <Draggable>
          <img src="images/table-3.png" />
        </Draggable>
        <Draggable>
          <img src="images/table-4.png" />
        </Draggable>
        <Draggable>
          <img src="images/table-5.png" />
        </Draggable>		
      </div>
	  <div className="sala"></div>
	</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
