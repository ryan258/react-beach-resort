import React, { Component } from "react";
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    // const value = this.context;
    // console.log(value);
    const { name, greeting } = this.context;

    return (
      <div>
        <h1>
          {greeting} {name} from Featured Rooms!
        </h1>
      </div>
    );
  }
}
