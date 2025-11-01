import { Icon } from "@iconify/react";
import { useRef } from "react";
import type { SearchResult } from "../utils/searchUtils";
import { highlightMatches } from "../utils/searchUtils";

interface SearchResultItemProps {
    result: SearchResult;
    query: string;
    isSelected: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onShowPreview: (content: React.ReactNode, rect: DOMRect) => void;
    onHidePreview: () => void;
}

export function SearchResultItem({
    result,
    query,
    isSelected,
    onClick,
    onMouseEnter,
    onShowPreview,
    onHidePreview,
}: SearchResultItemProps) {
    const { guide } = result;
    const itemRef = useRef<HTMLDivElement>(null);

    const getCategoryIcon = (category: string): string => {
        const icons: Record<string, string> = {
            'WELCOME': 'material-symbols:rocket-launch',
        };
        return icons[category] || 'material-symbols:article';
    };

    const getPreviewText = () => {
        const words = guide.searchableContent.trim().split(/\s+/);
        const preview = words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
        return highlightMatches(preview, query);
    };

    const handleMouseEnter = () => {
        onMouseEnter();
        if (itemRef.current) {
            onShowPreview(getPreviewText(), itemRef.current.getBoundingClientRect());
        }
    };

    return (
        <div
            ref={itemRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={onHidePreview}
        >
            <div
                className={`
                    px-4 py-3 cursor-pointer transition-all mx-4 rounded-lg 
                    ${isSelected
                        ? 'bg-blue-100'
                        : 'bg-white hover:bg-gray-50'
                    }
                `}
                onClick={onClick}
            >
                <div className="flex items-start gap-3">
                    <Icon
                        icon={getCategoryIcon(guide.category)}
                        width="20"
                        height="20"
                        className="text-[#4f46ff] mt-1 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold text-[#4f46ff] uppercase">
                                {guide.category}
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                            {highlightMatches(guide.title, query)}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {guide.keywords.slice(0, 4).map((keyword, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                    <Icon
                        icon="material-symbols:chevron-right"
                        width="20"
                        height="20"
                        className="text-gray-400 mt-1 shrink-0"
                    />
                </div>
            </div>
        </div>
    );
}
