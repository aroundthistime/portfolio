import { getExtension } from './file';

describe('getExtension', () => {
  it('should return the correct file extension', () => {
    expect(getExtension('file.txt')).toEqual('txt');
    expect(getExtension('document.pdf')).toEqual('pdf');
    expect(getExtension('image.jpg')).toEqual('jpg');
  });

  it('should return file extension in lowercase', () => {
    expect(getExtension('file.TXT')).toEqual('txt');
    expect(getExtension('document.PDF')).toEqual('pdf');
    expect(getExtension('image.JPG')).toEqual('jpg');
  });

  it('should handle filenames with multiple dots', () => {
    expect(getExtension('archive.tar.gz')).toEqual('gz');
  });

  it('should throw error if filename does not include any dots', () => {
    expect(() => {
      getExtension('document');
    }).toThrow();
  });
});
