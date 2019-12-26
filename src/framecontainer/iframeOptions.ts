export interface IframeOptions {
    src?: string;
    srcdoc?: string;
    name?: string;

    width?: string;
    height?: string;
    featurePolicy?: string[] | string;
    sandbox?: string[] | null;
    className?: string;
    styles?: string[] | string;
}
