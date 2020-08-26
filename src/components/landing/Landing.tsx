import React from 'react';
import { Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import InventoryList from '../InventoryList/InventoryList';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/rootReducer';

type LandingState = {
  searchText: string,
  inventoryItems: any[]
}

type LandingProps = {
}

export default class Landing extends React.PureComponent<LandingProps, LandingState> {
  constructor(props: LandingProps) {
    super(props);

    this.state = {
      searchText: "",
      inventoryItems: [
        { id: "1", name: "My First Item", quantity: 1, dateAdded: new Date() }
      ]
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleSearchChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      searchText: event.target.value
    });
  }

  private handleSubmit(event: React.ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.search();
  }

  private search(): void {
    if (this.state.searchText.trim() === "") return;

    console.log("search text:", this.state.searchText);

    this.setState({
      inventoryItems: [
        { id: "1", name: "my first item", quantity: 1, dateAdded: new Date() }
      ]
    });
  }

  render(): JSX.Element {
    const { inventoryItems } = this.state;

    return (
      <Card className="mt-3">
        <Card.Body>
          <Row className={inventoryItems.length !== 0 ? "mb-5" : ""}>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="What are you looking for?"
                    as="input"
                    value={this.state.searchText}
                    onChange={this.handleSearchChange}
                  />
                  <InputGroup.Append>
                    <Button variant="outline-primary" onClick={() => this.search()}>
                      Search
                      </Button>
                  </InputGroup.Append>
                </InputGroup>
              </form>
            </Col>
          </Row>
          
          { inventoryItems.length !== 0 &&
            <InventoryList inventoryItems={inventoryItems} />
          }
        </Card.Body>
      </Card>
    );
  }
}