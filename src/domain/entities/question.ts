import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";

interface QuestionProps {
  title: string;
  slug: Slug;
  authorId: string;
  contentent: string;
}

export class Question extends Entity<QuestionProps> {}
