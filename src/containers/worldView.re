type state = {
  world: World.t
};

let component = ReasonReact.reducerComponent("WorldView");

let make = _children => {
  ...component,
  initialState: () => {
    world: World.create(~rows=10, ~cols=10, [||])
  },
  render: (self) => <div> (ReasonReact.stringToElement("coming soon")) </div>
};