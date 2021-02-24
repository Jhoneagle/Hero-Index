import * as React from "react"

import styled from "styled-components"
import {  HeroAttributes } from "../../types";
import {ColumnsContainer} from "../ColumnsContainer";
import {RowsContainer} from "../RowsContainer";
import {HeadingTwo, Paragraph} from "../../components/Typography"

const Container = styled.section`
    width: 600px;
	align-items: center;
    padding: 20px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    padding: 2px 16px;
`;

interface IAttributesProps {
    attributes: HeroAttributes
}

export const Attributes: React.FC<IAttributesProps> = ({ attributes }) => (
    <Container>
        <ColumnsContainer>
            <HeadingTwo>Statistics</HeadingTwo>
            <RowsContainer>
                <Paragraph>HP: {attributes.healthpoints}</Paragraph>
                <Paragraph>Mana: {attributes.mana}</Paragraph>
                <Paragraph>Stamina: {attributes.stamina}</Paragraph>
            </RowsContainer>
            <RowsContainer>
                <Paragraph>Strength: {attributes.strength}</Paragraph>
                <Paragraph>Speed: {attributes.speed}</Paragraph>
                <Paragraph>Agility: {attributes.agility}</Paragraph>
                <Paragraph>Intelligence: {attributes.intelligence}</Paragraph>
            </RowsContainer>
            <RowsContainer>
                <Paragraph>Resistance: {attributes.resistance}</Paragraph>
                <Paragraph>Weakness: {attributes.weakness}</Paragraph>
            </RowsContainer>
        </ColumnsContainer>
    </Container>
);
