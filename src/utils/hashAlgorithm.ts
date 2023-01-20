export default function (value: string) {

    const limit = Number.MAX_SAFE_INTEGER;

    const base = 17;

    let hash = 0;

    for (let char = 0; char < value.length; char++) {

        hash += value.charCodeAt(char) * (base ** (value.length - char - 1));
    };

    return hash % limit;
};
