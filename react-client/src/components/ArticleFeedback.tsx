import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';

interface ArticleFeedbackProps {
    articleId: string;
}

export default function ArticleFeedback({ articleId }: ArticleFeedbackProps) {
    const [likeCount, setLikeCount] = useState(0);
    const [userVote, setUserVote] = useState<'like' | 'dislike' | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Load saved vote from localStorage and fetch initial counts
    useEffect(() => {
        const savedVote = localStorage.getItem(`vote_${articleId}`);
        if (savedVote === 'like' || savedVote === 'dislike') {
            setUserVote(savedVote);
        }

        // Fetch initial counts
        const fetchCounts = async () => {
            try {
                const response = await axios.get(`https://wh5w01o0qf.execute-api.us-east-1.amazonaws.com/Prod/article/stats?articleId=${articleId}`);
                if (response.data.stats) {
                    setLikeCount(response.data.stats.likeCount || 0);
                }
            } catch (err) {
                console.error('Failed to fetch initial counts:', err);
                // Silently fail, counts will stay at 0
            }
        };

        fetchCounts();
    }, [articleId]);

    const handleVote = async (action: 'like' | 'dislike') => {
        if (userVote) return; // Prevent double voting

        // Update UI immediately
        setUserVote(action);
        localStorage.setItem(`vote_${articleId}`, action);

        // Optimistically update counts
        if (action === 'like') {
        } else {
        }

        // Make backend call in background
        axios.post('https://wh5w01o0qf.execute-api.us-east-1.amazonaws.com/Prod/article/counter', {
            articleId: articleId,
            action: action
        }).then(response => {
            // Update with actual counts from server
            setLikeCount(response.data.stats.likeCount);
        }).catch(err => {
            console.error('Failed to submit vote:', err);
            // Revert optimistic update on error
            if (action === 'like') {
            } else {
            }
            setUserVote(null);
            localStorage.removeItem(`vote_${articleId}`);
            setError('Failed to submit vote. Please try again.');
        });
    };

    return (
        <div>
            <h2 id="user-feedback" className="text-xl font-semibold mt-12">
                User Feedback
            </h2>
            <p className="mt-2 mb-6 leading-relaxed">
                We're always looking for ways to improve Code Atlas. If you have any feedback, please let us know!
            </p>

            <div className="flex gap-4 mt-4 mb-1 items-center">
                {!userVote && (
                    <>
                        <button
                            onClick={() => handleVote('like')}
                            className="hover:opacity-70 transition-all cursor-pointer"
                            title="This was helpful"
                        >
                            <Icon
                                icon="mdi:thumbs-up"
                                width="24"
                                height="24"
                                className="text-[#554DE2]"
                            />
                        </button>

                        <button
                            onClick={() => handleVote('dislike')}
                            className="hover:opacity-70 transition-all cursor-pointer"
                            title="This needs improvement"
                        >
                            <Icon
                                icon="mdi:thumbs-down"
                                width="24"
                                height="24"
                                className="text-[#554DE2]"
                            />
                        </button>
                    </>
                )}

                {userVote === 'like' && (
                    <>
                        <button
                            disabled
                            className="cursor-not-allowed opacity-50"
                        >
                            <Icon
                                icon="mdi:thumbs-up"
                                width="24"
                                height="24"
                                className="text-green-600"
                            />
                        </button>
                        <p className="text-green-600 mb-0.5">
                            Thank you!
                        </p>
                    </>
                )}

                {userVote === 'dislike' && (
                    <>
                        <button
                            disabled
                            className="cursor-not-allowed opacity-50"
                        >
                            <Icon
                                icon="mdi:thumbs-down"
                                width="24"
                                height="24"
                                className="text-gray-500"
                            />
                        </button>
                        <p className="text-[#3e3d4d] mb-0.5">
                            Leave some feedback!
                        </p>
                    </>
                )}
            </div>
            <p className='mb-4'>{likeCount} {likeCount === 1 ? 'person' : 'people'} found this helpful</p>

            {error && (
                <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
        </div>
    );
}
