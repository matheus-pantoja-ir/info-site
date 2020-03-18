# INFO SITE
Site feito em react para informar os clientes sobra o adiamento/cancelamento/nova data de seus shows.

## Development

```shell script
npm install
npm start
```

## Deploy
```shell script
npm run build
```
O conteudo gerado vai estar na pasta `build`

### Build com path relativo
Caso queira hospedar em um `subpath` diferente
> por padrão o subpath é `/covid-19-eventos-afetados/`
```shell script
npm run build -- --public-url /your_path_here/
```
