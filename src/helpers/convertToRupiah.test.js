import convertToRupiah from './convertToRupiah';

describe('convert to rupiah helper', () => {
  it('should convert from number to rupiah string', () => {
    expect(convertToRupiah(500000)).toBe('Rp. 500.000');
  });
});
