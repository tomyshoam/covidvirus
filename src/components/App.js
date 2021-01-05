import { useEffect, useState } from 'react';
import Axios from 'axios';
import Map from './Map/Map.component';

function App() {
  const [mapData, setMapData] = useState();
  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        'https://disease.sh/v3/covid-19/countries/'
      );
      setMapData(response.data);
    }
    getData();
  }, []);
  return <Map data={mapData} />;
}

export default App;
