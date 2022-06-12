import styled from "styled-components";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { IEpisode } from "../../models/IEpisode";
import { Button } from "../ui/Button";

const StyledCard = styled.div`
  width: 90%;
  margin: 10px 0;
  padding: 5px;
  border: 2px solid #006efc;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  .card-info {
    flex: 1;
  }

  .card-delete {
    display: flex;
    align-items: end;
  }

  .card-title {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 18px;
  }
`;

interface CardProps {
  episode: IEpisode;
}

const Card = ({ episode }: CardProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteEpisode = (id: string) => {
    dispatch({ type: "DELETE_EPISODE_FULFILLED", payload: id });
  };

  const handleIncrementChar = (id: string) => {
    dispatch({ type: "INCREMENT_CHARACTERS", payload: id });
  };
  const handleDecrementChar = (id: string) => {
    dispatch({ type: "DECREMENT_CHARACTERS", payload: id });
  };

  const generatorСorrectWord = (num: number) => {
    if (num === 1) {
      return "персонаж";
    }
    return "персонажей";
  };

  return (
    <StyledCard>
      <div className="card-info">
        
        <p className="card-title">Эпизод №{episode.episode}</p>
        <p>Название: {episode.title}</p>
        <p>Дата выхода: {episode.air_date}</p>
        <p>Сезон: {episode.season}</p>
        <p>Сериал: {episode.series}</p>

        <div className="card-count">
          <Button onClick={() => handleDecrementChar(episode.episode_id)}>
            -
          </Button>

          <span>{episode.characters.length}</span>

          <Button onClick={() => handleIncrementChar(episode.episode_id)}>
            +
          </Button>
          <span>{generatorСorrectWord(episode.characters.length)}</span>
        </div>

      </div>
      <div className="card-delete">
        <Button onClick={() => handleDeleteEpisode(episode.episode_id)}>
          Удалить
        </Button>
      </div>
    </StyledCard>
  );
};

export default Card;
