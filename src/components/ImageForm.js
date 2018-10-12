import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Form } from 'semantic-ui-react';

export default class ImageForm extends Component {
  state = {
    imageURL: ''
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>360 Image Viewer</h1>
          <Form>
            <Input
              key="image-url-input"
              size="large"
              inverted
              placeholder="https://..."
              value={this.state.imageURL}
              onChange={(e, data) => this.setState({ imageURL: data.value })}
              action={
                <Button
                  as={Link}
                  to={`/360/${encodeURIComponent(this.state.imageURL)}`}
                  color="blue"
                >
                  View Image
                </Button>
              }
            />
          </Form>
          <h3>Image Preview:</h3>
          <img
            width="200"
            src={this.state.imageURL}
            alt="Not a valid image"
            aria-label="360 Image"
          />
        </header>
      </div>
    );
  }
}
