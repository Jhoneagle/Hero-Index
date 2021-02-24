import * as React from "react"

import styled from "styled-components"
import {  Skill } from "../../types";
import {  SkillContainer } from "./SkillContainer";
import {HeadingTwo} from "../Typography";

const Container = styled.section`
    width: 100%;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    padding: 2px 16px;
`;

interface ISkillsProps {
    skills: Skill[]
}

export const Skills: React.FC<ISkillsProps> = ({ skills }) => (
    <Container>
        <HeadingTwo>Skills</HeadingTwo>
        {skills.map((skill) => (
            <SkillContainer skill={skill} />
        ))}
    </Container>
);
