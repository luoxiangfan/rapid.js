import { RequestType } from '../core/request';
export default interface Data {
    lastUrl?: string;
    lastRequest?: {
        type: RequestType;
        url: string;
        data;
        options;
    };
}