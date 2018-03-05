import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


import {indigo400} from 'material-ui/styles/colors';

import Title from '../components/Title';
import Container from '../components/Container'
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import data from '../requests/places';
import {
  BrowserRouter as ReactRouter,
  Link,
  Route
} from 'react-router-dom';

import TransitionGroup from 'react-transition-group/TransitionGroup';


export default class Home extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      places: data.places
    }


    this.hidePlace = this.hidePlace.bind(this);
  }

  places(){
    return this.state.places.map((place,index)=>{
      return(
        <PlaceCard onRemove={this.hidePlace} place={place} index={index} />
      );
    })
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el != place)
    })
  }

  render(){
    return(
      <section>
        <div className="Header-background">
          <Container>
            <div className="Header-main">
              <Title></Title>
              <RaisedButton label="Novedades del Plantel" primary={true} />
              <img className="Header-illustration" src={process.env.PUBLIC_URL + '/images/top-background.png'} />
            </div>
            <div>
              <Benefits/>
            </div>
          </Container>
        </div>
        <div style={{'backgroundColor': indigo400, 'padding': '50px', color: 'white'}}>
          <h3 style={{'fontSize': '24px'}}>Nuestra Comunidad</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    );
  }

}
