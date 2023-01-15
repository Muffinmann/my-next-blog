import cls from './cls';

describe('unify class', () => {
  it('should unify input classes successfully', () => {
    expect(cls('a', 'b')).toBe('a b');
  });
});