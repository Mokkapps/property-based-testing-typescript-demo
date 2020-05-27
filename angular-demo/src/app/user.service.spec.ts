import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import * as fc from 'fast-check';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isValidUser property based tests', () => {
    it('should fail', () => {
      const UserArbitrary = fc.record({
        name: fc.string(6, 1000),
        age: fc.integer(),
        addresses: fc.array(
          fc.record({
            street: fc.string(6, 500),
            postalCode: fc.integer(),
            city: fc.string(6, 500),
          }),
        ),
      });

      fc.assert(
        fc.property(UserArbitrary, (user) => {
          return service.isValidUser(user);
        }),
        { verbose: true }, // have the list of all failing values encountered during the run
      );
    });

    it('should be valid user', () => {
      const UserArbitrary = fc.record({
        name: fc.string(6, 1000),
        age: fc.integer(1, 150),
        addresses: fc.array(
          fc.record({
            street: fc.string(6, 500),
            postalCode: fc.integer(),
            city: fc.string(6, 500),
          }),
        ),
      });

      fc.assert(
        fc.property(UserArbitrary, (user) => {
          return service.isValidUser(user);
        }),
        { verbose: true }, // have the list of all failing values encountered during the run
      );
    });
  });
});
