export interface GetTokenFn {
    (forceRegexp?: any): any;
    jumpTo: any;
}
export declare var version: string;
export declare var parse: (inpt: any, opts: any) => any;
export declare var defaultOptions: {
    ecmaVersion: number;
    strictSemicolons: boolean;
    allowTrailingCommas: boolean;
    forbidReserved: boolean;
    allowReturnOutsideFunction: boolean;
    locations: boolean;
    onToken: any;
    onComment: any;
    ranges: boolean;
    program: any;
    sourceFile: any;
    directSourceFile: any;
};
export declare var getLineInfo: (input: any, offset: any) => {
    line: number;
    column: number;
};
export declare var tokenize: (inpt: any, opts: any) => GetTokenFn;
export declare var tokTypes: {
    bracketL: {
        type: string;
        beforeExpr: boolean;
    };
    bracketR: {
        type: string;
    };
    braceL: {
        type: string;
        beforeExpr: boolean;
    };
    braceR: {
        type: string;
    };
    parenL: {
        type: string;
        beforeExpr: boolean;
    };
    parenR: {
        type: string;
    };
    comma: {
        type: string;
        beforeExpr: boolean;
    };
    semi: {
        type: string;
        beforeExpr: boolean;
    };
    colon: {
        type: string;
        beforeExpr: boolean;
    };
    dot: {
        type: string;
    };
    ellipsis: {
        type: string;
    };
    question: {
        type: string;
        beforeExpr: boolean;
    };
    slash: {
        binop: number;
        beforeExpr: boolean;
    };
    eq: {
        isAssign: boolean;
        beforeExpr: boolean;
    };
    name: {
        type: string;
    };
    eof: {
        type: string;
    };
    num: {
        type: string;
    };
    regexp: {
        type: string;
    };
    string: {
        type: string;
    };
    arrow: {
        type: string;
        beforeExpr: boolean;
    };
    bquote: {
        type: string;
    };
    dollarBraceL: {
        type: string;
        beforeExpr: boolean;
    };
};
export declare var isIdentifierStart: (code: any) => boolean;
export declare var isIdentifierChar: (code: any) => boolean;
export declare function Node(): void;
