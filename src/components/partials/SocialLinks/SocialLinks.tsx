import React from 'react';
import BlogIcon from '../../atoms/Icons/BlogIcon';
import GithubIcon from '../../atoms/Icons/GithubIcon';
import Section from '../Section/Section';
import SocialLink from '../SocialLink/SocialLink';
import './socialLinks.scss';

const SocialLinks = () => (
  <Section>
    <Section.Title>Social Links</Section.Title>
    <Section.Content>
      <ul className="social-links-container">
        <GithubLink />
        <BlogLink />
      </ul>
    </Section.Content>
  </Section>
);

const GithubLink = () => (
  <SocialLink to="https://github.com/aroundthistime">
    <SocialLink.Default>
      Github
      <GithubIcon className="social-link__icon" />
    </SocialLink.Default>
    <SocialLink.OnHover>
      개인 프로젝트 혹은 팀 프로젝트를 저장하는 깃허브 계정입니다.
    </SocialLink.OnHover>
  </SocialLink>
);

const BlogLink = () => (
  <SocialLink to="https://aroundthistime.tistory.com/">
    <SocialLink.Default>
      Tech Blog
      <BlogIcon className="social-link__icon" />
    </SocialLink.Default>
    <SocialLink.OnHover>
      개발 관련 학습 내용을 정리하는 블로그입니다.
    </SocialLink.OnHover>
  </SocialLink>
);

export default SocialLinks;
