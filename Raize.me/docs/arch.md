raize.me/                                      # Repositório principal do projeto
│
├── docs/                                      # Documentação geral do Raize.me
│
├── app/                                       # Aplicação React + JavaScript + Vite PWA
│   │
│   ├── public/                                # Arquivos públicos do aplicativo
│   │   ├── icons/                             # Ícones públicos do PWA
│   │   ├── images/                            # Imagens públicas
│   │   ├── sounds/                            # Sons utilizados pelo aplicativo
│   │   ├── manifest.webmanifest               # Configuração do aplicativo PWA
│   │   └── favicon.ico                        # Ícone da aba do navegador
│   │
│   ├── src/                                   # Código-fonte principal do React
│   │
│   │   ├── assets/                            # Recursos utilizados pelo frontend
│   │   │   ├── images/                        # Imagens internas do aplicativo
│   │   │   ├── icons/                         # Ícones internos do aplicativo
│   │   │   └── fonts/                         # Fontes utilizadas no projeto
│   │
│   │   ├── components/                        # Componentes reutilizáveis da interface
│   │   │
│   │   │   ├── ui/                            # Componentes básicos da interface
│   │   │   ├── Button.jsx                     # Botões reutilizáveis
│   │   │   └── Loading.jsx                    # Indicadores de carregamento
│   │   │
│   │   │   ├── auth/                          # Componentes de autenticação
│   │   │   ├── LoginForm.jsx                   # Formulário de login
│   │   │   ├── RegisterForm.jsx                # Formulário de cadastro
│   │   │   └── GoogleLogin.jsx                 # Login com conta Google
│   │   │
│   │   │   ├── camera/                        # Componentes relacionados à câmera
│   │   │   ├── Camera.jsx                      # Interface da câmera
│   │   │   └── CameraPermission.jsx            # Solicitação de permissão da câmera
│   │   │
│   │   │   ├── ai/                            # Componentes relacionados à IA
│   │   │   └── VerificationStatus.jsx          # Exibe o resultado da validação da IA
│   │   │
│   │   │   ├── map/                           # Componentes do mapa
│   │   │   └── MapFilters.jsx                  # Filtros de missões e pontos no mapa
│   │   │
│   │   │   ├── missions/                      # Componentes das missões
│   │   │   ├── MissionValidation.jsx            # Exibe a validação da missão
│   │   │   └── MissionTypeBadge.jsx             # Identifica o tipo da missão
│   │   │
│   │   │   ├── superMissions/                  # Componentes das Super Missões
│   │   │   ├── SuperMissionCard.jsx              # Card de uma Super Missão
│   │   │   ├── SuperMissionDetails.jsx          # Detalhes da Super Missão
│   │   │   └── SuperMissionProgress.jsx         # Progresso da Super Missão
│   │   │
│   │   │   ├── wallet/                         # Componentes da carteira do usuário
│   │   │   ├── Wallet.jsx                      # Interface principal da carteira
│   │   │   ├── RaizeCoins.jsx                  # Exibição das Raizecoins
│   │   │   ├── Capiba.jsx                      # Exibição das Capibas
│   │   │   ├── Balance.jsx                     # Exibição dos saldos
│   │   │   ├── Conversion.jsx                  # Conversão entre moedas
│   │   │   └── TransactionHistory.jsx          # Histórico de transações
│   │   │
│   │   │   ├── rewards/                        # Componentes de recompensas
│   │   │   ├── RewardCard.jsx                  # Card de recompensa
│   │   │   ├── CouponCard.jsx                  # Card de cupom
│   │   │   ├── CashbackCard.jsx                # Card de cashback
│   │   │   ├── GiftCard.jsx                    # Card de brinde
│   │   │   └── ProductCard.jsx                 # Card de produto
│   │   │
│   │   │   ├── ranking/                        # Componentes de ranking e XP
│   │   │   ├── Ranking.jsx                     # Exibição do ranking
│   │   │   ├── RankingItem.jsx                 # Item individual do ranking
│   │   │   └── XPProgress.jsx                  # Barra/progresso de XP
│   │   │
│   │   │   ├── profile/                        # Componentes do perfil
│   │   │   ├── Profile.jsx                     # Informações do perfil
│   │   │   ├── EditProfile.jsx                 # Edição do perfil
│   │   │   └── UserStats.jsx                   # Estatísticas do usuário
│   │   │
│   │   │   └── company/                       # Componentes para empresas
│   │   │       └── Charts.jsx                  # Gráficos e métricas empresariais
│   │
│   │   ├── pages/                              # Páginas completas do aplicativo
│   │   │
│   │   │   ├── Landing/                       # Página inicial pública
│   │   │   │   └── Landing.jsx                 # Tela de apresentação do Raize.me
│   │   │
│   │   │   ├── Auth/                          # Páginas de autenticação
│   │   │   │   └── ActivateCapiba.jsx          # Ativação da Capiba
│   │   │
│   │   │   ├── User/                          # Páginas do usuário
│   │   │   ├── Home.jsx                        # Tela inicial do usuário
│   │   │   └── Profile.jsx                     # Página de perfil do usuário
│   │
│   │   └── Company/                            # Páginas da empresa
│   │       └── Settings.jsx                   # Configurações da conta empresarial
│   │
│   ├── services/                              # Serviços e comunicação com recursos externos
│   │   │
│   │   ├── supabase/                           # Comunicação com o Supabase
│   │   │   ├── client.js                       # Configuração do cliente Supabase
│   │   │   ├── auth.js                         # Operações de autenticação
│   │   │   └── realtime.js                     # Comunicação de dados em tempo real
│   │   │
│   │   ├── camera/                            # Serviços relacionados à câmera
│   │   │   └── cameraService.js                # Captura e gerenciamento de mídia
│   │   │
│   │   ├── location/                          # Serviços de localização
│   │   │   ├── geolocationService.js           # Obtém a localização do usuário
│   │   │   └── distanceCalculator.js           # Calcula distância até a missão
│   │   │
│   │   ├── ai/                                # Serviços relacionados à inteligência artificial
│   │   │   ├── aiService.js                    # Comunicação com o serviço de IA
│   │   │   └── missionValidation.js            # Validação da ação realizada
│   │   │
│   │   └── map/                               # Serviços relacionados ao mapa
│   │       └── mapService.js                   # Busca e gerenciamento dos dados do mapa
│   │
│   ├── hooks/                                  # Hooks personalizados do React
│   │   └── useRealtime.js                      # Hook para dados atualizados em tempo real
│   │
│   ├── context/                                # Estados globais compartilhados
│   │   └── CompanyContext.jsx                  # Estado global relacionado à empresa
│   │
│   ├── routes/                                 # Controle das rotas e acessos
│   │   ├── AppRoutes.jsx                       # Rotas principais do aplicativo
│   │   ├── PublicRoutes.jsx                    # Rotas acessíveis sem login
│   │   ├── UserRoutes.jsx                      # Rotas exclusivas dos usuários
│   │   └── CompanyRoutes.jsx                   # Rotas exclusivas das empresas
│   │
│   ├── utils/                                  # Funções auxiliares do sistema
│   │   ├── validation.js                       # Validações gerais dos dados
│   │   └── permissions.js                      # Controle de permissões
│   │
│   ├── styles/                                 # Estilos globais do aplicativo
│   │   ├── global.css                          # Estilos gerais
│   │   └── variables.css                       # Variáveis de cores, tamanhos etc.
│   │
│   ├── App.jsx                                 # Componente principal do React
│   └── main.jsx                                # Ponto de entrada do React
│
│
│   └── supabase/                               # Configurações e recursos do Supabase
│       │
│       ├── migrations/                         # Alterações e criação do banco PostgreSQL
│       │   └── 019_reports.sql                 # Criação/alteração relacionada aos relatórios
│       │
│       ├── functions/                          # Funções executadas no backend
│       │   └── track-user-activity/             # Registra atividades dos usuários
│       │
│       └── seed.sql                             # Dados iniciais para testes
│
├── .gitignore                                  # Arquivos que não devem ser enviados ao Git
├── README.md                                   # Apresentação e instruções do projeto
└── LICENSE                                     # Licença de uso do código