import { Answer } from "../entities/answer";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";

const fakeRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeRepository);
  const { answer } = await answerQuestion.execute({
    content: "conteudo",
    instructorId: "1",
    questionId: "1",
  });

  expect(answer.content).toEqual("conteudo");
});
