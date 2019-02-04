import { convertToPath, getIdFromPath } from './pathPrettier';

describe('path prettier helper', () => {
  it('should return prettier path', () => {
    expect(convertToPath('8888', 'Keluarga Ceramah')).toBe(
      '8888-Keluarga-Ceramah'
    );
  });
  it('should return an id', () => {
    expect(getIdFromPath('8888-Keluarga-Ceramah')).toBe(8888);
  });
});
