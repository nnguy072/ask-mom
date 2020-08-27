import React, { useState } from 'react';
import { Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import InventoryList from '../InventoryList/InventoryList';
declare type FormControlElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type LandingState = {
  searchText: string,
  inventoryItems: any[]
}

const Landing: React.FC = (): JSX.Element => {
  const [state, setState] = useState<LandingState>({
    searchText: "",
    inventoryItems: [
      { id: "1", name: "My First Item", quantity: 1, dateAdded: new Date() }
    ]
  });

  const { searchText, inventoryItems } = state;

  const handleSearchChange = (event: React.ChangeEvent<FormControlElement>): void => {
    setState({
      ...state,
      searchText: event.target.value
    });
  }

  const search = (): void => {
    if (searchText.trim() === "") return;

    console.log("search text:", searchText);

    setState({
      ...state,
      inventoryItems: [
        { id: "1", name: "my first item", quantity: 1, dateAdded: new Date() }
      ]
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    search();
  }

  return (
    <Card className="mt-3">
      <Card.Body>
        <Row className={inventoryItems.length !== 0 ? "mb-5" : ""}>
          <Col>
            <form onSubmit={(e) => handleSubmit(e)}>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="What are you looking for?"
                  as="input"
                  value={searchText}
                  onChange={(e) => handleSearchChange(e)}
                />
                <InputGroup.Append>
                  <Button variant="outline-primary" onClick={() => search()}>
                    Search
                      </Button>
                </InputGroup.Append>
              </InputGroup>
            </form>
          </Col>
        </Row>

        {inventoryItems.length !== 0 &&
          <InventoryList inventoryItems={inventoryItems} />
        }
      </Card.Body>
    </Card>
  );
}

export default Landing;