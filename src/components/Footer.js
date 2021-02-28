import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #000d1a;
  padding: 8rem 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  color: #fcebd7;
  padding-left: 250px;

  .footer_btn {
    margin-left: 100px;
    background-color: #fcebd7;
    font-weight: 600;
    &:hover {
      background-color: #fff;
      transition: 0.3s all;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1.3rem;
    grid-template-columns: 1fr;

    .footer_btn {
      margin-left: 0px;
    }
  }
`;

const SocialMedia = styled.div`
  a {
    color: #fcebd7;
  }

  font-size: 24px;
  display: flex;
  gap: 10px;

  a:hover {
    color: #fff;
    cursor: pointer;
    transition: 0.3s all;
  }

  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;

const FooterTitle = styled.div`
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 5rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 2rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;

  span {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    color: rgba(240, 240, 240, 0.8);

    &:hover {
      cursor: pointer;
      color: white;
    }
  }

  .footer_link_title {
    margin-right: 40px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`;

const ColumnRight = styled.div`
  padding-left: 100px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>
        Let's find <br /> your Dream Home
      </FooterTitle>
      <ColumnRight>
        <FooterLinks>
          <div className="footer_link_title">
            <h4>Contact Us</h4>
            <span>FAQs</span>
            <span>Support</span>
            <span>Questions</span>
          </div>

          <div className="footer_link_title">
            <h4>Offices</h4>
            <span>United States</span>
            <span>Europe</span>
            <span>Canada</span>
          </div>
        </FooterLinks>
      </ColumnRight>

      <SocialMedia>
        <div>
          <a href={"https://youtube.com"} rel='noopener noreferrer'
              target='_blank'>
            <FaYoutube />
          </a>
        </div>

        <div>
          <a href={"https://instagram.com"} rel='noopener noreferrer'
              target='_blank'>
            <FaInstagram />
          </a>
        </div>

        <div>
          <a href={"https://facebook.com"} rel='noopener noreferrer'
              target='_blank'>
            <FaFacebookF />
          </a>
        </div>

        <div>
          <a href={"https://linkedin.com"} rel='noopener noreferrer'
              target='_blank'>
            <FaLinkedin />
          </a>
        </div>
      </SocialMedia>

      <Button className="footer_btn"> Contact Us </Button>
    </FooterContainer>
  );
};

export default Footer;
