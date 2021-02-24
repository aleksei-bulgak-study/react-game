declare module 'card' {
    export interface Position {
        x: number;
        y: number;
    }

    export interface CardElement {
        coordinates: Position;
        matrix: Position;
        position: number;
        value: number;
        delete: boolean;
        visited: boolean;
        uuid: number;
    }
}
