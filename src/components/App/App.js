import React, { Component } from 'react';
import { getTopics, getUserData ,getUserTopics} from '../../actions';
import { connect } from 'react-redux';
import '../../assets/global.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';
import { BrowserRouter as Router } from 'react-router-dom';
const mapStateToProps = state => state;
class App extends Component {
  componentDidMount = () => {
    this.props.getTopics()
  };
  render() {
    const { getUserData, userData ,getUserTopics} = this.props;
    return (
      <Router>
        <div className="App">
          <Header getUserData={getUserData} status={userData.status} />
          <Body userData={userData} getUserTopics={getUserTopics}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, { getTopics, getUserData ,getUserTopics})(App);
