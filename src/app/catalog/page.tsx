'use client';

import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCampers } from '@/lib/api';
import { CamperFilters } from '@/types/camper';
import { CamperCard } from '@/components/CamperCard/CamperCard';
import { Filters } from '@/components/Filters/Filters';
import { Loader } from '@/components/Loader/Loader';
import styles from './catalog.module.css';

export default function CatalogPage() {
    const [filters, setFilters] = useState<CamperFilters>({});

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['campers', filters],
        queryFn: ({ pageParam = 1 }) => getCampers(pageParam as number, filters),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.totalPages) {
                return lastPage.page + 1;
            }
            return undefined;
        },
    });

    const campers = data?.pages.flatMap((page) => page.campers) ?? [];

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <Filters onApply={setFilters} />
            </aside>

            <main className={styles.content}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        {campers.length === 0 ? (
                            <p className={styles.empty}>No campers found. Try changing filters.</p>
                        ) : (
                            <ul className={styles.list}>
                                {campers.map((camper) => (
                                    <li key={camper.id}>
                                        <CamperCard camper={camper} />
                                    </li>
                                ))}
                            </ul>
                        )}

                        {hasNextPage && (
                            isFetchingNextPage ? (
                                <Loader />
                            ) : (
                                <button
                                    className={styles.loadMore}
                                    onClick={() => fetchNextPage()}
                                >
                                    Load more
                                </button>
                            )
                        )}
                    </>
                )}
            </main>
        </div>
    );
}