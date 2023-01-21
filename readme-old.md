## Acerca de

Un proyecto para crear [hashes](https://en.wikipedia.org/wiki/Hash_function) no criptográficos especificos para JavaScript.

### Algoritmo

> Los siguientes tipos de datos son los soportados, a demás, de explicar como se procesan.

### Procesamiento de Strings

Se retorna un `STRING-XXXXXXXXXXXXXXXX`, las `X` representan un número no mayor a `(2 ^ 53) - 1`.

### Procesamiento de Numbers

Se aplica un `.toString()` para luego procesarse como [String]().

### Prosesamiento de Symbols

Se procesará como un [String]() si el Symbol contiene una descripción, al contrario, se retornará un `SYMBOL-NONE`.

### Procesamiento de BigInts

Se aplica un `.toString()` para luego procesarse como [String]().

### Procesamiento de Booleans

Se retorna un `BOOLEAN-1` si el Boolean es un `true`, al contrario, se retornará o un `BOOLEAN-0`.

### Procesamiento de Undefined

Se retorna un `UNDEFINED-NONE`.
