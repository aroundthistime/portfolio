import { act, fireEvent, renderHook, waitFor } from '@testing-library/react';
import use3DMediaElement from './use3DMediaElement';

describe('use3DMediaElement', () => {
  const TEST_MEDIA_SOURCE = 'test-url';
  const TEST_LOAD_DELAY = 200;

  beforeEach(() => {
    // Reset document
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  it('can create audio element', async () => {
    const { result } = renderHook(use3DMediaElement);

    let audioElement: HTMLAudioElement;
    await act(async () => {
      return new Promise(resolve => {
        const audioElementPromise =
          result.current.createAudioElementFor3D(TEST_MEDIA_SOURCE);

        audioElementPromise.then(resolvedAudioElement => {
          audioElement = resolvedAudioElement;
          resolve();
        });

        setTimeout(() => {
          fireEvent(
            document.querySelector('audio'),
            new Event('canplaythrough'),
          );
        }, TEST_LOAD_DELAY);
      });
    });

    await waitFor(() => {
      expect(result.current.audioElements).toContain(audioElement);
    });
    expect(document.body.contains(audioElement)).toBeTruthy();
  });

  it('can create video element', async () => {
    const { result } = renderHook(use3DMediaElement);

    let videoElement: HTMLVideoElement;
    await act(async () => {
      return new Promise(resolve => {
        const videoElementPromise =
          result.current.createVideoElementFor3D(TEST_MEDIA_SOURCE);

        videoElementPromise.then(resolvedvideoElement => {
          videoElement = resolvedvideoElement;
          resolve();
        });

        setTimeout(() => {
          fireEvent(
            document.querySelector('video'),
            new Event('canplaythrough'),
          );
        }, TEST_LOAD_DELAY);
      });
    });

    await waitFor(() => {
      expect(result.current.videoElements).toContain(videoElement);
    });
    expect(document.body.contains(videoElement)).toBeTruthy();
  });

  it('cleans up created elements without affecting unrelated ones', async () => {
    const { result, unmount } = renderHook(use3DMediaElement);

    let audioElement: HTMLAudioElement;
    let videoElement: HTMLVideoElement;

    await act(async () => {
      return new Promise(resolve => {
        const audioElementPromise =
          result.current.createAudioElementFor3D(TEST_MEDIA_SOURCE);

        audioElementPromise.then(resolvedAudioElement => {
          audioElement = resolvedAudioElement;
          resolve();
        });

        setTimeout(() => {
          fireEvent(
            document.querySelector('audio'),
            new Event('canplaythrough'),
          );
        }, TEST_LOAD_DELAY);
      });
    });

    await act(async () => {
      return new Promise(resolve => {
        const videoElementPromise =
          result.current.createVideoElementFor3D(TEST_MEDIA_SOURCE);

        videoElementPromise.then(resolvedvideoElement => {
          videoElement = resolvedvideoElement;
          resolve();
        });

        setTimeout(() => {
          fireEvent(
            document.querySelector('video'),
            new Event('canplaythrough'),
          );
        }, TEST_LOAD_DELAY);
      });
    });

    const unrelatedAudioElement = document.createElement('audio');
    document.body.appendChild(unrelatedAudioElement);
    const unrelatedVideoElement = document.createElement('video');
    document.body.appendChild(unrelatedVideoElement);

    unmount();

    const audioElements = document.body.querySelectorAll('audio');
    const videoElements = document.body.querySelectorAll('video');

    expect(audioElements).not.toContain(audioElement);
    expect(audioElements).toContain(unrelatedAudioElement);
    expect(videoElements).not.toContain(videoElement);
    expect(videoElements).toContain(unrelatedVideoElement);
  });
});
