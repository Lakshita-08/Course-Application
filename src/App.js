import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
import Course from "./components/Course";
import Allcourse from "./components/Allcourses";
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {

  const btnhandle = () => {
    toast("first mgs");
  };

  return (
    <div>
      <Router>
        <ToastContainer />
          {/* <h1>Simple Application</h1>
          <Allcourse />
          <Addcourse /> */}
          <Container>
            <Header />

            <Row>
              <Col md={4}>
                <Menu />
              </Col>
              <Col md={8}>
                {/* <Home /> */}
                <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/add-course" Component={Addcourse} exact />
                <Route path="/view-courses" Component={Allcourse} exact />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
    </div>
  );
}

export default App;
