# Redis
📌 Sobre o projeto

Este repositório apresenta um resumo sobre o Redis, incluindo o que é, casos de uso comuns e um mini projeto de implementação do redis com Node.js.

#### O que é o Redis?
O Redis é um banco de dados NoSQL, do tipo chave-valor, projetado para ser extremamente rápido.

Ele é amplamente utilizado para:

- Cache (armazenar dados temporários e agilizar consultas);
- Filas e mensageria (pub/sub, listas, streams);
- Armazenamento em memória (tokens de sessão, menus, configurações).

Características principais:

- Os dados ficam armazenados em memória RAM, garantindo acesso rápido, mas fica limitado a quantidade de memória disponível na VM ou servidor on-primise,
- Possui persistência opcional, salvando snapshots ou logs no disco;
- Suporta diferentes tipos de dados: string, hash, lista, conjunto (set), conjunto ordenado (sorted set), bitmap, hyperloglog, streams;
- É compatível com serviços em nuvem como AWS (ElastiCache), Azure Cache for Redis e Google Memorystore;
- Por padrão, roda em uma única CPU. Para alta disponibilidade e escalabilidade, recomenda-se clusters ou containers.


#### Instalação com Docker
A instalação do Redis pode ser feita de forma simples via Docker:


```
$docker pull redis
$docker run --name redis -d -p 6379:6379 redis
```
Ou usando o Docker compose:

Imagem oficial do redis: https://hub.docker.com/_/redis

---

### Usando o Redis

Conecte-se ao Redis CLI:
```
$redis-cli -h 127.0.01 -p 6379 -a "senha"
```
#### Comands Básicos:
| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `SET` | Define um valor | `SET nome "Ana"` |
| `GET` | Busca o valor de uma chave | `GET nome → "Ana"` |
| `HSET` | Define um campo em um hash | `HSET usuario:1 nome "Ana"` |
| `HGETALL` | Retorna todos os campos de um hash | `HGETALL usuario:1` |
| `LPUSH` | Insere no início de uma lista | `LPUSH tarefas "estudar"` |
| `SADD` | Adiciona item a um conjunto (sem duplicados) | `SADD frutas "maçã"` |
| `SMEMBERS` | Lista todos os valores do conjunto | `SMEMBERS frutas` |
| `DEL [chave]` | Remove uma chave | `DEL nome` |
| `KEYS *` | Lista todas as chaves | `KEYS *` |
| `EXPIRE [chave] [segundos]` | Define tempo de expiração | `EXPIRE nome 60` |
| `PERSIST [chave]` | Remove a expiração de uma chave | `PERSIST nome` |
| `TTL [chave]` | Tempo de vida restante | `TTL nome` |
| `RENAME [chave] [nova_chave]` | Renomeia uma chave, mas atenção! Se a chave nova já existir, o RENAME irá sobrescrever essa chave, para não sobrescrever use RENAMENX | `RENAME nome novo_nome` |
| `TYPE [chave]` | Mostra o tipo do valor armazenado | `TYPE frutas` |
