## About

A project to create non-cryptographic [hashes](https://en.wikipedia.org/wiki/Hash_function) specific to JavaScript.

### Algorithm

> Only the following data types are allowed.

#### Processing a String

Returns `STRING-000000000000` (the number is not greater than `(2 ^ 53) - 1`).

#### Processing a Number

A `.toString()` is applied and [then processed as a String](https://github.com/theMarzon/hash.ky/blob/main/readme.md#processing-a-string). 

#### Processing a Symbol

[It will be processed as a String](https://github.com/theMarzon/hash.ky/blob/main/readme.md#processing-a-string) if the Symbol contains a description, otherwise a `SYMBOL-NONE` will be returned.

#### Processing a BigInt

A `.toString()` is applied and [then processed as a String](https://github.com/theMarzon/hash.ky/blob/main/readme.md#processing-a-string). 

#### Processing a Boolean

A `BOOLEAN-1` is returned if the Boolean is a `true`, otherwise a `BOOLEAN-0` will be returned.

#### Processing an Undefined

An `UNDEFINED-NONE` is returned.
