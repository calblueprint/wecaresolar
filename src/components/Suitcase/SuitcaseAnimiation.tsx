import React from 'react';
import { ImageMapper, Map} from 'react-image-mapper2';
import AnimationCard from "./AnimationCard"; 
import Suitcase from "../Images/Suitcase.jpg"; 
import FetalDoppler from "../Images/fetaldoppler.jpg";
import HeadLamp from "../Images/headlamps.jpg";
import PhoneCharger from "../Images/phonecharger.jpg";
import Lights from "../Images/lights.jpg"; 

type MyState = {
  clicked: boolean, 
  resourceKey: number, 
  imgURLS: string[], 
  imgINDEX: number, 
  mapOfArea: Map, 
  height: number, 
  width: number
};



class SuitcaseAnimation extends React.Component<{match}, MyState> {
  constructor(props) {
    super(props); 

    const blue = "#6BADE8"; 
    const radius = window.innerHeight * .013;
    const height =  window.innerHeight * .6; 
    const width = window.innerWidth; 

    this.state={ 
      clicked: false, 
      imgURLS: [Suitcase, " ", " ", " ", FetalDoppler, " ", HeadLamp, " ", PhoneCharger, " ", " ", " ", " ", " ", " ", " ", Lights, " ", " "],
      imgINDEX: 0, 
      resourceKey: 0, 
      height: height,
      width: width,
      //I hate this. I'm so sorry. help me find a better way. 
      mapOfArea: {name: 'Suitcase', areas: [{ _id: '1', name: 'lights (left)', shape: 'circle', coords: [.26 * width, .18 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '2', name: 'installation sticker', shape: 'circle', coords: [.2 * width, .28 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '3', name: 'quick guide', shape: 'circle', coords: [.2 * width, .7 * height, radius], preFillColor: blue, strokeColor: blue },
                                            { _id: '4', name: 'fetal doppler', shape: 'circle', coords: [.39 * width, .22 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '5', name: 'main power switch', shape: 'circle', coords: [.41 * width, .46 * height, radius], preFillColor: blue, strokeColor: blue },
                                            { _id: '6', name: 'headlamps', shape: 'circle', coords: [.46 * width, .68 * height, radius], preFillColor: blue, strokeColor: blue },
                                            { _id: '7', name: 'thermometer', shape: 'circle', coords: [.52 * width, .77 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '8', name: 'phone pocket', shape: 'circle', coords: [.55 * width, .63 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '9', name: 'battery charger', shape: 'circle', coords: [.66 * width, .67 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '10', name: '12v sockets', shape: 'circle', coords: [.67 * width, .48 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '11', name: 'USB sockets', shape: 'circle', coords: [.49 * width, .44 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '12', name: 'light buttons', shape: 'circle', coords: [.64 * width, .32 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '13', name: 'side panel', shape: 'circle', coords: [.73 * width, .23 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '14', name: 'display screen', shape: 'circle', coords: [.48 * width, .27 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '15', name: 'display control buttons', shape: 'circle', coords: [.56 * width, .38 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '16', name: 'lights (right)', shape: 'circle', coords: [.88 * width, .51 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '17', name: 'light expansion box', shape: 'circle', coords: [.83 * width, .78 * height, radius], preFillColor: blue, strokeColor: blue }, 
                                            { _id: '18', name: 'main battery', shape: 'circle', coords: [.55 * width, .17 * height, radius], preFillColor: blue, strokeColor: blue }]}
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
              width= {this.state.width}
              height={this.state.height}
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