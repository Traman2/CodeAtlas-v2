import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { searchGuides } from "../utils/searchUtils";
import type { SearchResult } from "../utils/searchUtils";
import { SearchResultItem } from "./SearchResultItem";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isSearching, setIsSearching] = useState(false);

    // Focus input and reset state when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            setQuery("");
            setResults([]);
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Handle search with debouncing
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            setSelectedIndex(0);
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        const timeoutId = setTimeout(() => {
            const searchResults = searchGuides(query);
            setResults(searchResults);
            setSelectedIndex(0);
            setIsSearching(false);
        }, 150); // 150ms debounce

        return () => clearTimeout(timeoutId);
    }, [query]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex(prev =>
                        Math.min(prev + 1, results.length - 1)
                    );
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex(prev => Math.max(prev - 1, 0));
                    break;
                case "Enter":
                    e.preventDefault();
                    if (results[selectedIndex]) {
                        handleSelectResult(results[selectedIndex]);
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, results, selectedIndex, onClose]);

    const handleSelectResult = (result: SearchResult) => {
        navigate(result.guide.path);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 backdrop-blur-md z-50 flex items-start justify-center pt-32 px-4 transition-all"
            onClick={onClose}
        >
            <div
                className="bg-white shadow-2xl w-full max-w-160 rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                    <Icon
                        icon="material-symbols:search"
                        width="24"
                        height="24"
                        className="text-gray-400"
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for guides, technologies, or concepts..."
                        className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-400"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <Icon icon="material-symbols:close" width="20" height="20" />
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="cursor-pointer"
                    >
                        <div className="flex items-center gap-1.5">
                            <kbd className="px-2 py-1 hover:bg-gray-100 text-gray-500 border border-gray-300 rounded text-xs font-semibold transition-all">
                                Esc
                            </kbd>
                        </div>
                    </button>
                </div>

                {/* Results Area */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {/* Loading State */}
                    {isSearching && (
                        <div className="flex items-center justify-center py-12">
                            <Icon
                                icon="eos-icons:loading"
                                width="32"
                                height="32"
                                className="text-[#4f46ff]"
                            />
                        </div>
                    )}

                    {/* Empty State */}
                    {!query && !isSearching && (
                        <div className="text-center py-12 text-gray-400 px-4">
                            <Icon
                                icon="material-symbols:search"
                                width="48"
                                height="48"
                                className="mx-auto mb-3 opacity-30"
                            />
                            <p>Start typing to search...</p>
                            <p className="text-sm mt-2 text-gray-500">
                                Search across all guides, frameworks, and technologies
                            </p>
                        </div>
                    )}

                    {/* No Results */}
                    {query && !isSearching && results.length === 0 && (
                        <div className="text-center py-12 text-gray-400 px-4">
                            <Icon
                                icon="material-symbols:search-off"
                                width="48"
                                height="48"
                                className="mx-auto mb-3 opacity-30"
                            />
                            <p className="font-semibold text-gray-600">
                                No results found for "{query}"
                            </p>
                            <p className="text-sm mt-2">
                                Try different keywords or browse the categories
                            </p>
                        </div>
                    )}

                    {/* Results List */}
                    {!isSearching && results.length > 0 && (
                        <div className="divide-y divide-gray-100">
                            {results.map((result, index) => (
                                <SearchResultItem
                                    key={result.guide.id}
                                    result={result}
                                    query={query}
                                    isSelected={index === selectedIndex}
                                    onClick={() => handleSelectResult(result)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer with result count */}
                {results.length > 0 && (
                    <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 text-center">
                        <span className="text-xs text-gray-500">
                            {results.length} result{results.length !== 1 ? 's' : ''} found
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
