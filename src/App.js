import { Layout } from "antd";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import DesignContextProvider from "./context/DesignContext";

const { Content } = Layout;

function App() {
  return (
    <DesignContextProvider>
      <Layout className="App">
        <Navbar />
        <Content
          style={{
            display: "flex",
            padding: "50px 0",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Dashboard />
        </Content>
      </Layout>
    </DesignContextProvider>
  );
}

export default App;
