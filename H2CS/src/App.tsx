import React, { useState, useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Search, Trophy, ExternalLink } from 'lucide-react';
import playersData from './data/players.json';

type Rank = 'S+' | 'S' | 'A+' | 'A' | 'B+';
type Player = { id: number; name: string; rank: Rank };

const RANKS: (Rank | 'TODOS')[] = ['TODOS', 'S+', 'S', 'A+', 'A', 'B+'];

export default function App() {
  const [search, setSearch] = useState('');
  const [activeRank, setActiveRank] = useState<Rank | 'TODOS'>('TODOS');

  const filteredPlayers = useMemo(() => {
    return (playersData as Player[]).filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchRank = activeRank === 'TODOS' || p.rank === activeRank;
      return matchSearch && matchRank;
    });
  }, [search, activeRank]);

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: filteredPlayers.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 48,
    overscan: 10,
  });

  return (
    <div className="flex flex-col h-full overflow-hidden bg-bg text-text-main font-sans">
      {/* HEADER */}
      <header className="h-[60px] shrink-0 border-b border-gold-muted flex items-center justify-between px-4 md:px-10 bg-bg/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative group flex items-center justify-center">
              <img src="https://i.ibb.co/dJf5st7W/H2CS.png" alt="H2CS" className="h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden') }} />
              <div className="hidden fallback w-8 h-8 border border-gold rounded flex items-center justify-center text-[10px] text-gold font-bold">H2CS</div>
            </div>
            <div className="relative group flex items-center justify-center">
              <img src="https://i.ibb.co/SDZwhXXz/Cryptum.png" alt="Cryptum" className="h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden') }} />
              <div className="hidden fallback w-8 h-8 border border-gold rounded flex items-center justify-center text-[10px] text-gold font-bold">CRYP</div>
            </div>
            <div className="relative group flex items-center justify-center ml-2">
              <img src="https://i.ibb.co/4ZRKmvJr/Halo2.png" alt="Halo 2" className="h-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </div>
          <span className="text-[1.1rem] md:text-[1.2rem] font-light tracking-[2px] text-gold uppercase hidden sm:block">
            H2CS by Cryptum
          </span>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col md:grid md:grid-cols-[1.4fr_1fr] gap-6 p-4 md:p-6 lg:p-8 xl:px-10 overflow-hidden min-h-0 bg-bg">
        
        {/* RANKINGS TABLE */}
        <section className="bg-surface border border-gold-muted rounded-lg flex flex-col overflow-hidden h-full min-h-0">
          {/* Controls */}
          <div className="p-4 border-b border-gold-muted flex flex-col gap-3 shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
              <input
                type="text"
                className="w-full bg-[#1e1e21] border border-gold-muted rounded p-2.5 pl-9 text-text-main text-sm outline-none focus:border-gold transition-colors"
                placeholder="Buscar jugador por nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {RANKS.map(rank => (
                <button
                  key={rank}
                  onClick={() => setActiveRank(rank)}
                  className={`px-3 py-1 rounded text-xs border transition-all ${
                    activeRank === rank 
                      ? 'bg-gold text-black border-gold font-medium' 
                      : 'bg-transparent text-text-dim border-gold-muted hover:text-text-main hover:border-gold/50 cursor-pointer'
                  }`}
                >
                  {rank}
                </button>
              ))}
            </div>
          </div>
          
          {/* Virtual Table */}
          <div className="flex-1 overflow-auto bg-surface" ref={tableContainerRef}>
            <div className="w-full text-sm text-left">
              <div className="sticky top-0 bg-surface z-10 grid grid-cols-[60px_1fr_70px_80px] sm:grid-cols-[80px_1fr_100px_100px] p-3 text-gold uppercase text-[10px] md:text-xs tracking-wider border-b border-gold-muted font-semibold">
                <div>POS</div>
                <div>JUGADOR</div>
                <div>RANGO</div>
                <div className="text-right">ESTADO</div>
              </div>
              
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: '100%',
                  position: 'relative',
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const player = filteredPlayers[virtualRow.index];
                  
                  let tagClass = "inline-block px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold font-mono w-12 text-center ";
                  if (player.rank === 'S+') tagClass += 'bg-[#ffd700] text-black';
                  else if (player.rank === 'S') tagClass += 'bg-[#c0c0c0] text-black';
                  else if (player.rank === 'A+') tagClass += 'bg-[#cd7f32] text-white';
                  else if (player.rank === 'A') tagClass += 'bg-[#1e1e21] text-gold border border-gold-muted';
                  else tagClass += 'bg-[#1e1e21] text-text-dim border border-[#333]';

                  return (
                    <div
                      key={virtualRow.index}
                      className="absolute top-0 left-0 w-full flex items-center border-b border-[#1e1e21] hover:bg-[#1e1e21]/40 transition-colors"
                      style={{
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                      }}
                    >
                      <div className="grid grid-cols-[60px_1fr_70px_80px] sm:grid-cols-[80px_1fr_100px_100px] w-full px-3 text-sm items-center">
                        <div className="text-text-dim text-[11px] sm:text-xs">{(virtualRow.index + 1).toString().padStart(3, '0')}</div>
                        <div className="font-medium truncate pr-2 text-text-main text-[13px] sm:text-sm">{player.name}</div>
                        <div>
                          <span className={tagClass}>{player.rank}</span>
                        </div>
                        <div className="text-right text-[10px] sm:text-xs text-text-dim tracking-wider">
                          ACTIVO
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {filteredPlayers.length === 0 && (
                <div className="p-8 text-center text-text-dim text-sm italic">
                  No se encontraron jugadores.
                </div>
              )}
            </div>
          </div>
          
          <div className="shrink-0 p-2.5 text-center text-xs text-gold border-t border-gold-muted bg-gold/5 flex flex-col gap-1.5 items-center justify-center">
            Mostrando {filteredPlayers.length} de {(playersData as Player[]).length} jugadores registrados
            <div className="text-[10px] text-text-dim opacity-70 italic font-normal max-w-md mx-auto leading-tight">
              Disclaimer: Esta tabla es un prototipo en desarrollo y puede contener imperfecciones en la clasificación de datos actual.
            </div>
          </div>
        </section>

        {/* SIDEBAR INFO */}
        <aside className="flex flex-col gap-4 overflow-y-auto pr-1 pb-4 md:pb-0 h-full min-h-0">
          
          <div className="bg-surface border-l-[3px] border-gold p-4 rounded shadow-sm flex flex-col">
            <div className="h-[120px] bg-gradient-to-r from-[#141416] to-transparent relative rounded mb-3 overflow-hidden border border-[#1e1e21] flex items-end p-3">
              <img 
                src="https://i.ibb.co/qLymcQcw/H2.jpg" 
                alt="Halo 2 Spartan" 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity hover:opacity-60 transition-opacity duration-500"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
              <img src="https://i.ibb.co/4ZRKmvJr/Halo2.png" alt="Halo 2 Logo" className="h-[40px] object-contain drop-shadow-md z-10" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.querySelector('.h2-fallback')?.classList.remove('hidden') }} />
              <div className="hidden h2-fallback font-bold text-lg text-gold font-sans italic tracking-wider z-10">PROJECT CARTOGRAPHER</div>
            </div>
            
            <h3 className="text-gold uppercase text-[0.9rem] font-semibold tracking-[1px] mb-2 flex items-center gap-2">
              Halo 2 & Project Cartographer
            </h3>
            <p className="text-text-dim text-[0.8rem] leading-[1.6]">
              Adaptación moderna de Halo 2 Vista. Lanzamiento original por Bungie en 2004 y H2V Team en 2007.
            </p>
            <blockquote className="my-3 pl-3 border-l-2 border-gold/40 text-[0.8rem] italic text-text-main/80">
              "Este código está diseñado para simular bibliotecas XLive a través de System Link para Halo 2 Vista. Además, añade una amplia variedad de características adicionales al propio juego."
            </blockquote>
            <div className="flex gap-4 mt-1">
              <a href="https://cartographer.online/" target="_blank" rel="noopener noreferrer" className="text-gold text-[0.7rem] uppercase tracking-wider hover:text-white transition-colors">cartographer.online</a>
              <a href="https://github.com/pnill/cartographer/" target="_blank" rel="noopener noreferrer" className="text-gold text-[0.7rem] uppercase tracking-wider hover:text-white transition-colors">repositorio github</a>
            </div>
          </div>

          <div className="bg-surface border-l-[3px] border-gold p-4 rounded shadow-sm">
            <h3 className="text-gold uppercase text-[0.9rem] font-semibold tracking-[1px] mb-2">
              Halo 2 Cartographer Series (H2CS)
            </h3>
            <p className="text-text-dim text-[0.8rem] leading-[1.6]">
              Torneos competitivos de alto nivel activos desde el año 2022. Fomentando y revitalizando la comunidad competitiva de Halo 2 en Latinoamérica.
            </p>
          </div>

          <div className="bg-surface border-l-[3px] border-gold p-4 rounded shadow-sm mb-4 md:mb-0">
            <h3 className="text-gold uppercase text-[0.9rem] font-semibold tracking-[1px] mb-2">
              Organizador: Cryptum
            </h3>
            <p className="text-text-dim text-[0.8rem] leading-[1.6] mb-3">
              Trayectoria consolidada desde 2016 organizando torneos y producciones eSports. Amplia experiencia en eventos presenciales de gran escala en Villavicencio para juegos como League of Legends, Fortnite, Valorant y Free Fire, ahora con un enfoque especializado en llevar a Halo 2 a su máximo nivel desde 2022.
            </p>
            <a href="https://cryptums.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold text-[0.7rem] uppercase tracking-wider hover:text-white transition-colors">cryptums.vercel.app</a>
          </div>
          
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="h-auto md:h-[50px] shrink-0 bg-surface border-t border-gold-muted flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-3 md:py-0 gap-3 md:gap-0 text-[0.7rem] text-text-dim">
        <div className="uppercase tracking-wider text-center md:text-left">
          © 2026 CRYPTUM ORGANIZACIÓN | VILLAVICENCIO, CO
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <a href="https://discord.gg/6wpaNaY" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">DISCORD</a>
          <a href="https://facebook.com/cryptums" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">FACEBOOK</a>
          <a href="https://youtube.com/cryptum" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">YOUTUBE</a>
          <a href="https://x.com/cryptums" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">X / TWITTER</a>
          <a href="https://instagram.com/cryptums" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">INSTAGRAM</a>
          <a href="https://tiktok.com/@cryptums" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">TIKTOK</a>
        </div>
      </footer>
    </div>
  );
}

