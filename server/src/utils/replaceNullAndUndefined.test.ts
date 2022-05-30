import { expectType } from 'tsd';
import { replaceNullAndUndefined } from './replaceNullAndUndefined';

const ORIGINAL_OBJECT = {
  person: {
    id: 12345,
    name: 'John Doe',
    phones: { home: '800-123-4567', mobile: null },
    email: ['jd@example.com', 'jd@example.org'],
    dateOfBirth: null,
    registered: true,
    emergencyContacts: [
      { name: 'Jane Doe', phone: null, relationship: 'spouse' },
      { name: 'Justin Doe', phone: '877-123-1212', relationship: undefined }
    ]
  }
};

const EXPECTED_RESULT = {
  person: {
    id: 12345,
    name: 'John Doe',
    phones: { home: '800-123-4567', mobile: '' },
    email: ['jd@example.com', 'jd@example.org'],
    dateOfBirth: '',
    registered: true,
    emergencyContacts: [
      { name: 'Jane Doe', phone: '', relationship: 'spouse' },
      { name: 'Justin Doe', phone: '877-123-1212', relationship: '' }
    ]
  }
};

describe('replaceNullAndUndefined', () => {
  it('works', () => {
    const result = replaceNullAndUndefined(ORIGINAL_OBJECT);

    expect(result).toEqual(EXPECTED_RESULT);
    expectType<typeof EXPECTED_RESULT>(result);
  });
});
