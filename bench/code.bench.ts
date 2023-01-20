import { describe, bench } from 'vitest';

import hasher from '../src/index.js';

describe('Code test', () => {

    bench('Creating a Hash for a String', () => {

        hasher('Hello world');
    });

    bench('Creating a Hash for a Number', () => {

        hasher(2023);
    });

    bench('Creating a Hash for a BigInt', () => {

        hasher(2014n);
    });

    bench('Creating a Hash for a Boolean', () => {

        hasher(true);
    });

    bench('Creating a Hash for a Symbol', () => {

        hasher(Symbol('Hello world'));
    });

    bench('Creating a Hash for an Undefined', () => {

        hasher(undefined);
    });
});
