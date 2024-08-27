import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/types/optional";
import { UniqueEntityID } from "../../core/entities/unique-entity-id";

interface QuestionProps {
  slug: Slug;
  title: string;
  createdAt: Date;
  updatedAt?: Date;
  contentent: string;
  authorId: UniqueEntityID;
  bestAnswerdId?: UniqueEntityID;
}

export class Question extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, "createdAt">,
    id?: UniqueEntityID
  ) {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return { question };
  }
}
