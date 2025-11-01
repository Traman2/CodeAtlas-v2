import { guideRegistry } from './guideRegistry';
import type { GuideMetadata } from '../types/GuideMetadata';
import type { JSX } from 'react';

export interface SearchResult {
  guide: GuideMetadata;
  matches: TextMatch[];
  score: number; // Relevance score
}

export interface TextMatch {
  text: string;
  startIndex: number;
  endIndex: number;
  context: string; // Surrounding text for preview
}

/**
 * Searches for exact sequence matches in guide content
 * Case-insensitive matching using the guide's searchableContent
 */
export function searchGuides(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase().trim();

  guideRegistry.forEach(guide => {
    const content = guide.searchableContent;
    const lowerContent = content.toLowerCase();
    const matches: TextMatch[] = [];

    let index = lowerContent.indexOf(lowerQuery);
    while (index !== -1) {
      const contextStart = Math.max(0, index - 50);
      const contextEnd = Math.min(content.length, index + query.length + 50);

      // Get context with original casing
      let context = content.substring(contextStart, contextEnd).trim();

      // Add ellipsis if context is truncated
      if (contextStart > 0) context = '...' + context;
      if (contextEnd < content.length) context = context + '...';

      matches.push({
        text: query,
        startIndex: index,
        endIndex: index + query.length,
        context
      });

      index = lowerContent.indexOf(lowerQuery, index + 1);
    }

    if (matches.length > 0) {
      results.push({
        guide,
        matches,
        score: calculateRelevanceScore(guide, lowerQuery, matches)
      });
    }
  });

  // Sort by relevance score (descending)
  return results.sort((a, b) => b.score - a.score);
}

/**
 * Calculates relevance score based on:
 * - Title match (highest weight)
 * - Keyword match
 * - Category match
 * - Description match
 * - Number of matches
 * - Match position (earlier matches rank higher)
 */
function calculateRelevanceScore(
  guide: GuideMetadata,
  query: string,
  matches: TextMatch[]
): number {
  let score = matches.length;

  if (guide.title.toLowerCase().includes(query)) {
    score += 100;
  }
  if (guide.keywords.some(k => k.toLowerCase().includes(query))) {
    score += 50;
  }
  if (guide.category.toLowerCase().includes(query)) {
    score += 30;
  }
  if (guide.description.toLowerCase().includes(query)) {
    score += 20;
  }
  if (matches[0].startIndex < 200) {
    score += 25;
  }
  if (matches.length > 1) {
    score += Math.min(matches.length * 2, 20);
  }

  return score;
}

/**
 * Highlights matching text in a string
 */
export function highlightMatches(text: string, query: string): JSX.Element {
  if (!query || !text) return <>{text}</>;

  const parts: JSX.Element[] = [];
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase().trim();
  let lastIndex = 0;
  let keyCounter = 0;

  let index = lowerText.indexOf(lowerQuery);
  while (index !== -1) {
    if (index > lastIndex) {
      parts.push(
        <span key={`text-${keyCounter++}`}>
          {text.substring(lastIndex, index)}
        </span>
      );
    }
    parts.push(
      <mark
        key={`match-${keyCounter++}`}
        className="bg-yellow-200 font-semibold text-gray-900"
      >
        {text.substring(index, index + query.length)}
      </mark>
    );

    lastIndex = index + query.length;
    index = lowerText.indexOf(lowerQuery, lastIndex);
  }
  if (lastIndex < text.length) {
    parts.push(
      <span key={`text-${keyCounter++}`}>
        {text.substring(lastIndex)}
      </span>
    );
  }
  return <>{parts}</>;
}