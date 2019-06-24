## Olá pessoal tudo bem?

**Primeiramente eu gostaria muito de agradecer a oportunidade de participar do processo seletivo de vocês, atualmente trabalho em uma empresa de consultoria em tecnologia multinacional, mas enxergo na _MEIfácil_ um potêncial muito grande de crescimento da empresa e gostaria muito de fazer parte dessa história de sucesso.**

**Esse é o meu projeto final, infelizmente não consegui completar todo o desafio que me foi passado.
Tentei trabalhar no teste com Nodejs, MongoDB e Express, mas em determinado momento me faltou conhecimento para prosseguir, criei rotas da API Post para inserir dados com body de requisição e resposta em Json, criei método de autenticação, coloquei criptografia no password, coloquei um hash de identificação na aplicação.
Tentei arquitetar tudo de modo que ficasse legível aos olhos do avaliador, mais uma vez meus agradecimentos.**





# Teste_Dev


## Perguntas:


**1°) Explique com suas palavras o que é domain driven design e sua importância na estratégia de desenvolvimento de software.**

R: =>  Eu entendo que DDD é um padrão de modelagem de software orientado a objetos que procura reforçar os conceitos e boas práticas relacionadas à OO, ajudando na modelagem das classes mais importantes e centrais do sistema.



**2°) Explique com suas palavras o que é e como funciona uma arquitetura baseada em microservices. explique ganhos com este modelo, desafios em sua implementação e desvantagens.**

R: => Uma arquitetura baseada em Microservices é meio de desenvolver software de modo mais flexível e independente, onde que os serviços podem ser criados por diferentes tecnologias e diferentes equipes de Dev, agilizando o processo de desenvolvimento e entrega do software.
Os desafios de se implementar essa arquitetura é como tudo isso se comuicará e como será desenvolvido, distribuindo bem as responsabilidades para a equipe, sempre verificar o que será disponibilizado para consumo externo e quem poderá acessar ou inserir daos na aplicação através dos microserviços.
As desvantagens talvez possa ser, conhecimento da equipe na arquitetura baseada em microserviços, fazer o debug dos serviços ou latência da rede.



**3°) Explique qual a diferença entre processamento sincrono e assincrono e qual o melhor cenário para utilizar um ou outro.**

R: => Síncrono => os dados são processados em ordem estabelecida o primeiro que entra é o primeiro que sai.
   Assíncrono => os dados já saem identificados, sendo assim não importa sua ordem de chegada ele será direcionado para a posição que ele estiver identificado.
   Sistemas com poucos chamadas são acredito que seja melhor se for síncrono pela rapidez que o sistema processa informações.
   Se for um sistemas que receba muitas requisições acredito que o melhor cenário seria usar o assíncrono, pq não limitaria o sistema em um determinado momento que tivesse muitas requisições.
   
   
**Para fazer build do projeto digite o comando abaixo no terminal**

node src/index.js

**URLs para testar requisições no Postman ou Insomnia**

#localhost:3000/auth/register
```
{
	"name": "",
	"email": "",
	"password": ""
}
```
#localhost:3000/auth/authenticate
```
{
	"email": "",
	"password": ""
}
```
