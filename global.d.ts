type Pokemon = Partial<{
  id: number;
  url: String;
  name: String;
  image: String;
  artwork: String;
  dreamworld: String;
}>;

type Abilities = {
  ability: BaseName;
  is_hidden: Boolean;
  slot: number;
};

type BaseName = {
  id: number;
  url: String;
  name: String;
};
type Stat = {
  base_stat: number;
  effort: number;
  stat: BaseName;
};

type Type = {
  name: String;
  slot: number;
  type: BaseName;
};

type Stats = Partial<{
  abilities: [Ability];
  base_experience: number;
  forms: [BaseName];
  game_indices: [GameIndex];
  height: number;
  held_items: [HeldItem];
  id: number;
  is_default: Boolean;
  location_area_encounters: String;
  moves: [Move];
  name: String;
  order: number;
  species: BaseName;
  sprites: Sprite;
  stats: [Stat];
  types: [Type];
  weight: number;
  status: Boolean;
  message: String;
}>;
