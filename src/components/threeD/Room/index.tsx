import { lazy, useEffect, useState } from 'react';
import { Group, MathUtils, Object3DEventMap } from 'three';
import { GLTF } from 'three-stdlib';
import ZipModelLoader from '@/utils/modelLoader/ZipModelLoader';

const Room = () => {
  const [roomModel, setRoomModel] = useState<
    Group<Object3DEventMap> | GLTF | null
  >(null);

  /**
   * Load model of the room
   */
  const loadRoomModel = async () => {
    const loader = new ZipModelLoader();
    const [loadedRoom] = (await loader.loadAsync(
      '/models/room.zip',
    )) as Group[];
    loadedRoom.rotateY(MathUtils.degToRad(270));

    setRoomModel(loadedRoom);
  };

  useEffect(() => {
    loadRoomModel();
  }, []);

  if (!roomModel) return null;

  return <primitive object={roomModel} />;
};

export default Room;
