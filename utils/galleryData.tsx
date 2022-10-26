import { url } from "inspector";

export const galleryData = {
    header: {
        navigateItems: [
            {
                title: `home`,
                navigate: `/`
            },
            {
                title: `gallery`,
                navigate: `/Gallery`
            },
            {
                title: `second page`,
                navigate: `/`
            }
        ],
        logo: {
            title: `my gallery`
        },
        socialItems: [
            {
                src: `/Social/whiteTg.svg`,
                href: `https://t.me/artificialnetrunner`
            },
            {
                src: `/Social/artstation.svg`,
                href: `https://www.artstation.com/marcobychkov`
            }
        ]
    },
    cardCarouselItems: [
        {
            id: 0,
            src: `/Gallery/headOrange.jpeg`,
            title: `gold dust`,
            children: `they just haven't seen it. Part 2.`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/035/289/392/large/alex-bychkov-gold-dust.jpg?1614606585')`
        },
        {
            id: 1,
            src: `/Gallery/headBlue.jpeg`,
            title: `blue dust`,
            children: `they just haven't seen it. Part 1.`,
            url: `url('https://cdnb.artstation.com/p/assets/images/images/035/289/417/large/alex-bychkov-dark-gold.jpg?1614606622')`
        },
        {
            id: 2,
            src: `/Gallery/tlou.jpeg`,
            title: `'i really hope you'll make it.'`,
            children: `the scene inspired by the last of us.`,
            url: `url('https://cdnb.artstation.com/p/assets/images/images/048/835/983/large/alex-bychkov-rainymood2edited.jpg?1651055405')`
        },
        {
            id: 3,
            src: `/Gallery/distantWorlds.jpeg`,
            title: `distant worlds`,
            children: `it is said, that finding a new paths through the darkness might bring unknown dangers. 
                But those, who seek the right way, might await a great unknown.`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/048/409/354/large/alex-bychkov-test.jpg?1649952701')`
        },
        {
            id: 4,
            src: `/Gallery/forsaken.jpeg`,
            title: `forsaken`,
            children: `the eight of swords shows a woman bound and blindfolded. Eight swords surround her, 
                seemingly trapping her in place, a symbol of the limiting thoughts, 
                beliefs and mindset that prevent her from moving forward.`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/039/145/100/large/alex-bychkov-2.jpg?1625064544')`
        },
        {
            id: 5,
            src: `/Gallery/zeroZeroOne.jpeg`,
            title: `001`,
            children: `space exploration`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/037/998/026/large/alex-bychkov-4.jpg?1621894512')`
        },
        {
            id: 6,
            src: `/Gallery/frozenCube.jpeg`,
            title: `frozen cube`,
            children: `quick concept of a cube with a girl model inside.
                special thanks to ducky 3d.`,
            url: `url('https://cdnb.artstation.com/p/assets/images/images/034/676/669/large/alex-bychkov-frozen-cube.jpg?1612913226')`
        },
        {
            id: 7,
            src: `/Gallery/newBornCyborg.jpeg`,
            title: `newborn cyborg`,
            children: `quick showcase of making of cyborg, from my previous work.`,
            url: `url('https://cdnb.artstation.com/p/assets/images/images/030/393/041/large/alex-bychkov-render4ps.jpg?1600455021')`
        },
        {
            id: 8,
            src: `/Gallery/neonStreetLight.jpeg`,
            title: `neon street light`,
            children: `low poly neon street lights designed in lender, inspired by polygon runaway.`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/029/382/528/large/marco-bychkov-test2.jpg?1597352232')`
        },
        {
            id: 9,
            src: `/Gallery/reflectBuildings.jpeg`,
            title: `reflect buildings`,
            children: `concept art.`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/009/973/502/large/marco-bychkov-mesa-concept.jpg?1521853509')`
        },
        {
            id: 10,
            src: `/Gallery/theLastEncounter.jpeg`,
            title: `the last encounter`,
            children: `space artwork concept.`,
            url: `url('https://cdnb.artstation.com/p/assets/images/images/009/493/727/large/marco-bychkov-the-last-encounter2.jpg?1519306542')`
        },
        {
            id: 11,
            src: `/Gallery/rockstar.jpeg`,
            title: `rockstar`,
            children: `inspired by post malone-rockstar (feat. 21 savage).`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/008/234/672/large/marco-bychkov-rockstar1.jpg?1511371382')`
        },
        {
            id: 12,
            src: `/Gallery/deforming.jpeg`,
            title: `deforming substance`,
            children: `concept art.`,
            url: `url('https://cdna.artstation.com/p/assets/images/images/007/571/056/large/marco-bychkov-deforming-substance.jpg?1507048166')`
        },
        {
            id: 13,
            src: `/Gallery/streetCyborg.jpeg`,
            title: `newborn cyborg`,
            children: `earlier version of the newborn cyborg. concept art.`,
            url: `url('https://cdnb.artstation.com/p/assets/images/images/007/424/677/large/marco-bychkov-r5bzv2wxmc4-edit.jpg?1506029909')`
        },
    ],
    darkTextGlowBehind: {
        color: `rgb(204, 183, 151, 1)`,
        children: `explore 3d models and latest news from marco`
    },
    crystal: {
        src: `/Common/crystalBlue.png`,
        color: `rgb(255, 197, 122);`
    },
    worksInProgress: {
        title: `works in progress`,
        color: `rgba(251, 251, 251, 1)`,
        cardInfoItems: [
            {
                src: `/InProgress/japaneseCafeInProgress.png`,
                title: `japanese cafe`,
                children: `low poly scene with japanese cafe.`,
                progress: 80,
                navigate: ``,
                status: `status:`,
                state: `post-production`
            },
            {
                src: `/Gallery/neonStreetLight.jpeg`,
                title: `neon street`,
                children: `neon street made in low poly style.`,
                progress: 100,
                navigate: `https://www.artstation.com/artwork/D5LDyo`,
                status: `status:`,
                state: `completed`
            }
        ]
    },
    latestNews: {
        title: `latest news`,
        color: `white`,
        latestNewsItems: [
            {
                src: `/Gallery/streetCyborg.jpeg`,
                tag: `news`,
                date: `15 oct`,
                info: `newborn cyborg street art.`,
                navigate: `https://www.artstation.com/artwork/eo9gP`
            },
            {
                src: `/Gallery/deforming.jpeg`,
                tag: `news`,
                date: `8 oct`,
                info: `artwork inspired by bladerunner universe.`,
                navigate: `https://www.artstation.com/artwork/5lL5g`
            },
            {
                src: `/Gallery/headBlue.jpeg`,
                tag: `news`,
                date: `4 oct`,
                info: `'they just haven't seen it'. new part of the concept art.`,
                navigate: `https://www.artstation.com/artwork/oA13Zm`
            },
            {
                src: `/Gallery/distantWorlds.jpeg`,
                tag: `news`,
                date: `2 oct`,
                info: `distant worlds concept.`,
                navigate: `https://www.artstation.com/artwork/X1xwan`
            }
        ]
    },
    commonCard: {
        sectionTitle: {
            title: `artwork`,
            subTitle: `for sale`,
            color: `white`
        },
        digitalItems: [
            {
                id: 0,
                src: `/Gallery/deforming.jpeg`,
                title: `digital`,
                subTitle: `digital copy`,
                children: `deforming piece of art.`
            },
            {
                id: 1,
                src: `/Gallery/distantWorlds.jpeg`,
                title: `digital`,
                subTitle: `digital copy`,
                children: `explore the shinning of the mountains.`
            },
            {
                id: 2,
                src: `/Gallery/forsaken.jpeg`,
                title: `digital`,
                subTitle: `digital copy`,
                children: `find the truth behind the mystery.`
            }
        ],
        physicalItems: [
            {
                id: 0,
                src: `/Gallery/tlou.jpeg`,
                title: `physical`,
                subTitle: `physical copy`,
                children: `The vibes of the rainy Seattle.`
            },
            {
                id: 1,
                src: `/Gallery/neonStreetLight.jpeg`,
                title: `physical`,
                subTitle: `physical copy`,
                children: `neon atmosphere of the streets at night.`
            },
            {
                id: 2,
                src: `/Gallery/headBlue.jpeg`,
                title: `physical`,
                subTitle: `physical copy`,
                children: `far horizons`
            }
        ]
    },
    darkTextGlowBehindCopy: {
        color: `rgb(204, 183, 151, 1)`,
        children: `all art was made by myself`,
        title: `marco`
    },
    footer: {
        author: '2022. Aleksei Bychkov. Free Icons from icons8.com.',
        sectionTitle: {
            subTitle: `find more information in my socials.`,
            color: `#4b3d25`
        },
        policyItems: [
            {
                title: `Marco terms`
            },
            {
                title: `Privacy terms`
            }
        ]
    }
}