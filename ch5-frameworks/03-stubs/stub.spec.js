test('fake same return values', () => {
  const stubFunc = jest.fn().mockReturnValue('abc');

  // 값이 동일하게 유지됨
  expect(stubFunc()).toBe('abc');
  expect(stubFunc()).toBe('abc');
  expect(stubFunc()).toBe('abc');
});

test('fake multiple return values', () => {
  const stubFunc = jest
    .fn()
    .mockReturnValueOnce('a')
    .mockReturnValueOnce('b')
    .mockReturnValueOnce('c');

  // 값이 동일하게 유지됨
  expect(stubFunc()).toBe('a');
  expect(stubFunc()).toBe('b');
  expect(stubFunc()).toBe('c');
  expect(stubFunc()).toBe(undefined);
});
