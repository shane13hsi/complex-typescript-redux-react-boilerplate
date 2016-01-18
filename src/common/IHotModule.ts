/// <reference path="../../typings/ttsd.d.ts" />

export interface IHotModule {
  hot?: { accept: (path:string, callback:() => void) => void };
}
