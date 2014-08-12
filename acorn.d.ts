export interface GetTokenFn {
    (forceRegexp?: boolean): any;
    jumpTo: any;
}
export interface Options {
    ecmaVersion?: number;
    strictSemicolons?: boolean;
    allowTrailingCommas?: boolean;
    forbidReserved?: string;
    allowReturnOutsideFunction?: boolean;
    locations?: boolean;
    onToken?: any;
    onComment?: any;
    ranges?: boolean;
    program?: any;
    sourceFile?: any;
    directSourceFile?: any;
}
export declare var version: string;
export declare function parse(inpt: string, opts: any): Node;
export declare var defaultOptions: Options;
export declare var getLineInfo: (input: string, offset: number) => {
    line: number;
    column: number;
};
export declare var tokenize: (inpt: string, opts: any) => GetTokenFn;
export interface Token {
    type?: string;
    keyword?: string;
    beforeExpr?: boolean;
    atomValue?: any;
    binop?: number;
    isUpdate?: boolean;
    isAssign?: boolean;
    isLoop?: boolean;
    prefix?: boolean;
    postfix?: boolean;
}
export declare var keywordTypes: {
    [index: string]: Token;
};
export declare var tokTypes: {
    bracketL: Token;
    bracketR: Token;
    braceL: Token;
    braceR: Token;
    parenL: Token;
    parenR: Token;
    comma: Token;
    semi: Token;
    colon: Token;
    dot: Token;
    ellipsis: Token;
    question: Token;
    slash: Token;
    eq: Token;
    name: Token;
    eof: Token;
    num: Token;
    regexp: Token;
    string: Token;
    arrow: Token;
    bquote: Token;
    dollarBraceL: Token;
};
export declare var isIdentifierStart: (code: number) => boolean;
export declare var isIdentifierChar: (code: number) => boolean;
export declare class Position {
    constructor();
    public line: number;
    public column: number;
}
export declare class SourceLocation {
    constructor();
    public start: Position;
    public end: Position;
    public source: string;
}
export declare class Node {
    constructor();
    public type: Token;
    public start: number;
    public end: number;
    public alternate: Node;
    public argument: Node;
    public arguments: Node[];
    public blocks: Node[];
    public body: Node;
    public bodylist: Node[];
    public block: Node;
    public callee: Node;
    public cases: Node[];
    public computed: boolean;
    public consequent: Node[];
    public declaration: Node;
    public declarations: Node[];
    public delegate: boolean;
    public default: boolean;
    public defaults: Node[];
    public discriminant: Node;
    public expression: any;
    public expressions: Node[];
    public elements: Node[];
    public filter: Node;
    public finalizer: Node;
    public generator: boolean;
    public guard: Node;
    public guardedHandlers: Node[];
    public handler: Node;
    public id: any;
    public init: Node;
    public key: Node;
    public kind: string;
    public label: Node;
    public left: Node;
    public loc: SourceLocation;
    public method: boolean;
    public name: any;
    public object: Node;
    public of: boolean;
    public operator: string;
    public param: Node;
    public params: Node[];
    public prefix: boolean;
    public properties: Node[];
    public property: Node;
    public quasi: Node;
    public quasis: Node[];
    public range: number[];
    public raw: string;
    public rest: Node;
    public right: Node;
    public shorthand: boolean;
    public static: boolean;
    public specifiers: Node[];
    public source: Node;
    public sourceFile: string;
    public superClass: Node;
    public tag: Node;
    public tail: boolean;
    public test: Node;
    public update: Node;
    public value: any;
}
