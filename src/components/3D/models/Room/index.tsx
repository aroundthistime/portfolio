import { useEffect, useState } from 'react';
import { Color, Group, MathUtils, MeshPhongMaterial } from 'three';
import ZipModelLoader from '@/utils/modelLoader/ZipModelLoader';
import MonitorScreen from './MonitorScreen';

const Room = () => {
  const [roomModel, setRoomModel] = useState<Group | null>(null);

  /**
   * Load model of the room
   */
  const loadRoomModel = async () => {
    const loader = new ZipModelLoader();
    const [loadedRoom] = (await loader.loadAsync(
      '/models/room.zip',
    )) as Group[];
    loadedRoom.rotateY(MathUtils.degToRad(270));

    loadedRoom.traverse(object => {
      // Paint room wallpaper
      if (object.name === 'Wall_Cube.002_Wall') {
        (object.material as MeshPhongMaterial).color = new Color('#DA7E8A');
      }
    });

    setRoomModel(loadedRoom);
  };

  useEffect(() => {
    loadRoomModel();
  }, []);

  if (!roomModel) return null;

  return (
    <primitive object={roomModel}>
      <MonitorScreen />
    </primitive>
  );
};

export default Room;
