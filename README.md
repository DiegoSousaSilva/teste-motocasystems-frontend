### Documentação do Projeto Teste Motoca Systems - Desenvolvedor Front-End

#### Introdução
Este documento descreve o projeto desenvolvido como parte do teste para a vaga de Desenvolvedor Front-End na Motoca Systems. A aplicação é uma CRUD (Create, Read, Update, Delete) utilizando React, estilizada com Tailwind CSS, e simula uma API usando JSON Server. A seguir, detalharemos as tecnologias utilizadas, a estrutura do projeto, como iniciar o ambiente de desenvolvimento e uma breve descrição dos arquivos principais.

#### Tecnologias Utilizadas
- **React**: Utilizado como framework principal para construção da interface de usuário.
- **Next.js**: Utilizado para renderização do lado do servidor (SSR) e geração de páginas estáticas, proporcionando uma melhor performance e SEO.
- **Tailwind CSS**: Framework de CSS utilizado para estilização da aplicação, oferecendo uma abordagem de desenvolvimento baseada em utility-first.
- **JSON Server**: Ferramenta utilizada para simular uma API RESTful a partir de um arquivo JSON, facilitando o desenvolvimento frontend sem a necessidade de um backend real.

#### Estrutura do Projeto
O projeto está estruturado da seguinte forma:

```
|-- public/
|   |-- icons/
|   |   |-- arrow.png
|   |   |-- avatar.png
|   |   |-- delete.png
|   |   |-- eyes.png
|   |   |-- home.png
|   |   |-- plus.png
|   |   |-- search.png
|-- src/
|   |-- app/
|   ||-- r e g i s t e r/
|   |   |-- page.tsx
|   |-- u p d a t e/
|   |   |-- [id]/
|   |   |   |-- page.tsx
|   |-- global.css
|   |-- layout.tsx
|   |-- page.tsx
|   |-- components/
|   |   |-- CardItem.tsx
|   |   |-- FormatPrice.tsx
|   |   |-- Header.tsx
|   |   |-- Input.tsx
|-- README.md
|-- db.json
|-- next.config.js
|-- package.json
|-- tsconfig.json
```

- **components/**: Contém os componentes reutilizáveis da aplicação.
- **app/**: Páginas da aplicação, incluindo rotas e páginas especiais do Next.js.
- **public/**: Recursos estáticos da aplicação, como imagens.
- **globalcss**: Arquivos de estilos CSS, incluindo folhas de estilos globais e módulos CSS para estilização específica de componentes.
- **README.md**: Documentação principal do projeto.
- **db.json**: Arquivo utilizado pelo JSON Server para simular a API com dados de exemplo.
- **next.config.js**: Arquivo de configuração do Next.js para ajustes adicionais de configuração.
- **package.json**: Arquivo de configuração do npm com dependências e scripts de execução.
- **tsconfig.json**: Arquivo de configuração do TypeScript para ajustes específicos do projeto.

#### Utilização do Projeto

##### Pré-requisitos
- Node.js e npm instalados na máquina local.

##### Passos para Execução
1. **Clonagem do Repositório**:
   ```
   git clone https://github.com/DiegoSousaSilva/teste-motocasystems-frontend.git
   cd teste-motocasystems-frontend
   ```

2. **Instalação das Dependências**:
   ```
   npm install
   ```

3. **Iniciar o JSON Server (Simulação da API)**:
   ```
   npm run json-server
   ```

4. **Iniciar a Aplicação Next.js**:
   ```
   npm run dev
   ```

5. Acesse a aplicação em `http://localhost:3000` no navegador.

#### Conclusão
O projeto desenvolvido atende aos requisitos do teste, implementando as operações CRUD e estilizando a aplicação conforme o layout fornecido no Figma. O uso de Next.js proporciona uma base sólida para a construção de aplicações React, garantindo performance e SEO otimizados. A utilização de Tailwind CSS facilita a criação de estilos de forma rápida e consistente. O JSON Server permite simular uma API de forma simples e eficaz durante o desenvolvimento frontend.

---