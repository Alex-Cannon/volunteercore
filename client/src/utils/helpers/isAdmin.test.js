import { isAdmin } from './isAdmin';

const validUser = {
  data: {
    roles: ["Admin"]
  }
};

const invalidUserA = null;

const invalidUserB = {
  data: {
    roles: []
  }
};

test('Validates admins correctly', () => {
  expect(isAdmin(validUser)).toBe(true);
  expect(isAdmin(invalidUserA)).toBe(false);
  expect(isAdmin(invalidUserB)).toBe(false);
});