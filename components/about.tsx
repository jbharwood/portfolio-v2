'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
    const { ref } = useSectionInView('About')

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
                is the creative aspect. I love coming up with an idea and
                bringing it to life. My core stack is{' '}
                <span className='font-medium'>
                    React, Vue, TypeScript, and C#
                </span>
                . I am also familiar with Next.js, Ruby on Rails, Python, and
                C++. I am always looking to learn new technologies.
            </p>

            <p>
                <span className='italic'>When I'm not coding</span>, I enjoy
                playing and creating video games, watching movies, playing
                tennis, reading, and playing guitar.
            </p>
        </motion.section>
    )
}
