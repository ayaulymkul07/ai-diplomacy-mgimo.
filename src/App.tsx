import { useState, useEffect } from 'react';

// SVG Illustrations
function GlobeIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Globe */}
      <circle cx="200" cy="200" r="150" fill="none" stroke="url(#globeGrad)" strokeWidth="2" opacity="0.3" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.2" />
      <ellipse cx="200" cy="200" rx="80" ry="150" fill="none" stroke="url(#globeGrad)" strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="200" cy="200" rx="150" ry="80" fill="none" stroke="url(#globeGrad)" strokeWidth="1" opacity="0.2" />
      {/* Network nodes */}
      {[
        { cx: 120, cy: 140 }, { cx: 280, cy: 160 }, { cx: 160, cy: 280 },
        { cx: 300, cy: 250 }, { cx: 200, cy: 100 }, { cx: 200, cy: 300 },
        { cx: 100, cy: 220 }, { cx: 310, cy: 200 }
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.cx} cy={pos.cy} r="6" fill="url(#globeGrad)" opacity="0.8" />
          <circle cx={pos.cx} cy={pos.cy} r="10" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.4" />
        </g>
      ))}
      {/* Connection lines */}
      <line x1="120" y1="140" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="280" y1="160" x2="200" y2="100" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="120" y1="140" x2="100" y2="220" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="160" y1="280" x2="200" y2="300" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="300" y1="250" x2="310" y2="200" stroke="url(#lineGrad)" strokeWidth="1" />
      <line x1="280" y1="160" x2="310" y2="200" stroke="url(#lineGrad)" strokeWidth="1" />
      {/* AI Brain icon in center */}
      <circle cx="200" cy="200" r="30" fill="url(#globeGrad)" opacity="0.2" />
      <circle cx="200" cy="200" r="20" fill="url(#globeGrad)" opacity="0.4" />
      <text x="200" y="207" textAnchor="middle" fill="white" fontSize="18">🧠</text>
    </svg>
  );
}

function DataAnalysisIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Background grid */}
      {[...Array(5)].map((_, i) => (
        <line key={i} x1="50" y1={60 + i * 45} x2="370" y2={60 + i * 45} stroke="#e2e8f0" strokeWidth="1" />
      ))}
      {/* Bars */}
      {[
        { x: 70, h: 120 }, { x: 120, h: 180 }, { x: 170, h: 90 },
        { x: 220, h: 210 }, { x: 270, h: 150 }, { x: 320, h: 170 }
      ].map((bar, i) => (
        <g key={i}>
          <rect x={bar.x} y={240 - bar.h} width="30" height={bar.h} fill="url(#barGrad)" rx="4" opacity="0.8" />
          <rect x={bar.x} y={240 - bar.h} width="30" height="6" fill="#60a5fa" rx="2" />
        </g>
      ))}
      {/* Trend line */}
      <polyline
        points="85,160 135,100 185,190 235,70 285,130 335,110"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dots on trend */}
      {[
        { x: 85, y: 160 }, { x: 135, y: 100 }, { x: 185, y: 190 },
        { x: 235, y: 70 }, { x: 285, y: 130 }, { x: 335, y: 110 }
      ].map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r="4" fill="#06b6d4" />
      ))}
    </svg>
  );
}

function ShieldIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path d="M200 30 L320 80 L320 170 C320 230 260 270 200 290 C140 270 80 230 80 170 L80 80 Z"
        fill="none" stroke="url(#shieldGrad)" strokeWidth="3" opacity="0.6" />
      <path d="M200 50 L300 90 L300 165 C300 215 250 250 200 268 C150 250 100 215 100 165 L100 90 Z"
        fill="url(#shieldGrad)" opacity="0.1" />
      {/* Globe inside shield */}
      <circle cx="200" cy="160" r="50" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="200" cy="160" rx="30" ry="50" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.4" />
      <line x1="150" y1="160" x2="250" y2="160" stroke="#2563eb" strokeWidth="1" opacity="0.4" />
      {/* Connection nodes */}
      {[
        { cx: 140, cy: 100 }, { cx: 260, cy: 100 }, { cx: 130, cy: 200 },
        { cx: 270, cy: 200 }, { cx: 200, cy: 80 }
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.cx} cy={pos.cy} r="5" fill="#06b6d4" opacity="0.7" />
          <line x1={pos.cx} y1={pos.cy} x2="200" y2="160" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
        </g>
      ))}
      {/* Lock icon */}
      <rect x="190" y="150" width="20" height="16" rx="3" fill="#2563eb" opacity="0.6" />
      <path d="M195 150 L195 144 C195 139 200 135 205 139 L205 150" fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

// Navigation component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'directions', 'capabilities', 'risks', 'regulation', 'conclusion'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'ИИ и дипломатия' },
    { id: 'directions', label: 'Направления' },
    { id: 'capabilities', label: 'Возможности' },
    { id: 'risks', label: 'Риски' },
    { id: 'regulation', label: 'Регулирование' },
    { id: 'conclusion', label: 'Заключение' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <i className="fas fa-brain text-white text-sm"></i>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block">ИИ и Дипломатия</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-navy">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.15)_0%,_transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Globe illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block">
        <GlobeIllustration />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <i className="fas fa-globe text-cyan-400 mr-2"></i>
            <span className="text-gray-200 text-sm">Исследовательский проект</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Применение{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              искусственного интеллекта
            </span>{' '}
            в международных отношениях и дипломатии
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Комплексное исследование роли технологий искусственного интеллекта 
            в трансформации современной дипломатии, международных переговоров 
            и глобальной безопасности
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30">
              Начать изучение
            </a>
            <a href="#conclusion" className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-all">
              Источники
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/60 hover:text-white transition-colors">
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0a1628] mb-8">
              ИИ в международных отношениях
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Искусственный интеллект всё глубже проникает в сферу международных отношений, 
                меняя подходы к анализу глобальных процессов, принятию дипломатических решений 
                и управлению международными кризисами.
              </p>
              <p>
                Современные государства и международные организации активно внедряют 
                технологии машинного обучения и обработки естественного языка для решения 
                задач, которые ранее требовали исключительно человеческой экспертизы. 
                Это включает анализ дипломатических документов, мониторинг геополитической 
                обстановки и моделирование сценариев развития международных конфликтов.
              </p>
              <p>
                По данным исследований Оксфордского университета и Массачусетского 
                технологического института, уже к середине 2020-х годов большинство 
                министерств иностранных дел ведущих государств используют или тестируют 
                системы на базе ИИ для поддержки принятия решений.
              </p>
              <p>
                Трансформация дипломатии под влиянием ИИ затрагивает как оперативный 
                уровень (обработка информации, подготовка аналитических справок), 
                так и стратегический (прогнозирование, моделирование переговорных процессов).
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border border-blue-100">
              <DataAnalysisIllustration />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <div>
                  <p className="font-semibold text-[#0a1628]">Аналитика</p>
                  <p className="text-sm text-gray-500">ИИ обрабатывает данные</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Directions Section
function DirectionsSection() {
  const directions = [
    {
      icon: 'fa-magnifying-glass-chart',
      title: 'Дипломатический анализ',
      description: 'ИИ-системы анализируют дипломатические документы, заявления лидеров и медиапространство для выявления тенденций и формирования аналитических отчётов. Обработка естественного языка позволяет автоматически отслеживать изменения в риторике государств.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fa-handshake',
      title: 'Международные переговоры',
      description: 'Технологии ИИ помогают готовить переговорные позиции, моделировать реакции сторон и анализировать исторические прецеденты. Системы могут предлагать оптимальные формулировки и оценивать вероятные исходы переговоров.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Прогнозирование конфликтов',
      description: 'Алгоритмы машинного обучения анализируют политические, экономические и социальные индикаторы для оценки рисков возникновения или эскалации конфликтов. Программа «Early Warning» ООН использует подобные подходы.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'fa-satellite',
      title: 'Военная сфера',
      description: 'ИИ применяется в системах раннего предупреждения, анализе разведданных и управлении беспилотными системами. Автономные системы вооружения вызывают серьёзные дискуссии о необходимости международного контроля.',
      color: 'from-slate-600 to-slate-700'
    }
  ];

  return (
    <section id="directions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4 inline-block">
            Основные направления применения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Искусственный интеллект применяется в различных аспектах международных отношений — 
            от аналитической работы до обеспечения безопасности
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((item, index) => (
            <div key={index} className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                <i className={`fas ${item.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* AI Application Diagram */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#0a1628] text-center mb-10">Схема применения ИИ в дипломатии</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Central node */}
            <div className="flex justify-center mb-8">
              <div className="diagram-node animate-pulse-glow w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <i className="fas fa-brain text-3xl mb-1"></i>
                  <p className="text-xs font-semibold">ИИ</p>
                </div>
              </div>
            </div>

            {/* Connection lines - visual representation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'fa-file-lines', label: 'Анализ документов', sub: 'NLP-обработка' },
                { icon: 'fa-users', label: 'Переговоры', sub: 'Моделирование' },
                { icon: 'fa-triangle-exclamation', label: 'Конфликты', sub: 'Прогнозирование' },
                { icon: 'fa-shield', label: 'Безопасность', sub: 'Мониторинг' }
              ].map((node, i) => (
                <div key={i} className="diagram-node flex flex-col items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full mb-2"></div>
                  <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-md text-center w-full">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                      <i className={`fas ${node.icon} text-blue-600`}></i>
                    </div>
                    <p className="font-semibold text-[#0a1628] text-sm">{node.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{node.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom flow */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl px-6 py-4 border border-blue-100">
                <i className="fas fa-arrow-down text-blue-500"></i>
                <div className="text-center">
                  <p className="font-semibold text-[#0a1628] text-sm">Результат</p>
                  <p className="text-xs text-gray-500">Информированные дипломатические решения</p>
                </div>
                <i className="fas fa-arrow-down text-blue-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  const capabilities = [
    {
      icon: 'fa-database',
      title: 'Обработка больших объёмов информации',
      description: 'Системы ИИ способны обрабатывать миллионы документов, новостей и дипломатических нот за короткое время, выявляя скрытые закономерности и связи, недоступные для быстрого человеческого анализа.',
      details: ['Анализ открытых источников (OSINT)', 'Мониторинг мировых СМИ', 'Обработка дипломатической корреспонденции']
    },
    {
      icon: 'fa-chart-pie',
      title: 'Анализ рисков и прогнозирование',
      description: 'Алгоритмы машинного обучения оценивают вероятность различных сценариев развития событий на основе исторических данных и текущих индикаторов, помогая дипломатам принимать более обоснованные решения.',
      details: ['Оценка эскалации конфликтов', 'Прогноз экономических санкций', 'Моделирование политических кризисов']
    },
    {
      icon: 'fa-robot',
      title: 'Автоматизация рутинных задач',
      description: 'ИИ берёт на себя рутинные операции — перевод документов, составление отчётов, систематизацию данных, что позволяет дипломатам сосредоточиться на стратегических вопросах.',
      details: ['Автоматический перевод', 'Генерация аналитических сводок', 'Классификация документов']
    }
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-gradient-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Возможности</span> ИИ
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ключевые технологические преимущества, которые искусственный интеллект 
            предоставляет для сферы международных отношений
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center mb-5">
                <i className={`fas ${cap.icon} text-blue-400 text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">{cap.description}</p>
              <ul className="space-y-2">
                {cap.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <i className="fas fa-check text-cyan-400 mr-2 text-xs"></i>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Risks Section
function RisksSection() {
  const risks = [
    {
      icon: 'fa-circle-exclamation',
      title: 'Дезинформация',
      description: 'Генеративные модели ИИ способны создавать убедительные поддельные тексты, аудио и видео (дипфейки), которые могут использоваться для вмешательства в дипломатические процессы и манипулирования общественным мнением.',
      severity: 'high'
    },
    {
      icon: 'fa-bug',
      title: 'Ошибки алгоритмов',
      description: 'Алгоритмы ИИ могут воспроизводить и усиливать предвзятость, заложенную в обучающих данных. Ошибочные прогнозы или рекомендации могут привести к неверным дипломатическим решениям с серьёзными последствиями.',
      severity: 'high'
    },
    {
      icon: 'fa-lock',
      title: 'Киберугрозы',
      description: 'ИИ-системы сами становятся объектами кибератак. Взлом или манипуляция алгоритмами, используемыми в дипломатической аналитике, может подорвать доверие к результатам их работы.',
      severity: 'medium'
    },
    {
      icon: 'fa-scale-balanced',
      title: 'Вопросы ответственности',
      description: 'Сложность определения ответственности за решения, принятые с участием ИИ. Если алгоритм дал ошибочную рекомендацию, приведшую к дипломатическому кризису, кто несёт ответственность?',
      severity: 'medium'
    },
    {
      icon: 'fa-user-shield',
      title: 'Человеческий контроль',
      description: 'Обеспечение того, чтобы окончательные решения в сфере международной безопасности оставались за человеком. Принцип «meaningful human control» является предметом активных дискуссий в ООН.',
      severity: 'high'
    }
  ];

  const severityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200'
  };

  const severityLabels = {
    high: 'Высокий',
    medium: 'Средний'
  };

  return (
    <section id="risks" className="py-20 lg:py-28 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4 inline-block">
            Риски и проблемы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
            Применение ИИ в международных отношениях сопряжено с серьёзными вызовами, 
            требующими внимания на международном уровне
          </p>
        </div>

        <div className="space-y-5">
          {risks.map((risk, index) => (
            <div key={index} className="card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${risk.icon} text-red-500 text-lg`}></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#0a1628]">{risk.title}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mt-2 sm:mt-0 ${severityColors[risk.severity as keyof typeof severityColors]}`}>
                      {severityLabels[risk.severity as keyof typeof severityLabels]}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{risk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Regulation Section
function RegulationSection() {
  return (
    <section id="regulation" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-blue-100">
              <ShieldIllustration />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="section-title text-3xl sm:text-4xl font-bold text-[#0a1628] mb-8">
              Международное регулирование
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Развитие технологий ИИ требует создания международных правовых рамок, 
                которые бы регулировали их применение в сфере международных отношений и безопасности.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-[#0a1628] flex items-center mb-2">
                  <i className="fas fa-building-columns text-blue-600 mr-2"></i>
                  Роль ООН
                </h4>
                <p className="text-sm">
                  Организация Объединённых Наций активно обсуждает вопросы регулирования ИИ. 
                  В 2023 году Совет Безопасности ООН провёл первое заседание, посвящённое 
                  влиянию ИИ на международный мир и безопасность. Генеральный секретарь ООН 
                  учредил Консультативный орган по искусственному интеллекту.
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                <h4 className="font-bold text-[#0a1628] flex items-center mb-2">
                  <i className="fas fa-gavel text-cyan-600 mr-2"></i>
                  Международное право
                </h4>
                <p className="text-sm">
                  Существующие нормы международного права, включая Устав ООН и международное 
                  гуманитарное право, применяются и к технологиям ИИ. Однако специалисты 
                  признают необходимость разработки новых специализированных правовых инструментов.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                <h4 className="font-bold text-[#0a1628] flex items-center mb-2">
                  <i className="fas fa-people-group text-indigo-600 mr-2"></i>
                  Сотрудничество государств
                </h4>
                <p className="text-sm">
                  Ряд стран и объединений разрабатывают национальные стратегии регулирования ИИ. 
                  Европейский союз принял «Закон об искусственном интеллекте» (AI Act), 
                  устанавливающий риск-ориентированный подход к регулированию. 
                  Международное сотрудничество в этой области остаётся ключевым вызовом.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Conclusion Section
function ConclusionSection() {
  const sources = [
    {
      title: 'United Nations — Artificial Intelligence',
      url: 'https://www.un.org/en/artificial-intelligence',
      description: 'Официальная страница ООН, посвящённая вопросам ИИ и международной безопасности'
    },
    {
      title: 'European Union — AI Act',
      url: 'https://artificialintelligenceact.eu/',
      description: 'Официальный ресурс, посвящённый европейскому регулированию искусственного интеллекта'
    },
    {
      title: 'UNESCO — Recommendation on the Ethics of AI',
      url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
      description: 'Рекомендация ЮНЕСКО по этике искусственного интеллекта (2021)'
    },
    {
      title: 'MIT — Artificial Intelligence',
      url: 'https://www.mit.edu/',
      description: 'Исследования Массачусетского технологического института в области ИИ'
    },
    {
      title: 'Council on Foreign Relations — AI',
      url: 'https://www.cfr.org/artificial-intelligence',
      description: 'Аналитические материалы Совета по международным отношениям по теме ИИ'
    },
    {
      title: 'Brookings Institution — AI',
      url: 'https://www.brookings.edu/topic/artificial-intelligence/',
      description: 'Исследования института Брукингса о влиянии ИИ на международный порядок'
    }
  ];

  return (
    <section id="conclusion" className="py-20 lg:py-28 bg-gradient-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Заключение и{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">источники</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Основные выводы исследования и список использованных источников
          </p>
        </div>

        {/* Conclusions */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <i className="fas fa-lightbulb text-yellow-400 mr-3"></i>
            Основные выводы
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'ИИ трансформирует дипломатическую практику, расширяя возможности анализа и прогнозирования, но не заменяет человеческое суждение в принятии стратегических решений.',
              'Применение ИИ в международных отношениях требует создания надёжных международных правовых рамок и механизмов контроля.',
              'Риски, связанные с ИИ (дезинформация, ошибки алгоритмов, киберугрозы), требуют скоординированных усилий государств.',
              'Баланс между технологическим прогрессом и обеспечением безопасности остаётся ключевой задачей международного сообщества.'
            ].map((conclusion, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{conclusion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <i className="fas fa-book-open text-blue-400 mr-3"></i>
            Источники
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start space-x-3">
                  <i className="fas fa-external-link-alt text-blue-400 mt-1 group-hover:text-cyan-400 transition-colors"></i>
                  <div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-blue-300 transition-colors">
                      {source.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{source.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#060d1a] text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <i className="fas fa-brain text-white text-sm"></i>
            </div>
            <span className="text-white font-semibold text-sm">ИИ и Дипломатия</span>
          </div>
          <p className="text-sm text-center">
            Исследовательский проект · {new Date().getFullYear()} · Информация носит ознакомительный характер
          </p>
          <div className="flex items-center space-x-4">
            <a href="#home" className="hover:text-white transition-colors text-sm">
              <i className="fas fa-arrow-up mr-1"></i> Наверх
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DirectionsSection />
      <CapabilitiesSection />
      <RisksSection />
      <RegulationSection />
      <ConclusionSection />
      <Footer />
    </div>
  );
}

export default App;
