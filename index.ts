declare const frevvo: IFrevvoStatic;

interface IFrevvoStatic {
    log(message: string): void;
    currentDate():string;
}

interface IFormStatic {
    load():boolean;
}