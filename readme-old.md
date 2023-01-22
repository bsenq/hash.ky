## Acerca de

Un proyecto para crear [hashes](https://en.wikipedia.org/wiki/Hash_function) no criptográficos específicos para JavaScript.

### Algoritmo

> Sólo se admiten los siguientes tipos de datos.

### Procesamiento de un String

Se retorna un `STRING-000000000000` (el número no es mayor a `(2 ^ 53) - 1`).

### Procesamiento de un Number

Se aplica un `.toString()` y luego [se procesa como un String](https://github.com/theMarzon/hash.ky/blob/main/readme-old.md#procesamiento-de-strings).

### Prosesamiento de un Symbol

[Se procesará como un String](https://github.com/theMarzon/hash.ky/blob/main/readme-old.md#procesamiento-de-strings) si el Symbol contiene una descripción, en caso contrario se retornará un `SYMBOL-NONE`.

### Procesamiento de un BigInt

Se aplica un `.toString()` y luego [se procesa como un String](https://github.com/theMarzon/hash.ky/blob/main/readme-old.md#procesamiento-de-strings).

### Procesamiento de un Boolean

Se retorna un `BOOLEAN-1` si el Boolean es un `true`, en caso contrario se retornará un `BOOLEAN-0`.

### Procesamiento de un Undefined

Se retorna un `UNDEFINED-NONE`.
