import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO = 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/65039d34-b5e2-46ca-b1ac-6fc4fba6dbbe.jpg';

const CARDS = [
  {
    name: 'Кайден',
    role: 'Тёмный Страж',
    rarity: 'LEGENDARY',
    power: 98,
    color: '#a855f7',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/047ec7c5-ef39-4039-a3d2-5bcd0f000b1b.jpg',
  },
  {
    name: 'Лира',
    role: 'Архимаг Лазури',
    rarity: 'EPIC',
    power: 92,
    color: '#22d3ee',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/f3f56fb6-2f39-4ce3-931e-6f5d41acfba6.jpg',
  },
];

const MECHANICS = [
  { icon: 'Swords', title: 'Боевая система', desc: 'Тактические сражения в реальном времени с комбо и особыми умениями персонажей.' },
  { icon: 'Layers', title: 'Коллекция карт', desc: 'Собирай героев манхвы, прокачивай редкость и формируй уникальные колоды.' },
  { icon: 'Puzzle', title: 'Головоломки', desc: 'Разгадывай древние загадки мира, чтобы открыть скрытые главы сюжета.' },
];

const NAV = ['Меню', 'Уровни', 'Карты', 'История'];

const Index = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-[#08060f] text-white overflow-x-hidden font-body selection:bg-neon-purple/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#08060f]/70 border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <div className="font-display font-bold tracking-[0.25em] text-sm">
            <span className="text-gradient">ВЫБЕРИ</span>
            <span className="text-white/70"> МЕНЯ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n, i) => (
              <button
                key={n}
                onClick={() => setActive(i)}
                className={`font-display text-sm tracking-widest uppercase transition-colors ${
                  active === i ? 'text-neon-cyan' : 'text-white/50 hover:text-white'
                }`}
              >
                {n}
              </button>
            ))}
          </nav>
          <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white font-display tracking-widest text-xs rounded-none border border-neon-purple/50">
            ИГРАТЬ
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center grid-texture">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08060f] via-[#08060f]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08060f] via-transparent to-[#08060f]/60" />
        </div>
        <div className="absolute -left-40 top-1/3 w-96 h-96 rounded-full bg-neon-purple/30 animate-glow-pulse" />
        <div className="absolute right-10 bottom-20 w-72 h-72 rounded-full bg-neon-cyan/20 animate-glow-pulse [animation-delay:1.5s]" />

        <div className="container relative z-10 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-neon-cyan/40 bg-neon-cyan/5 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="font-display text-xs tracking-[0.3em] text-neon-cyan uppercase">3D Приключение · По манхве</span>
            </div>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] mb-6 animate-fade-up [animation-delay:0.1s]">
              <span className="block text-white">СУДЬБА</span>
              <span className="block text-gradient">В ТВОИХ РУКАХ</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mb-10 animate-fade-up [animation-delay:0.2s]">
              Кинематографичное приключение в мире манхвы «Выбери меня». Сражайся, собирай легендарных героев и раскрывай тайны запретной истории.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.3s]">
              <Button className="h-14 px-10 bg-neon-purple hover:bg-neon-purple/80 text-white font-display text-base tracking-widest rounded-none group">
                <Icon name="Play" className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                НАЧАТЬ ИГРУ
              </Button>
              <Button variant="outline" className="h-14 px-10 border-white/20 bg-white/5 hover:bg-white/10 text-white font-display text-base tracking-widest rounded-none">
                <Icon name="Film" className="mr-2" size={18} />
                ТРЕЙЛЕР
              </Button>
            </div>
            <div className="flex gap-10 mt-14 animate-fade-up [animation-delay:0.4s]">
              {[['12', 'Глав'], ['48', 'Героев'], ['∞', 'Комбо']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-neon-cyan">{n}</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="font-display text-[10px] tracking-[0.3em]">ПРОКРУТИ</span>
          <Icon name="ChevronDown" className="animate-float" size={18} />
        </div>
      </section>

      {/* MECHANICS */}
      <section className="relative py-28 border-t border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <span className="font-display text-xs tracking-[0.4em] text-neon-purple uppercase">Геймплей</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">МЕХАНИКИ МИРА</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {MECHANICS.map((m) => (
              <div
                key={m.title}
                className="group relative p-8 bg-white/[0.03] border border-white/10 hover:border-neon-purple/50 transition-all duration-500 card-glow"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-gradient-to-br from-neon-purple/30 to-neon-cyan/20 border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon name={m.icon} className="text-neon-cyan" size={26} />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3 tracking-wide">{m.title}</h3>
                <p className="text-white/50 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="relative py-28 border-t border-white/5 grid-texture">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-display text-xs tracking-[0.4em] text-neon-cyan uppercase">Коллекция</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">ЛЕГЕНДАРНЫЕ ГЕРОИ</h2>
            </div>
            <p className="text-white/40 max-w-xs">Открывай карты персонажей, повышай их редкость и создавай непобедимую колоду.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARDS.map((c) => (
              <div
                key={c.name}
                className="group relative aspect-[3/4] overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:-translate-y-2 card-glow"
              >
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060f] via-[#08060f]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-display text-[10px] tracking-[0.2em] px-3 py-1 border" style={{ color: c.color, borderColor: c.color + '80', background: c.color + '15' }}>
                    {c.rarity}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 font-display font-bold" style={{ color: c.color }}>
                  <Icon name="Zap" size={14} />
                  {c.power}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <h3 className="font-display font-bold text-2xl tracking-wide">{c.name}</h3>
                  <p className="text-white/50 text-sm">{c.role}</p>
                </div>
              </div>
            ))}
            {[0, 1].map((i) => (
              <div key={i} className="aspect-[3/4] flex flex-col items-center justify-center gap-3 border border-dashed border-white/10 bg-white/[0.02] text-white/30">
                <Icon name="Lock" size={28} />
                <span className="font-display text-xs tracking-[0.2em]">СКОРО</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY CTA */}
      <section className="relative py-32 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10" />
        <div className="container relative text-center">
          <span className="font-display text-xs tracking-[0.4em] text-neon-magenta uppercase">Начни путешествие</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl mt-4 mb-6">
            ГОТОВ <span className="text-gradient">ВЫБРАТЬ?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
            Погрузись в первую главу истории прямо сейчас и реши, кто станет твоим спутником.
          </p>
          <Button className="h-16 px-14 bg-neon-purple hover:bg-neon-purple/80 text-white font-display text-lg tracking-[0.2em] rounded-none">
            ВОЙТИ В МИР
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <div className="font-display tracking-[0.25em]">ВЫБЕРИ МЕНЯ © 2026</div>
          <div className="flex gap-6">
            <Icon name="Youtube" className="hover:text-neon-cyan cursor-pointer transition-colors" size={20} />
            <Icon name="Twitch" className="hover:text-neon-purple cursor-pointer transition-colors" size={20} />
            <Icon name="Send" className="hover:text-neon-cyan cursor-pointer transition-colors" size={20} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
