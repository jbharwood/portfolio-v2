import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import cinematch from '@/public/cinematch.png'
import quizalcoatl from '@/public/quizalcoatl.png'

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const

export const experiencesData = [
    {
        title: 'Graduated bootcamp',
        location: 'Miami, FL',
        description:
            'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
        icon: React.createElement(LuGraduationCap),
        date: '2019',
    },
    {
        title: 'Front-End Developer',
        location: 'Orlando, FL',
        description:
            'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
        icon: React.createElement(CgWorkAlt),
        date: '2019 - 2021',
    },
    {
        title: 'Full-Stack Developer',
        location: 'Houston, TX',
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: '2021 - present',
    },
] as const

export const projectsData = [
    {
        title: 'Cinematch',
        description: 'Movie and TV recommendation website with a chat',
        tags: [
            'React',
            'Ruby on Rails',
            'Redux',
            'WebSockets',
            'Action Cable',
            'Material UI',
        ],
        imageUrl: cinematch,
    },
    {
        title: 'Quizalcoatl',
        description:
            'Snake trivia game incorporating a trivia element to the traditional snake game',
        tags: ['JavaScript', 'Ruby on Rails'],
        imageUrl: quizalcoatl,
    },
] as const

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Git',
    'Tailwind',
    'Prisma',
    'MongoDB',
    'Redux',
    'GraphQL',
    'Apollo',
    'Express',
    'PostgreSQL',
    'Python',
    'Django',
    'Framer Motion',
] as const
