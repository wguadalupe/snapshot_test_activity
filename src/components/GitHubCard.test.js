import React from 'react';
import { render } from '@testing-library/react';
import GitHubCard from './GitHubCard';

// At the top of your GitHubCard.test.js file
jest.mock('react-bootstrap/Card', () => {
  const MockCard = ({ children }) => <div>{children}</div>;
  MockCard.Img = ({ src, alt }) => <img src={src} alt={alt} />;
  MockCard.Body = ({ children }) => <div>{children}</div>;
  MockCard.Title = ({ children }) => <h5>{children}</h5>;
  MockCard.Text = ({ children }) => <p>{children}</p>;
  
  return MockCard;
});


it('renders correctly', () => {
  const tree = render(<GitHubCard />);
  expect(tree).toMatchSnapshot();
});
