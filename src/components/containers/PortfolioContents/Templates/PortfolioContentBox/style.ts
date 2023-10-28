import styled from 'styled-components';

export const PortfolioContentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7eedd;
  padding: 30px;
  padding-right: 10px;
  border-radius: 18px;
  width: 100%;
  max-height: 75vh;
  max-height: 75vh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const PortfolioContentBoxHeader = styled.h2`
  padding: 10px 35px 10px 5px;
  padding-top: 0px;
  border-bottom: 2px solid #a86442;
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 25px;
`;

export const PortfolioContentBoxBody = styled.div`
  padding-top: 10px;
  padding-right: 30px;
  overflow-y: auto;
`;
