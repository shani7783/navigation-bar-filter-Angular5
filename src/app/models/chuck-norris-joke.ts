export class ChuckNorrisJoke {
    public id: number;
    public joke: string;

    constructor(jsonData) {
        Object.assign(this, jsonData);
    }
}
