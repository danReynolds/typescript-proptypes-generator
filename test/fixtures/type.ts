export type TestType = {
    numericField: number;
    booleanField: boolean;
    objectField: {
        numericField: number;
        booleanField: boolean;
    };
}

// Literal and union types will be ignored
export type StringLiteral = 'foo';
export type StringLiteralUnion = StringLiteral | 'bar';
export type NumLiteral = 1;
export type NumLiteralUnion = NumLiteral | 2;