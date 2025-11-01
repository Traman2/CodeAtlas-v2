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

interface PreviewState {
    content: React.ReactNode;
    top: number;
    left: number;
    visible: boolean;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isInitialSearch, setIsInitialSearch] = useState(false);
    const [showUpdating, setShowUpdating] = useState(false);
    const [preview, setPreview] = useState<PreviewState>({
        content: "",
        top: 0,
        left: 0,
        visible: false,
    });

    const updateTimerRef = useRef<number | null>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
            setQuery("");
            setResults([]);
            setSelectedIndex(0);
            setIsInitialSearch(false);
            setShowUpdating(false);
            setPreview(prev => ({ ...prev, visible: false }));
        }

        return () => {
            if (updateTimerRef.current) {
                clearTimeout(updateTimerRef.current);
                updateTimerRef.current = null;
            }
        };
    }, [isOpen]);

    useEffect(() => {
        if (updateTimerRef.current) {
            clearTimeout(updateTimerRef.current);
        }
        setShowUpdating(false);

        if (!query.trim()) {
            setResults([]);
            setSelectedIndex(0);
            setIsInitialSearch(false);
            return;
        }

        if (results.length > 0) {
            updateTimerRef.current = setTimeout(() => setShowUpdating(true), 1500);
        } else {
            setIsInitialSearch(true);
        }

        const timeoutId = setTimeout(() => {
            const searchResults = searchGuides(query);
            setResults(searchResults);
            setSelectedIndex(0);
            setIsInitialSearch(false);
            setShowUpdating(false);
            if (updateTimerRef.current) {
                clearTimeout(updateTimerRef.current);
            }
        }, 150);

        return () => {
            clearTimeout(timeoutId);
            if (updateTimerRef.current) {
                clearTimeout(updateTimerRef.current);
            }
        };
    }, [query]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
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

    const handleShowPreview = (content: React.ReactNode, rect: DOMRect) => {
        setPreview({
            content,
            top: rect.top,
            left: rect.right + 8, // Position to the right of the item
            visible: true,
        });
    };

    const handleHidePreview = () => {
        setPreview(prev => ({ ...prev, visible: false }));
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 backdrop-blur-md z-50 flex items-start justify-center pt-32 px-4 transition-all"
                onClick={onClose}
            >
                <div
                    className="bg-white shadow-2xl w-160 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                        <Icon icon="material-symbols:search" width="24" height="24" className="text-gray-400" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for guides, technologies, or concepts..."
                            className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-400"
                        />
                        {query && (
                            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
                                <Icon icon="material-symbols:close" width="20" height="20" />
                            </button>
                        )}
                        {showUpdating && (
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Icon icon="eos-icons:loading" width="16" height="16" className="text-[#4f46ff]" />
                                <span>Updating...</span>
                            </div>
                        )}
                        <button onClick={onClose} className="cursor-pointer">
                            <kbd className="px-2 py-1 hover:bg-gray-100 text-gray-500 border border-gray-300 rounded text-xs font-semibold">
                                Esc
                            </kbd>
                        </button>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto">
                        {results.length > 0 ? (
                            <div className="my-2">
                                {results.map((result, index) => (
                                    <SearchResultItem
                                        key={result.guide.id}
                                        result={result}
                                        query={query}
                                        isSelected={index === selectedIndex}
                                        onClick={() => handleSelectResult(result)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        onShowPreview={handleShowPreview}
                                        onHidePreview={handleHidePreview}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-400 px-4">
                                {isInitialSearch ? (
                                    <Icon icon="eos-icons:loading" width="32" height="32" className="text-[#4f46ff] mx-auto" />
                                ) : (
                                    <>
                                        <Icon
                                            icon={query ? "material-symbols:search-off" : "material-symbols:search"}
                                            width="48"
                                            height="48"
                                            className="mx-auto mb-3 opacity-30"
                                        />
                                        <p className="font-semibold text-gray-600">
                                            {query ? `No results for "${query}"` : "Start typing to search"}
                                        </p>
                                        <p className="text-sm mt-2">
                                            {query ? "Try different keywords" : "Search all guides and concepts"}
                                        </p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {preview.visible && (
                <div
                    className="fixed min-w-50 max-w-90 mr-20 bg-[#fdfcfe] border border-gray-200 shadow-xl rounded-lg p-4 z-100"
                    style={{ top: preview.top, left: preview.left }}
                >
                    <p className="text-sm text-[#4f46ff] leading-relaxed">
                        {preview.content}
                    </p>
                </div>
            )}
        </>
    );
}
