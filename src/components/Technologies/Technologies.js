import React from 'react';
import { CgSmartphone } from "react-icons/cg";
import { FaReact, FaPhone } from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiAmazonaws, SiBootstrap} from "react-icons/si";
import { DiFirebase, DiExtjs , DiZend, DiAndroid, DiApple , DiNodejs, DiPhp, DiMysql, DiAws , DiMongodb} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Mobile development
    </SectionText>
    <List>
      <ListItem>
    <picture>
             < FaReact size="5rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
           <FaReact size={"3.5rem"}/> React.js
            <br />
           <SiTailwindcss size={"3.5rem"} /> Tailwindcss
           <br />
           <SiBootstrap size="4rem"/> Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End Development</ListTitle>
          <ListParagraph>
          <DiNodejs size="3.5rem"/>  Node.js & Express.js <br />
          <DiPhp size="3.5rem"/> PHP <br />
          <DiMysql size="3.5rem"/>  MySQL <br/>
          <DiMongodb size="3.5rem"/> MongoDB <br/>
          <SiAmazonaws size="3.5rem"/> AWS 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <CgSmartphone size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            <FaReact size={"3.5rem"} /> React Native <br/>
            <SiFlutter size="3.5rem"/> Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
