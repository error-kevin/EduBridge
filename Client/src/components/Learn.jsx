import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  BarChart3, 
  Code, 
  Calculator, 
  FlaskConical, 
  Landmark, 
  Globe, 
  Download, 
  Users, 
  Target,
  ArrowRight
} from 'lucide-react';
import '../styles/Learn.css'

const personalizedContent = [
  {
    id: 1,
    title: 'Introduction to Python',
    description: 'Master the basics of Python, the most popular AI language.',
    progress: 60,
    icon: Code,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    title: 'Data Structures',
    description: 'Learn how data is organized for efficient access.',
    progress: 25,
    icon: BarChart3,
    color: 'bg-green-100',
    iconColor: 'text-green-700'
  },
  {
    id: 3,
    title: 'Machine Learning Basics',
    description: 'Your next step in the AI personalized learning path.',
    progress: 0,
    icon: BookOpen,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
];

// Mock data for subject categories
const categories = [
  { name: 'Mathematics', icon: Calculator, color: 'text-red-500', path: '/features/learn/math' },
  { name: 'Science', icon: FlaskConical, color: 'text-green-500', path: '/features/learn/science' },
  { name: 'History', icon: Landmark, color: 'text-yellow-600', path: '/features/learn/history' },
  { name: 'Languages', icon: Globe, color: 'text-blue-500', path: '/features/learn/languages' },
];

function Learn() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* --- 1. Header and Search --- */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learning Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
            Welcome, student! Find your next lesson, browse subjects, or 
            continue where you left off.
          </p>
          
          <div className="relative">
            <input
              type="search"
              placeholder="Search for topics, subjects, or AI tutors..."
              className="w-full p-4 pl-12 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </header>

        {/* --- 2. AI Personalized Section ("Continue Learning") --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalizedContent.map((item) => (
              <Link 
                to={`/features/learn/course/${item.id}`} 
                key={item.id} 
                className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${item.color} ${item.iconColor} rounded-lg flex items-center justify-center mb-4`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  {/* Progress Bar */}
                  {item.progress > 0 ? (
                    <>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div 
                          className="bg-green-700 h-2.5 rounded-full" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-green-800">
                        {item.progress}% Complete
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-medium text-blue-700">
                      Start this topic
                    </span>
                  )}
                </div>
                
                <div className="bg-gray-50 px-6 py-4 mt-auto">
                  <span className="font-semibold text-green-700 group-hover:text-green-800 flex items-center">
                    {item.progress > 0 ? 'Continue Lesson' : 'Start Lesson'}
                    <ArrowRight size={18} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* --- 3. Browse Subjects --- */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Browse All Subjects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                to={category.path}
                key={category.name}
                className="group block bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <category.icon 
                  className={`w-20 h-20 ${category.color} mx-auto mb-4 transition-transform group-hover:scale-110`} 
                  strokeWidth={1.5} 
                />
                <span className="text-xl font-semibold text-gray-900 group-hover:text-green-700">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* --- 4. Key Features Callout (Offline & Community) --- */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Offline Access */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center">
            <Download className="w-20 h-20 mb-6 md:mb-0 md:mr-8 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-2xl font-bold mb-3">Learning Offline?</h3>
              <p className="text-blue-100 mb-6">
                Access your saved courses and quizzes even with no internet. 
                Perfect for learning on the go.
              </p>
              <Link 
                to="/saved/learn" 
                className="inline-block bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                View Saved Content
              </Link>
            </div>
          </div>

          {/* Peer-to-Peer Community */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center">
            <Users className="w-20 h-20 mb-6 md:mb-0 md:mr-8 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-2xl font-bold mb-3">Join the Community</h3>
              <p className="text-gray-300 mb-6">
                Get help from peers, find mentors, and share your 
                knowledge with other students.
              </p>
              <Link 
                to="/community" 
                className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
              >
                Visit Community Hub
              </Link>
            </div>
          </div>
        </section>

        {/* --- 5. Gamification ("Daily Challenge") --- */}
        <section>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Target className="w-16 h-16 text-red-600 mr-6" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Your Daily Challenge
                </h3>
                <p className="text-lg text-gray-600">
                  Complete a 10-minute quiz on <span className="font-semibold text-red-700">Data Structures</span> to earn 50 points!
                </p>
              </div>
            </div>
            <Link 
              to="/features/quiz/challenge"
              className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors flex-shrink-0"
            >
              Start Challenge
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Learn;