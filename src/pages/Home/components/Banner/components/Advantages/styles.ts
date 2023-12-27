import styled from "styled-components";

const COLORS = {
    yellow_dark:'yellow-dark',
    yellow:'yellow-light',
    gray:'gray-default',
    purple:'purple-default'
} as const

export const AdvantagesConatiner = styled.div`
    width: 587px;
    height: 84px;
    display: flex;
    flex-direction: row;
    margin-top: 66px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
`

export const AdvantageColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-shrink: 0;
`

export const Advantage = styled.div`
    display: flex;    
    align-items: center;
    gap: 8px;
    flex-direction: row;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
`

interface AdvantageColor {
    testColor: keyof typeof COLORS
  }

export const AdvantageIcon = styled.div<AdvantageColor>`
    width: 26px;
    height: 26px;
    background: ${(props) => props.theme[COLORS[props.testColor]]};
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
`