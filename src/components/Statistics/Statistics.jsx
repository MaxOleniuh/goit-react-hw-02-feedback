import { StatsContainer, TitleStyled, SpanStyled } from "./Statistics.styled";
const Statistics = ({ good, neutral, bad, total, positivePercentage, title }) => {
  return (
  total > 0 &&
      <StatsContainer className = "statsContainer" >
      <TitleStyled>{title}</TitleStyled>
      <SpanStyled>Good:{good}</SpanStyled>
      <SpanStyled>Neutral:{neutral}</SpanStyled>
      <SpanStyled>Bad:{bad}</SpanStyled>
      <SpanStyled>Total:{total}</SpanStyled>
      <SpanStyled>Positive feedback:{positivePercentage}</SpanStyled>
    </StatsContainer>
  );
};

export default Statistics;
