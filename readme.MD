# Desafio Docker Full Cycle

## Descrição do Desafio:
Desafio do curso fullcycle em que consiste em criar um container com o docker-compose, aonde o nginx servira como proxy, aonde o mesmo apontara a porta 8080 e irá fazer a requisição direto no app nodejs. Ao acessar localhost:8080, deverá retornar o texto `Full Cycle Rocks!` e uma lista de nomes.

## Docker Command
```
docker-compose up -d
```
## Alternativas
Por não conseguir configurar o dockerize ou o wait-for-it, utilizei o termo condition no depends_on, fazendo um healthcheck aonde o app poderia ser inicializado após inicialização do banco de dados.
##
### Referências
- https://docs.docker.com
- https://stackoverflow.com/questions/42567475/docker-compose-check-if-mysql-connection-is-ready
