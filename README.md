# Digital Solution - Landing Page

Landing page responsiva desenvolvida com **React**, **Vite** e **Tailwind CSS**, apresentando soluções digitais modernas com funcionalidade integrada de busca de endereços por CEP.

🔗 **Deploy:** [digital-solution-8tn3.vercel.app](https://digital-solution-8tn3.vercel.app)

## 📖 Sobre o Projeto

O **Digital Solution** é uma landing page moderna que demonstra serviços de soluções digitais, desenvolvida com foco em performance, responsividade e experiência do usuário. O projeto inclui uma funcionalidade prática de busca de endereços através de CEP, utilizando a API do ViaCEP para preenchimento automático de formulários.

### Principais Características:
- **Design responsivo** adaptado para todos os dispositivos
- **Interface intuitiva** com componentes reutilizáveis
- **Busca de CEP em tempo real** com validação e formatação automática
- **Modal interativo** para consulta de endereços
- **Arquitetura modular** seguindo boas práticas do React

## 🔍 Como Funciona a Busca de CEP

A funcionalidade de busca de CEP foi implementada seguindo o padrão de **modal/dialog** com as seguintes características:

### Fluxo de Funcionamento:
1. **Abertura do Modal**: Clique no botão de busca na navbar
2. **Entrada de Dados**: Digite o CEP com ou sem formatação (ex: `03323000` ou `03323-000`)
3. **Validação Automática**: O sistema valida e formata o CEP automaticamente
4. **Consulta à API**: Requisição à [API ViaCEP](https://viacep.com.br/) em tempo real
5. **Exibição dos Resultados**: Campos preenchidos automaticamente dentro do modal
6. **Bloqueio de Edição**: Campos retornados pela API são somente leitura
7. **Múltiplas Consultas**: Possibilidade de realizar várias buscas sem fechar o modal

### Campos Retornados:
- **Logradouro** (rua/avenida)
- **Complemento** (quando disponível)
- **Bairro** 
- **UF** (sigla do estado)
- **Estado** (nome completo)

### Tratamento de Erros:
- Validação de CEP inválido
- Feedback visual para CEPs não encontrados
- Loading state durante a consulta
- Mensagens de erro amigáveis ao usuário



## 📌 Funcionalidades

### ✨ Interface
- **Layout responsivo** para desktop e mobile
- **Design moderno** seguindo tendências atuais
- **Navegação intuitiva** com menu hambúrguer no mobile

### 🔧 Funcionalidades Técnicas
- **Busca de endereço por CEP** com integração ViaCEP
- **Validação de formulários** em tempo real
- **Modal system** reutilizável e acessível


## 🛠 Tecnologias Utilizadas

### Frontend
- **[React 18](https://react.dev/)** - Biblioteca principal
- **[Vite](https://vitejs.dev/)** - Build tool moderna e rápida
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### APIs e Serviços
- **[ViaCEP API](https://viacep.com.br/)** - Consulta de endereços por CEP
- **[Vercel](https://vercel.com/)** - Deploy e hospedagem

### Ferramentas de Desenvolvimento
- **[npm](https://www.npmjs.com/)** - Gerenciamento de pacotes
- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processamento CSS

## 🚀 Instalação e Execução

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm**

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/Samuel-1210/DigitalSolution.git

2. **Acesse a pasta do projeto:**
   ```bash
   cd DigitalSolution

3. **Instale as dependências:**
   ```bash
   npm install

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev

5. **Abra no navegador o endereço indicado no terminal (geralmente http://localhost:5173).**

## 📞 Contato
- Samuel dos Santos
- Email: samuell.dos.santos2001@gmail.com
- Linkedin: [Linkedin](https://www.linkedin.com/in/samueldos-santos/)

   
   