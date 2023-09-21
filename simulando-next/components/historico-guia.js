import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function GuiaHistorico() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="graficos" title="Gráficos">
        Tab content for Home
      </Tab>
      <Tab eventKey="detalhes" title="Detalhes">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}

export default GuiaHistorico;