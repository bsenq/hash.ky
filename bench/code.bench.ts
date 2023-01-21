import { describe, bench } from 'vitest';

import hasher from '../src/index.js';

describe('Code test', () => {

    bench('Creating a hash for a String', () => {

        hasher('Hello world');
    });

    bench('Creating a hash for a Number', () => {

        hasher(2023);
    });

    bench('Creating a hash for a BigInt', () => {

        hasher(BigInt(2023));
    });

    bench('Creating a hash for a Boolean', () => {

        hasher(true);
    });

    bench('Creating a hash for a Symbol', () => {

        hasher(Symbol('Hello world'));
    });

    bench('Creating a hash for an Undefined', () => {

        hasher(undefined);
    });
});
