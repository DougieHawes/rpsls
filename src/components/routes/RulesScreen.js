import { Link } from "react-router-dom";

import {
  GiStoneBlock,
  GiNotebook,
  GiLizardman,
  GiSpockHand,
} from "react-icons/gi";

import { MdContentCut, MdAttachMoney } from "react-icons/md";

const RulesScreen = () => {
  return (
    <div className="route rules-screen">
      <div className="rules-container">
        <div className="rules-container-row">
          <div className="rules-box">
            <GiStoneBlock />
          </div>
          <p className="rules-box-beats">crushes</p>
          <div className="rules-box">
            <MdContentCut />
          </div>
          <div className="rules-box-and">, &</div>
          <p className="rules-box-beats">crushes</p>
          <div className="rules-box">
            <GiLizardman />
          </div>
        </div>
      </div>
      <Link className="rules-screen-back" to="/">
        Now do you understand, muggle? click here to return to homescreen
      </Link>
    </div>
  );
};

export default RulesScreen;
