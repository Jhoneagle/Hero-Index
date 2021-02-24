import * as React from 'react'
import styled from 'styled-components'
import { Section } from '../../components/Section';
import {Hero} from "../../types";
import {HeadingOne} from "../Typography";
import {Modal} from "../Modal";
import {Attributes} from "../Attributes";
import {Skills} from "../Skills";
import {ColumnsContainer} from "../ColumnsContainer";
import {RowsContainer} from "../RowsContainer";

const Container = styled.div`
	background: #fbfbfb;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    padding: 2px 16px;
`;

const Image = styled.img`
	width: 700px;
    left: 50%;
    top: 18%;
	z-index: 1;
`;

const MoreDetails = styled.div`
    display: flex;
    flex-direction: row;
	background: #8A2BE2;
`;

interface IHeroCardProps {
    hero: Hero
}

export const HeroCard: React.FC<IHeroCardProps> = ({ hero }) => {
    return (
        <Container>
            <ColumnsContainer>
                <RowsContainer>
                    <ColumnsContainer>
                        <HeadingOne>Hero {hero.name}</HeadingOne>
                        <Section heading={'Description'} paragraph={hero.description} />
                    </ColumnsContainer>
                    <Image src={hero.imgUrl} />
                </RowsContainer>
                <MoreDetails>
                    <Modal buttonLabel={'Back Story'}>
                        <Section heading={'Back Story'} paragraph={hero.backStory} />
                    </Modal>
                </MoreDetails>
                <MoreDetails style={{alignItems: 'flex-start'}}>
                    <Modal buttonLabel={'Attributes'}>
                        <Attributes attributes={hero.attributes} />
                    </Modal>
                    <Modal buttonLabel={'Skills'}>
                        <Skills skills={hero.skills} />
                    </Modal>
                </MoreDetails>
            </ColumnsContainer>
        </Container>
    )
}
