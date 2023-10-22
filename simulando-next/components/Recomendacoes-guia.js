import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function JustifiedExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Português e Lietratura">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Matemática">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="História">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Geografia">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default JustifiedExample;