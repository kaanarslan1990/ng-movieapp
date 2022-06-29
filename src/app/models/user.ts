export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDAte: Date
  ) {}

  get token() {
    if(!this._tokenExpirationDAte || new Date() > this._tokenExpirationDAte) {
        return null;
    }
    return this._token;
  }
}
