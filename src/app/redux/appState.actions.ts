
export class AddToCounter{
    static readonly type= '[APP] add counter';
}

export class ExtractToCounter{
    static readonly type= '[APP] extract counter';
}

export class ChangeBrand{
    static readonly type= '[APP] change brand';
    constructor(public payload: string){}
}
