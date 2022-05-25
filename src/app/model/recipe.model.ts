export class Recipe {
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public ingredients?: string[],
    public sbs?: string[],
    public has_sbs?: boolean,
    public categories?: string[]
  ) {}
}
