export class Icon {
  icon_id!: number;
  name!: string;
  tag!: string;
  selected!: boolean;
  count!: number;

  constructor(
    icon_id: number,
    name: string,
    tag: string,
    selected: boolean,
    count: number
  ) {
    this.icon_id = icon_id;
    this.name = name;
    this.tag = tag;
    this.selected = selected;
    this.count = count;
  }
}
