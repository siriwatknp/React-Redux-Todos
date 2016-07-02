import React,{ Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoApp from '../Todo/components/App';

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
       <div>
         <Header />
         <div className="container" style={{position:'relative',top:'70px'}}>
           <TodoApp {...this.props}/>
         </div>
         <Footer />
       </div>
    )
  }
}

export default App
