# Busca a imagem do node no docker hub
FROM node:16

#Escolhendo uma pasta para colocar a aplicação
WORKDIR /usr/src/

#Copiar o diretório atual dentro do workdir
COPY . .

# Export a porta de comunicação
EXPOSE 4000

#rodar o comando que baixa as dependências
RUN npm i

#Buildar o projeto
RUN npm run build

#Gerar Tabelas
#RUN npx prisma migrate generate

#só quando estiver rodando isso como container
#CMD ["npm", "run", "dev"]
CMD ["npm", "start"] 