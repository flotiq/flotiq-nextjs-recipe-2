export * from './runtime';
export * from './apis/index';
export * from './models/index';
import * as Api from './apis/index';
export declare class FlotiqApi {
    MediaInternalAPI: Api.MediaInternalAPI;
    RecipeAPI: Api.RecipeAPI;
    TagInternalAPI: Api.TagInternalAPI;
    constructor(key: any);
}
