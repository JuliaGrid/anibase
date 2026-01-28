import { useEffect, useRef, useState } from 'react'
import classes from './AnimeCarousel.module.css'
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react'
// @ts-ignore
import 'swiper/css'
import { AnimeCard } from '../../components/AnimeCard/AnimeCard'

interface IAnimeCarousel {
  title?: string
  description?: string
}

export function AnimeCarousel(props: IAnimeCarousel) {
  const { title, description } = props

  const swiperRef = useRef<SwiperClass | null>(null)
  const intervalId = useRef<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!swiperRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX

    const leftZone = rect.left + 100 // левая зона 100px
    const rightZone = rect.right - 100 // правая зона 100px

    // Определяем направление
    let direction: 'next' | 'prev' | null = null
    if (x < leftZone) direction = 'prev'
    else if (x > rightZone) direction = 'next'
    else direction = null

    // Если нет направления — остановка
    if (!direction) {
      if (intervalId.current) {
        clearInterval(intervalId.current)
        intervalId.current = null
      }
      return
    }

    // Если интервал уже есть — не создаём новый
    if (intervalId.current) return

    if (direction === 'next') swiperRef.current.slideNext()
    else swiperRef.current.slidePrev()

    // ⏱ дальше по интервалу
    intervalId.current = window.setInterval(() => {
      if (!swiperRef.current) return
      if (direction === 'next') swiperRef.current.slideNext()
      else swiperRef.current.slidePrev()
    }, 500)
  }

  const handleMouseLeave = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
  }

  return (
    <section className={classes.animeCarousel}>
      <div className={classes.animeCarousel__header}>
        <h2 className={classes.animeCarousel__title}>{title}</h2>
        <button></button>
      </div>
      <article className={classes.animeCarousel__description}>
        {description}
      </article>

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ overflow: 'hidden' }}
      >
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          onSwiper={swiper => (swiperRef.current = swiper)}
          className={classes.carousel__list}
        >
          <SwiperSlide className={classes.carousel__item}>
            <AnimeCard />
          </SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>
            {' '}
            <AnimeCard />
          </SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>
            {' '}
            <AnimeCard />
          </SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>
            {' '}
            <AnimeCard />
          </SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>
            {' '}
            <AnimeCard />
          </SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>Слайд 6</SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>Слайд 7</SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>Слайд 8</SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>Слайд 9</SwiperSlide>
          <SwiperSlide className={classes.carousel__item}>Слайд 10</SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
