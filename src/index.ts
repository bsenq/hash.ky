import hashAlgorithm from './utils/hashAlgorithm.js';

export default function (value: string | number | symbol | bigint | boolean | undefined) {

    if (typeof value !== 'string'
    &&  typeof value !== 'number'
    &&  typeof value !== 'bigint'
    &&  typeof value !== 'symbol'
    &&  typeof value !== 'boolean'
    &&  typeof value !== 'undefined') throw new Error('Invalid value type');

    return `${ typeof value }-${

        typeof value === 'string'

            ? hashAlgorithm(value)

            : typeof value === 'symbol'

                ? value.description

                    ? hashAlgorithm(value.description)

                    : 'NONE'

                : typeof value === 'boolean'

                    ? Number(value)

                    : typeof value === 'undefined'

                        ? 'NONE'

                        :  hashAlgorithm(String(value))
    }`
        .toUpperCase();
};
