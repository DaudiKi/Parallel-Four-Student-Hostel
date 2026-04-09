import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
  price: string;
  period: string;
  type: 'single' | 'shared';
  tags: string[];
  image: string;
  features: string[];
  badge?: string;
  badgeColor?: string;
}

const roomsData: Room[] = [
  {
    id: 1,
    name: "Single Economy Room",
    price: "17,000",
    period: "month",
    type: "single",
    tags: ["Premium", "Ensuite"],
    image: "/single-economy-plan.png",
    features: ["1 bed", "Study desk", "Wardrobe space", "Bathroom ensuite"],
    badge: "Premium",
    badgeColor: "bg-primary text-white"
  },
  {
    id: 2,
    name: "The Twin Share",
    price: "21,000",
    period: "month",
    type: "shared",
    tags: ["Popular", "Social"],
    image: "/twin-room-plan.png",
    features: ["Max 2 people sharing", "Study desks", "Wardrobe space", "Sink", "Bathroom ensuite"],
    badge: "Popular",
    badgeColor: "bg-slate-900 text-white"
  },
  {
    id: 3,
    name: "The Triple Share",
    price: "14,500",
    period: "month",
    type: "shared",
    tags: ["Budget", "Community"],
    image: "/triple-room-plan.png",
    features: ["Max 3 people sharing", "Study desks", "Wardrobe space", "Sink", "Bathroom ensuite"],
    badge: "Best Value",
    badgeColor: "bg-green-600 text-white"
  },

  {
    id: 5,
    name: "Twin Deluxe Room",
    price: "23,000",
    period: "month",
    type: "shared",
    tags: ["Spacious", "View"],
    image: "/twin-deluxe-plan.png",
    features: ["1 bed", "Study desk", "Wardrobe space", "Bathroom shared between 2 rooms"],
  },

];

const Rooms: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'single' | 'shared'>('all');

  const filteredRooms = roomsData.filter(room => filter === 'all' || room.type === filter);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <div className="relative w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=1920")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-display font-black text-white sm:text-5xl">Available Accommodation</h1>
          <p className="text-xl text-slate-200 font-light">
            Select the perfect space that fits your lifestyle and budget.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur shadow-sm border-b border-slate-200 dark:bg-slate-900/95 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            {['all', 'single', 'shared'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`py-4 px-2 text-sm font-bold border-b-2 transition-all capitalize ${filter === type
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
              >
                {type === 'all' ? 'All Rooms' : `${type} Occupancy`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {room.badge && (
                  <div className={`absolute top-4 right-4 ${room.badgeColor} backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide`}>
                    {room.badge}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-4 p-6 flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{room.name}</h3>
                  <p className="text-primary text-lg font-bold">
                    KES {room.price} <span className="text-sm text-slate-500 dark:text-slate-400 font-normal">/ {room.period}</span>
                  </p>
                </div>

                <hr className="border-slate-100 dark:border-slate-700" />

                <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Link to="/contact" className="w-full flex items-center justify-center rounded-xl bg-primary h-12 text-white text-sm font-bold hover:bg-blue-600 shadow-md hover:shadow-lg transition-all">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Rooms;