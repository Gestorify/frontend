# Estágio de build
FROM node:20-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração do projeto
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm ci

# Copiar o código fonte
COPY . .

# Construir a aplicação
RUN npm run build

# Estágio de produção
FROM node:20-alpine AS runner

# Definir variáveis de ambiente para produção
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Criar usuário não-root para executar a aplicação
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários do estágio de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Definir permissões corretas
RUN chown -R nextjs:nodejs /app

# Mudar para o usuário não-root
USER nextjs

# Expor a porta que a aplicação usará
EXPOSE 3000

# Definir variável de ambiente para a porta
ENV PORT 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
