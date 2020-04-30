import React, { Component } from "react";
import Title from "./Title";

import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { featuredRooms: rooms, loading } = this.context;
    // console.log(rooms);
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <div>
        <section className="featured-rooms">
          <Title title="featured rooms" />
          <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
          </div>
        </section>
      </div>
    );
  }
}
