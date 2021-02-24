import * as React from "react"

import styled from "styled-components"
import {  Skill } from "../../types";
import {HeadingTwo, Paragraph} from "../../components/Typography"

const InnerContainer = styled.div`
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    padding: 2px 16px;
`;

const Container = styled.section`
    width: 100%;
`;

interface ISkillContainerProps {
    skill: Skill
}

export const SkillContainer: React.FC<ISkillContainerProps> = ({ skill }) => (
    <Container>
        <InnerContainer>
            <HeadingTwo>{skill.name}</HeadingTwo>
            <Paragraph>Damage: {skill.damage}</Paragraph>
            <Paragraph>Type: {skill.element}</Paragraph>
        </InnerContainer>
    </Container>
);
