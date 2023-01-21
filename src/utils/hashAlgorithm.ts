export default function (characters: string) {

    const base = 31;

    let hash = 0;

    for (let char = 0; char < characters.length; char++) {

        hash += characters.charCodeAt(char) * (base ** char);
    };

    return hash % Number.MAX_SAFE_INTEGER;
};
