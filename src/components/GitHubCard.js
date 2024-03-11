// GitHubCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const GitHubCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="path/to/your/photo.jpg" />
      <Card.Body>
        <Card.Title>wguadalupe</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet nec nunc ut condimentum. Integer aliquam sem nisl, non tincidunt est blandit ac. Duis rhoncus malesuada orci, at porttitor ipsum vehicula non. Curabitur justo magna, molestie id velit vel, aliquet feugiat nibh. Aenean vel hendrerit nisi, sit amet lobortis erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id turpis quam. Curabitur placerat arcu feugiat nibh condimentum iaculis eget vitae dolor. Ut ut nisi vel urna fermentum condimentum nec non erat.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;
