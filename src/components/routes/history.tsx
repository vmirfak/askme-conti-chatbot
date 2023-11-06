import LeftColumnMenu from "../LeftColumnMenu";
import { useState } from "react";
import Popup from "../Popup";
import SettingsIcon from "../../assets/icons/settings.png";

function historyPage() {
  const [openPopup, setopenPopup] = useState(false);

  return (
    <div className="app">
      <LeftColumnMenu />
      <div>
        <img
          style={{ cursor: "pointer" }}
          src={SettingsIcon}
          onClick={() => setopenPopup(true)}
        ></img>
        {openPopup ? (
          <Popup text="Hello there!" closePopup={() => setopenPopup(false)} />
        ) : null}
      </div>
    </div>
  );
}

export default historyPage;
