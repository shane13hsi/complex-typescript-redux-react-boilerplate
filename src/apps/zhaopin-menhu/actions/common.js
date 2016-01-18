export var TYPE;
(function (TYPE) {
    TYPE[TYPE["QUERY_ENUM"] = 0] = "QUERY_ENUM";
})(TYPE || (TYPE = {}));
export function queryEnum() {
    return { type: TYPE.QUERY_ENUM };
}
