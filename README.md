Claro! Aqui está a versão atualizada e completa do README, agora incluindo a **integração com Stripe** para o processamento de pagamentos:

---

# 🍔 Hamburgueria Interface

Frontend de uma aplicação de hamburgueria, criada com **React JS** e **Vite**, que oferece uma experiência moderna e eficiente para clientes visualizarem produtos, adicionarem ao carrinho e realizarem o pagamento via Stripe.

---

## 📌 Visão Geral

A aplicação permite:

* Visualizar um catálogo de hambúrgueres e bebidas
* Adicionar/remover itens no carrinho
* Formulários com validação
* Mensagens de feedback (erros, sucesso, etc.)
* Finalização de pedidos com **integração Stripe** para checkout

---

## 🚀 Tecnologias Utilizadas

| Tecnologia            | Descrição                                   |
| --------------------- | ------------------------------------------- |
| **React JS**          | Biblioteca principal para construção da UI  |
| **Vite**              | Build tool para desenvolvimento rápido      |
| **React Router DOM**  | Roteamento entre páginas                    |
| **React Hook Form**   | Manipulação e validação de formulários      |
| **Yup**               | Validação de schemas em formulários         |
| **Axios**             | Requisições HTTP para APIs                  |
| **React Toastify**    | Notificações visuais                        |
| **Styled-Components** | Estilização com CSS-in-JS                   |
| **ESLint**            | Análise estática e padronização de código   |
| **Prettier**          | Formatação automática de código             |
| **Stripe**            | Integração de pagamentos segura e escalável |

---

## 💳 Integração com Stripe

A aplicação utiliza o **Stripe Checkout** para processar pagamentos de forma segura. O fluxo é:

1. O usuário seleciona os produtos e vai para o carrinho.
2. Ao clicar em "Finalizar pedido", a aplicação chama uma **API backend** que cria uma **sessão de pagamento Stripe**.
3. O Stripe redireciona o usuário para a tela de checkout segura.
4. Após o pagamento, o usuário é redirecionado de volta para a aplicação.

> **Nota:** Para funcionar corretamente, é necessário que a API backend esteja configurada com a chave secreta da Stripe.

---

## 📁 Estrutura do Projeto

```
src/
├── assets/            # Imagens e ícones
├── components/        # Componentes reutilizáveis
├── containers/             # Páginas como Home, Carrinho, Checkout
├── routes/            # Configuração de rotas
├── services/          # Configuração do Axios e chamadas à API
├── styles/            # Estilos globais e temas
├── App.jsx            # Componente raiz
├── main.jsx           # Ponto de entrada
```

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Evandro-Prog/front-end-hamburgueria.git
cd front-end-hamburgueria/hamburgueria-interface

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse a aplicação em: [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts Disponíveis

| Comando           | Descrição                            |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Inicia o ambiente de desenvolvimento |
| `npm run build`   | Gera a versão de produção            |
| `npm run preview` | Visualiza a build localmente         |
| `npm run lint`    | Verifica erros com ESLint            |
| `npm run format`  | Aplica Prettier ao código            |

---

## 📌 Pré-requisitos para Pagamento

* Ter o **backend configurado com Stripe**
* Configurar as **variáveis de ambiente** com as chaves do Stripe
* A rota de criação de sessão (`/create-checkout-session`) deve estar funcionando

---

## 🤝 Como Contribuir

1. Faça um fork
2. Crie uma nova branch: `git checkout -b feature/minha-nova-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/minha-nova-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](./LICENSE).

---

Se quiser, posso te gerar esse arquivo `README.md` formatado para download. Deseja isso?


