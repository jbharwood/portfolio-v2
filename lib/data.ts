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
        title: 'Entry Level Training Program Student',
        company: "BlueCross BlueShield of South Carolina",
        location: 'Columbia, SC',
        description:
            'I was trained to code in COBOL and APS.',
        icon: React.createElement(CgWorkAlt),
        date: '2015',
    },
    {
        title: 'Database Administrator',
        company: "BlueCross BlueShield of South Carolina",
        location: 'Columbia, SC',
        description:
            'I worked as a Database Administrator with DB2 and IMS.',
        icon: React.createElement(CgWorkAlt),
        date: '2015 - 2018',
    },
    {
        title: 'Graduated Flatiron School coding bootcamp',
        company: "Flatiron School",
        location: 'Manhattan, NY',
        description:
            'Full Stack Web Development, Ruby on Rails and JavaScript immersive program',
        icon: React.createElement(LuGraduationCap),
        date: '2019',
    },
    {
        title: 'Freelance IT Consultant',
        company: "Getaway",
        location: 'Brooklyn, NY',
        description:
            'I did freelance IT work, including creating data visualization reports in Looker to implement to help implement a loyalty program for repeat customers.',
        icon: React.createElement(CgWorkAlt),
        date: '2019 - 2020',
    },
    {
        title: 'Junior Web Developer',
        company: "AllMEDx",
        location: 'Manhattan, NY',
        description:
            "I was a web developer working with Ruby and MySQL.",
        icon: React.createElement(CgWorkAlt),
        date: '2020',
    },
    {
        title: 'Web Developer/Senior Web Developer',
        company: "Rockstar Games",
        location: 'Manhattan, NY',
        description:
            "I was a web developer working with C#, .NET, React, Vue, JavaScript, TypeScript, Python, SQL Server, and MongoDB.",
        icon: React.createElement(CgWorkAlt),
        date: '2020 - 2024',
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
    'C#',
    '.NET',
    'JavaScript',
    'TypeScript',
    'React',
    'PostgreSQL',
    'SQL Server',
    'HTML',
    'CSS',
    'Vue.js',
    'Quasar',
    'Git',
    'Perforce',
    'Next.js',
    'Tailwind',
    'MongoDB',
    'Redux',
    'Unreal Enginer 5',
    'Python',
    'Framer Motion',
] as const
