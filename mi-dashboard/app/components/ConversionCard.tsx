export default function ConversionCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Conversion</h3>
      
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 mb-6">
          {/* Outer circle */}
          <svg className="w-full h-full" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
              className="dark:stroke-slate-700"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#6366f1"
              strokeWidth="8"
              strokeDasharray={`${(58.19 / 100) * 440} 440`}
              strokeLinecap="round"
              className="transform -rotate-90"
              style={{ transformOrigin: '80px 80px' }}
            />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">58.19%</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Impressions</p>
              <p className="font-semibold text-slate-900 dark:text-white">$234,257</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Expenses</p>
              <p className="font-semibold text-slate-900 dark:text-white">$307,498</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
