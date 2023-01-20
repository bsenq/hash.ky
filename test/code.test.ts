import { describe, it, expect } from 'vitest';

import hasher from '../src/index.js';

describe('Code test', () => {

    it('Creating a Hash for a String', () => {

        expect(

            (
                () => {

                    return hasher('Hello world');
                }
            )()
        )
            .toBeTypeOf('string');
    });

    it('Creating a Hash for a Number', () => {

        expect(

            (
                () => {

                    return hasher(2023);
                }
            )()
        )
            .toBeTypeOf('string');
    });

    it('Creating a Hash for a BigInt', () => {

        expect(

            (
                () => {

                    return hasher(2014n);
                }
            )()
        )
            .toBeTypeOf('string');
    });

    it('Creating a Hash for a Boolean', () => {

        expect(

            (
                () => {

                    return hasher(true);
                }
            )()
        )
            .toBeTypeOf('string');
    });

    it('Creating a Hash for a Symbol', () => {

        expect(

            (
                () => {

                    return hasher(Symbol('Hello world'));
                }
            )()
        )
            .toBeTypeOf('string');
    });

    it('Creating a Hash for an Undefined', () => {

        expect(

            (
                () => {

                    return hasher(undefined);
                }
            )()
        )
            .toBeTypeOf('string');
    });
});
