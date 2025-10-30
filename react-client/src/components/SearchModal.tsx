import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-start justify-center pt-32 px-4 transition-all"
            onClick={onClose}
        >
            <div
                className="bg-white shadow-2xl w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                    <Icon icon="material-symbols:search" width="24" height="24" className="text-gray-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for guides, technologies, or concepts..."
                        className="flex-1 text-lg outline-none text-gray-700 placeholder-gray-400"
                    />
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                    >
                        <Icon icon="material-symbols:close" width="20" height="20" />
                    </button>
                </div>
                <div className="max-h-[60vh] overflow-y-auto p-4">
                    <div className="text-center py-12 text-gray-400">
                        <Icon icon="material-symbols:search" width="48" height="48" className="mx-auto mb-3 opacity-30" />
                        <p>Start typing to search...</p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">↑</kbd>
                            <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">↓</kbd>
                            <span>to navigate</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">Enter</kbd>
                            <span>to select</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">Esc</kbd>
                            <span>to close</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
