import model from '../CRUDUser';
jest.mock('bcrypt');
import bcrypt from 'bcrypt';

describe('api::models::CRUDUser', () => {
  beforeEach(() => {
    bcrypt.hash = jest.fn((a, b, cb) => cb(null, 'hash!'));
    bcrypt.compare = jest.fn((a, b, cb) => cb(null, true));
  });

  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });

  describe('user creation', () => {
    describe('the password is set', () => {
      test('it is hashed', (done) => {
        const user = { password: 'foo' };
        model.beforeCreate(user, () => {
          expect(user.password === 'hash!').toBe(true);
          expect(bcrypt.hash.mock.calls.length).toBe(1);
          expect(bcrypt.hash.mock.calls[0][0]).toBe('foo');
          expect(bcrypt.hash.mock.calls[0][1]).toBe(10);
          done();
        });
      });
    });

    describe('the password is not set', () => {
      test('it is not hashed', (done) => {
        const user = { password: '' };
        model.beforeCreate(user, () => {
          expect(user.password === 'hash!').toBe(false);
          expect(bcrypt.hash.mock.calls.length).toBe(0);
          done();
        });
      });
    });
  });

  describe('user update', () => {
    describe('the password is set', () => {
      test('it is hashed', (done) => {
        const user = { password: 'foo' };
        model.beforeCreate(user, () => {
          expect(user.password === 'hash!').toBe(true);
          expect(bcrypt.hash.mock.calls.length).toBe(1);
          expect(bcrypt.hash.mock.calls[0][0]).toBe('foo');
          expect(bcrypt.hash.mock.calls[0][1]).toBe(10);
          done();
        });
      });
    });

    describe('the password is not set', () => {
      test('it is not hashed', (done) => {
        const user = { password: '' };
        model.beforeCreate(user, () => {
          expect(user.password === 'hash!').toBe(false);
          expect(bcrypt.hash.mock.calls.length).toBe(0);
          done();
        });
      });
    });
  });

  describe('password verification', () => {
    test('a promise is resolve successfully when no error', (done) => {
      model.verifyPassword('foo', 'hash!')
        .then((result) => {
          expect(bcrypt.compare.mock.calls.length).toBe(1);
          expect(bcrypt.compare.mock.calls[0][0]).toBe('foo');
          expect(bcrypt.compare.mock.calls[0][1]).toBe('hash!');
          expect(result).toBe(true);
          done();
        });
    });
  });
});
