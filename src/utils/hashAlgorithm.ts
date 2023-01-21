export default function (characters: string) {

    const limit = Number.MAX_SAFE_INTEGER;

    const base = 13;

    let hash = 0;

    for (let char = 0; char < characters.length; char++) {

        hash *= base;

        hash += characters.charCodeAt(char);

        hash %= limit;
    };

    return hash;
};
