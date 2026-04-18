'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { CamperImage } from '@/types/camper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from './Gallery.module.css';

interface Props {
  images: CamperImage[];
}

export function Gallery({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.gallery}>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSwiper}
        loop
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className={styles.mainSlide}>
              <Image
                src={img.original}
                alt="Camper"
                fill
                className={styles.image}
                sizes="800px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={8}
        watchSlidesProgress
        className={styles.thumbsSwiper}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className={styles.thumb}>
              <Image
                src={img.thumb}
                alt="Camper thumb"
                fill
                className={styles.image}
                sizes="150px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
