export default function TailwindCSS() {
  return (
    /* Mengubah background menjadi Slate-950 (Deep Dark) */
    <div className="min-h-screen bg-slate-950 p-8 font-sans text-slate-200">
      
      {/* Header dengan efek Gradient Text yang lebih kuat di Dark Mode */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-6xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Tailwind<span className="text-indigo-400 italic underline decoration-wavy">CSS</span> 4
        </h1>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Kolom Kiri: Typography dengan Glassmorphism Dark */}
        <div className="md:col-span-8">
          <Typography />
        </div>

        {/* Kolom Kanan: Action dengan Glow Effect */}
        <div className="md:col-span-4 flex items-center justify-center bg-indigo-600 rounded-[2.5rem] shadow-[0_0_40px_rgba(79,70,229,0.3)] p-8 text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-center z-10">
            <p className="mb-4 font-medium tracking-wide">Eksplorasi Dimulai</p>
            <button className="bg-white text-indigo-950 px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all">
              Launch App
            </button>
          </div>
        </div>

        <div className="md:col-span-5">
          <Spacing />
        </div>
        
        <div className="md:col-span-7">
          <ShadowEffects />
        </div>

        <div className="md:col-span-12">
          <FlexboxGrid />
        </div>

        <div className="md:col-span-6">
          <BackgroundColors />
        </div>

        <div className="md:col-span-6 flex items-center justify-center">
          <BorderRadius />
        </div>
      </div>
    </div>
  )
}

function Spacing() {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2rem] hover:border-indigo-500/50 transition-colors group">
      <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">Space & Rhythm</h2>
      <p className="text-slate-400 leading-relaxed">
        Gunakan <span className="font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">p-10</span> untuk layout yang lega dan bernafas.
      </p>
    </div>
  )
}

function Typography() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl p-10 rounded-[2rem] border border-slate-800 shadow-2xl">
      <h2 className="text-xs uppercase tracking-[0.4em] text-indigo-400 font-bold mb-6">Design Philosophy</h2>
      <h1 className="text-4xl font-serif font-light text-white leading-tight">
        "Keindahan muncul saat <span className="text-indigo-400 font-medium">struktur</span> bertemu dengan imajinasi."
      </h1>
    </div>
  )
}

function BorderRadius() {
  return (
    <button className="group relative px-12 py-4 font-bold text-white transition-all">
      <span className="absolute inset-0 border border-slate-700 rounded-full group-hover:border-indigo-500 group-hover:bg-indigo-500/5 transition-all duration-500"></span>
      <span className="relative tracking-widest uppercase text-sm">Adaptive Shape</span>
    </button>
  )
}

function BackgroundColors() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-10 rounded-[2rem] border border-slate-800">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
      <h3 className="text-2xl font-bold mb-2">Midnight Canvas</h3>
      <p className="text-slate-400 leading-relaxed">Warna gelap memberikan fokus tajam pada elemen visual utama Anda.</p>
    </div>
  )
}

function FlexboxGrid() {
  return (
    <nav className="flex items-center justify-between bg-slate-900/80 backdrop-blur-md border border-slate-800 p-3 rounded-2xl">
      <div className="px-5 py-2 bg-indigo-600 text-white rounded-xl font-black tracking-tighter">TW</div>
      <ul className="flex space-x-2 text-sm font-medium text-slate-400">
        <li><a href="#" className="px-4 py-2 hover:text-white transition-colors">Concept</a></li>
        <li><a href="#" className="px-4 py-2 hover:text-white transition-colors">Styles</a></li>
        <li><a href="#" className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">Login</a></li>
      </ul>
    </nav>
  )
}

function ShadowEffects() {
  return (
    <div className="h-full bg-slate-900/50 border border-slate-800 p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-indigo-500/10 transition-all flex flex-col justify-center group">
      <h3 className="text-2xl font-bold text-white group-hover:translate-x-2 transition-transform">Outer Glow</h3>
      <p className="text-slate-500 mt-2 italic">Bayangan di mode gelap berfungsi sebagai pancaran cahaya halus (glow).</p>
    </div>
  )
}