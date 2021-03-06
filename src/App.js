import React from 'react';
import Header from './components/header/header.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up';
import CheckoutPage from './pages/checkout/checkout.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component {

unsubscribeFromAuth = null;
componentDidMount(){
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
  if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    userRef.onSnapshot(snapShot=>{
      setCurrentUser({
        id: snapShot.id,
        ...snapShot.data
      })
    })
  }
  setCurrentUser({userAuth});
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){
  return (
    <div >
      <Header  />
     <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route  path='/Shop' component={ShopPage}/>
       <Route exact path='/signin' component={SignInAndUp}/>
       <Route exact path ='/checkout' component={CheckoutPage}/>

     </Switch>
     
    </div>
  );
}
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps) (App);
