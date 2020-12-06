import React from 'react';
import { ImageMapper, Map} from 'react-image-mapper2';
import AnimationCard from "./AnimationCard"; 
import Suitcase from "../Images/Suitcase.jpg"; 
import FetalDoppler from "../Images/fetaldoppler.jpg";
import HeadLamp from "../Images/headlamps.jpg";
import PhoneCharger from "../Images/phonecharger.jpg";
import Lights from "../Images/lights.jpg"; 

type MyState = { clicked: boolean, resourceKey: number, imgURLS: string[], imgINDEX: number, mapOfArea: Map};


class SuitcaseAnimation extends React.Component<{match}, MyState> {
  constructor(props) {
    super(props); 

    const blue = "#6BADE8"; 
    const radius = 7.5;

    this.state={
      clicked: false, 
      imgURLS: [Suitcase, " ", " ", " ", FetalDoppler, " ", HeadLamp, " ", PhoneCharger, " ", " ", " ", " ", " ", " ", " ", Lights, " ", " "],
      imgINDEX: 0, 
      resourceKey: 0, 
      //I hate this. I'm so sorry. help me find a better way. 
      mapOfArea: {name: 'Suitcase', areas: [{ _id: '1', name: 'lights (left)', shape: 'circle', coords: [150, 60, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '2', name: 'installation sticker', shape: 'circle', coords: [105, 80, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '3', name: 'quick guide', shape: 'circle', coords: [100, 230, radius], preFillColor: blue, strokeColor: blue },
                                            { _id: '4', name: 'fetal doppler', shape: 'circle', coords: [195, 75, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '5', name: 'main power switch', shape: 'circle', coords: [205, 150, radius], preFillColor: blue, strokeColor: blue },
                                            { _id: '6', name: 'headlamps', shape: 'circle', coords: [230, 215, radius], preFillColor: blue, strokeColor: blue },
                                            { _id: '7', name: 'thermometer', shape: 'circle', coords: [265, 265, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '8', name: 'phone pocket', shape: 'circle', coords: [275, 210, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '9', name: 'battery charger', shape: 'circle', coords: [330, 230, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '10', name: '12v sockets', shape: 'circle', coords: [335, 160, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '11', name: 'USB sockets', shape: 'circle', coords: [260, 170, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '12', name: 'light buttons', shape: 'circle', coords: [315, 100, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '13', name: 'side panel', shape: 'circle', coords: [365, 80, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '14', name: 'display screen', shape: 'circle', coords: [240, 90, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '15', name: 'display control buttons', shape: 'circle', coords: [280, 130, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '16', name: 'lights (right)', shape: 'circle', coords: [440, 180, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '17', name: 'light expansion box', shape: 'circle', coords: [420, 280, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '18', name: 'main battery', shape: 'circle', coords: [270, 60, radius], preFillColor: blue, strokeColor: blue }]}
    }
  }

  enterArea(area) {
    console.log(area);
    var index = area._id; 
		this.setState({
      clicked: true,
      resourceKey: area._id, 
      imgINDEX: Number(index),
      mapOfArea: {name: 'Suitcase', areas: []},
      });
  }

        render() { 
          return  <div>
          <ImageMapper //initial load 
              active
              src={this.state.imgURLS[this.state.imgINDEX]}
              width={500}
              height={333}
              map={this.state.mapOfArea}
              onClick={(area) => this.enterArea(area)} 
           />
          
          {this.state.clicked ? //area clicked 
          <ImageMapper
              active
              src={this.state.imgURLS[this.state.imgINDEX]}
              map={this.state.mapOfArea}
           />
          && 
          <AnimationCard resourceId={this.state.resourceKey} match={this.props.match}/> : null}
      </div>
    }
}

export default SuitcaseAnimation; 