import type { Compiler, RspackPluginInstance } from '@rspack/core';
import pBtoa from 'btoa';

const charMap = {
  '<': '\\u003C',
  '>': '\\u003E',
  '/': '\\u002F',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
  '\0': '\\0',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

function escapeUnsafeChars(str) {
  return str.replace(/[<>\b\f\n\r\t\0\u2028\u2029]/g, (x) => charMap[x]);
}

export class RemoteEntryPlugin implements RspackPluginInstance {
  readonly name = 'VmokRemoteEntryPlugin';
  private _name: string;
  private _getPublicPath: string;

  constructor(name: string, getPublicPath: string) {
    this._name = name;
    this._getPublicPath = getPublicPath;
  }

  apply(compiler: Compiler): void {
    const sanitizedPublicPath = escapeUnsafeChars(this._getPublicPath);
    const code = `${
      compiler.webpack.RuntimeGlobals.publicPath
    } = new Function(${JSON.stringify(sanitizedPublicPath)})()`;
    const base64Code = pBtoa(code);
    const dataUrl = `data:text/javascript;base64,${base64Code}`;

    compiler.hooks.afterPlugins.tap('VmokRemoteEntryPlugin', () => {
      new compiler.webpack.EntryPlugin(compiler.context, dataUrl, {
        name: this._name,
      }).apply(compiler);
    });
  }
}
