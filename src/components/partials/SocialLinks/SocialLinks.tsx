import React from 'react';
import Section from '../Section/Section';
import SocialLink from '../SocialLink/SocialLink';
import './socialLinks.scss';

const SocialLinks = () => (
  <Section>
    <Section.Title>Social Links</Section.Title>
    <Section.Content>
      <ul className="social-links-container">
        <SocialLink
          to="https://github.com/aroundthistime"
          title="Github"
          description="개인 프로젝트 혹은 팀 프로젝트를 저장하는 깃허브 계정입니다."
        />
        <SocialLink
          to="https://aroundthistime.tistory.com/"
          title="Tech Blog"
          description="개발 관련 학습 내용을 정리하는 블로그입니다."
        />
      </ul>
    </Section.Content>
  </Section>
);

export default SocialLinks;
