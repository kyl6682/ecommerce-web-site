import { useEffect } from "react";
import { useRef } from "react";

const useInfiniteScroll = ({loading, onLoadMore, hasMore = true}) => {
    const observerRef = useRef(null);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        if (!hasMore || loading) return

        observerRef.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onLoadMore();
            }
        })

        if (loadMoreRef.current) {
            observerRef.current.observe(loadMoreRef.current);
        }
        return () => observerRef.current?.disconnect()

    }, [loading, onLoadMore, hasMore])

    return loadMoreRef;
}

export default useInfiniteScroll;