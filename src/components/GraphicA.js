import { WordCloud } from '@ant-design/plots';
import GraphicAMask from './GraphicAMask';

function GraphicA() {
	const data = require('./GraphicAMask.json');
	
  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    imageMask: GraphicAMask,
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  };

  return (
    <div className="GraphicA" style={{width:'100%', maxWidth: '900px', height: '200px', margin: '0 auto'}}>
      <WordCloud {...config} />
    </div>
  );
}

export default GraphicA;
