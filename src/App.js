import { Layout } from "antd";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import DesignContextProvider from "./context/DesignContext";
import Food from "./components/food/Food";

const { Content } = Layout;

function App() {
  return (
    <DesignContextProvider>
      <Router>
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
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/food" element={<Food />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </DesignContextProvider>
  );
}

export default App;
