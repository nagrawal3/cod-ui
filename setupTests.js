import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';

beforeEach(() => {
  // reset all mocks before every test
  jest.resetAllMocks();
});
