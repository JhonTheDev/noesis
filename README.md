Resumo
-----------------------------------
Uma Landing Page para o projeto Noésis sendo a porta de entrada do ecossistema de aprendizado inteligente composto por Córtex, Atlas e Neura.
Ela apresenta a visão geral da plataforma, seus módulos, valores e chamadas para ação, funcionando como o ponto central de apresentação do projeto.

Desenvolvida com enfoque em performance, responsividade e clareza visual, a página foi projetada para transmitir a identidade do Noésis
 aprendizado, organização e tecnologia cognitiva.

Status
-----------------------------------
Versão inicial estável novas seções em desenvolvimento.

Objetivos da Landing Page
- Apresentar o Noésis e seus módulos (Córtex, Atlas e Neura).
- Exibir funcionalidades e diferenciais da plataforma.
- Servir como entrada única para demonstrações, login e criação de conta.
- Criar uma identidade visual sólida para o ecossistema.
- Preparar terreno para integrações de autenticação e navegação unificada entre aplicativos.

Tecnologias
-----------------------------------
- Node.js (recomendado: 16+ / 18+)
- pnpm (recommended; `pnpm-lock.yaml` presente)
- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react (ícones)
- PostCSS
- Prettier (formatação)

Estrutura do repositório (resumida)
----------------------------------
- `client/` - frontend
  - `client/src/`
    - `components/` - componentes reutilizáveis (ex.: `Navigation.tsx`, `ScrollAnimation.tsx`, `ErrorBoundary.tsx`, `ui/` com primitives)
    - `contexts/` - React contexts
    - `hooks/` - hooks customizados
    - `lib/` - utilitários
    - `pages/` - páginas (ex.: `Home.tsx`, `Login.tsx`, `SingUp.tsx`, `NotFound.tsx`)
    - `App.tsx`, `main.tsx`, `index.css`, `styles/`
- `server/` - servidor simples (`server/index.ts`) usado para servir o build em produção
- `shared/` - constantes/utilitários compartilhados
- `patches/` - patches aplicados por pnpm
- `pnpm-lock.yaml`, `package.json`, `tsconfig.json`, `vite.config.ts`, etc.

Arquivos de configuração importantes
-----------------------------------
- `package.json` - scripts e dependências
- `pnpm-lock.yaml` - lockfile (mantenha)
- `vite.config.ts` - configuração do Vite
- `tsconfig.json` / `tsconfig.node.json` - TypeScript
- `.gitignore`

Como rodar
-----------------------------------
1. Instalar dependências:
    npm install

2. Rodar o servidor:
    npm run dev

3. Acessar no navegador:
    http://localhost:5173

Build e preview
-----------------------------------
- Criar build de produção:
    npm run build


- Visualizar build localmente:
    npm run preview

Contribuindo
-----------------------------------
1. Abra uma issue descrevendo a mudança.
2. Crie uma branch a partir de main (ex.: feat/descricao).
3. Faça um PR com descrição clara, screenshots e passos para reproduzir/adicionar testes.

Conteúdo da Landing Page
-----------------------------------
A página apresenta:

- Hero principal com slogan "A Arte de Compreender"
- Destaque da integração Córtex + Atlas
- Seções explicando:
    Resumos Inteligentes
    Mapas Mentais Automáticos
    Transcrição de Vídeos
    Agenda Inteligente
    Rotinas Personalizadas
    Acompanhamento de Progresso
    Seção sobre a Neura (IA cognitiva do ecossistema)
- CTA’s de:
    Comece com Noésis
    Teste Atlas
    Ver Demonstração
- Rodapé institucional com links para Produto, Empresa e Suporte

O que vem a seguir
-----------------------------------
- Implementação da autenticação Google/GitHub integrada ao ecossistema
- Versão mobile refinada
- Nova seção: Como Funciona o Noésis
- Nova seção: Central do Usuário
- Vídeo demonstrativo integrado

- Repositórios Relacionados:
    - Noésis: https://github.com/JhonTheDev/noesis
    - Córtex: https://github.com/JhonTheDev/cortex
    - Atlas: https://github.com/JhonTheDev/atlas
    - Neura: https://github.com/JhonTheDev/neura