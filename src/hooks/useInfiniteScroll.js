import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const useInfiniteScroll = ({loading, onLoadMore, hasMore = true, rootMargin = '100px'}) => {
    const observerRef = useRef(null);
    const loadMoreRef = useRef(null);

    const handleObserver = useCallback(
        (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !loading && hasMore) {
                onLoadMore()
            }
        },
        [loading, hasMore, onLoadMore]
    )

    useEffect(() => {
        const target = loadMoreRef.current
        if (!target) return

        observerRef.current = new IntersectionObserver(handleObserver, {
            root : null,
            rootMargin,
            threshold : 1.0,
        })
        observerRef.current.observe(target)

        return () => {
            if (observerRef.current && target ) {
                observerRef.current.unobserve(target)
            }
        }

    }, [handleObserver])

    return loadMoreRef;
}

export default useInfiniteScroll;