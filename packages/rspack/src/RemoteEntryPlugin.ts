import type { Compiler, RspackPluginInstance } from '@rspack/core';
import pBtoa from 'btoa';

export class RemoteEntryPlugin implements RspackPluginInstance {
  readonly name = 'VmokRemoteEntryPlugin';
  private _name: string;
  private _getPublicPath: string;

  constructor(name: string, getPublicPath: string) {
    this._name = name;
    this._getPublicPath = getPublicPath;
  }

  apply(compiler: Compiler): void {
    const code = `${
      compiler.webpack.RuntimeGlobals.publicPath
    } = new Function(${JSON.stringify(this._getPublicPath)})()`;
    const base64Code = pBtoa(code);
    const dataUrl = `data:text/javascript;base64,${base64Code}`;

    compiler.hooks.afterPlugins.tap('VmokRemoteEntryPlugin', () => {
      new compiler.webpack.EntryPlugin(compiler.context, dataUrl, {
        name: this._name,
      }).apply(compiler);
    });
  }
}
