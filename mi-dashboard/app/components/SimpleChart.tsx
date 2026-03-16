export default function SimpleChart() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Sessions Over Time</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Show report</p>
      </div>
      
      <div className="flex items-end justify-between h-48 gap-2">
        {[30, 45, 60, 40, 70, 50, 80, 65, 75, 55, 85, 70, 90, 75, 95].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${(height / 100) * 100}%` }}
            ></div>
            <span className="text-xs text-slate-400 dark:text-slate-500">{i + 1}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
          <span className="text-slate-600 dark:text-slate-400">Sessions</span>
        </div>
        <div className="flex gap-4">
          <span className="text-slate-500 dark:text-slate-400">25</span>
          <span className="text-slate-500 dark:text-slate-400">23</span>
          <span className="text-slate-500 dark:text-slate-400">26</span>
        </div>
      </div>
    </div>
  );
}
