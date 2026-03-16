interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  change: string;
  positive: boolean;
}

export default function StatCard({ icon, value, label, change, positive }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          {icon === 'chart' && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          )}
          {icon === 'users' && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 10a1 1 0 00-1 1v3H7v-3a3 3 0 016 0v3h-1v-3a1 1 0 00-1-1zM12.93 11.93a7 7 0 00-2.82-2.82m2.84 2.84a7.001 7.001 0 018.753 8.753m-9.875-9.875A7.001 7.001 0 0021 12a7 7 0 00-7-7 7 7 0 00-9.875 9.875z" />
            </svg>
          )}
          {icon === 'trending' && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V9.414l-4.293 4.293a1 1 0 01-1.414-1.414L13.586 8H12z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
      <div className="mb-2">
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>
        <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {positive ? '+' : ''}{change}
        </span>
      </div>
    </div>
  );
}
