import { useState } from "react";

const About = () => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const handleShowName = () => {
    setName("Kyle");
    setVisible(true);
  };
  const getMyInfo = () => {
    if (visible) {
      return (
        <div>
          <h1>Kyle</h1>;<h6>kyle@mail.com</h6>
          <ul>
            <li>Bodybuilding</li>
            <li>White water kayaking</li>
            <li>Reading in the woods</li>
            <li>Living large</li>
          </ul>
        </div>
      );
    } else {
      return "";
    }
  };

  //
  //

  return (
    <div className="about-page">
      {getMyInfo()}
      <button onClick={handleShowName}>Click to see My Name</button>
    </div>
  );
};

export default About;
