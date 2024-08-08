'use client'

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.75,
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection('About')
        }
    }, [inView, setActiveSection])

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                After graduating with a degree in{' '}
                <span className='font-medium'>Business Administration</span>, I
                decided to pursue my passion for programming. I got a Computer
                Science minor and enrolled in a coding bootcamp and learned{' '}
                <span className='font-medium'>full-stack web development</span>.{' '}
                <span className='italic'>My favorite part of programming</span>{' '}
                is the creative aspect. I{' '}
                <span className='underline'>love</span> the feeling of coming up
                with an idea and bringing it to life. My core stack is{' '}
                <span className='font-medium'>
                    React, Next.js, TypeScript, and C#
                </span>
                . I am also familiar with Ruby on Rails, Python, and C++. I am
                always looking to learn new technologies.
            </p>

            <p>
                <span className='italic'>When I'm not coding</span>, I enjoy
                playing video games, watching movies, reading, playing tennis,
                and playing guitar.
            </p>
        </motion.section>
    )
}
