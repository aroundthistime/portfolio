import { getCacheDisabledURL } from './url';

const MOCK_TIME_VALUE = 1;
jest.spyOn(Date.prototype, 'getTime').mockReturnValue(MOCK_TIME_VALUE);

describe('getCacheDisabledURL', () => {
  it('processes full URL', () => {
    const TEST_URL = 'https://www.naver.com';

    expect(getCacheDisabledURL(TEST_URL)).toEqual(
      `${TEST_URL}?_=${MOCK_TIME_VALUE}`,
    );
  });

  it('processes relative path URL', () => {
    const TEST_URL = '/image.jpg';

    expect(getCacheDisabledURL(TEST_URL)).toEqual(
      `${TEST_URL}?_=${MOCK_TIME_VALUE}`,
    );
  });

  it('processes URL with query params', () => {
    const TEST_URL = 'www.naver.com?color=blue';

    expect(getCacheDisabledURL(TEST_URL)).toEqual(
      `${TEST_URL}&_=${MOCK_TIME_VALUE}`,
    );
  });

  it('processes URL without breaking other query params', () => {
    const TEST_URL = 'www.naver.com?_=blue&__=newest';
    expect(getCacheDisabledURL(TEST_URL)).toEqual(
      `${TEST_URL}&___=${MOCK_TIME_VALUE}`,
    );
  });

  it('does not process for blob URLS', () => {
    const BLOB_URL = 'blob:q234q23';
    expect(getCacheDisabledURL(BLOB_URL)).toEqual(BLOB_URL);
  });

  it('does not process for data URLS', () => {
    const DATA_URL = 'data:,Hello%2C%20World%21';
    expect(getCacheDisabledURL(DATA_URL)).toEqual(DATA_URL);
  });
});
