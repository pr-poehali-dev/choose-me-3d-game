import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const HERO = 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/65039d34-b5e2-46ca-b1ac-6fc4fba6dbbe.jpg';

type Hero = {
  name: string;
  role: string;
  rarity: string;
  power: number;
  hp: number;
  atk: number;
  def: number;
  element: string;
  color: string;
  img: string;
  bio: string;
};

const HEROES: Hero[] = [
  {
    name: 'Kayden',
    role: 'Dark Guardian',
    rarity: 'LEGENDARY',
    power: 98,
    hp: 3200,
    atk: 940,
    def: 780,
    element: 'Shadow',
    color: '#a855f7',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/047ec7c5-ef39-4039-a3d2-5bcd0f000b1b.jpg',
    bio: 'A silent protector bound by an ancient oath, wielding forbidden shadow magic to shield those he chooses.',
  },
  {
    name: 'Lyra',
    role: 'Azure Archmage',
    rarity: 'EPIC',
    power: 92,
    hp: 2400,
    atk: 1120,
    def: 520,
    element: 'Frost',
    color: '#22d3ee',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/f3f56fb6-2f39-4ce3-931e-6f5d41acfba6.jpg',
    bio: 'Master of the frozen arcane, Lyra bends storms to her will and reads the fate written in starlight.',
  },
  {
    name: 'Seren',
    role: 'Crimson Blade',
    rarity: 'LEGENDARY',
    power: 96,
    hp: 2600,
    atk: 1240,
    def: 480,
    element: 'Blood',
    color: '#ef4444',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/d7ed93ea-7c26-4dfa-84cd-be99c31078e0.jpg',
    bio: 'A shadow-born assassin whose twin daggers have never missed. Her loyalty is earned, never bought.',
  },
  {
    name: 'Aldric',
    role: 'Emerald Paladin',
    rarity: 'EPIC',
    power: 90,
    hp: 3600,
    atk: 720,
    def: 960,
    element: 'Earth',
    color: '#22c55e',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/90349886-6b5e-4b62-a421-8f29e33b7a59.jpg',
    bio: 'An unbreakable knight of the golden order, his emerald aura turns aside blades and despair alike.',
  },
  {
    name: 'Ignis',
    role: 'Ember Sorcerer',
    rarity: 'RARE',
    power: 85,
    hp: 2100,
    atk: 1050,
    def: 440,
    element: 'Fire',
    color: '#f97316',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/d1b838df-73ec-4ca8-8525-139d992d3030.jpg',
    bio: 'A wandering flame-caller who burns away lies, leaving only truth — and ashes — behind.',
  },
  {
    name: 'Vela',
    role: 'Starlight Archer',
    rarity: 'EPIC',
    power: 89,
    hp: 2300,
    atk: 1080,
    def: 500,
    element: 'Light',
    color: '#f0abfc',
    img: 'https://cdn.poehali.dev/projects/dc2119e9-9fa0-42cc-b789-2f8fe193432e/files/6db1aec4-8e28-4fe5-886c-8a0262589b50.jpg',
    bio: 'Her radiant bow never falters. Each arrow carries a wish for the world she swore to protect.',
  },
];

const MECHANICS = [
  { icon: 'Swords', title: 'Combat System', desc: 'Real-time tactical battles with combos and unique character abilities.' },
  { icon: 'Layers', title: 'Card Collection', desc: 'Collect manhwa heroes, upgrade their rarity and build unique decks.' },
  { icon: 'Puzzle', title: 'Puzzles', desc: 'Solve ancient riddles of the world to unlock hidden chapters of the story.' },
];

const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'Gameplay', id: 'gameplay' },
  { label: 'Heroes', id: 'heroes' },
  { label: 'Story', id: 'story' },
];

const Index = () => {
  const [active, setActive] = useState('home');
  const [selected, setSelected] = useState<Hero | null>(null);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08060f] text-white overflow-x-hidden font-body selection:bg-neon-purple/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#08060f]/70 border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="font-display font-bold tracking-[0.25em] text-sm">
            <span className="text-gradient">CHOOSE</span>
            <span className="text-white/70"> ME</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`font-display text-sm tracking-widest uppercase transition-colors ${
                  active === n.id ? 'text-neon-cyan' : 'text-white/50 hover:text-white'
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('heroes')}
            className="bg-neon-purple hover:bg-neon-purple/80 text-white font-display tracking-widest text-xs rounded-none border border-neon-purple/50"
          >
            PLAY
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center grid-texture">
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
              <span className="font-display text-xs tracking-[0.3em] text-neon-cyan uppercase">3D Adventure · Based on the manhwa</span>
            </div>
            <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] mb-6 animate-fade-up [animation-delay:0.1s]">
              <span className="block text-white">DESTINY</span>
              <span className="block text-gradient">IN YOUR HANDS</span>
            </h1>
            <p className="text-white/60 text-lg max-w-lg mb-10 animate-fade-up [animation-delay:0.2s]">
              A cinematic adventure set in the world of the manhwa Choose Me. Fight, collect legendary heroes and uncover the secrets of a forbidden story.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.3s]">
              <Button
                onClick={() => scrollTo('heroes')}
                className="h-14 px-10 bg-neon-purple hover:bg-neon-purple/80 text-white font-display text-base tracking-widest rounded-none group"
              >
                <Icon name="Play" className="mr-2 group-hover:scale-110 transition-transform" size={18} />
                START GAME
              </Button>
              <Button
                onClick={() => scrollTo('gameplay')}
                variant="outline"
                className="h-14 px-10 border-white/20 bg-white/5 hover:bg-white/10 text-white font-display text-base tracking-widest rounded-none"
              >
                <Icon name="Film" className="mr-2" size={18} />
                TRAILER
              </Button>
            </div>
            <div className="flex gap-10 mt-14 animate-fade-up [animation-delay:0.4s]">
              {[['12', 'Chapters'], ['48', 'Heroes'], ['∞', 'Combos']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-neon-cyan">{n}</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollTo('gameplay')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        >
          <span className="font-display text-[10px] tracking-[0.3em]">SCROLL</span>
          <Icon name="ChevronDown" className="animate-float" size={18} />
        </button>
      </section>

      {/* MECHANICS */}
      <section id="gameplay" className="relative py-28 border-t border-white/5 scroll-mt-16">
        <div className="container">
          <div className="text-center mb-16">
            <span className="font-display text-xs tracking-[0.4em] text-neon-purple uppercase">Gameplay</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">WORLD MECHANICS</h2>
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

      {/* HEROES */}
      <section id="heroes" className="relative py-28 border-t border-white/5 grid-texture scroll-mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-display text-xs tracking-[0.4em] text-neon-cyan uppercase">Collection</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-3">LEGENDARY HEROES</h2>
            </div>
            <p className="text-white/40 max-w-xs">Unlock hero cards, raise their rarity and build an unstoppable deck.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {HEROES.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelected(c)}
                className="group relative aspect-[3/4] overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 hover:-translate-y-2 card-glow text-left"
              >
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060f] via-[#08060f]/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-display text-[9px] tracking-[0.15em] px-2 py-0.5 border" style={{ color: c.color, borderColor: c.color + '80', background: c.color + '15' }}>
                    {c.rarity}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 font-display font-bold text-sm" style={{ color: c.color }}>
                  <Icon name="Zap" size={12} />
                  {c.power}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <h3 className="font-display font-bold text-xl tracking-wide">{c.name}</h3>
                  <p className="text-white/50 text-xs">{c.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STORY CTA */}
      <section id="story" className="relative py-32 border-t border-white/5 overflow-hidden scroll-mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-cyan/10" />
        <div className="container relative text-center">
          <span className="font-display text-xs tracking-[0.4em] text-neon-magenta uppercase">Begin your journey</span>
          <h2 className="font-display font-bold text-5xl md:text-7xl mt-4 mb-6">
            READY TO <span className="text-gradient">CHOOSE?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
            Dive into the first chapter of the story right now and decide who will become your companion.
          </p>
          <Button
            onClick={() => scrollTo('heroes')}
            className="h-16 px-14 bg-neon-purple hover:bg-neon-purple/80 text-white font-display text-lg tracking-[0.2em] rounded-none"
          >
            ENTER THE WORLD
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <div className="font-display tracking-[0.25em]">CHOOSE ME © 2026</div>
          <div className="flex gap-6">
            <Icon name="Youtube" className="hover:text-neon-cyan cursor-pointer transition-colors" size={20} />
            <Icon name="Twitch" className="hover:text-neon-purple cursor-pointer transition-colors" size={20} />
            <Icon name="Send" className="hover:text-neon-cyan cursor-pointer transition-colors" size={20} />
          </div>
        </div>
      </footer>

      {/* HERO MODAL */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl bg-[#0c0a16] border border-white/10 text-white p-0 overflow-hidden">
          {selected && (
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[3/4] md:aspect-auto">
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a16] via-transparent to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="p-8 flex flex-col">
                <DialogHeader>
                  <span className="font-display text-[10px] tracking-[0.2em] self-start px-3 py-1 border mb-3" style={{ color: selected.color, borderColor: selected.color + '80', background: selected.color + '15' }}>
                    {selected.rarity} · {selected.element}
                  </span>
                  <DialogTitle className="font-display font-bold text-4xl tracking-wide text-white">{selected.name}</DialogTitle>
                  <p className="text-white/50">{selected.role}</p>
                </DialogHeader>
                <p className="text-white/60 text-sm leading-relaxed my-6">{selected.bio}</p>
                <div className="space-y-4 mb-8">
                  {([['HP', selected.hp, 3600], ['ATK', selected.atk, 1240], ['DEF', selected.def, 960]] as const).map(([label, val, max]) => (
                    <div key={label}>
                      <div className="flex justify-between font-display text-xs tracking-widest mb-1">
                        <span className="text-white/50">{label}</span>
                        <span style={{ color: selected.color }}>{val}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 overflow-hidden">
                        <div className="h-full" style={{ width: `${(val / max) * 100}%`, background: selected.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-auto h-12 font-display tracking-widest rounded-none text-white" style={{ background: selected.color }}>
                  <Icon name="UserPlus" className="mr-2" size={16} />
                  ADD TO DECK
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
