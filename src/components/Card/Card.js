import React from 'react'
import {Link} from "react-router-dom"
import {Card, Image } from 'semantic-ui-react'

const ComponentCard = (props) => {
    const {item} = props;
    const URL =`https://api.github.com/gists/`;
    if(item.description == 0) {
        return(
            <Card.Group>
            <Card>
              <Card.Content>
                <Image
                  floated='right'
                  size='mini'
                  src={`${item.owner.avatar_url}`}
                />
                <Card.Header><a href={item.html_url}>Gist URL</a></Card.Header>
                <Card.Meta>{item.owner.login}</Card.Meta>
                <Card.Description>
                  No Description.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  {/* <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button> */}
                  <h5>Comments : {item.comments}</h5>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        )
    }
    return(
        <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src={`${item.owner.avatar_url}`}
            />
            <Card.Header><a href={item.html_url}>Gist URL</a></Card.Header>
            <Card.Meta><a href={item.owner.html_url}>{item.owner.login}</a></Card.Meta>
            <Card.Description>
              {item.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              {/* <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button> */}
              <h6>Comments : {item.comments}</h6>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )
}

export default ComponentCard;