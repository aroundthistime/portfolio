import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import ZipModelLoader from '@/utils/modelLoader/ZipModelLoader';

const Something = () => {
  const [model, setModel] = useState(null);

  const load = async () => {
    const loader = new ZipModelLoader();

    const loadedModel = await loader.loadAsync('/models/room1.zip');
    setModel(loadedModel);
  };

  useEffect(() => {}, [load()]);

  return null;
  // if (!model) return null;
  // return <primitive object={model} />;
};

const ThreeDPortfolioPage = () => {
  return (
    <Canvas>
      <OrbitControls enablePan enableZoom zoomSpeed={5} />
      <Something />
    </Canvas>
  );
  // return <div>This will be 3dD</div>;
};

export default ThreeDPortfolioPage;
