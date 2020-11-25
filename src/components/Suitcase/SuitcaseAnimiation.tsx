import { SignalCellularNullTwoTone } from '@material-ui/icons';
import React from 'react';
import { ImageMapper, ImageMapperProps, Area, Map} from 'react-image-mapper2';
import UserManual from "../Images/zoomed.jpg";

var URL = "https://uc691fdfeef65b60eb7fb90adb3a.previews.dropboxusercontent.com/p/thumb/AA9GHu1AwFDMbmRdBDbgqn3dVT-DZ-QLbleObwjS8WboCpyZLDRfvDOlJrXDLQ07A17v8W8cqcnh07kKRkCsfIWxBAmmeRZW9AGH2sqSjJKRNd9EygWoYEWu0wPdhwWs2Iddz6Bpq6diRu0omwFSYOqi8MSwBi1wQiV2G_jja6ZbOeNzhkdmLP67dPiYKvZgMR9AMJzzepsyUtUlAeP3U_frv2uedYDIk2xJ-ja71SsVrCoF3Yz3PkZ7PI1lXvv66mi7Y8gdQdQLTzcnasN5uwoxD0R2F2z-HFF1qJSIpr6UsJwsGDGUSzBedsuM6sGyVCh88xLs23UmMFFt0WhQqiVOSflR7t7TR_EGzNsO7F9v0vd8xR5Vti9Xi_73KMfQ8OE/p.png?fv_content=true&size_mode=5"; 

type MyState = { imgURLS: string[], imgINDEX: number, mapOfArea: Map};

class SuitcaseAnimation extends React.Component<{}, MyState> {
  constructor(props) {
    super(props); 

    const emptyCoords = null; 
    const blue = "#6BADE8"; 
    const radius = 10;

    this.state={
      imgURLS: ["https://uc691fdfeef65b60eb7fb90adb3a.previews.dropboxusercontent.com/p/thumb/AA9GHu1AwFDMbmRdBDbgqn3dVT-DZ-QLbleObwjS8WboCpyZLDRfvDOlJrXDLQ07A17v8W8cqcnh07kKRkCsfIWxBAmmeRZW9AGH2sqSjJKRNd9EygWoYEWu0wPdhwWs2Iddz6Bpq6diRu0omwFSYOqi8MSwBi1wQiV2G_jja6ZbOeNzhkdmLP67dPiYKvZgMR9AMJzzepsyUtUlAeP3U_frv2uedYDIk2xJ-ja71SsVrCoF3Yz3PkZ7PI1lXvv66mi7Y8gdQdQLTzcnasN5uwoxD0R2F2z-HFF1qJSIpr6UsJwsGDGUSzBedsuM6sGyVCh88xLs23UmMFFt0WhQqiVOSflR7t7TR_EGzNsO7F9v0vd8xR5Vti9Xi_73KMfQ8OE/p.png?fv_content=true&size_mode=5", 
                UserManual], 
      imgINDEX: 0, 
      mapOfArea: {name: 'Suitcase', areas: [{ name: 'user manual', shape: 'circle', coords: [100, 230, radius], preFillColor: blue, strokeColor: blue }, 
                                            { name: 'fetal', shape: 'circle', coords: [100, 100, radius], preFillColor: blue, strokeColor: blue }]}
    }
  }

  // getInitialState() {
	// 	return { hoveredArea: null, moveMsg: null };
  // }
  
  enterArea(map) {
    console.log(map.name);
		this.setState({
      imgINDEX: 1,
    });
  }
        render() { 
          return  <div>
          <ImageMapper
              active
              src={this.state.imgURLS[this.state.imgINDEX]}
              width={500}
              map={this.state.mapOfArea}
              // onLoad={() => this.getInitialState()} //bug: on initial load, buttons don't pop up
              onClick={(map) => this.enterArea(map)} 
           />
      </div>
    }
}

export default SuitcaseAnimation; 


//cannot do state inside functional components
//can use hooks in functional components