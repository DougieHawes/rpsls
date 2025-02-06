import { Link } from "react-router-dom";

import {
  GiStoneBlock,
  GiNotebook,
  GiLizardman,
  GiSpockHand,
  GiRevolver,
} from "react-icons/gi";
import { MdContentCut } from "react-icons/md";

const RulesScreen = () => {
  return (
    <div className="route rules-screen">
      <p className="rules-introduction">
        Ah, I see you've arrived, eager to elevate your primitive understanding
        of <i>Rock, Paper, Scissors, Lizard, Spock</i> to a level of
        intellectual sophistication befitting a mind such as mine.
        Congratulations. The rules are visually represented below for your
        convenience. Do try to keep up.
      </p>
      <div className="rules-container">
        <div className="rules-container-upper">
          <div className="rules-box-container">
            <p
              className="rules-box-heading"
              style={{ textDecoration: "underline" }}
            >
              ROCK
            </p>
            <div className="rules-box">
              <GiStoneBlock />
            </div>
          </div>
        </div>
        <div className="rules-container-lower">
          <div className="rules-box-container">
            <p className="rules-box-beats">crushes</p>
            <p className="rules-box-heading">SCISSORS</p>
            <div className="rules-box">
              <MdContentCut />
            </div>
          </div>
          <p className="rules-box-and">&</p>
          <div className="rules-box-container">
            <p className="rules-box-beats">crushes</p>
            <p className="rules-box-heading">LIZARD</p>
            <div className="rules-box">
              <GiLizardman />
            </div>
          </div>
        </div>
        <div className="rules-container-upper">
          <div className="rules-box-container">
            <p
              className="rules-box-heading"
              style={{ textDecoration: "underline" }}
            >
              PAPER
            </p>
            <div className="rules-box">
              <GiNotebook />
            </div>
          </div>
        </div>
        <div className="rules-container-lower">
          <div className="rules-box-container">
            <p className="rules-box-beats">wraps</p>
            <p className="rules-box-heading">ROCK</p>
            <div className="rules-box">
              <GiStoneBlock />
            </div>
          </div>
          <p className="rules-box-and">&</p>
          <div className="rules-box-container">
            <p className="rules-box-beats">disproves</p>
            <p className="rules-box-heading">SPOCK</p>
            <div className="rules-box">
              <GiSpockHand />
            </div>
          </div>
        </div>
        <div className="rules-container-upper">
          <div className="rules-box-container">
            <p
              className="rules-box-heading"
              style={{ textDecoration: "underline" }}
            >
              SCISSORS
            </p>
            <div className="rules-box">
              <MdContentCut />
            </div>
          </div>
        </div>
        <div className="rules-container-lower">
          <div className="rules-box-container">
            <p className="rules-box-beats">cuts</p>
            <p className="rules-box-heading">PAPER</p>
            <div className="rules-box">
              <GiNotebook />
            </div>
          </div>
          <p className="rules-box-and">&</p>
          <div className="rules-box-container">
            <p className="rules-box-beats">decapitates</p>
            <p className="rules-box-heading">LIZARD</p>
            <div className="rules-box">
              <GiLizardman />
            </div>
          </div>
        </div>
        <div className="rules-container-upper">
          <div className="rules-box-container">
            <p
              className="rules-box-heading"
              style={{ textDecoration: "underline" }}
            >
              LIZARD
            </p>
            <div className="rules-box">
              <GiLizardman />
            </div>
          </div>
        </div>
        <div className="rules-container-lower">
          <div className="rules-box-container">
            <p className="rules-box-beats">eats</p>
            <p className="rules-box-heading">PAPER</p>
            <div className="rules-box">
              <GiNotebook />
            </div>
          </div>
          <p className="rules-box-and">&</p>
          <div className="rules-box-container">
            <p className="rules-box-beats">poisons</p>
            <p className="rules-box-heading">SPOCK</p>
            <div className="rules-box">
              <GiSpockHand />
            </div>
          </div>
        </div>
        <div className="rules-container-upper">
          <div className="rules-box-container">
            <p
              className="rules-box-heading"
              style={{ textDecoration: "underline" }}
            >
              SPOCK
            </p>
            <div className="rules-box">
              <GiSpockHand />
            </div>
          </div>
        </div>
        <div className="rules-container-lower">
          <div className="rules-box-container">
            <p className="rules-box-beats">vaporises</p>
            <p className="rules-box-heading">ROCK</p>
            <div className="rules-box">
              <GiStoneBlock />
            </div>
          </div>
          <p className="rules-box-and">&</p>
          <div className="rules-box-container">
            <p className="rules-box-beats">crushes</p>
            <p className="rules-box-heading">SCISSORS</p>
            <div className="rules-box">
              <MdContentCut />
            </div>
          </div>
        </div>
      </div>
      <p className="rules-introduction">
        Ah, now we arrive at the true test of intellect, strategy, and, well...
        sheer nerve. Rock, Paper, Scissors, Lizard, Spock is already a vastly
        superior game to its pedestrian predecessor, but let’s be honest—what’s
        competition without consequence? In this enhanced version, the stakes
        are elevated to life-and-death proportions. After each round, the loser
        must engage in a thrilling game of Russian Roulette—a revolver, six
        chambers, one bullet. Spin the cylinder, place the barrel against your
        temple, and pull the trigger.
      </p>
      <GiRevolver className="rules-gun" />
      <p className="rules-introduction">
        Simple, really. Now, I can hear your feeble protests: “Sheldon, this
        seems unnecessarily dangerous!” Well, let me remind you—statistically
        speaking, you have an 83.3% chance of survival after the first loss.
        Hardly terrifying… unless, of course, you lack the fortitude to
        determine it then decreases to 80%... then 75%... then
        66.6(reoccuring)%... then 50%... after that I believe even a hive mind
        can decipher what happens then.
      </p>
      <p className="rules-introduction">
        Now do you understand, muggle? click{" "}
        <Link className="rules-link" to="/">
          here
        </Link>{" "}
        to return to homescreen
      </p>
    </div>
  );
};

export default RulesScreen;
