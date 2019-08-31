import { isAuth } from './isAuth';

const validUser = {
  data: {
    id: 1
  }
};

const invalidUserA = {};

const invalidUserB = {
  data: {
    id: 'B'
  }
}

test('Validates auth is correct', () => {
  expect(isAuth(validUser)).toBe(true);
  expect(isAuth(invalidUserA)).toBe(false);
  expect(isAuth(invalidUserB)).toBe(false);
});