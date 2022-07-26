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
        image:'https://media.istockphoto.com/photos/nairobi-downtown-capital-city-of-kenya-picture-id639495906?k=20&m=639495906&s=612x612&w=0&h=hfAmhGgTCJsyzgC8BpyhZZ7-fyZNtcw7-YnAoMw1olw=',
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
