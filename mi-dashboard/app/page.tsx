'use client';

import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  CircleArrowLeft,
  CircleArrowRight,
  ClipboardList,
  CloudDownload,
  Home,
  LogOut,
  Megaphone,
  MessageCircle,
  Package,
  Search,
  ShoppingCart,
  Slack,
  Users,
} from 'lucide-react';
import {
  Line,
  LineChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const sessionData = [
  { day: '21', value: 0 },
  { day: '22', value: 6 },
  { day: '23', value: 2 },
  { day: '24', value: 8 },
  { day: '25', value: 3 },
  { day: '26', value: 14 },
];

const gaugeValue = 58.19;
const gaugeData = [{ name: 'conversion', value: gaugeValue, fill: '#4F46E5' }];

type StatMiniCardProps = {
  title: string;
  value: string;
  trend: string;
  up: boolean;
  icon: React.ReactNode;
};

function StatMiniCard({ title, value, trend, up, icon }: StatMiniCardProps) {
  return (
    <article className="rounded-2xl border border-[#ececf4] bg-white px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef0ff] text-[#5b57f2]">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[#a0a2b3]">{title}</p>
          <div className="mt-0.5 flex items-end gap-2">
            <p className="text-[38px] font-semibold leading-[0.92] tracking-[-0.02em] text-[#1f2132]">{value}</p>
            <span className={`pb-1 text-xs font-semibold ${up ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
              {up ? '↑' : '↓'} {trend}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#e9eaf2] p-4 md:p-8">
      <div className="w-full max-w-[1420px] rounded-[30px] bg-white p-3 shadow-[0_30px_85px_rgba(25,30,65,0.16)]">
        <div className="grid min-h-[820px] grid-cols-1 overflow-hidden rounded-[24px] border border-[#f0f1f6] lg:grid-cols-[248px_minmax(0,1fr)]">
          <aside className="flex flex-col justify-between border-b border-[#eceef5] bg-white px-6 py-7 lg:border-b-0 lg:border-r">
            <div className="space-y-9">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#e2b23a] font-extrabold text-white">
                  R
                </div>
                <span className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#171a2d]">flex</span>
              </div>

              <section className="space-y-4">
                <p className="text-xs font-medium text-[#b2b4c1]">Menu</p>
                <nav className="space-y-1.5 text-[17px] text-[#2a2d44]">
                  <button className="flex w-full items-center gap-3 rounded-full bg-[#4c47eb] px-4 py-2.5 font-semibold text-white shadow-[0_10px_22px_rgba(76,71,235,0.45)]">
                    <Home size={16} />
                    Dashboard
                  </button>
                  <button className="flex w-full items-center justify-between rounded-full px-3 py-2.5 font-semibold hover:bg-[#f5f6fa]">
                    <span className="flex items-center gap-3">
                      <ClipboardList size={16} />
                      Orders
                    </span>
                    <ChevronDown size={15} className="text-[#b7b8c4]" />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-full px-3 py-2.5 font-semibold hover:bg-[#f5f6fa]">
                    <span className="flex items-center gap-3">
                      <Boxes size={16} />
                      Products
                    </span>
                    <ChevronDown size={15} className="text-[#b7b8c4]" />
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-full px-3 py-2.5 font-semibold hover:bg-[#f5f6fa]">
                    <BarChart3 size={16} />
                    Analytics
                  </button>
                  <button className="flex w-full items-center justify-between rounded-full px-3 py-2.5 font-semibold hover:bg-[#f5f6fa]">
                    <span className="flex items-center gap-3">
                      <Megaphone size={16} />
                      Marketing
                    </span>
                    <ChevronDown size={15} className="text-[#b7b8c4]" />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-full px-3 py-2.5 font-semibold hover:bg-[#f5f6fa]">
                    <span className="flex items-center gap-3">
                      <MessageCircle size={16} />
                      Messages
                    </span>
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#26c281] px-1 text-[10px] text-white">25</span>
                  </button>
                </nav>
              </section>

              <section className="space-y-3">
                <p className="text-xs font-medium text-[#b2b4c1]">Integrations</p>
                <div className="space-y-3 text-[17px] font-semibold text-[#2a2d44]">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rotate-45 rounded-[3px] bg-[#3b82f6]" />
                    Jira
                  </div>
                  <div className="flex items-center gap-3">
                    <Slack size={16} className="text-[#22c55e]" />
                    Slack
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={16} className="text-[#6d73f5]" />
                    Intercom
                  </div>
                </div>
              </section>
            </div>

            <button className="mt-8 flex items-center gap-3 text-left text-[17px] font-semibold text-[#2a2d44]">
              <LogOut size={16} />
              Logout
            </button>
          </aside>

          <main className="bg-white px-5 py-6 sm:px-8 sm:py-7">
            <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex w-full max-w-[560px] items-center gap-3">
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e6e8f0] text-[#9ea1af]">
                  <ChevronLeft size={15} />
                </button>
                <div className="flex h-11 flex-1 items-center gap-2 rounded-full border border-[#e6e8f0] px-4">
                  <Search size={16} className="text-[#adb0be]" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent text-sm text-[#565a71] outline-none placeholder:text-[#b0b3c1]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#e6e8f0] text-[#75798e]">
                  <Bell size={16} />
                  <span className="absolute right-[9px] top-[9px] h-1.5 w-1.5 rounded-full bg-[#5b57f2]" />
                </button>
                <div className="border-l border-[#e8e9f1] pl-4 pr-1">
                  <p className="text-[11px] text-[#a8abba]">Your Balance</p>
                  <p className="text-[30px] font-semibold leading-none text-[#5b57f2]">$5.456</p>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="h-10 w-10 rounded-full border-2 border-[#ffcfaa] bg-cover bg-center"
                    style={{ backgroundImage: "url('https://i.pravatar.cc/100?img=47')" }}
                  />
                  <span className="text-sm font-semibold text-[#2a2d44]">Hi, Lay</span>
                </div>
              </div>
            </header>

            <section className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#433edc] text-white">
                  <Home size={17} />
                </div>
                <h1 className="text-[42px] font-semibold leading-none tracking-[-0.03em] text-[#1f2132]">Dashboard</h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="flex h-10 items-center gap-2 rounded-full border border-[#e6e8f0] px-4 text-sm text-[#777b90]">
                  <CalendarDays size={14} />
                  This Month
                  <ChevronDown size={14} />
                </button>
                <button className="flex h-10 items-center gap-2 rounded-full bg-[#32b96f] px-5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(50,185,111,0.35)]">
                  <CloudDownload size={14} />
                  Download Report
                </button>
              </div>
            </section>

            <section className="rounded-[28px] bg-[#f4f5fa] p-4 sm:p-5">
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <StatMiniCard
                  title="Total Sales"
                  value="263k"
                  trend="15.6%"
                  up={true}
                  icon={<ShoppingCart size={16} />}
                />
                <StatMiniCard
                  title="Total Visitors"
                  value="35k"
                  trend="6.2%"
                  up={false}
                  icon={<Users size={16} />}
                />
                <StatMiniCard
                  title="Total Orders"
                  value="165k"
                  trend="3.5%"
                  up={true}
                  icon={<Package size={16} />}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_1fr]">
                <article className="rounded-3xl border border-[#ececf4] bg-white p-5">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#1f2132]">Online Store Sessions</h2>
                    <button className="rounded-full border border-[#e7e8ef] px-4 py-2 text-xs font-semibold text-[#9b9fb0]">
                      View Report
                    </button>
                  </div>

                  <div className="mb-4 flex items-center justify-between border-b border-[#f0f1f5] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef0ff] text-[#5b57f2]">
                        <Users size={16} />
                      </div>
                      <div>
                        <p className="text-sm text-[#a1a4b3]">Visitors</p>
                        <p className="text-[46px] font-semibold leading-[0.9] tracking-[-0.03em] text-[#1f2132]">68</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-right text-sm">
                      <span className="font-semibold text-[#12b981]">↑ 15.6%</span>
                      <span className="font-semibold text-[#4f46e5]">26</span>
                      <span className="text-transparent">0</span>
                      <span className="font-semibold text-[#ef4444]">↓ 1.6%</span>
                    </div>
                  </div>

                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#9296a8]">Sessions Over Time</p>
                    <button className="flex items-center gap-2 rounded-full border border-[#e7e8ef] px-3 py-1.5 text-xs text-[#8d91a5]">
                      <CalendarDays size={12} />
                      February
                      <ChevronDown size={12} />
                    </button>
                  </div>

                  <div className="h-[220px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sessionData} margin={{ top: 10, right: 10, left: -24, bottom: 0 }}>
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#a1a4b3' }} domain={[0, 15]} ticks={[0, 5, 10, 15]} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={false} />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#5b57f2"
                          strokeWidth={4}
                          dot={false}
                          activeDot={{ r: 5, fill: '#5b57f2' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-xs text-[#a2a5b5]">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e6e8ef] text-[#c0c4d3]">
                      <CircleArrowLeft size={14} />
                    </button>
                    <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#4f46e5] px-2 font-semibold text-white">21</span>
                    <span>22</span>
                    <span>23</span>
                    <span>24</span>
                    <span>25</span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e6e8ef] text-[#c0c4d3]">
                      <CircleArrowRight size={14} />
                    </button>
                  </div>
                </article>

                <div className="flex flex-col gap-4">
                  <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4f46e5] via-[#4b46d9] to-[#2e64ff] p-5 text-white">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
                    <div className="absolute right-14 top-9 h-16 w-8 rounded-full bg-white/10" />
                    <div className="relative z-10">
                      <h3 className="text-[40px] font-semibold leading-[0.95] tracking-[-0.03em]">Need More Stats?</h3>
                      <p className="mt-1 text-sm text-indigo-100">Upgrade to pro for added benefits.</p>
                      <button className="mt-6 flex h-10 items-center gap-2 rounded-full bg-[#35ba72] px-6 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(53,186,114,0.35)]">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/70 text-[10px]">↑</span>
                        Go Pro Now
                      </button>
                    </div>
                  </article>

                  <article className="rounded-3xl border border-[#ececf4] bg-white p-5">
                    <h3 className="mb-2 text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#1f2132]">Conversion</h3>
                    <div className="relative mx-auto h-[215px] max-w-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                          data={gaugeData}
                          startAngle={180}
                          endAngle={0}
                          innerRadius="70%"
                          outerRadius="100%"
                          barSize={20}
                          cx="50%"
                          cy="88%"
                        >
                          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} axisLine={false} />
                          <RadialBar dataKey="value" background={{ fill: '#e8e9f6' }} cornerRadius={20} />
                        </RadialBarChart>
                      </ResponsiveContainer>
                      <div className="pointer-events-none absolute inset-x-0 top-[58%] text-center">
                        <p className="text-[44px] font-semibold leading-none tracking-[-0.03em] text-[#1f2132]">58,19%</p>
                        <p className="mt-1 text-sm font-semibold text-[#12b981]">↑ 3.5%</p>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-4 border-t border-[#f1f2f6] pt-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[#8b8fa3]">
                          <ArrowDown size={14} className="text-[#12b981]" />
                          Income
                        </span>
                        <span className="font-semibold text-[#1f2132]">$542,317</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-[#8b8fa3]">
                          <ArrowUp size={14} className="text-[#1f2132]" />
                          Expences
                        </span>
                        <span className="font-semibold text-[#1f2132]">$497,456</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
