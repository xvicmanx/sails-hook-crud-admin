import service from '../AuthService';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMjM0NSwibmFtZSI6InRlc3QtdXNlciJ9LCJleHAiOjE1MzExNzM2NjUsImlhdCI6MTUzMTA4NzI2NX0.MJoiR5Jup9wHSPxvT98jfheig24O8TdgDZTMqCOhfps';

describe('api::admin-services::AuthService', () => {
  describe('verifyToken', () => {
    test('it verifies the token successfully', (done) => {
      const result = service.verifyToken(token);
      result.then((data) => {
        expect(data).toMatchSnapshot();
        done();
      });
    });
  });

  describe('generateTokenInfo', () => {
    test('it generates the token successfully', () => {
      const user = {
        id: 12345,
        name: 'test-user',
      };
      const result = service.generateTokenInfo(user);
      expect(typeof result.exp).toBe('number');
      expect(typeof result.token).toBe('string');
    });
  });

  describe('hasAccess', () => {
    test('it is true if the user has the universal right', () => {
      const data = {
        action: 'test-action',
        resource: 'test-resource',
        rights: [
          '*::*',
        ],
      };
      expect(service.hasAccess(data)).toBe(true);
    });

    test('it is true if the user has the universal action for a resource', () => {
      const data = {
        action: 'test-action',
        resource: 'test-resource',
        rights: [
          '*::test-resource',
        ],
      };
      expect(service.hasAccess(data)).toBe(true);
    });

    test('it is true if the user can do an action for any resource', () => {
      const data = {
        action: 'test-action',
        resource: 'test-resource',
        rights: [
          'test-action::*',
        ],
      };
      expect(service.hasAccess(data)).toBe(true);
    });

    test('it is true if the user has the right', () => {
      const data = {
        action: 'test-action',
        resource: 'test-resource',
        rights: [
          'test-action::test-resource',
        ],
      };
      expect(service.hasAccess(data)).toBe(true);
    });
  });
});
