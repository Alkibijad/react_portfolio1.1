import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="poem-container">
      <div className="poem-title">
        <h3 className="title">
          It is Forbidden <br /> by
          <span className="poem-authors-name"> Pablo Neruda</span>
        </h3>
      </div>

      <div className="lyrics-boxes">
        <p className="verse verse-1">
          It is forbidden to cry without learning,
          <br />
          to get up in the morning not knowing what to do,
          <br />
          to be afraid of your memories.
        </p>
        <p className="verse verse-1">
          It is forbidden not to smile at your problems,
          <br />
          not to struggle for what you want,
          <br />
          to abandon everything for fear
          <br />
          not to turn your dreams into reality.
        </p>
        <p className="verse verse-1">
          It is forbidden not to demonstrate your love
          <br />
          to make someone pay for your doubts and ill moods.
          <br />
          It is forbidden to give up on your friends,
          <br />
          not to try to understand what you’ve lived together,
          <br />
          to call them only when you need to.
        </p>
        <p className="verse verse-1">
          It is forbidden not to be yourself in front of people,
          <br />
          to be false in front of the people that don’t matter,
          <br />
          to be funny so they will remember you,
          <br />
          to forget about all the people who love you.
        </p>

        <p className="verse verse-1">
          It is forbidden not to make things by yourself,
          <br />
          not to believe in God and forge your fate,
          <br />
          to be afraid of life and it’s entanglements,
          <br />
          not to live each day like a final sigh.
          <br />
          It is forbidden to miss someone without being glad,
          <br />
          to forget their eyes, their laugh, everything,
          <br />
          because your paths have quit embracing each other,
          <br />
          forgetting the past and satisfying it with the present.
        </p>
        <p className="verse verse-1">
          It is forbidden not to try to understand,
          <br />
          to think that their life is worth more than yours,
          <br />
          not to know that everyone has their own path and their own fortune.
        </p>
        <p className="verse verse-1">
          It is forbidden not to create your own story,
          <br />
          not to give thanks to God for your life,
          <br />
          not to have time for the people who need you,
          <br />
          not to understand that what life gives,
          <br />
          it can also take away.
        </p>
        <p className="verse verse-1">
          It is forbidden not to search for your happiness.
          <br />
          not to live with a positive attitude,
          <br />
          not to think that we can be better,
          <br />
          not to feel that without you this world wouldn’t be the same.
        </p>
      </div>
    </div>
  );
}

export default Home;
