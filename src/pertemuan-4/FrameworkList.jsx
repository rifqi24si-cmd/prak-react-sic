import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        // Latar belakang hitam pekat. Menggunakan font sans-serif yang modern & bersih.
        <div className="p-8 bg-black min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
            {frameworkData.map((item) => (
                <div 
                    key={item.id} 
                    // BENTUK: Sangat melengkung (rounded-full/3xl)
                    // EFEK: Glassmorphism (bg-white/5, backdrop-blur) + Border tipis
                    // HOVER: Pendaran cahaya putih (drop-shadow) dan sedikit membesar
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[40px] transition-all duration-500 hover:border-white/40 hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                    {/* Blob Dekoratif Transparan di background kartu */}
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />
                    
                    {/* JUDUL: Putih, Tebal, Modern, Agak rapat (tracking-tight) */}
                    <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-gray-400">
                        {item.name}
                    </h2>
                    
                    {/* DESKRIPSI: Abu-abu transparan agar halus */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                        {item.description}
                    </p>
                    
                    {/* INFO CAPSULE: Bentuk elips sempurna */}
                    <div className="flex flex-wrap items-center gap-3 mb-10">
                        <span className="px-4 py-1.5 border border-white/20 text-white/90 text-xs font-medium rounded-full bg-white/5 group-hover:border-white/50 transition-colors">
                            {item.details.developer}
                        </span>
                        <span className="text-white/40 text-xs">
                            Est. {item.details.releaseYear}
                        </span>
                    </div>

                    {/* TOMBOL: Bentuk Kapsul Kaca (Pill-shaped) */}
                    <a 
                        href={item.details.officialWebsite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative inline-flex w-full items-center justify-center px-6 py-3.5 overflow-hidden font-bold text-white rounded-full bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300"
                    >
                        {/* Efek kilauan 'liquid' saat hover */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                        
                        <span className="relative text-sm tracking-widest uppercase font-black">
                            Explore Source
                        </span>
                    </a>
                </div>
            ))}
        </div>
    );
}