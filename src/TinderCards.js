import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import db from "./Firebase.js";

function TinderCards() {
  const [People, setPeople] = useState([
    // {
    //   name: "Mark Zukerburg",
    //   url:
    //     "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?w968",
    // },
    // {
    //   name: "Steve Job",
    //   url:
    //     "https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    // },
  ]);
  useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="Tindercards__cardContainer">
      {People.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
