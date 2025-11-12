import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageSquarePlus, 
  Users, 
  UserCheck, 
  MessageSquare, 
  Tag, 
  Eye,
  ArrowRight,
  Code,
  Calculator,
  FlaskConical
} from 'lucide-react';

// Mock Data for the discussion feed
const mockPosts = [
  {
    id: 1,
    author: 'Alice Johnson',
    avatarUrl: 'https://placehold.co/100x100/A9D5E4/333?text=AJ',
    time: '5m ago',
    title: 'Stuck on Python list comprehensions, can anyone help?',
    tags: ['python', 'beginner', 'help'],
    replies: 5,
    views: 32,
  },
  {
    id: 2,
    author: 'Bob Smith',
    avatarUrl: 'https://placehold.co/100x100/F0B7B3/333?text=BS',
    time: '30m ago',
    title: 'Resource Share: Best interactive guide for TensorFlow',
    tags: ['tensorflow', 'ai', 'resources'],
    replies: 12,
    views: 128,
  },
  {
    id: 3,
    author: 'Chandra Gupta',
    avatarUrl: 'https://placehold.co/100x100/D0F0B3/333?text=CG',
    time: '2h ago',
    title: 'Looking for a study partner for "Data Structures" course',
    tags: ['study-group', 'data-structures'],
    replies: 3,
    views: 64,
  },
];

// Mock Data for Study Groups
const mockGroups = [
  { id: 1, name: 'AI/ML Enthusiasts', members: 42, icon: FlaskConical },
  { id: 2, name: 'ReactJS Developers', members: 78, icon: Code },
  { id: 3, name: 'Calculus Champs', members: 19, icon: Calculator },
];

// Mock Data for Mentors
const mockMentors = [
  { id: 1, name: 'Dr. Emily White', subject: 'Machine Learning', avatarUrl: 'https://placehold.co/100x100/E4C1F0/333?text=EW' },
  { id: 2, name: 'David Lee', subject: 'Full-Stack Web Dev', avatarUrl: 'https://placehold.co/100x100/C1F0D9/333?text=DL' },
];

function Community() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* --- 1. Header & Main Actions --- */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Community Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
            Connect, learn, and grow with other students and mentors.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex-1 md:flex-none flex items-center justify-center bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition-colors">
              <MessageSquarePlus size={20} className="mr-2" />
              Ask a Question
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center bg-white text-green-700 font-bold py-3 px-6 rounded-lg shadow-md border border-green-700 hover:bg-green-50 transition-colors">
              <UserCheck size={20} className="mr-2" />
              Find a Mentor
            </button>
          </div>
        </header>

        {/* --- 2. Main Content (2-column layout) --- */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* --- Main Feed (Left Column) --- */}
          <main className="lg:w-2/3">
            {/* Create Post Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Create a Post
              </h2>
              <textarea
                className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
                rows="4"
                placeholder="What's on your mind? Share your questions or resources..."
              ></textarea>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-green-700 p-2 rounded-full">
                    <Tag size={20} />
                  </button>
                  {/* Add other buttons like image upload, etc. */}
                </div>
                <button className="bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-800 transition-colors">
                  Post
                </button>
              </div>
            </div>

            {/* Discussions Feed */}
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Recent Discussions
            </h2>
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={post.avatarUrl} 
                        alt={`${post.author} avatar`} 
                        className="w-12 h-12 rounded-full mr-4"
                        onError={(e) => e.target.src = 'https://placehold.co/100x100/CCCCCC/333?text=User'}
                      />
                      <div>
                        <span className="font-semibold text-gray-900">{post.author}</span>
                        <p className="text-sm text-gray-500">{post.time}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-green-700">
                      <Link to={`/community/post/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-6 text-gray-500">
                      <span className="flex items-center text-sm">
                        <MessageSquare size={16} className="mr-1.5" /> {post.replies} Replies
                      </span>
                      <span className="flex items-center text-sm">
                        <Eye size={16} className="mr-1.5" /> {post.views} Views
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* --- Sidebar (Right Column) --- */}
          <aside className="lg:w-1/3">
            {/* Study Groups */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Featured Study Groups
              </h3>
              <div className="space-y-5">
                {mockGroups.map((group) => (
                  <div key={group.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <group.icon className="w-10 h-10 text-green-700 mr-4" strokeWidth={1.5} />
                      <div>
                        <p className="font-semibold text-gray-900">{group.name}</p>
                        <p className="text-sm text-gray-500">{group.members} members</p>
                      </div>
                    </div>
                    <Link to={`/community/group/${group.id}`} className="text-sm text-green-700 font-bold hover:underline">
                      Join
                    </Link>
                  </div>
                ))}
              </div>
              <Link to="/community/groups" className="flex items-center justify-center mt-6 text-green-700 font-bold hover:underline">
                View All Groups <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>

            {/* Available Mentors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Available Mentors
              </h3>
              <div className="space-y-5">
                {mockMentors.map((mentor) => (
                  <div key={mentor.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={mentor.avatarUrl} 
                        alt={`${mentor.name} avatar`} 
                        className="w-12 h-12 rounded-full mr-4"
                        onError={(e) => e.target.src = 'https://placehold.co/100x100/CCCCCC/333?text=User'}
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{mentor.name}</p>
                        <p className="text-sm text-gray-500">{mentor.subject}</p>
                      </div>
                    </div>
                    <Link to={`/mentors/${mentor.id}`} className="text-sm text-green-700 font-bold hover:underline">
                      Connect
                    </Link>
                  </div>
                ))}
              </div>
              <Link to="/mentors" className="flex items-center justify-center mt-6 text-green-700 font-bold hover:underline">
                Find a Mentor <ArrowRight size={18} className="ml-1" />
              </Link>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}

export default Community;