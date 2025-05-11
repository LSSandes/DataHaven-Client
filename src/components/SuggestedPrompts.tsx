import React from 'react';

interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ onPromptClick }) => {
  const prompts = [
    "Tell me about artificial intelligence",
    "What are the benefits of machine learning?",
    "How do large language models work?",
    "Can you explain neural networks in simple terms?"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onPromptClick(prompt)}
          className="text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 text-sm"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;