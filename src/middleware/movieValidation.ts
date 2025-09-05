import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("O título deve ter no mínimo 5 caracteres."),
    body("rating").isNumeric().withMessage("O rating deve ser um número.")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("O rating deve estar entre 0 e 10.");
        }
        return true;
      }),
      body("description").isString().withMessage("A descrição é obrigatória."),
      body('director').isString().withMessage('O diretor é obrigatório.'),
      body('poster').isURL().withMessage('A imagem do poster deve ser uma URL válida.'),
  ];
};

// Middleware de validação para a criação de filmes, explicando o body:
// O body é uma função do express-validator que permite validar campos específicos no corpo da requisição.
// O isString() verifica se o campo é uma string.
// O withMessage() permite definir uma mensagem de erro personalizada.
// O isLength({ min: 5 }) verifica se a string tem no mínimo 5 caracteres.
// O isNumeric() verifica se o campo é um número.
