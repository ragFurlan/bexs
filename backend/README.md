### Iniciar Backend 
nodemon src/server.js

### Rodar teste
npm test

### Executar Get Question
http://localhost:3333/question

### Executar Post Question
http://localhost:3333/question

### body post
{
	"newQuestion": "teste3",
	"user": "rob01"
}

### Executar Put Question

http://localhost:3333/question?id=["colocar o id da questão que deseja acrescentar likes"]

### body post
{
	"likes": "2"
}

### Executar Get Answer
http://localhost:3333/answer

### Executar Post Answer
http://localhost:3333/answer

### body post
{
	"newAnswer": "teste",
	"user": "rob2",
	"idQuestion": "5eb8383eaa3eb0a69865e977"
}

### Executar Put Answer

http://localhost:3333/answer?id=["colocar o id da answer que deseja acrescentar likes"]

### body post
{
	"likes": "2"
}