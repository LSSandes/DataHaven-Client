import React, { useState, useRef } from "react";
import { Search } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  isLoading,
  placeholder,
}) => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && message.trim() && !isLoading) {
      e.preventDefault(); // Prevents newline on Enter
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleSearchClick = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const adjustTextareaHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      const newHeight = Math.min(
        Math.max(inputRef.current.scrollHeight, 50),
        200
      );
      inputRef.current.style.height = `${newHeight}px`;
    }
  };

  return (
    <div
      className={`flex flex-col items-center rounded-lg w-full gap-3 px-3 bg-white ring-1 ring-gray-300 ${
        isFocused ? "shadow-lg" : "border-transparent"
      }`}
    >
      <textarea
        ref={inputRef}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          adjustTextareaHeight();
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder || "Search for data..."}
        className="w-full pl-3 py-3 pr-28 text-lg border border-none rounded-lg focus:outline-none focus:border-none focus:ring-none"
        style={{
          fontFamily: "Roboto-Light",
          overflow: "hidden",
          resize: "none",
        }}
        disabled={isLoading}
        aria-label="Message input"
      />
      <div className="flex justify-end items-end w-full">
        <button
          type="submit"
          onClick={handleSearchClick}
          onKeyDown={handleSearchKeyDown}
          className={`transform -translate-y-1/2 px-6 py-2 rounded-md transition-colors flex justify-center items-center gap-2 border-none ${
            !message.trim() || isLoading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#3B82F6] text-white hover:bg-[#3B82F6] outline-dashed outline-1 outline-[#3B82F6] outline-offset-1"
          }`}
          style={{ fontFamily: "Roboto-Light" }}
          disabled={!message.trim() || isLoading}
        >
          <span>Search</span>
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
