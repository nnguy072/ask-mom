import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';

type InventoryListProps = {
  inventoryItems: any[];
}

const InventoryList: React.FC<InventoryListProps> = (props: InventoryListProps): JSX.Element => {
  const { inventoryItems } = props;

  const handleItemClick = (itemIndex: number): void => {
    console.log("Clicked on: ", inventoryItems[itemIndex].name);
  }

  return (
    <React.Fragment>
      <Row>
        <Col>
          <h3>Result(s): {inventoryItems.length}</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Date Added</th>
              </tr>
            </thead>

            <tbody>
              {inventoryItems.map((item, index) => (
                <tr key={item.id} onClick={() => handleItemClick(index)}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.dateAdded.toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default InventoryList;