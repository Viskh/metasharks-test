import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { IEpisode } from "../../models/IEpisode";
import Card from "../Layout/Card";
import { Button } from "../ui/Button";
import { Title } from "../ui/Title";

const StyledContainer = styled.div`
  width: 60%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Main = () => {
  const dispatch = useAppDispatch();

  const {episodes, loading} = useAppSelector((state) => state);

  const handleSortAscending = () => {
    dispatch({ type: "SORT_ASCENDING" });
  };

  const handleSortDescending = () => {
    dispatch({ type: "SORT_DESCENDING" });
  };

  const handleLoadEpisodes = () => {
    dispatch({ type: "CLICK_LOAD_EPISODE" });
  };

  return (
    <StyledContainer>
      <Title>Список эпизодов Breaking Bad</Title>

      {!episodes.length ? (
        <Button onClick={handleLoadEpisodes}>Загрузить эпизоды</Button>
      ) : (
        <div>
          <Button onClick={handleSortAscending}>
            Сортировать по возрастанию кол-ва персонажей
          </Button>
          <Button onClick={handleSortDescending}>
            Сортировать по убыванию кол-ва персонажей
          </Button>
        </div>
      )}
      
      {loading && <p>Загрузка...</p>}

      {episodes.map((episode: IEpisode) => {
        return <Card key={episode.episode_id} episode={episode} />;
      })}
    </StyledContainer>
  );
};

export default Main;
