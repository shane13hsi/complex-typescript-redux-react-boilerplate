// Type definitions for classnames
// Project: https://github.com/JedWatson/classnames
// Definitions by: Dave Keen <http://www.keendevelopment.ch>, Adi Dahiya <https://github.com/adidahiya>, Jason Killian <https://github.com/JKillian>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// FIX: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/6675/commits
// FIX: https://github.com/JedWatson/classnames/issues/56

declare type ClassValue = string | number | ClassDictionary | ClassArray;

interface ClassDictionary {
  [id: string]: boolean;
}

interface ClassArray extends Array<ClassValue> {
}

interface ClassNamesFn {
  (...classes:ClassValue[]): string;
}

declare var classNames:ClassNamesFn;

declare module "classnames" {
  export default classNames
}

declare module "classnames/bind" {
  export default classNames;
}
