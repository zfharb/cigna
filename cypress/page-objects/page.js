

const SELECTORS = {
};

export default class Page {
    constructor(selector) {
        this.SELECTORS = {...this.SELECTORS, ...selector};
    }

}