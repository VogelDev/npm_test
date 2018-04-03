declare module "frevvo" {
    export = frevvo;
}
declare const frevvo: IFrevvoStatic;
interface IFrevvoStatic {
    log(logLevel: string, message: string): void;
}
