import { Layout } from "antd";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import DesignContextProvider from "./context/DesignContext";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <DesignContextProvider>
        <Layout>
          <Navbar />
          <Content style={{ padding: "50px 0", backgroundImage: `url("https://www.engineroom.org.uk/images/archive/art.jpg")` }}>
            <Dashboard className="dashboard"/>
          </Content>
        </Layout>
      </DesignContextProvider>
    </div>
  );
}

export default App;
