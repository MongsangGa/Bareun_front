import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBar from './MenuBar';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  margin-left: 200px;
  padding: 20px;
`;

const BareunLayout = () => {
  return (
    <LayoutContainer>
      <Content>
        <Outlet />
      </Content>
      <MenuBar />
    </LayoutContainer>
  );
};

export default BareunLayout;
