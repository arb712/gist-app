import React from 'react'
import Card from '../Card/Card';
import { Grid, Segment } from 'semantic-ui-react'

const Posts = ({ posts, loading }) => {

    if (loading) {
        return (
            <>
                <div className="loader"></div>
            </>
        )
    }

    return (
            <Grid columns={4}>
                {posts.map(item => (
                    <Grid.Column
                    key={item.id}
                    >
                        <Segment><Card item={item}/></Segment>
                    </Grid.Column>
                ))}
              </Grid>
    )

}

export default Posts;