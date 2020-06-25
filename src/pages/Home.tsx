import React from 'react';

import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import ToolsList from '../components/ToolsList';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 85px 0 0 0;
`;

const Loading = () => (
  <div style={{ marginTop: '15px' }}>
    {[1, 2, 3, 4].map((number) => (
      <ContentLoader
        key={number}
        speed={2}
        width="100%"
        height={160}
        viewBox="0 0 1200 190"
        backgroundColor="#393e44"
        foregroundColor="#4f5358"
      >
        <rect x="-17" y="5" rx="0" ry="0" width="1200" height="250" />
      </ContentLoader>
    ))}
  </div>
);

const Home = () => {
  return (
    <Container>
      <Content>
        <h1>VUTTR</h1>
        <h3>Very Useful Tools to Remember</h3>
        <SearchBar />
        <React.Suspense fallback={<Loading />}>
          <ToolsList />
        </React.Suspense>
      </Content>
    </Container>
  );
};

export default Home;
