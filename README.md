# testeApiNode

nodemon index.js

## 📦Pacotes necessários

1. **express**
Express é um framework para `nodejs`. Ele é minimalista, flexível e contém um robusto conjunto de recursos para desenvolver aplicações web, como um sistema de Views intuitivo (MVC), um robusto sistema de roteamento, um executável para geração de aplicações e muito mais.


2. **express-validator**
Para validar o corpo dos dados no servidor, dentro do framework express, será utilizado esta biblioteca.
Ela permite uma validação no lado do servidor. Dessa forma, se o usuário desabilitar a validação no lado cliente, faremos essa validação no lado servidor e exibiremos um erro.

3. **postgresql**
Driver oficial para integrar com o PostgreSQL.

4. **nodemon**
O nodemon é uma daquelas ferramentas de grande utilidade para quem trabalha com `nodejs`
Basicamente ele é um _file watcher_ que roda internamente o próprio comando **node**. A diferença entre usá-lo ou usar o comando **node** é que ele faz _auto-restart_ da aplicação, toda vez que um arquivo do projeto for modificado.

5. **dotenv**
O **dotenv** permite a criação de variáveis de ambiente. 
Ele é um módulo de dependência que carrega variáveis de ambiente de um arquivo .env para process.env.
As variáveis de ambiente ajudam a definir valores que não queremos codificar diretamente em nosso código fonte.
