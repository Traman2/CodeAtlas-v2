import { Icon } from "@iconify/react";
import type { SearchResult } from "../utils/searchUtils";
import { highlightMatches } from "../utils/searchUtils";

interface SearchResultItemProps {
  result: SearchResult;
  query: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SearchResultItem({
  result,
  query,
  isSelected,
  onClick
}: SearchResultItemProps) {
  const { guide, matches } = result;

  // Get icon based on category
  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      'WELCOME': 'material-symbols:rocket-launch',
    };
    return icons[category] || 'material-symbols:article';
  };

  return (
    <div
      className={`
        px-4 py-3 cursor-pointer border-l-4 transition-all
        ${isSelected
          ? 'bg-blue-50 border-l-[#4f46ff]'
          : 'bg-white border-l-transparent hover:bg-gray-50'
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
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">
              {matches.length} match{matches.length !== 1 ? 'es' : ''}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">
            {highlightMatches(guide.title, query)}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {highlightMatches(matches[0].context, query)}
          </p>
        </div>
        <Icon
          icon="material-symbols:chevron-right"
          width="20"
          height="20"
          className="text-gray-400 mt-1 shrink-0"
        />
      </div>
    </div>
  );
}