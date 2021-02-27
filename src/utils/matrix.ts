import { CardElement } from 'card';

export const sort = (f: number, s: number): number => (f < s ? -1 : f > s ? 1 : 0);

export const sortCardsByYCoordinates = (cards: Array<CardElement>): Array<CardElement> => {
    return cards.sort((f, s) => sort(f.matrix.y, s.matrix.y));
};

const sortCardsByXCoordinates = (cards: Array<CardElement>): Array<CardElement> => {
    return cards.sort((f, s) => sort(f.matrix.x, s.matrix.x));
};

export const sortCardsByPosition = (cards: Array<CardElement>): Array<CardElement> => {
    return cards.sort((f, s) => sort(f.position, s.position));
};

export const convertToMatrix = (cards: Array<CardElement>): CardElement[][] => {
    const matrix: CardElement[][] = [];
    cards.forEach((card) => {
        if (!matrix[card.matrix.x]) {
            matrix[card.matrix.x] = [];
        }
        matrix[card.matrix.x].push({ ...card });
    });

    return matrix.map(sortCardsByYCoordinates);
};

export const convertToYMatrix = (cards: Array<CardElement>): CardElement[][] => {
    const matrix: CardElement[][] = [];
    cards.forEach((card) => {
        if (!matrix[card.matrix.y]) {
            matrix[card.matrix.y] = [];
        }
        matrix[card.matrix.y].push({ ...card });
    });

    return matrix.map(sortCardsByXCoordinates);
};

export const shiftToLeft = (cards: Array<CardElement>): number => {
    let overalSum = 0;
    for (let index = 0; index < cards.length; index++) {
        const left = cards[index];
        if (index === cards.length - 1) {
            if (!left.visited) left.matrix.y = index > 0 ? cards[index - 1].matrix.y + 1 : 0;
        } else {
            const right = cards[index + 1];
            if (left.visited) {
                continue;
            } else if (left.value === right.value) {
                right.matrix.y = index > 0 ? cards[index - 1].matrix.y + 1 : 0;
                overalSum += right.value;
                right.value += right.value;
                right.visited = true;
                left.delete = true;
            } else {
                left.matrix.y = index;
            }
        }
        left.visited = true;
    }
    return overalSum;
};

export const shiftToTop = (cards: Array<CardElement>): number => {
    let overalSum = 0;
    for (let index = 0; index < cards.length; index++) {
        const left = cards[index];
        if (index === cards.length - 1) {
            if (!left.visited) left.matrix.x = index > 0 ? cards[index - 1].matrix.x + 1 : 0;
        } else {
            const right = cards[index + 1];
            if (left.visited) {
                continue;
            } else if (left.value === right.value) {
                right.matrix.x = index > 0 ? cards[index - 1].matrix.x + 1 : 0;
                overalSum += right.value;
                right.value += right.value;
                right.visited = true;
                left.delete = true;
            } else {
                left.matrix.x = index;
            }
        }
        left.visited = true;
    }
    return overalSum;
};

export const shiftToRight = (cards: Array<CardElement>, size: number): number => {
    if (cards.length === 1) {
        cards[0].matrix.y = size - 1;
        return 0;
    }
    let overalSum = 0;
    for (let index = cards.length - 1; index >= 0; index--) {
        const right = cards[index];
        if (right.visited) {
            continue;
        }
        if (index > 0) {
            const left = cards[index - 1];

            if (right.value === left.value) {
                right.delete = true;
                overalSum += left.value;
                left.value *= 2;
                right.visited = true;
                left.visited = true;

                if (index !== cards.length - 1) {
                    left.matrix.y = cards[index + 1].matrix.y - 1;
                } else {
                    left.matrix.y = size - 1;
                }
            } else {
                right.visited = true;
                if (index !== cards.length - 1) {
                    right.matrix.y = cards[index + 1].matrix.y - 1;
                } else {
                    right.matrix.y = size - 1;
                }
            }
        } else {
            right.matrix.y = cards[index + 1].matrix.y - 1;
        }
    }
    return overalSum;
};

export const shiftToDown = (cards: Array<CardElement>, size: number): number => {
    if (cards.length === 1) {
        cards[0].matrix.x = size - 1;
        return 0;
    }
    let overalSum = 0;
    for (let index = cards.length - 1; index >= 0; index--) {
        const right = cards[index];
        if (right.visited) {
            continue;
        }
        if (index > 0) {
            const left = cards[index - 1];

            if (right.value === left.value) {
                right.delete = true;
                overalSum += left.value;
                left.value *= 2;
                right.visited = true;
                left.visited = true;

                if (index !== cards.length - 1) {
                    left.matrix.x = cards[index + 1].matrix.x - 1;
                } else {
                    left.matrix.x = size - 1;
                }
            } else {
                right.visited = true;
                if (index !== cards.length - 1) {
                    right.matrix.x = cards[index + 1].matrix.x - 1;
                } else {
                    right.matrix.x = size - 1;
                }
            }
        } else {
            right.matrix.x = cards[index + 1].matrix.x - 1;
        }
    }
    return overalSum;
};
