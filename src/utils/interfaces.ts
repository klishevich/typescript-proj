export interface ILabelledValue {
    label: string;
}

export function printLabel(labelledObj: ILabelledValue) {
    return labelledObj.label;
}

export interface ISquareConfig {
    color?: string;
    width?: number;
}

export function createSquare(config: ISquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
