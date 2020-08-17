import { Asset } from "expo-asset";

export default class Icon {
  readonly module: any;
  readonly width: number;
  readonly height: number;

  constructor(module: any, width: number, height: number) {
    this.module = module;
    this.width = width;
    this.height = height;
    Asset.fromModule(this.module).downloadAsync();
  }
}
