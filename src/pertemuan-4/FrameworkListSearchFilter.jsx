import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  	/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    // Mengubah bg-black menjadi bg-gray-100 agar input text terlihat jelas
    <div className="p-8 bg-gray-100 min-h-screen font-sans">
      {/* Container untuk Input agar rapi */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-400 outline-none transition-all"
          onChange = {handleChange}
        />

        <select
          name="selectedTag"
          className="w-full md:w-64 p-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-gray-400 outline-none transition-all"
          onChange = {handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Grid Kartu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            // Mengubah bg-white/5 menjadi bg-white/70 agar lebih terlihat di bg abu-abu (Glassmorphism effect)
            className="group relative bg-white/70 backdrop-blur-md border border-white p-8 rounded-[40px] transition-all duration-500 hover:border-gray-400 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Blob Dekoratif Transparan */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-400/10 rounded-full blur-3xl group-hover:bg-gray-400/20 transition-colors" />

            {/* JUDUL: Diubah ke text-gray-900 agar kontras dengan bg abu-abu */}
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-gray-900 group-hover:to-gray-500">
              {item.name}
            </h2>

            {/* DESKRIPSI: Diubah ke text-gray-600 */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="px-4 py-1.5 border border-gray-300 text-gray-700 text-xs font-medium rounded-full bg-white/50 group-hover:border-gray-500 transition-colors">
                {item.details.developer}
              </span>
              <span className="text-gray-400 text-xs">
                Est. {item.details.releaseYear}
              </span>
              <span className="text-gray-400 text-xs">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </div>

            {/* TOMBOL: Diubah ke tema dark agar pop-out di background terang */}
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex w-full items-center justify-center px-6 py-3.5 overflow-hidden font-bold text-white rounded-full bg-gray-900 border border-transparent group-hover:bg-black transition-all duration-300 shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

              <span className="relative text-sm tracking-widest uppercase font-black">
                Explore Source
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
