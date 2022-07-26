import React from 'react'

const DUUMY_DATA =[
    {
        id:'m1',
        title: 'This is a first meetup',
        image:'https://i.ytimg.com/vi/ofzQqJNEYBk/maxresdefault.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first,amazing meetup which you definitely you should not miss.'
    },
    {
        id:'m2',
        title: 'This is a first meetup',
        image:'https://media.istockphoto.com/photos/nairobi-cityscape-capital-city-of-kenya-picture-id637912692?k=20&m=637912692&s=612x612&w=0&h=uHa90J-jGXws6mo7yeOKLI-ta_RYGErtbsqhtPVxBHk=',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first,amazing meetup which you definitely you should not miss.'
    }
]

function AllMeetupsPage() {
    return (
        <div>
            All Meetups
        </div>
    )
}

export default AllMeetupsPage
