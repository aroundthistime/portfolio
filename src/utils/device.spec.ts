import UAParser from 'ua-parser-js';
import { isMobileDevice } from './device';

// Use var to trigger hoisting (avoid using before initialization)
// eslint-disable-next-line no-var
var mockedGetDevice = jest.fn();

jest.mock('ua-parser-js', () => {
  const originalModule = jest.requireActual('ua-parser-js');

  const mockedModule = jest.fn(() => ({
    getDevice: mockedGetDevice,
  }));

  // @ts-ignore
  mockedModule.DEVICE = originalModule.DEVICE;

  return mockedModule;
});

describe('isMobileDevice', () => {
  it('returns true for mobile device', () => {
    mockedGetDevice.mockReturnValueOnce({ type: 'mobile' });

    const result = isMobileDevice();
    expect(mockedGetDevice).toHaveBeenCalled();

    expect(result).toBe(true);
  });

  it('returns true for tablet device', () => {
    mockedGetDevice.mockReturnValueOnce({ type: 'tablet' });
    const result = isMobileDevice();

    expect(result).toBe(true);
  });

  it('returns false for desktop device', () => {
    mockedGetDevice.mockReturnValueOnce({ type: 'desktop' });

    const result = isMobileDevice();

    expect(result).toBe(false);
  });

  it('returns false if useragent parsing failed', () => {
    mockedGetDevice.mockReturnValueOnce({ type: undefined });

    const result = isMobileDevice();

    expect(result).toBe(false);
  });
});
