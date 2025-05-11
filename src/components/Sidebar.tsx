import React from 'react';
import { Plus, MessageSquare, Settings, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Mock conversation history
  const conversations = [
    { id: '1', title: 'AI Basics Discussion', date: '4h ago' },
    { id: '2', title: 'Research on Neural Networks', date: 'Yesterday' },
    { id: '3', title: 'Machine Learning Applications', date: '3 days ago' },
    { id: '4', title: 'Future of AI Technology', date: '1 week ago' },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 w-72 bg-white border-r border-gray-200 z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">AI Chat</h2>
            <button 
              className="p-1 rounded-full hover:bg-gray-100 md:hidden"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
          
          {/* New Chat Button */}
          <div className="p-4">
            <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors">
              <Plus size={18} />
              <span>New Chat</span>
            </button>
          </div>
          
          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto py-2">
            <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Recent Conversations</h3>
            <ul>
              {conversations.map((convo) => (
                <li key={convo.id}>
                  <a 
                    href="#" 
                    className="flex items-start px-4 py-3 hover:bg-gray-100 transition-colors"
                  >
                    <MessageSquare size={18} className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{convo.title}</p>
                      <p className="text-xs text-gray-500">{convo.date}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
              <Settings size={18} className="mr-2" />
              <span>Settings</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;