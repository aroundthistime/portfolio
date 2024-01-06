import { MathUtils, Object3D, ObjectLoader } from 'three';
import { LoaderProto, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import useClock from './useClock';
import useAnimatedModel from './useAnimatedModel';
import usePhotoFrames from './usePhotoFrames';
import { MyContactType } from '@/types/MyContact';

const MonitorScreen = dynamic(() => import('./MonitorScreen'));

/**
 * Component for rendering room with every objects of 3d scene included (except for bart)
 */
const Room = () => {
  const room = useLoader(
    ObjectLoader as LoaderProto<unknown>,
    '/models/room.json',
  ) as Object3D;

  // Objects to handle additionally in the room object tree (eg. animations, material edit)
  const [cat, setCat] = useState<Object3D>();
  const [clock, setClock] = useState<Object3D>();
  const [psyduck, setPsyduck] = useState<Object3D>();
  const [coffee, setCoffee] = useState<Object3D>();

  const photoFramesRef = useRef<Record<MyContactType, Object3D>>({
    [MyContactType.Profile]: undefined,
    [MyContactType.Github]: undefined,
    [MyContactType.LinkedIn]: undefined,
  });

  useAnimatedModel(cat);
  useAnimatedModel(coffee);
  useAnimatedModel(psyduck);
  usePhotoFrames(photoFramesRef);

  // Clock will use dedicated logic for updating animation based on actual time
  useClock(clock);

  useEffect(() => {
    if (!room) return;

    room.traverse(object => {
      switch (object.name) {
        case 'cat.glb':
          setCat(object);
          break;
        case 'clock.glb':
          setClock(object);
          break;
        case '3december_coffe_bear.glb':
          setCoffee(object);
          break;
        case 'psyduck_kfc_toy.glb':
          setPsyduck(object);
          break;
        case MyContactType.Profile:
        case MyContactType.Github:
        case MyContactType.LinkedIn:
          photoFramesRef.current[object.name] = object;
          break;
        default:
      }
    });
  }, [room]);

  return (
    <primitive object={room} rotation={[0, MathUtils.degToRad(270), 0]}>
      <MonitorScreen />
    </primitive>
  );
};

export default Room;
