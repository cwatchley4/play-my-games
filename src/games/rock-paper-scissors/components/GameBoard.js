import ChoiceButton from "./ChoiceButton";
import GameIcon from "./GameIcon";
import RockIcon from "../images/rock.svg";
import PaperIcon from "../images/paper.svg";
import ScissorsIcon from "../images/scissors.svg";

export default function GameBoard({ onChoice, playerChoice, computerChoice }) {
  return (
    <>
      {!playerChoice ? (
        <div className="rps__choice-container">
          <ChoiceButton onChoice={onChoice} value="rock">
            <GameIcon src={RockIcon} alt="rock" />
          </ChoiceButton>
          <ChoiceButton onChoice={onChoice} value="paper">
            <GameIcon src={PaperIcon} alt="paper" />
          </ChoiceButton>
          <ChoiceButton onChoice={onChoice} value="scissors">
            <GameIcon src={ScissorsIcon} alt="scissors" />
          </ChoiceButton>
        </div>
      ) : (
        <div className="rps__choice-container">
          <div className="choice">
            <p className="rps__choice-text">You picked {playerChoice}.</p>
            <div className="rps__choice-icon">
              {playerChoice === "rock" && (
                <GameIcon src={RockIcon} alt="rock" />
              )}
              {playerChoice === "paper" && (
                <GameIcon src={PaperIcon} alt="paper" />
              )}
              {playerChoice === "scissors" && (
                <GameIcon src={ScissorsIcon} alt="scissors" />
              )}
            </div>
          </div>
          <div className="rps__choice">
            <div>
              {computerChoice ? (
                <p className="rps__choice-text">I picked {computerChoice}.</p>
              ) : (
                ""
              )}
              <div className="rps__choice-icon">
                {computerChoice === "rock" && (
                  <GameIcon src={RockIcon} alt="rock" />
                )}
                {computerChoice === "paper" && (
                  <GameIcon src={PaperIcon} alt="paper" />
                )}
                {computerChoice === "scissors" && (
                  <GameIcon src={ScissorsIcon} alt="scissors" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
