export default function CTACard() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 border border-indigo-400 text-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-400 opacity-20 rounded-full"></div>
      
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-2">Need More Stats?</h3>
        <p className="text-sm text-indigo-100 mb-4">Explore in-dept analytics to find insights.</p>
        
        <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Go Pro Now
        </button>
      </div>

      {/* Decorative icon */}
      <div className="absolute right-4 bottom-4 opacity-10">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V9.414l-4.293 4.293a1 1 0 01-1.414-1.414L13.586 8H12z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
