import mongoose from "mongoose";

import { EJH, EJHS, EJM, EJMS, EJI, EJPH, EJLM, EJNHS, EJSRR, EJHIV } from '../public/assets';

const journalIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const journals = [
    {
        _id: journalIds[0],
        title: 'Elite Journal of Haematology (EJH)',
        desc: 'Embark on a journey into the intricate world of blood-related issues. EJH is your guide to exploring the forefront of haematological research, unraveling its complexities. Dive into groundbreaking studies that pave the way for advancements in this field.',
        icon: EJH,
        route: "/admin/dashboard/EJH",
    },
    {
        _id: journalIds[1],
        title: 'Elite Journal of Medicine (EJM)',
        desc: 'At the crossroads of innovation and holistic healthcare, EJM stands as a beacon of breakthroughs in general medicine. Navigate through an impressive landscape of medical advancements, cutting-edge technologies to various treatment modalities.',
        icon: EJM,
        route: "/admin/dashboard/EJM",
    },
    {
        _id: journalIds[2],
        title: 'Elite Journal of Health Sciences (EJHS)',
        desc: 'EJHS is your gateway to an expansive exploration of health sciences. From unraveling the threads of epidemiology to deciphering the intricacies of healthcare management, this journal offers a multidimensional perspective.',
        icon: EJHS,
        route: "/admin/dashboard/EJHS",
    },
    {
        _id: journalIds[3],
        title: 'Elite Journal of Medical Sciences (EJMS)',
        desc: 'Discover the pulse of medical knowledge with EJMS. Unveiling the latest findings and trends across various medical specialties and subspecialties, this elite journal is a comprehensive resource for healthcare professionals and researchers.',
        icon: EJMS,
        route: "/admin/dashboard/EJMS",
    },
    {
        _id: journalIds[4],
        title: 'Elite Journal of Public Health (EJPH)',
        desc: 'EJPH takes on the mantle of addressing public health challenges head-on. Navigate through research dedicated to promoting strategies for community well-being. From preventive measures to community engagement, this journal is a reservoir of knowledge aimed at fostering a healthier society.',
        icon: EJPH,
        route: "/admin/dashboard/EJPH",
    },
    {
        _id: journalIds[5],
        title: 'Elite Journal of Immunology (EJI)',
        desc: 'Journey into the intricate world of the immune system with this journal. EJI brings together studies that delve into the interesting molecular mechanisms, therapeutic interventions and emerging trends in immunology, shaping the future of immune-related healthcare.',
        icon: EJI,
        route: "/admin/dashboard/EJI",
    },
    {
        _id: journalIds[6],
        title: 'Elite Journal of Laboratory Medicine (EJLM)',
        desc: 'From groundbreaking methodologies to best practices, this journal is a compendium of advancements in laboratory sciences. Stay informed about the latest techniques and technologies that drive precision in diagnostics and contribute to the evolution of laboratory medicine.',
        icon: EJLM,
        route: "/admin/dashboard/EJLM",
    },
    {
        _id: journalIds[7],
        title: 'Elite Journal of Nursing and Health Sciences (EJNHS)',
        desc: 'Explore the forefront of nursing science and advancements in health sciences. From evidence-based practices to transformative healthcare delivery models, EJNHS contributes to the ongoing evolution of nursing and its vital role in modern healthcare.',
        icon: EJNHS,
        route: "/admin/dashboard/EJNHS",
    },
    {
        _id: journalIds[8],
        title: 'Elite Journal of Scientific Research and Review (EJSRR)',
        desc: 'Engage with in-depth explorations of  research methodologies and theories. EJSRR fosters a scholarly environment where rigorous analysis and insightful reviews converge to shape the discourse in scientific research.',
        icon: EJSRR,
        route: "/admin/dashboard/EJSRR",
    },
    {
        _id: journalIds[9],
        title: 'Elite Journal of HIV (EJHIV)',
        desc: 'This journal focuses on research, prevention and treatment strategies. Navigate through studies that contribute to the global effort to combat the virus(HIV), exploring innovative approaches, breakthroughs and critical insights into the multifaceted dimensions of this public health challenge.',
        icon: EJHIV,
        route: "/admin/dashboard/EJHIV",
    },
];