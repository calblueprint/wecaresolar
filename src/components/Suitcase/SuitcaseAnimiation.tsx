import { SignalCellularNullTwoTone } from '@material-ui/icons';
import React from 'react';
import { ImageMapper, ImageMapperProps, Area, Map} from 'react-image-mapper2';
import Lights from "../Images/zoomed.jpg";
import Suitcase from "../Images/Suitcase.jpg"; 

type MyState = { imgURLS: string[], imgINDEX: number, mapOfArea: Map};

class SuitcaseAnimation extends React.Component<{}, MyState> {
  constructor(props) {
    super(props); 

    const blue = "#6BADE8"; 
    const radius = 7.5;

    this.state={
      imgURLS: [Suitcase, 
                Lights], 
      imgINDEX: 0, 
      //I hate this. I'm so sorry. 
      mapOfArea: {name: 'Suitcase', areas: [{ id: 1, name: 'lights (left)', shape: 'circle', coords: [150, 60, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 2, name: 'installation sticker', shape: 'circle', coords: [105, 80, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 3, name: 'quick guide', shape: 'circle', coords: [100, 230, radius], preFillColor: blue, strokeColor: blue },
                                            { id: 4, name: 'fetal doppler', shape: 'circle', coords: [195, 75, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 5, name: 'main power switch', shape: 'circle', coords: [205, 150, radius], preFillColor: blue, strokeColor: blue },
                                            { id: 6, name: 'headlamps', shape: 'circle', coords: [230, 215, radius], preFillColor: blue, strokeColor: blue },
                                            { id: 7, name: 'thermometer', shape: 'circle', coords: [265, 265, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 8, name: 'phone pocket', shape: 'circle', coords: [275, 210, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 9, name: 'battery charger', shape: 'circle', coords: [330, 230, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 10, name: '12v sockets', shape: 'circle', coords: [335, 160, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 11, name: 'USB sockets', shape: 'circle', coords: [260, 170, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 12, name: 'light buttons', shape: 'circle', coords: [315, 100, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 13, name: 'side panel', shape: 'circle', coords: [365, 80, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 14, name: 'display screen', shape: 'circle', coords: [240, 90, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 15, name: 'display control buttons', shape: 'circle', coords: [280, 130, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 16, name: 'lights (right)', shape: 'circle', coords: [440, 180, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 17, name: 'light expansion box', shape: 'circle', coords: [420, 280, radius], preFillColor: blue, strokeColor: blue }, 
                                            { id: 18, name: 'main battery', shape: 'circle', coords: [270, 60, radius], preFillColor: blue, strokeColor: blue }]}
    }
  }

  enterArea(map) {
    console.log(map);
		this.setState({
      imgINDEX: 1, //replace with `map.id` later when have all images  
      mapOfArea: {name: 'Suitcase', areas: []},
      });
  }
        render() { 
          return  <div>
          <ImageMapper
              active
              src={this.state.imgURLS[this.state.imgINDEX]}
              width={500}
              height={333}
              map={this.state.mapOfArea}
              onClick={(map) => this.enterArea(map)} 
           />
      </div>
    }
}

export default SuitcaseAnimation; 
