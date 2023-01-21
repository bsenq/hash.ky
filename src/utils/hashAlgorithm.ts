export default function (characters: string) {

    const base = 13;

    let hash = 0;

    for (let char = 0; char < characters.length; char++) {

        hash = ((hash * base) + characters.charCodeAt(char)) % Number.MAX_SAFE_INTEGER;
    };

    return hash;
};
