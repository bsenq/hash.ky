export default function (value: string) {

    let hash = 0;

    for (let char = 0; char < value.length; char++) {

        hash += value.charCodeAt(char) * (13 ** (value.length - char - 1));
    };

    return hash % Number.MAX_SAFE_INTEGER;
};
