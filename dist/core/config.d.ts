import { CustomRouteOptions } from './../core/custom-route';
import { Route } from './route';
import AxiosAdapter from './../core/adapters/axios-adapter';
import { RequestType } from '../core/request';
interface Config {
    afterRequest(response: any): any;
    allowedRequestTypes: Array<RequestType>;
    auth: AuthConfig;
    baseURL: string;
    beforeRequest(type: RequestType, url: string): any;
    caseSensitive: boolean;
    customRoutes: CustomRouteOptions[];
    debug: boolean;
    defaultRoute: Route;
    extension?: string;
    onError(error: () => void): any;
    globalParameters: object;
    http: AxiosAdapter;
    httpConfig: object;
    modelName: string;
    methods: {
        create?: string;
        update?: string;
        destroy?: string;
        restore?: string;
    };
    primaryKey: string;
    routeDelimeter: string;
    routes: {
        any?: string;
        model?: string;
        collection?: string;
    };
    suffixes: {
        create?: string;
        update?: string;
        destroy?: string;
        restore?: string;
    };
    trailingSlash: boolean;
}
interface AuthConfig {
    routes: {
        login: string;
        logout: string;
        auth: string;
        register: string;
    };
    methods: {
        login: string;
        logout: string;
        auth: string;
        register: string;
    };
    modelPrefix: boolean;
}
export { AuthConfig, Config };