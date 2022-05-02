import { Recipe } from "./recipe-type";
import { InputType, Field } from "type-graphql";

@InputType()
export class RecipeInput implements Partial<Recipe> {
  @Field((type) => String)
  title: string;

  @Field((type) => String, { nullable: true })
  description?: string;
}
