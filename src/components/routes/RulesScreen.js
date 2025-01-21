import { Link } from "react-router-dom";

const RulesScreen = () => {
  return (
    <div className="route rules-screen">
      <p className="rules-screen-paragraph">
        "Ah, welcome to the intellectually superior version of a timeless
        classic: Rock, Paper, Scissors, Lizard, Spock! I assume you’ve heard of
        it? No? Well, allow me to educate your tragically underutilised frontal
        cortex. The rules are elegantly simple, yet baffling to lesser minds.
        Rock crushes Scissors, Scissors cuts Paper, Paper covers Rock—elementary
        so far, yes?
      </p>
      <p className="rules-screen-paragraph">
        Now, here’s where it ascends to the realm of genius:
      </p>
      <ul className="rules-screen-rules">
        <li className="rules-screen-rule">Rock crushes Lizard,</li>
        <li className="rules-screen-rule">Lizard eats Paper,</li>
        <li className="rules-screen-rule">Paper disproves Spock,</li>
        <li className="rules-screen-rule">Spock vaporises Rock, </li>
        <li className="rules-screen-rule">and</li>
        <li className="rules-screen-rule">brace yourself</li>
        <li className="rules-screen-rule">Scissors decapitates Lizard.</li>
      </ul>
      <p className="rules-screen-paragraph">
        It’s a Möbius strip of strategic brilliance, which I, of course, have
        mastered. But! This is not merely a game. No, no, no. We’ve added an
        element of… danger. The stakes, if you will, have been raised higher
        than Leonard’s blood pressure during a Doctor Who marathon. If you lose
        a round, you lose your hand. Figuratively at first—metaphorically
        mangled by the crushing weight of defeat. But then, literally. That’s
        right, we’re playing the Russian Roulette variant, where the loser of
        each round must spin the chamber of this revolver and pull the trigger.
        One chamber is loaded. Five are not. Statistically speaking, the odds of
        survival are in your favour—if, of course, you understand probabilities.
        Which I do.
      </p>
      <p className="rules-screen-paragraph">
        Now, I know what you’re thinking: ‘Sheldon, why would you play such a
        dangerous game?’ The answer is simple. I don’t lose. This brain? A
        fortress. This hand? Steady as a Vulcan at a staring contest. This game?
        A mere dance of logic and precision. For you, it’s a gauntlet of terror.
        For me, it’s Tuesday." Sheldon smirks, adjusts his seat, and offers a
        reassuring wave. "Now, don’t feel bad when you lose. Feel bad when you…
        well, you know… click. Bazinga!"
      </p>
      <p className="rules-screen-paragraph">
        <Link className="rules-screen-back" to="/">
          Now do you understand, muggle? click here to return to homescreen
        </Link>
      </p>
    </div>
  );
};

export default RulesScreen;
