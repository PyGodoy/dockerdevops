# Imagem base oficial do Node
FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos da máquina host para dentro do container
COPY . .

# Instala dependências e gera build de produção
RUN npm install && npm run build

# Instala o servidor de arquivos estáticos "serve"
RUN npm install -g serve

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["serve", "-s", "dist"]
