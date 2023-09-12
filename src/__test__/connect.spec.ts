import mongooseLoader from '../index';

it('should connect without issue', async () => {
  const connect = await mongooseLoader({
    mongoAdditionalParams: 'authSource=admin',
    mongoDatabase: 'tester',
    mongoHost: 'localhost',
    mongoPassword: '',
    mongoPort: '27017',
    mongoUser: '',
    mongoProtocol: 'mongodb'
  });
  expect(typeof connect).not.toBe(undefined);
});
