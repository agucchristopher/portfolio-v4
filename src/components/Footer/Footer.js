import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234-802-2521-9762">+234-802-2521-9762</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aguchris740@gmail.com">
            aguchris740@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/agucchristopher">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/agucchristopher1">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/agucchristophe">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://facebook.com/agucchristopher">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
