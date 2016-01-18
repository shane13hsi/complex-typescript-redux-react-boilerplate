export var TYPE;
(function (TYPE) {
    TYPE[TYPE['query enum'] = 0] = 'query enum';
})(TYPE || (TYPE = {}));
export function queryEnum() {
    return { type: TYPE['query enum'] };
}
