import React, { useState } from 'react';

// --- Icon Component (using inline SVG) ---
// Using heroicons (https://heroicons.com/) for a professional look
const Icon = ({ name, className = 'w-6 h-6' }) => {
    const icons = {
        chevronUp: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />,
        chevronDown: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />,
        message: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
        eye: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></>,
        plus: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />,
        tag: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h7a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM15 5v7a2 2 0 01-2 2H5" />,
        search: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
        fire: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343m11.314 11.314a8 8 0 01-11.314 0m11.314 0L20 20M6.343 7.343L4 5" />,
        academicCap: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />,
        lightBulb: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M9 17v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2h10z" />,
        userGroup: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-2.29l-1.123.878m-11.13-1.043A3 3 0 002 18v2h5m6-13a3 3 0 100-6 3 3 0 000 6zM21 13a3 3 0 100-6 3 3 0 000 6zM3 13a3 3 0 100-6 3 3 0 000 6z" />
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
            {icons[name] || <circle cx="12" cy="12" r="10" strokeWidth="2" />}
        </svg>
    );
};

// --- Dummy Data (Will come from Firebase) ---
const postsData = [
    { id: 1, author: 'Riya Sharma', avatar: 'R', avatarColor: 'bg-pink-500', title: 'What is the best way to understand React Hooks?', tags: ['react', 'javascript'], votes: 12, replies: 5, views: 250, time: '10m ago' },
    { id: 2, author: 'Aman Gupta', avatar: 'A', avatarColor: 'bg-blue-500', title: 'How to implement "offline-first" with Firebase?', tags: ['firebase', 'pwa', 'offline'], votes: 28, replies: 10, views: 540, time: '2h ago' },
    { id: 3, author: 'Vikram Singh', avatar: 'V', avatarColor: 'bg-green-500', title: 'Best practices for scaling a Python backend?', tags: ['python', 'backend', 'scalability'], votes: 5, replies: 2, views: 120, time: '5h ago' },
];

const topContributors = [
    { name: 'Aman Gupta', avatar: 'A', avatarColor: 'bg-blue-500', points: 1250 },
    { name: 'Riya Sharma', avatar: 'R', avatarColor: 'bg-pink-500', points: 980 },
    { name: 'John Doe', avatar: 'J', avatarColor: 'bg-purple-500', points: 760 },
];

const popularTags = ['react', 'firebase', 'python', 'javascript', 'pwa', 'nextjs'];

// --- Community Page Component ---
export default function CommunityPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                
                {/* Header & Ask Question Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
                        <p className="text-lg text-gray-600 mt-1">Ask questions, find answers, and connect with peers.</p>
                    </div>
                    <button className="mt-4 sm:mt-0 flex-shrink-0 bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center space-x-2 shadow-sm">
                        <Icon name="plus" className="w-5 h-5" />
                        <span>Ask a Question</span>
                    </button>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Content (Left Column) */}
                    <main className="lg:col-span-8 space-y-6">
                        
                        {/* Filter Pills */}
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                            <FilterPill title="All" isActive={activeFilter === 'All'} onClick={() => setActiveFilter('All')} />
                            <FilterPill title="Maths" icon="academicCap" isActive={activeFilter === 'Maths'} onClick={() => setActiveFilter('Maths')} />
                            <FilterPill title="Science" icon="fire" isActive={activeFilter === 'Science'} onClick={() => setActiveFilter('Science')} />
                            <FilterPill title="Tech" icon="lightBulb" isActive={activeFilter === 'Tech'} onClick={() => setActiveFilter('Tech')} />
                            <FilterPill title="English" icon="userGroup" isActive={activeFilter === 'English'} onClick={() => setActiveFilter('English')} />
                        </div>

                        {/* Question Feed */}
                        <div className="bg-white rounded-lg shadow-sm">
                            <ul className="divide-y divide-gray-200">
                                {postsData.map(post => (
                                    <PostCard key={post.id} post={post} />
                                ))}
                            </ul>
                        </div>
                    </main>

                    {/* Sidebar (Right Column) */}
                    <aside className="lg:col-span-4 space-y-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search community..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <Icon name="search" className="w-5 h-5" />
                            </div>
                        </div>
                        
                        {/* Sidebar Modules */}
                        <SidebarModule title="Top Contributors">
                            <ul className="space-y-4">
                                {topContributors.map(user => (
                                    <li key={user.name} className="flex items-center space-x-3">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full ${user.avatarColor} flex items-center justify-center text-white text-lg font-bold`}>
                                            {user.avatar}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{user.name}</p>
                                            <p className="text-sm text-gray-500">{user.points} points</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </SidebarModule>

                        <SidebarModule title="Popular Tags">
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map(tag => (
                                    <span key={tag} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </SidebarModule>
                        
                         <SidebarModule title="Unanswered Questions">
                            <ul className="space-y-3">
                                <li className="text-indigo-600 hover:text-indigo-800 cursor-pointer">How to use TensorFlow.js in a React PWA?</li>
                                <li className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Firestore security rules for a multi-tenant app?</li>
                            </ul>
                        </SidebarModule>
                    </aside>

                </div>
            </div>
        </div>
    );
}

// --- Helper Component: FilterPill ---
const FilterPill = ({ title, icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-colors ${
            isActive 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
        }`}
    >
        {icon && <Icon name={icon} className="w-5 h-5" />}
        <span>{title}</span>
    </button>
);

// --- Helper Component: PostCard ---
const PostCard = ({ post }) => (
    <li className="p-4 sm:p-6 flex space-x-4">
        {/* Votes */}
        <div className="flex-shrink-0 flex flex-col items-center space-y-1">
            <button className="text-gray-400 hover:text-indigo-600">
                <Icon name="chevronUp" className="w-6 h-6" />
            </button>
            <span className="text-xl font-bold text-gray-900">{post.votes}</span>
            <button className="text-gray-400 hover:text-indigo-600">
                <Icon name="chevronDown" className="w-6 h-6" />
            </button>
        </div>
        
        {/* Post Content */}
        <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 truncate hover:text-indigo-600 cursor-pointer">
                {post.title}
            </h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map(tag => (
                    <span key={tag} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Stats & Author */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-500 mt-4">
                <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                        <Icon name="message" className="w-4 h-4" />
                        <span>{post.replies} replies</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <Icon name="eye" className="w-4 h-4" />
                        <span>{post.views} views</span>
                    </span>
                </div>
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                    <div className={`w-6 h-6 rounded-full ${post.avatarColor} flex items-center justify-center text-white text-xs font-bold`}>
                        {post.avatar}
                    </div>
                    <span className="font-medium text-gray-700">{post.author}</span>
                    <span>asked {post.time}</span>
                </div>
            </div>
        </div>
    </li>
);

// --- Helper Component: SidebarModule ---
const SidebarModule = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
            {title}
        </h3>
        {children}
    </div>
);