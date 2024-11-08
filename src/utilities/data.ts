export const userData = [
    {
        username: 'Roofus',
        email: 'Roofus@email.com'
    },

    {
        username: 'Jason',
        email: 'JasonEmail@email.com'
    },

    {
        username: 'Dog1',
        email: 'dog1@email.com'
    }
];


const reactions = [
    {
        reactionBody: 'OH!!! :O',
        username: userData[1].username,
    },

    {
        reactionBody: 'YEAH RIGHT',
        username: userData[0].username,
    }, 

    {
        reactionBody: 'ANYWAY....',
        username: userData[1].username,
    }
]

export const thoughtData = [
    {
        thoughtText: `Why do we have daylight savings time in the PNW?`,
        username: userData[2].username,
        reactions: [reactions[0], reactions[1]]
    },

    {
        thoughtText: `I'm bored`,
        username: userData[0].username,
        reactions: [reactions[2]]
    }
]
