import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

beforeEach(() => {
  // reset all mocks before every test
  jest.resetAllMocks();
});
